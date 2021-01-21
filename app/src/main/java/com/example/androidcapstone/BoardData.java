package com.example.androidcapstone;

public class BoardData {
    private int num;
    private String title;
    private String question;
    private String answer1;
    private String answer2;
    private String answer3;

    public int getNum() {
        return num;
    }

    public String getTitle() {
        return title;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer1() {
        return answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

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
}
