package com.github.italoalcantaraa.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.italoalcantaraa.model.User;

public interface UserRepository extends JpaRepository<User, UUID> {
    
}
