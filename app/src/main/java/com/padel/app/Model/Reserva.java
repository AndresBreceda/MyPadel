package com.padel.app.Model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fecha;

    private String horario;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "cancha_id")
    private Cancha cancha;

    // getters y setters

    public Long getId() { return id; }

    public LocalDate getFecha() { return fecha; }

    public void setFecha(LocalDate fecha) { this.fecha = fecha; }

    public String getHorario() { return horario; }

    public void setHorario(String horario) { this.horario = horario; }

    public Usuario getUsuario() { return usuario; }

    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public Cancha getCancha() { return cancha; }

    public void setCancha(Cancha cancha) { this.cancha = cancha; }
}