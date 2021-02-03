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
}
