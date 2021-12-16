package com.brainfeaster.boilerPlateV0.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainfeaster.boilerPlateV0.model.User;
import com.brainfeaster.boilerPlateV0.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User createUser (User user) {
		return userRepository.save(user);
	}

	public User getUserId(String id) {
		return userRepository.findById(id).get();
	}
}
