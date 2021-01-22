package com.example.androidcapstone;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface JsonApi {
    @GET("/")
    Call<List<BoardData>> getBoard();

}
