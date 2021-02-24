package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Tag;
import com.example.capstoneweb.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;

    public List<Tag> getAllTag(){
        return tagRepository.findAll();
    }


    public ResponseEntity<Tag> getTag(Integer num) {
        Tag tag = tagRepository.findById(num).orElseThrow(()-> new ResourceNotFoundException("Not exist Tag Data by no : ["+num+"]"));
        return ResponseEntity.ok(tag);
    }
}
