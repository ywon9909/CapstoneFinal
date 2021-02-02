package com.example.androidcapstone;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class RecyclerViewAdapter2 extends RecyclerView.Adapter<RecyclerViewAdapter2.ViewHolder> {
    // 댓글 recyclerview 관리

    private Context c;
    private List<CommentData> dataList;

    static int num;

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
            answer = (TextView)itemView.findViewById(R.id.answer);
            comment_date = (TextView)itemView.findViewById(R.id.comment_date);
        }

    }
}
