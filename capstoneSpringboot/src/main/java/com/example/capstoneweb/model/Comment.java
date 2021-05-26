package com.example.capstoneweb.model;

import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "comment")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_no")
    private Integer comment_no;

    @Column(name = "answer")
    private String answer;
    @Column(name = "comment_date")
    private Date comment_date;
    @Column(name = "comment_like")
    private Integer comment_like;

    @Column(name = "comment_id")
    private String comment_id;

    @Column(name = "board_id")
    private String board_id;

    @Column(name = "board_no")
    private Integer board_no;
}
