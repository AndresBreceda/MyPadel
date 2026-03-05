package com.padel.app.controller;

import com.padel.app.Model.Cancha;
import com.padel.app.Model.Usuario;
import com.padel.app.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ---- usuarios ----

    @GetMapping("/usuarios")
    public List<Usuario> listarUsuarios() {
        return adminService.obtenerUsuarios();
    }

    @PostMapping("/usuarios")
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return adminService.crearUsuario(usuario);
    }

    @DeleteMapping("/usuarios/{id}")
    public void eliminarUsuario(@PathVariable Long id) {
        adminService.eliminarUsuario(id);
    }

    // ---- canchas ----

    @PostMapping("/canchas")
    public Cancha crearCancha(@RequestBody Cancha cancha) {
        return adminService.crearCancha(cancha);
    }

    @DeleteMapping("/canchas/{id}")
    public void eliminarCancha(@PathVariable Long id) {
        adminService.eliminarCancha(id);
    }
}