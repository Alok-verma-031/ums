package com.example.fs_application.controller;

import com.example.fs_application.service.EmailService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/register")
    public String sendRegisterEmail(@RequestParam String email,@RequestParam String name,@RequestParam String password) {

        emailService.sendRegisterEmail(email,name,password);

        return "Test email sent successfully!";
    }
    @GetMapping("/login")
    public String sendLoginEmail(@RequestParam String email,@RequestParam String name) {

        emailService.sendLoginEmail(email,name);

        return "Test email sent successfully!";
    }
}