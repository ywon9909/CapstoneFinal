package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import com.example.androidcapstone.databinding.ActivityArticleDetailBinding;

import org.w3c.dom.Text;

public class ArticleDetail extends AppCompatActivity {
    ActivityArticleDetailBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_detail);

        TextView title = binding.title;
        TextView question = binding.question;
        TextView answer1 = binding.answer1;
        TextView answer2 = binding.answer2;
        TextView answer3 = binding.answer3;
        TextView answer4 = binding.answer4;
        TextView answer5 = binding.answer5;

        //TextView title = (TextView)findViewById(R.id.title);
        //TextView question = (TextView)findViewById(R.id.question);

        Intent intent = getIntent();

        String mTitle = intent.getExtras().getString("title");
        title.setText(mTitle);

        String mQuestion = intent.getExtras().getString("question");
        question.setText(mQuestion);

        String mAnswer1 = intent.getExtras().getString("answer1");
        answer1.setText(mAnswer1);

        String mAnswer2 = intent.getExtras().getString("answer2");
        answer2.setText(mAnswer2);

        String mAnswer3 = intent.getExtras().getString("answer3");
        answer3.setText(mAnswer3);

        String mAnswer4 = intent.getExtras().getString("answer4");
        answer4.setText(mAnswer4);

        String mAnswer5 = intent.getExtras().getString("answer5");
        answer5.setText(mAnswer5);



    }
}