package com.example.androidcapstone;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface JsonApi {
    //@GET("/api/mobile/board?category=성형외과")
    //Call<List<BoardData>> getBoard();

    @GET("/api/mobile/board")
    Call<List<BoardData>> getBoard(@Query("category") String category);

    //@GET("/api/board/comment/670")
    //Call<List<BoardData>> getComment();

    @GET("/api/board/comment")
    Call<List<BoardData>> getComment(@Query("num") String num);
}
