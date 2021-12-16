package com.brainfeaster.boilerPlateV0.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brainfeaster.boilerPlateV0.model.product;

public interface productRepo extends JpaRepository<product, Long> {

}
