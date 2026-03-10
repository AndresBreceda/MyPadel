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

    // LISTAR
    @GetMapping
    public List<Cancha> obtenerCanchas() {
        return canchaService.obtenerCanchas();
    }

    // OBTENER UNA
    @GetMapping("/{id}")
    public Cancha obtenerCancha(@PathVariable Long id) {
        return canchaService.obtenerCancha(id);
    }

    // CREAR
    @PostMapping
    public Cancha crearCancha(@RequestBody Cancha cancha) {
        return canchaService.crearCancha(cancha);
    }

    // ACTUALIZAR
    @PutMapping("/{id}")
    public Cancha actualizarCancha(
            @PathVariable Long id,
            @RequestBody Cancha canchaActualizada) {

        return canchaService.actualizarCancha(id, canchaActualizada);
    }

    // ELIMINAR
    @DeleteMapping("/{id}")
    public void eliminarCancha(@PathVariable Long id) {
        canchaService.eliminarCancha(id);
    }
}