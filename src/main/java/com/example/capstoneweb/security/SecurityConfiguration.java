package com.example.capstoneweb.security;

import com.example.capstoneweb.service.JwtRequestFilter;
import com.example.capstoneweb.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private MyUserDetailsService myUserDetailService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(myUserDetailService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().
                antMatchers("/authenticate").permitAll().
                antMatchers("/api/board/**" ).hasAnyAuthority("ROLE_USER","ADMIN").
                antMatchers("/api/board/*" ).hasAnyAuthority("ROLE_USER","ADMIN").

                antMatchers("/products/**").hasAuthority("ADMIN").

                anyRequest().authenticated().and().sessionManagement().
                sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        http.cors();
    }



    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


//	protected void configure(HttpSecurity http) throws Exception {
//		http.cors();
//		http.csrf().disable().authorizeRequests()
//		.antMatchers("/").permitAll()
//		.antMatchers("/produc*").hasAuthority("ADMIN")
//		.and().formLogin().and()
//        .httpBasic();
//
//
//	}
//	 public void addCorsMappings(CorsRegistry registry) {
//	        registry.addMapping("/*").allowedOrigins("*").allowedMethods("GET", "POST", "OPTIONS", "PUT")
//	                .allowedHeaders("Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method",
//	                        "Access-Control-Request-Headers")
//	                .exposedHeaders("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
//	                .allowCredentials(true).maxAge(3600);
//	    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}