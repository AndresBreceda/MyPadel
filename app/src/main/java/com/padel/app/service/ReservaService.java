package com.padel.app.service;

import com.padel.app.Model.Reserva;
import com.padel.app.repository.ReservaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    public Reserva crearReserva(Reserva reserva) {

        boolean existe = reservaRepository.existsByCanchaIdAndFechaAndHorario(
                reserva.getCancha().getId(),
                reserva.getFecha(),
                reserva.getHorario()
        );

        if (existe) {
            throw new RuntimeException("La cancha ya está reservada en ese horario");
        }

        return reservaRepository.save(reserva);
    }

    public List<Reserva> obtenerReservas() {

        return reservaRepository.findAll();
    }

    public void cancelarReserva(Long id) {

        reservaRepository.deleteById(id);
    }

    public List<Reserva> obtenerReservasPorUsuario(Long usuarioId) {

        return reservaRepository.findByUsuarioId(usuarioId);
    }
}