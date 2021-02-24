package com.example.capstoneweb.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="tag")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="board_no")
    private Integer board_no;

    @Column(name="id")
    private String id;

    @Column(name = "tag1")
    private String tag1;
    @Column(name = "tag2")
    private String tag2;
    @Column(name = "tag3")
    private String tag3;
    @Column(name = "tag4")
    private String tag4;
    @Column(name = "tag5")
    private String tag5;
}
