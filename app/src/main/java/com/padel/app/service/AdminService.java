package com.padel.app.service;

import com.padel.app.Model.Cancha;
import com.padel.app.Model.Usuario;
import com.padel.app.repository.CanchaRepository;
import com.padel.app.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CanchaRepository canchaRepository;

    public List<Usuario> obtenerUsuarios() {

        return usuarioRepository.findAll();
    }

    public Usuario crearUsuario(Usuario usuario) {

        return usuarioRepository.save(usuario);
    }

    public void eliminarUsuario(Long id) {

        usuarioRepository.deleteById(id);
    }

    public Cancha crearCancha(Cancha cancha) {

        return canchaRepository.save(cancha);
    }

    public void eliminarCancha(Long id) {

        canchaRepository.deleteById(id);
    }
}