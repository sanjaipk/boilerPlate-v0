package com.brainfeaster.boilerPlateV0.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainfeaster.boilerPlateV0.model.User;
import com.brainfeaster.boilerPlateV0.service.UserService;

@RestController
@Component
@RequestMapping("/api/user")
public class homeController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/getUser")
	public String getData()
	{
		return "shivaram2";
	}
	
	@PostMapping("/create")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	@GetMapping("/getById/{id}")
	public User getUserById(@PathVariable String id) {
		return userService.getUserId(id);
	}

}
