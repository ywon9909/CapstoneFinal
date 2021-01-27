package com.example.capstoneweb.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Member")
@ToString
@Getter
@Setter
//@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id
    @Column(name="ID")
    private String ID;

    @Column(name="PW")
    private String PW;
    @Column(name = "Nickname")
    private String Nickname;
    @Column(name ="Phone")
    private String Phone;
    @Column(name = "Doc")
    private boolean Doc;
}
