package com.example.androidcapstone;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import okhttp3.OkHttpClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;

import static com.example.androidcapstone.Login.token;

public class PromotionDetail extends AppCompatActivity {

    Retrofit retrofit;
    JsonApi jsonApi;
    List<BoardData> dataList;

    Integer no;

    RecyclerView proRecyclerview;
    PromotionRecyclerViewAdapter promotionRecyclerViewAdapter;

    TextView user;
    TextView datetime;
    TextView title;
    TextView question;
    ImageView promotionImage;

    static final String URL = "http://192.168.35.91:8080";
    //static final String URL = "http://223.194.158.215:8080";
    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_promotion_detail);

        // titlebar 없애기
        ActionBar bar = getSupportActionBar();
        bar.hide();

        user = (TextView)findViewById(R.id.user);
        datetime = (TextView)findViewById(R.id.datetime);
        title = (TextView)findViewById(R.id.promotion_title);
        question = (TextView)findViewById(R.id.promotion_detail);
        promotionImage = (ImageView)findViewById(R.id.promotionImage);

        Intent intent = getIntent();

        // 글 정보 intent로 받아오기
        String c = intent.getExtras().getString("category");
        String id = intent.getExtras().getString("board_id");
        user.setText(" " + id);
        String dt = intent.getExtras().getString("datetime");
        datetime.setText(dt);
        String t = intent.getExtras().getString("title");
        title.setText(t);
        String q = intent.getExtras().getString("question");
        question.setText(q);

        // 이미지 조회 (drawble말고 assets사용한 bitmap)
        String mFilepath = intent.getExtras().getString("filepath");
        AssetManager am = getResources().getAssets();
        InputStream is = null;
        try {
            if(mFilepath == null)   is = am.open("noimg.PNG");
            else    is = am.open(mFilepath);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Bitmap bm = BitmapFactory.decodeStream(is);
        promotionImage.setImageBitmap(bm);

        no = intent.getExtras().getInt("num");

        jsonApi = ServiceGenerator.createService(JsonApi.class, token);

        // 홍보글 수정
        Button update = (Button)findViewById(R.id.update);
        update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent1 = new Intent(getApplicationContext(), WritingPromotion.class);
                intent1.putExtra("mode", "edit");
                intent1.putExtra("board_no", no);
                intent1.putExtra("title", title.getText().toString());
                intent1.putExtra("question", question.getText().toString());
                Log.i("PromotionDetail - title", title.getText().toString());
                startActivity(intent1);
            }
        });

        // 홍보글 삭제 버튼
        Button delete = (Button)findViewById(R.id.delete);
        delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                deletePost(no);

                // 글 삭제 시 앞으로 넘어감
                Intent intent2 = new Intent(PromotionDetail.this, PromotionBoard.class);
                String name = PromotionBoard.name;
                intent2.putExtra("values", name);
                startActivity(intent2);
            }
        });
    }

    private void deletePost(Integer no) {
        Call<Void> calls = jsonApi.deletePost(no);
        calls.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(!response.isSuccessful()) {
                    Log.i("board delete", "num = "+ no);

                    Intent intent = new Intent(PromotionDetail.this, PromotionBoard.class);
                    String name = PromotionBoard.name;
                    intent.putExtra("values", name);
                    startActivity(intent);
                }
            }
            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                Log.i("board delete fail", String.valueOf(no));
            }
        });
    }
}