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

    public Cancha obtenerCancha(Long id) {
        return canchaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cancha no encontrada"));
    }

    public Cancha crearCancha(Cancha cancha) {
        return canchaRepository.save(cancha);
    }

    public Cancha actualizarCancha(Long id, Cancha canchaActualizada) {

        Cancha cancha = canchaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cancha no encontrada"));

        cancha.setNombre(canchaActualizada.getNombre());
        cancha.setTipo(canchaActualizada.getTipo());

        return canchaRepository.save(cancha);
    }

    public void eliminarCancha(Long id) {
        canchaRepository.deleteById(id);
    }
}