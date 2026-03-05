package com.padel.app.service;

import com.padel.app.Model.Cancha;
import com.padel.app.repository.CanchaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CanchaService {

    @Autowired
    private CanchaRepository canchaRepository;

    public List<Cancha> obtenerCanchas() {

        return canchaRepository.findAll();
    }
}