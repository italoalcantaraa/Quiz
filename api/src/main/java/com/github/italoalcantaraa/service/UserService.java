package com.github.italoalcantaraa.service;

import com.github.italoalcantaraa.repository.UserRepository;

public class UserService {
    private UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
