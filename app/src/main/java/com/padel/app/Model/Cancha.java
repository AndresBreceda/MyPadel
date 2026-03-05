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

    @OneToMany(mappedBy = "cancha")
    private List<Reserva> reservas;

    // getters y setters

    public Long getId() { return id; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getTipo() { return tipo; }

    public void setTipo(String tipo) { this.tipo = tipo; }

    public List<Reserva> getReservas() { return reservas; }

    public void setReservas(List<Reserva> reservas) { this.reservas = reservas; }
}