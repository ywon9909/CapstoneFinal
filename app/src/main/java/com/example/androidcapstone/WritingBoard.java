package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.text.SimpleDateFormat;
import java.util.Date;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import static com.example.androidcapstone.ExpertFragment.URL;

public class WritingBoard extends AppCompatActivity {
    Button button;
    EditText editTextTitle;
    EditText editTextMultiLineBoard;

    String category;

    JsonApi jsonApi;
    Retrofit retrofit;

    static final String URL = "http://192.168.35.91:8080";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_writing_board);

        Intent intent = getIntent();
        category = intent.getExtras().getString("category");

        editTextTitle = (EditText)findViewById(R.id.editTextTitle);
        editTextMultiLineBoard = (EditText)findViewById(R.id.editTextMultiLineBoard);
        button = (Button)findViewById(R.id.submit);

        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        jsonApi = retrofit.create(JsonApi.class);


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                BoardData bd = new BoardData();
                bd.setTitle(editTextTitle.getText().toString());
                bd.setQuestion(editTextMultiLineBoard.getText().toString());
                bd.category=category;
                bd.id="user3";
                bd.board_like=0;
                bd.board_date=new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(new java.util.Date());

                addBoard(bd);
            }
        });

    }

    private void addBoard(BoardData b) {
        Call<BoardData> call = jsonApi.addPost(b);
        call.enqueue(new Callback<BoardData>() {
            @Override
            public void onResponse(Call<BoardData> call, Response<BoardData> response) {
                Toast.makeText(WritingBoard.this, "Board created successfully", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onFailure(Call<BoardData> call, Throwable t) {
                Log.e("ERROR: ", t.getMessage());
            }
        });
    }
}