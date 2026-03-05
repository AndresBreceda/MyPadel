package com.padel.app.config;

import com.padel.app.Model.*;
import com.padel.app.repository.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(
            UsuarioRepository usuarioRepository,
            CanchaRepository canchaRepository,
            ReservaRepository reservaRepository,
            PasswordEncoder passwordEncoder
    ) {

        return args -> {

            if (usuarioRepository.count() == 0) {

                Usuario admin = new Usuario();
                admin.setNombre("admin");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setEmail("admin@padel.com");
                admin.setRol(Role.ADMIN);

                Usuario user = new Usuario();
                user.setNombre("usuario");
                user.setPassword(passwordEncoder.encode("user123"));
                user.setEmail("user@padel.com");
                user.setRol(Role.USER);

                usuarioRepository.saveAll(List.of(admin, user));
            }

            if (canchaRepository.count() == 0) {

                Cancha cancha1 = new Cancha();
                cancha1.setNombre("Cancha 1");
                cancha1.setTipo("Cancha techada");

                Cancha cancha2 = new Cancha();
                cancha2.setNombre("Cancha 2");
                cancha2.setTipo("Cancha exterior");

                canchaRepository.saveAll(List.of(cancha1, cancha2));
            }

        };
    }
}