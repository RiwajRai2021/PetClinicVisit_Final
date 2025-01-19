package com.petclinicvisit.PetOwnerRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinicvisit.PetOwnerRegistration.model.Owner;

public interface OwnerRepository extends JpaRepository<Owner,Integer> {

}
