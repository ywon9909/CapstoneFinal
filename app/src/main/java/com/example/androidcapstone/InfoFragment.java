package com.example.androidcapstone;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


public class InfoFragment extends Fragment {
    // 회원 정보 화면

    View mView;
    TextView ID;
    TextView name;
    TextView type;

    static final String URL = "http://192.168.35.91:8080";


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mView = inflater.inflate(R.layout.fragment_info, container, false);

        ID = (TextView) mView.findViewById(R.id.ID);
        name = (TextView)mView.findViewById(R.id.name);
        type = (TextView)mView.findViewById(R.id.type);

        return mView;
    }
}