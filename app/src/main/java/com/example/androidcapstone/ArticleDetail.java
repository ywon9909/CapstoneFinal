package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.example.androidcapstone.databinding.ActivityArticleDetailBinding;

import org.w3c.dom.Text;

public class ArticleDetail extends AppCompatActivity {
    // 글 목록의 아이템을 누르면 나오는 글 상세 화면

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_detail);

        TextView title = (TextView)findViewById(R.id.title);
        TextView question = (TextView)findViewById(R.id.question);

        Intent intent = getIntent();

        String mTitle = intent.getExtras().getString("title");
        title.setText(mTitle);

        String mQuestion = intent.getExtras().getString("question");
        question.setText(mQuestion);





    }
}