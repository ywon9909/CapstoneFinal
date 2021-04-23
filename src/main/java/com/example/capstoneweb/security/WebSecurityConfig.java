package com.example.capstoneweb.security;
import com.example.capstoneweb.model.Member;
import com.example.capstoneweb.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@EnableWebSecurity // 1
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter { // 2

    private final MemberService memberService; // 3

    /*@Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }*/
   @Bean
   public PasswordEncoder passwordEncoder() {
       return PasswordEncoderFactories.createDelegatingPasswordEncoder();
   }


    @Override
    public void configure(WebSecurity web) { // 4
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception { // 5

        http
                .csrf().disable()
                .authorizeRequests() // 6
                .antMatchers("/api/members","/api/member/**", "/signup", "/login").permitAll() // 누구나 접근 허용
                .antMatchers("/api/board/hot","/api/login").permitAll()
                .antMatchers("/**").hasRole("USER") // USER만 접근 가능
                .antMatchers("/admin").hasRole("ADMIN") // ADMIN만 접근 가능
                .anyRequest().authenticated() // 나머지 요청들은 권한의 종류에 상관 없이 권한이 있어야 접근 가능
                .and()
                .formLogin() // 7
                .loginPage("http://localhost:3000/login") // 로그인 페이지 링크
                .defaultSuccessUrl("http://localhost:3000") // 로그인 성공 후 리다이렉트 주소
                .and()
                .logout() // 8
                .logoutSuccessUrl("http://localhost:3000") // 로그아웃 성공시 리다이렉트 주소
                .invalidateHttpSession(true) // 세션 날리기
        ;
    }
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception { // 9
        System.out.println("auth="+ auth.userDetailsService(memberService));
       /* auth.inMemoryAuthentication()
                .withUser("user1").roles("USER").password("{noop}user1");*/
        auth.userDetailsService(memberService).passwordEncoder(passwordEncoder());

        // 해당 서비스(userService)에서는 UserDetailsService를 implements해서
        // loadUserByUsername() 구현해야함 (서비스 참고)
        //.passwordEncoder(new BCryptPasswordEncoder());
    }

}
