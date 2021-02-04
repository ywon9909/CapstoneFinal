package com.example.androidcapstone;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class WritingBoard extends AppCompatActivity {
    Button button;
    EditText editTextTitle;
    EditText editTextMultiLineBoard;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_writing_board);

        /*
        Intent intent = new Intent();

        EditText title = (EditText)findViewById(R.id.editTextTitle);

        intent.putExtra("title", title.toString());

        setResult(RESULT_OK, intent);
        finish();

         */
    }
}