package com.example.androidcapstone;

import com.google.gson.annotations.SerializedName;

public class BoardData {

    Integer num;

    String title;
    String question;
    String answer1;

    String answer2;
    String answer3;
    String answer4;
    String answer5;

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
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

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

    public void setAnswer3(String answer3) {
        this.answer3 = answer3;
    }

    public String getAnswer4() {
        return answer4;
    }

    public void setAnswer4(String answer4) {
        this.answer4 = answer4;
    }

    public String getAnswer5() {
        return answer5;
    }

    public void setAnswer5(String answer5) {
        this.answer5 = answer5;
    }



    @Override
    public String toString() {
        return "Board{" +
                "num=" + num +
                ", title='" + title + '\'' +
                ", question='" + question + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", answer3='" + answer3 + '\'' +
                ", answer4='" + answer4 + '\'' +
                ", answer5='" + answer5 + '\'' +
                '}';
    }





    /*
    private int num;
    private String title;
    private String question;
    private String answer1;
    private String answer2;
    private String answer3;

    public int getNum() {
        return num;
    }
    public int setNum() { return this.num = num; }

    public String getTitle() {
        return title;
    }
    public String setTitle() { return this.title = title; }

    public String getQuestion() {
        return question;
    }
    public String setQuestion() { return this.question = question; }

    public String getAnswer1() {
        return answer1;
    }
    public String setAnswer1() { return this.answer1 = answer1; }

    public String getAnswer2() {
        return answer2;
    }
    public String setAnswer2() { return this.answer2 = answer2; }

    public String getAnswer3() {
        return answer3;
    }
    public String setAnswer3() { return this.answer3 = answer3; }

    @Override
    public String toString() {
        return "BoardData{" +
                "num=" + num +
                ", title='" + title + '\'' +
                ", question='" + question + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", answer3='" + answer3 + '\'' +
                '}';
    }

     */
}
