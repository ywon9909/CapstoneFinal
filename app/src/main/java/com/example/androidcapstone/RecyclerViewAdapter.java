package com.example.androidcapstone;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder> {

    private Context c;
    private List<BoardData> dataList;

    public RecyclerViewAdapter(Context c, List<BoardData> dataList) {
        this.c = c;
        this. dataList = dataList;
    }

    @NonNull
    @Override
    public RecyclerViewAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(c).inflate(R.layout.list_item, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerViewAdapter.ViewHolder holder, int position) {
        holder.num.setText(dataList.get(position).getNum().toString());
        holder.title.setText(dataList.get(position).getTitle());
        holder.question.setText(dataList.get(position).getQuestion());
    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView num;
        TextView title;
        TextView question;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            num = (TextView)itemView.findViewById(R.id.num);
            title = (TextView)itemView.findViewById(R.id.title);
            question = (TextView)itemView.findViewById(R.id.question);
        }

    }
}
