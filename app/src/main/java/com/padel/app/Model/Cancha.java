package com.padel.app.Model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "canchas")
public class Cancha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String tipo;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "horarios_cancha", joinColumns = @JoinColumn(name = "cancha_id"))
    @Column(name = "horario")
    private List<String> horarios;

    @OneToMany(mappedBy = "cancha")
    private List<Reserva> reservas;

    public Long getId() { return id; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getTipo() { return tipo; }

    public void setTipo(String tipo) { this.tipo = tipo; }

    public List<String> getHorarios() { return horarios; }

    public void setHorarios(List<String> horarios) { this.horarios = horarios; }

    public List<Reserva> getReservas() { return reservas; }

    public void setReservas(List<Reserva> reservas) { this.reservas = reservas; }
}