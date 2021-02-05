package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.text.SimpleDateFormat;
import java.util.Date;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
//board C U
public class WritingBoard extends AppCompatActivity {
    Button button;
    EditText editTextTitle;
    EditText editTextMultiLineBoard;
    Retrofit retrofit;
    JsonApi jsonApi;
    String result ="";
    BoardData bd;
    Integer board_no;
String category;
    static final String URL = "http://172.30.1.58:8080";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_writing_board);
        String[] values = {"소아과", "내과", "정형외과", "신경외과", "이비인후과", "한방과",
                "안과", "치과", "피부과", "산부인과", "비뇨기과", "성형외과", "자유게시판", "병원홍보 게시판", "구인구직", "뇸뇸뇸"};

        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        jsonApi = retrofit.create(JsonApi.class);
        editTextTitle= (EditText)findViewById(R.id.editTextTitle);
        editTextMultiLineBoard= (EditText)findViewById(R.id.editTextMultiLineBoard);
        button = (Button) findViewById(R.id.submit);


        Intent intent = getIntent();
        String mode=intent.getExtras().getString("mode");
        //Log.i("mode=",mode);


        String s1="edit";
        if(mode.equals(s1)){
            button.setText("글수정");
            board_no=intent.getExtras().getInt("board_no");
           editTextTitle.setText(intent.getExtras().getString("title"));
            editTextMultiLineBoard.setText(intent.getExtras().getString("answer"));
        }
        else {

            button.setText("글등록");
        }


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                bd=new BoardData();
                bd.title=editTextTitle.getText().toString();
                bd.question=editTextMultiLineBoard.getText().toString();
                if(mode.equals(s1)) {
                    editpost(bd);
                }
                else {
                    bd.id="user3";
                    bd.board_like=0;
                    bd.category=ArticleBoard.name;
                    bd.board_date = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(new java.util.Date());

                    createPost(bd);
                }
                Intent intent2=new Intent(WritingBoard.this, ArticleBoard.class);
                String name=ArticleBoard.name;
intent2.putExtra("values",name);
                startActivity(intent2);
            }
        });

    }
    private void createPost(BoardData boardData) {
        Call<BoardData> call = jsonApi.post_posts(boardData);
        call.enqueue(new Callback<BoardData>() {
            @Override
            public void onResponse(Call<BoardData> call, Response<BoardData> response) {
                if (!response.isSuccessful()) {
                    //textViewResult.setText("code: " + response.code());boar
                    return;
                }
            }
            @Override
            public void onFailure(Call<BoardData> call, Throwable t) {
            }
        });

    }
    private void editpost(BoardData boardData) {

        Call<Void> call = jsonApi.updateBoardData(board_no,boardData);
        call.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if (!response.isSuccessful()) {
                    //textViewResult.setText("code: " + response.code());boar
                    return;
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
            }
        });

    }/*
    /*

        Intent intent = new Intent();

        EditText title = (EditText)findViewById(R.id.editTextTitle);

        intent.putExtra("title", title.toString());

        setResult(RESULT_OK, intent);
        finish();

         */



}