package com.brainfeaster.boilerPlateV0;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootApplication
public class BoilerPlateV0Application {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	

	public static void main(String[] args) {
		SpringApplication.run(BoilerPlateV0Application.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		System.out.println("---------"+mongoTemplate.getCollectionNames());
//		
//	}

}
