package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Tag;
import com.example.capstoneweb.repository.BoardRepository;
import com.example.capstoneweb.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;
    private BoardRepository boardRepository;
    public List<Tag> getAllTag(){
        return tagRepository.findAll();
    }

    //find Tag
    public Tag getTag(Integer num) {
      Tag tag=tagRepository.findById(num).orElseThrow(() -> new ResourceNotFoundException("Not exist Tag Data by no : [" + num + "]"));
       return tag;
    }
    //delete tag
    public void deleteTag(Integer num){
        Tag tag=tagRepository.findById(num).orElseThrow(() -> new ResourceNotFoundException("Not exist Tag Data by no : [" + num + "]"));
        tagRepository.delete(tag);
    }

    public Tag createTag( Tag tag) {
int fine=boardRepository.findlastautoincrement();
tag.setBoard_no(fine);
        return tagRepository.save(tag);
    }

    public void updateTag(Integer num, Tag updatetag) {
        Tag tag =tagRepository.findById(num).orElseThrow(() -> new ResourceNotFoundException("Not exist Tag Data by no : [" + num + "]"));
        tag.setTag1(updatetag.getTag1());
        tag.setTag2(updatetag.getTag2());
        tag.setTag3(updatetag.getTag3());
        tag.setTag4(updatetag.getTag4());
        tag.setTag5(updatetag.getTag5());

        tagRepository.save(tag);
    }
}
