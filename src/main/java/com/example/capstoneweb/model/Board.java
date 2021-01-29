package com.example.capstoneweb.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name="Board")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Board {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="board_no")
    private Integer board_no;

    @Column(name = "title")
    private String title;

    @Column(name = "question")
    private String question;

    @Column(name = "board_date")
    private Date board_date;
    @Column(name = "board_like")
    private Integer board_like;
    @Column(name="category")
    private String category;
    @Column(name = "id")
    private String id;

}