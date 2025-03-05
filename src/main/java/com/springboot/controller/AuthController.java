package com.springboot.controller;

import com.springboot.model.User;
import com.springboot.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // Allow session sharing
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match!");
        }
        return userService.register(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user, HttpSession session) {
        User authenticatedUser = userService.login(user.getUsername(), user.getPassword());

        if (authenticatedUser != null) {
            session.setAttribute("user", authenticatedUser); // Store user in session
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login Successful!");
            return response;
        } else {
            throw new RuntimeException("Invalid credentials!");
        }
    }

    @GetMapping("/session-user")
    public User getSessionUser(HttpSession session) {
        return (User) session.getAttribute("user"); // Retrieve session user
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // Clear session
        return "Logged out successfully!";
    }
}

