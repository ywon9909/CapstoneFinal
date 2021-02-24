package com.example.androidcapstone;

public class TagData {
    Integer board_no;
    String id;
    String tag1;
    String tag2;
    String tag3;
    String tag4;
    String tag5;

    public Integer getBoard_no() {
        return board_no;
    }

    public void setBoard_no(Integer board_no) {
        this.board_no = board_no;
    }

    public String getBoard_id() {
        return id;
    }

    public void setBoard_id(String board_id) {
        this.id = id;
    }

    public String getTag1() { return tag1; }

    public void setTag1(String tag1) { this.tag1 = tag1; }

    public String getTag2() { return tag2; }

    public void setTag2(String tag2) { this.tag2 = tag2; }

    public String getTag3() { return tag3; }

    public void setTag3(String tag3) { this.tag3 = tag3; }

    public String getTag4() { return tag4; }

    public void setTag4(String tag4) { this.tag4 = tag4; }

    public String getTag5() { return tag5; }

    public void setTag5(String tag5) { this.tag5 = tag5; }

    @Override
    public String toString() {
        return "{" +
                "\"board_no\":" + board_no +
                ",\"id\":\"" + id + '\"' +
                ",\"tag1\":\"" + tag1 + "\"" +
                ",\"tag2\":\"" + tag2 + "\"" +
                ",\"tag3\":\"" + tag3 + "\"" +
                ",\"tag4\":\"" + tag4 + "\"" +
                ",\"tag5\":\"" + tag5 + "\"" +
                '}';
    }
}
