package com.example.androidcapstone;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.example.androidcapstone.databinding.ActivityArticleDetailBinding;

import org.w3c.dom.Text;

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

    RecyclerView recyclerView2;
    RecyclerViewAdapter2 recyclerViewAdapter2;

    static final String URL = "http://192.168.35.91:8080";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_detail);

        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        jsonApi = retrofit.create(JsonApi.class);

        Callback<List<CommentData>> callback = new Callback<List<CommentData>>() {
            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onResponse(Call<List<CommentData>> call, Response<List<CommentData>> response) {
                if(response.isSuccessful()) {

                    dataList = response.body();
                    Log.d("ArticleDetail", dataList.toString());

                    /*
                    recyclerView2.setLayoutManager(new LinearLayoutManager(getBaseContext()));
                    recyclerViewAdapter2 = new RecyclerViewAdapter2(getApplicationContext(), dataList);
                    recyclerView2.setAdapter(recyclerViewAdapter2);


                     */

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
        //jsonApi.getComment(1).enqueue(callback);
        jsonApi.getComment().enqueue(callback);


        TextView title = (TextView)findViewById(R.id.title);
        TextView question = (TextView)findViewById(R.id.question);

        Intent intent = getIntent();

        String mTitle = intent.getExtras().getString("title");
        title.setText(mTitle);

        String mQuestion = intent.getExtras().getString("question");
        question.setText(mQuestion);





    }
}