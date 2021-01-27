package com.example.capstoneweb.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

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
    @Column(name="BoardNo")
    private Integer BoardNo;

    @Column(name = "Title")
    private String Title;

    @Column(name = "Question")
    private String Question;

    @Column(name = "Date")
    private Date Date;
    @Column(name = "Like")
    private Integer Like;
    @Column(name="Category")
    private String Category;
    @Column(name = "ID")
    private String ID;

}