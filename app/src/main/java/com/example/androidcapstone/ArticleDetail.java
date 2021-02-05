package com.example.androidcapstone;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.androidcapstone.databinding.ActivityArticleDetailBinding;

import org.w3c.dom.Text;

import java.text.SimpleDateFormat;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ArticleDetail extends AppCompatActivity {
    // 글 목록의 아이템을 누르면 나오는 글 상세 화면

    Retrofit retrofit;
    JsonApi jsonApi;
    List<CommentData> dataList;

    Integer num;
Button button3;
Button button5;
    RecyclerView recyclerView2;
    RecyclerViewAdapter2 recyclerViewAdapter2;
    String mTitle;
    String mQuestion;
    static final String URL = "http://172.30.1.58:8080";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_detail);


        TextView title = (TextView)findViewById(R.id.title);
        TextView question = (TextView)findViewById(R.id.question);


        Intent intent = getIntent();

        mTitle = intent.getExtras().getString("title");
        title.setText(mTitle);

        mQuestion = intent.getExtras().getString("question");
        question.setText(mQuestion);

        num = intent.getExtras().getInt("num");


        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        recyclerView2 = findViewById(R.id.recycler_view2);

        jsonApi = retrofit.create(JsonApi.class);

        Callback<List<CommentData>> callback = new Callback<List<CommentData>>() {
            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onResponse(Call<List<CommentData>> call, Response<List<CommentData>> response) {
                if(response.isSuccessful()) {

                    dataList = response.body();
                    Log.d("ArticleDetail", dataList.toString());


                    recyclerViewAdapter2 = new RecyclerViewAdapter2(getApplicationContext(), dataList);
                    recyclerView2.setLayoutManager(new LinearLayoutManager(getApplicationContext()));
                    recyclerView2.setAdapter(recyclerViewAdapter2);

                    Log.d("board_no", String.valueOf(num));

                    //textView = (TextView)mView.findViewById(R.id.text);
                    //textView.setText(response.body().toString());


                } else {
                    Log.d("log", "Status Code " + response.code());
                }
            }
            @Override
            public void onFailure(Call<List<CommentData>> call, Throwable t) {
                //Log.d("log", "Fail");
                t.printStackTrace();
            }
        };

        jsonApi.getComment(num).enqueue(callback);

        button5 = findViewById(R.id.button5);
        button5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               // updatePost(num);
                Intent intent2=new Intent(ArticleDetail.this,WritingBoard.class);
                intent2.putExtra("mode","edit");
                intent2.putExtra("board_no",num);
                intent2.putExtra("title",mTitle);
                intent2.putExtra("answer",mQuestion);

                startActivity(intent2);

                //글삭제
            }


        });//글수정
        button3=findViewById(R.id.button3);
        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
         deletePost(num);



                //글삭제
            }


        });

    }

    private void deletePost(Integer no) {
        Call<Void> calls = jsonApi.deleteUser(no);
        calls.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if (!response.isSuccessful()) {

                    Log.i("board delete", "num="+no);

                    //textViewResult.setText("code: " + response.code());boar
                    Intent intent2=new Intent(ArticleDetail.this, ArticleBoard.class);
                    String name=ArticleBoard.name;
                    intent2.putExtra("values",name);
                    startActivity(intent2);
                }


            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                Log.i("board delete fail", String.valueOf(num));
            }


        });

    }

}