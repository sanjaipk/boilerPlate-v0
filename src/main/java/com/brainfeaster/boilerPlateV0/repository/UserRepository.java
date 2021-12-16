package com.brainfeaster.boilerPlateV0.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.brainfeaster.boilerPlateV0.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
