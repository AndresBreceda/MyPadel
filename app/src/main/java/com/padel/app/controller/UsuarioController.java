package com.padel.app.controller;

import com.padel.app.Model.Reserva;
import com.padel.app.Model.Usuario;
import com.padel.app.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/{id}")
    public Usuario obtenerUsuario(@PathVariable Long id) {
        return usuarioService.obtenerUsuario(id);
    }

    @GetMapping("/{id}/reservas")
    public List<Reserva> reservasUsuario(@PathVariable Long id) {
        return usuarioService.obtenerReservas(id);
    }
}