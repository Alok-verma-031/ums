package com.example.fs_application.repository;

import com.example.fs_application.model.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AuthRepository extends JpaRepository<AuthUser,Integer> {
    AuthUser findByEmail(String email);
}
