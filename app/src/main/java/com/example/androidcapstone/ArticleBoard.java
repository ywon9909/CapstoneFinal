package com.example.androidcapstone;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class ArticleBoard extends AppCompatActivity {
    // 버튼 선택하면 글 목록과 지도 나오도록.

    ExpertFragment expertFragment;

    static String name;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_board);

        // titlebar 없애기
        ActionBar bar = getSupportActionBar();
        bar.hide();

        expertFragment = new ExpertFragment();

        // 제일 먼저 띄워줄 뷰 세팅
        getSupportFragmentManager().beginTransaction().replace(R.id.container,expertFragment).commitAllowingStateLoss();

        /*
        // 지도 기능 없앰.
        Button button = findViewById(R.id.button); // 글 목록 나오도록.
        Button button2 = findViewById(R.id.button2); // 지도 나오도록.
         */
        Intent intent = getIntent();
        name = intent.getExtras().getString("values");
        // ArticleMenuFragment에서 values값 받았다는 로그.
        Log.i("ArticleBoard", name);

    }

    public String getMyData(){
        return name;
    }
}