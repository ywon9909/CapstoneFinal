package com.example.androidcapstone;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class ExpertFragment extends Fragment {
    Retrofit retrofit;
    JsonApi jsonApi;
    Call<List<BoardData>> call;

    View mView;
    TextView textView;

    static final String URL = "http://192.168.35.91:8080/";

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        mView = inflater.inflate(R.layout.fragment_expert, container, false);

        //textView = (TextView)mView.findViewById(R.id.text);

        index();
        // Inflate the layout for this fragment
        //return inflater.inflate(R.layout.fragment_expert, container, false);
        return  mView;
    }

    public void index() {
        retrofit = new Retrofit.Builder()
                .baseUrl(URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        jsonApi = retrofit.create(JsonApi.class);

        call = jsonApi.getBoard();
        call.enqueue(new Callback<List<BoardData>>() {
            @Override
            public void onResponse(Call<List<BoardData>> call, Response<List<BoardData>> response) {

                if(response.isSuccessful()) {
                    List<BoardData> mList = response.body();
                    String result = "";
                    for(BoardData item : mList) {
                        result += "num: " + item.getNum() + " title: " + item.getTitle() + " question: " + item.getQuestion()
                                + " answer1: " + item.getAnswer1() + " answer2: " + item.getAnswer2() + " answer3: " + item.getAnswer3() + "\n";
                    }
                    textView.setText(result);
                    //textView = (TextView)mView.findViewById(R.id.text);
                    //textView.setText(response.body().toString());
                } else {
                    Log.d("log", "Status Code" + response.code());
                }



            }

            @Override
            public void onFailure(Call<List<BoardData>> call, Throwable t) {
                Log.d("log", "Fail");
            }
        });

    }
}