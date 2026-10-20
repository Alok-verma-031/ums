package com.example.fs_application.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendRegisterEmail(String toEmail,String name,String password) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);
        message.setSubject("Registration Successful!");

        message.setText(
                "Hello " + name + "!\n\n" +
                        "Your registration has been completed successfully.\n\n" +
                        "Thank you for creating an account with us. " +
                        "You can now log in using your registered email address and password."+password+"\n\n" +
                        "Best regards,\n" +
                        "User Management Team"
        );

        mailSender.send(message);
    }
    public void sendLoginEmail(String toEmail,String name)
    {
        SimpleMailMessage message=new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Login Successfuly !");
        message.getSentDate();
        message.setText(
                "Hello " + name + "!\n\n" +
                        "Your login has been completed successfully.\n\n" +
                        "Thank you for logging in to our application.\n\n" +
                        "Best regards,\n" +
                        "User Management Team"
        );
        mailSender.send(message);
    }
}