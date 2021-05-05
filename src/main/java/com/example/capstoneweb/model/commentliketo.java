package com.example.capstoneweb.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="commentliketo")
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class commentliketo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comNo")
    private Integer comNo;

    @Column(name="like_no")
    private Integer like_no;

    @Column(name = "comment_no")
    private Integer comment_no;

    @Column(name = "username")
    private String username;

    @Column(name = "like_check")
    private boolean like_check;

}
