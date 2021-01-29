package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.androidcapstone.databinding.ActivityArticleBoardBinding;

public class ArticleBoard extends AppCompatActivity {
    // 버튼 선택하면 글 목록과 지도 나오도록.

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_board);

        Button button = findViewById(R.id.button); // 글 목록 나오도록.
        Button button2 = findViewById(R.id.button2); // 지도 나오도록.


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getSupportFragmentManager().beginTransaction().replace(R.id.container, new ExpertFragment()).commit();
            }
        });

        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getSupportFragmentManager().beginTransaction().replace(R.id.container, new NonExpertFragment()).commit();
            }
        });
    }
}