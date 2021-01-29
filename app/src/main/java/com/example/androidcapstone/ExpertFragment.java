package com.example.androidcapstone;

import android.os.Build;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class ExpertFragment extends Fragment {
    // 글 목록

    Retrofit retrofit;
    JsonApi jsonApi;
    List<BoardData> dataList;

    String data;

    View mView;
    RecyclerView recyclerView;
    RecyclerViewAdapter recyclerViewAdapter;
    TextView textView;


    static final String URL = "http://192.168.35.91:8080";

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        mView = inflater.inflate(R.layout.fragment_expert, container, false);

        recyclerView = (RecyclerView)mView.findViewById(R.id.recycler_view);

        ArticleBoard activity = (ArticleBoard) getActivity();
        data = activity.getMyData();


        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        jsonApi = retrofit.create(JsonApi.class);

        Callback<List<BoardData>> callback = new Callback<List<BoardData>>() {
            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onResponse(Call<List<BoardData>> call, Response<List<BoardData>> response) {
                if(response.isSuccessful()) {
                    dataList = response.body();
                    Log.d("ExpertFragment", dataList.toString());

                    recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
                    recyclerViewAdapter = new RecyclerViewAdapter(getActivity(), dataList);
                    recyclerView.setAdapter(recyclerViewAdapter);

                    //textView = (TextView)mView.findViewById(R.id.text);
                    //textView.setText(response.body().toString());
                } else {
                    Log.d("log", "Status Code " + response.code());
                }
            }
            @Override
            public void onFailure(Call<List<BoardData>> call, Throwable t) {
                Log.d("log", "Fail");
                //t.printStackTrace();
            }
        };
        jsonApi.getBoard(data).enqueue(callback);
        // Inflate the layout for this fragment
        return  mView;
    }

}