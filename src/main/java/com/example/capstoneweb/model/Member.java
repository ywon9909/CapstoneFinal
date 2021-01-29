package com.example.capstoneweb.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="member")
@ToString
@Getter
@Setter
//@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private String id;

    @Column(name="pw")
    private String pw;
    @Column(name = "nickname")
    private String nickname;
    @Column(name ="phone")
    private String phone;
    @Column(name = "Doc")
    private boolean Doc;
}
