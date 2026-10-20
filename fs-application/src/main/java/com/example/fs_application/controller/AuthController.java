package com.example.fs_application.controller;

import com.example.fs_application.dto.LoginDto;
import com.example.fs_application.model.AuthUser;
import com.example.fs_application.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    private AuthService authService;
    public AuthController(AuthService authService)
    {
        this.authService=authService;
    }

    @PostMapping("/register")
    public String saveUser(@RequestBody AuthUser user)
    {
        return authService.saveUser(user);
    }

    @PostMapping("/login")
    public String loginUser(HttpSession session,@RequestBody LoginDto user)
    {
        AuthUser existUser=authService.login(user);
        if(existUser==null)
        {
            return "Invalid Email Or Password !";
        }
        session.setAttribute("email",existUser.getEmail());
        return "User Login Successfully";
    }
}
