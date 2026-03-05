package com.padel.app.controller;

import com.padel.app.Model.Cancha;
import com.padel.app.service.CanchaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/canchas")
@CrossOrigin(origins = "http://localhost:5173")
public class CanchaController {

    @Autowired
    private CanchaService canchaService;

    @GetMapping
    public List<Cancha> obtenerCanchas() {
        return canchaService.obtenerCanchas();
    }
}