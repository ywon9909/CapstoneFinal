package com.example.androidcapstone;

import com.google.gson.annotations.SerializedName;

import java.sql.Time;

public class BoardData {

    Integer board_no;
    String title;
    String question;
    Time board_date;
    Integer board_like;
    String category;
    String board_id;

    public Integer getBoard_no() {
        return board_no;
    }

    public void setBoard_no(Integer board_no) {
        this.board_no = board_no;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Time getBoard_date() {
        return board_date;
    }

    public void setBoard_date(Time board_date) {
        this.board_date = board_date;
    }

    public Integer getBoard_like() {
        return board_like;
    }

    public void setBoard_like(Integer board_like) {
        this.board_like = board_like;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBoard_id() {
        return board_id;
    }

    public void setBoard_id(String board_id) {
        this.board_id = board_id;
    }



    @Override
    public String toString() {
        return "Board{" +
                "board_no=" + board_no +
                ", title='" + title + '\'' +
                ", question='" + question + '\'' +
                ", board_date='" + board_date + '\'' +
                ", board_like='" + board_like + '\'' +
                ", category='" + category + '\'' +
                ", id='" + board_id + '\'' +
                '}';
    }

}
