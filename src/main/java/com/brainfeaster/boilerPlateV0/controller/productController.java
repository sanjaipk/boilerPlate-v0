package com.brainfeaster.boilerPlateV0.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainfeaster.boilerPlateV0.model.User;
import com.brainfeaster.boilerPlateV0.repository.productRepo;
import com.brainfeaster.boilerPlateV0.service.UserService;

@RestController
@RequestMapping("/product")
public class productController {

	public productController(productRepo productrepo) {
		super();
		this.productrepo = productrepo;
	}

	private final productRepo productrepo;
	
	@GetMapping
	public ResponseEntity getAllProducts() {
		return ResponseEntity.ok(this.productrepo.findAll());
	}
	
	
	
}
