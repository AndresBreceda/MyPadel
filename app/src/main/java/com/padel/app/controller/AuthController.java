package com.padel.app.controller;

import com.padel.app.dto.LoginRequest;
import com.padel.app.service.AuthService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return authService.login(
                request.getEmail(),
                request.getPassword()
        );
    }
}