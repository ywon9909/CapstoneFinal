package com.example.capstoneweb.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name="member")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member implements UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(length = 20, nullable = false, unique = true ,name="id")
    private String id;

    @Column(length = 20,nullable = false, name="pw")
    private String pw;
    @Column(length = 20,nullable = false, unique = true ,name = "nickname")
    private String nickname;
    @Column(length = 20, nullable = false, unique = true ,name ="phone")
    private String phone;
    @Column( nullable = false, name = "Doc")
    private boolean Doc;
    @Column(name="role")
    private String role;

    public void encodePassword(PasswordEncoder passwordEncoder){
        pw = passwordEncoder.encode(this.getPassword());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        if(getRole().equals("ROLE_USER"))
            authorities.add(new SimpleGrantedAuthority("USER"));
        else if(getRole().equals("ROLE_ADMIN"))
            authorities.add(new SimpleGrantedAuthority("ADMIN"));

        return authorities;
    }

    @Override
    public String getPassword() {

        return pw;
    }

    @Override
    public String getUsername() {
        return id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    public void encodePassword() {
        this.pw = "{noop}"+this.pw;
    }
}
