package com.example.capstoneweb.model;


import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Comment")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "CommentNo")
    private Integer CommentNo;



    @Column(name = "Answer")
    private String Answer;
    @Column(name = "Date")
    private Date Date;
    @Column(name = "Like")
    private Integer Like;
    @Column(name = "BoardNo")
    private Integer BoardNo;
    @Column(name = "CommentID")
    private String CommentID;
    @Column(name = "BoardID")
    private String BoardID;


}
