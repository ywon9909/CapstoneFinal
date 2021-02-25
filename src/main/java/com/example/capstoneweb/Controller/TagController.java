package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.Tag;
import com.example.capstoneweb.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/board")
public class TagController {
    @Autowired
    private TagService tagService;

    //get all tag
    @GetMapping("/tag")
    public List<Tag> getAllTag(){
        return tagService.getAllTag();
    }
    //게시판 글에 관련된 태그
    @GetMapping("/tag/{num}")
    public Tag getTagByNum(@PathVariable Integer num){
        return tagService.getTag(num);
    }
    //deleteTag
    @DeleteMapping("/tag/{num}")
    public void deleteTagByNum(@PathVariable Integer num){
        tagService.deleteTag(num);
    }
    //create tag
    @PostMapping("/tag")
    public Tag createTag(@RequestBody Tag tag){
        System.out.println("이게무러까?"+tag);
        return tagService.createTag( tag);
    }
    //update tag
    @PutMapping("/tag/{num}")
    public void updateTagByNum(@PathVariable Integer num, @RequestBody Tag tag){
        tagService.updateTag(num,tag);
    }

}
