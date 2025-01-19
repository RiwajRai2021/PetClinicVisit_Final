package com.petclinicvisit.PetOwnerRegistration.service;

import java.util.Optional;

import com.petclinicvisit.PetOwnerRegistration.model.Owner;

public interface OwnerService {
	Owner saveOwner(Owner owner); 
	Optional<Owner>getOwnerById(Integer id); 

}
