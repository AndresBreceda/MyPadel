package com.padel.app.service;

import com.padel.app.Model.Reserva;
import com.padel.app.Model.Usuario;
import com.padel.app.repository.ReservaRepository;
import com.padel.app.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
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
}