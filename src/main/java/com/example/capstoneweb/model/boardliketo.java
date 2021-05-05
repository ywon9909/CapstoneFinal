package com.example.capstoneweb.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="boardliketo")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class boardliketo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="borNo")
    private Integer borNo;

    @Column(name="like_no")
    private Integer like_no;

    @Column(name = "board_no")
    private Integer board_no;

    @Column(name = "username")
    private String username;

    @Column(name = "like_check")
    private boolean like_check;

}
