package com.petclinicvisit.PetOwnerRegistration.controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinicvisit.PetOwnerRegistration.model.Owner;
import com.petclinicvisit.PetOwnerRegistration.service.OwnerService;


@RestController
@CrossOrigin(origins = "*") // Allow CORS from Angular app
@RequestMapping(value = "/owner")
public class OwnerController {
	@Autowired
	private OwnerService ownerService;
	
	@PostMapping
    public ResponseEntity<Owner> createOwner(@RequestBody Owner owner) {
        Owner createdOwner= ownerService.saveOwner(owner);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOwner);
    }
	@GetMapping("/{id}")
    public ResponseEntity<Owner> getOwnerById(@PathVariable Integer id) {		
        Optional<Owner> owner = ownerService.getOwnerById(id);        
        return owner.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}