package com.example.androidcapstone;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RecyclerViewAdapter2 extends RecyclerView.Adapter<RecyclerViewAdapter2.ViewHolder> {
    // 댓글 recyclerview 관리

    private Context c;
    private List<CommentData> dataList;

    Button button;

    Retrofit retrofit;
    JsonApi jsonApi;

    static final String URL = "http://192.168.35.91:8080";

    static int num;
    int comment_no;

    public RecyclerViewAdapter2(Context c, List<CommentData> dataList) {
        this.c = c;
        this.dataList = dataList;
    }

    @NonNull
    @Override
    public RecyclerViewAdapter2.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view2 = LayoutInflater.from(c).inflate(R.layout.list_item2, parent, false);
        return new ViewHolder(view2);
    }


    @Override
    public void onBindViewHolder(@NonNull RecyclerViewAdapter2.ViewHolder holder, int position) {

        holder.answer.setText(dataList.get(position).getAnswer());
        //holder.comment_date.setText(dataList.get(position).getComment_date());

        String str = dataList.get(position).getComment_date().toString();
        String date = str.substring(0, str.indexOf("T"));
        String time = str.substring(11, str.indexOf("."));
        holder.comment_date.setText(date + " " + time);


    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        //public View mView;

        TextView answer;
        TextView comment_date;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            retrofit = new Retrofit.Builder()
                    .baseUrl(URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
            jsonApi = retrofit.create(JsonApi.class);


            answer = (TextView)itemView.findViewById(R.id.answer);
            comment_date = (TextView)itemView.findViewById(R.id.comment_date);

            button=(Button)itemView.findViewById(R.id.button3);
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    // TODO : process click event.
                    comment_no=dataList.get(getAdapterPosition()).getComment_no();
                    Log.i("comment_no", String.valueOf(comment_no));
                    Call<Void> calls = jsonApi.deleteComment(comment_no);
                    calls.enqueue(new Callback<Void>() {
                        @Override
                        public void onResponse(Call<Void> call, Response<Void> response) {
                            if (!response.isSuccessful()) {

                                Log.i("board delete", "num="+comment_no);

                                //textViewResult.setText("code: " + response.code());boar
                               /* Intent intent2=new Intent(ArticleDetail.this, ArticleBoard.class);
                                String name=ArticleBoard.name;
                                intent2.putExtra("values",name);
                                startActivity(intent2);*/
                            }
                        }

                        @Override
                        public void onFailure(Call<Void> call, Throwable t) {
                            Log.i("board delete fail", String.valueOf(num));
                        }


                    });

                }
            });





        }

    }

}
