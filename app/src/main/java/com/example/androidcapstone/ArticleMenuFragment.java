package com.example.androidcapstone;

import android.content.Intent;
import android.os.Bundle;
import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.example.androidcapstone.databinding.FragmentArticleMenuBinding;


public class ArticleMenuFragment extends Fragment {
    //FragmentArticleMenuBinding fragmentArticleMenuBinding;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View rootView = inflater.inflate(R.layout.fragment_article_menu, container, false);

        String[] values = {"자유게시판", "소아과", "내과", "정형외과"};

        ListView listView = (ListView)rootView.findViewById(R.id.list);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_list_item_1, values);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(getContext(), ArticleBoard.class);
                intent.putExtra("values", values.toString());
                startActivity(intent);
            }
        });

        return rootView;
    }



    /*
    @Override
    public void onListItemClick(ListView l, View v, int position, long id) {
        String strText = (String) l.getItemAtPosition(position);
        Log.d("Fragment: ", position + ": " + strText);
        //Toast.makeText(this.getContext(), "클릭: " + position +" " + strText, Toast.LENGTH_SHORT).show();
    }


     */

}