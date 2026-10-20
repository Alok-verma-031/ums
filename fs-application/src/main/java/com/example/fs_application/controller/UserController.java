package com.example.fs_application.controller;

import com.example.fs_application.dto.GetAllDto;
import com.example.fs_application.model.User;
import com.example.fs_application.service.UserService;
import com.example.fs_application.dto.UserDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private UserService userService;
    public UserController(UserService userService)
    {
        this.userService=userService;
    }

    @PostMapping("/create")
    public User saveUser(@RequestBody User user)
    {
        return userService.saveUser(user);
    }

    @GetMapping("/getAll")
     public List<GetAllDto> getAll()
    {
        return userService.getAll();
    }
    
    @GetMapping("/getUser/{id}")
    public UserDto getUser(@PathVariable Long id )
    {
        return userService.getUser(id);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id)
    {
        Boolean deleteuser=userService.deleteUser(id);
        if(deleteuser) return "Student deleted Successfuly !";
        return "Student was not found !";

    }
    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable Long id,@RequestBody UserDto user)
    {
        Boolean upadatedUser=userService.updateUser(id,user);
        if(upadatedUser) return "User is Updated !";
        return "user not found !";
    }
}
