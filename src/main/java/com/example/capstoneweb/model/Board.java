package com.example.capstoneweb.model;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@Column(name = "commentcount")
    private Integer commentcount;
}