package com.padel.app.repository;

import com.padel.app.Model.Reserva;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    List<Reserva> findByUsuarioId(Long usuarioId);

    List<Reserva> findByCanchaId(Long canchaId);

    List<Reserva> findByFecha(LocalDate fecha);

    List<Reserva> findByCanchaIdAndFecha(Long canchaId, LocalDate fecha);

    boolean existsByCanchaIdAndFechaAndHorario(
            Long canchaId,
            LocalDate fecha,
            String horario
    );

}