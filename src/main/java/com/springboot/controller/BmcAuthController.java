package com.springboot.controller;

import com.springboot.model.BmcUser;
import com.springboot.service.BmcUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bmc")
@CrossOrigin(origins = "http://localhost:3000")
public class BmcAuthController {

    @Autowired
    private BmcUserService bmcUserService;

    @PostMapping("/signup")
    public BmcUser signup(@RequestBody BmcUser user) {
        return bmcUserService.register(user);
    }

    @PostMapping("/login")
    public BmcUser login(@RequestBody BmcUser user) {
        return bmcUserService.login(user.getEmail(), user.getPassword());
    }
}
