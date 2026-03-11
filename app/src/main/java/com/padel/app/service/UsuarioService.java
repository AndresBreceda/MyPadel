package com.padel.app.service;

import com.padel.app.Model.Reserva;
import com.padel.app.Model.Usuario;
import com.padel.app.repository.ReservaRepository;
import com.padel.app.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    public Usuario obtenerUsuario(Long id) {

        return usuarioRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public List<Reserva> obtenerReservas(Long usuarioId) {

        return reservaRepository.findByUsuarioId(usuarioId);
    }

    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario crearUsuario(Usuario usuario) {

        usuario.setPassword(
            passwordEncoder.encode(usuario.getPassword())
        );

        return usuarioRepository.save(usuario);
    }

    public Usuario actualizarUsuario(Long id, Usuario datos) {

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // actualizar email
        usuario.setEmail(datos.getEmail());

        // actualizar password SOLO si viene uno nuevo
        if (datos.getPassword() != null && !datos.getPassword().isEmpty()) {

            String passwordHash = passwordEncoder.encode(datos.getPassword());

            usuario.setPassword(passwordHash);
        }

        return usuarioRepository.save(usuario);
    }

    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}