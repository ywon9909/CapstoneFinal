package com.example.androidcapstone;

import android.content.Context;
import android.content.Intent;
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
        //holder.question.setText(dataList.get(position).getQuestion());


        holder.mView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Context context = v.getContext();

                Intent intent = new Intent(v.getContext(), ArticleDetail.class);
                //intent.putExtra("num", dataList.get(position).getNum());
                intent.putExtra("title", dataList.get(position).getTitle());
                intent.putExtra("question", dataList.get(position).getQuestion());
                intent.putExtra("answer1", dataList.get(position).getAnswer1());
                intent.putExtra("answer2", dataList.get(position).getAnswer2());
                intent.putExtra("answer3", dataList.get(position).getAnswer3());
                intent.putExtra("answer4", dataList.get(position).getAnswer4());
                intent.putExtra("answer5", dataList.get(position).getAnswer5());

                //v.getContext().startActivity(intent); ...?
                //c.startActivity(intent); ...?
            }
        });


    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public View mView;

        TextView num;
        TextView title;
        //TextView question;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            num = (TextView)itemView.findViewById(R.id.num);
            title = (TextView)itemView.findViewById(R.id.title);
            //question = (TextView)itemView.findViewById(R.id.question);
        }

    }
}
