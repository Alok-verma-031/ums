package com.example.fs_application.service;

import com.example.fs_application.dto.LoginDto;
import com.example.fs_application.model.AuthUser;
import com.example.fs_application.repository.AuthRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private AuthRepository repository;
    private EmailService emailService;
    public AuthService(AuthRepository repository,EmailService emailService)
    {
        this.repository=repository;
        this.emailService=emailService;
    }

    public String saveUser(AuthUser user)
    {
        repository.save(user);
        emailService.sendRegisterEmail(user.getEmail(),user.getName(),user.getPassword());
        return "User Registered Successfully !";
    }
    public AuthUser login(LoginDto user) {
        AuthUser existingUser=repository.findByEmail(user.getEmail());
        if(existingUser!=null && existingUser.getPassword().equals(user.getPassword()))
        {
            emailService.sendLoginEmail(user.getEmail(),existingUser.getName());
            return existingUser;
        }
        return null;
    }
}
