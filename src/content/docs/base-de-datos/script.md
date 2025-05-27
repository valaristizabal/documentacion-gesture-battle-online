---
title: Script
---

# Script para crear la base de datos en MariaDB

```sql
CREATE DATABASE gesture_battle_online;
USE gesture_battle_online;

CREATE TABLE usuarios (
    id_usuario VARCHAR(50) PRIMARY KEY,
    nombre_usuario VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    avatar_url VARCHAR(255),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    es_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE estados_jugador (
    id_estado_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre_estado_jugador VARCHAR(50) UNIQUE
);

CREATE TABLE estados_sala (
    id_estado_sala INT AUTO_INCREMENT PRIMARY KEY,
    nombre_estado_sala VARCHAR(50) UNIQUE
);

CREATE TABLE estados_partida (
    id_estado_partida INT AUTO_INCREMENT PRIMARY KEY,
    nombre_estado_partida VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE jugadores (
    id_jugador VARCHAR(50) PRIMARY KEY,
    id_usuario VARCHAR(50),
    id_estado INT,
    configuracionJuego JSON,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_estado) REFERENCES estados_jugador(id_estado_jugador)
);

CREATE TABLE estadisticas_jugador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador VARCHAR(50),
    partidas_jugadas INT DEFAULT 0,
    victorias INT DEFAULT 0,
    tiempo_total_jugado TIME DEFAULT '00:00:00',
    FOREIGN KEY (id_jugador) REFERENCES jugadores(id_jugador)
);

CREATE TABLE gestos (
    id_gesto INT AUTO_INCREMENT PRIMARY KEY,
    tipo_gesto VARCHAR(50),
    timestamp DATETIME,
    datos_gesto JSON
);

CREATE TABLE minijuegos (
    id_minijuego VARCHAR(50) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    reglas TEXT,
    configuracion_gestos JSON
);

CREATE TABLE salas (
    id_sala VARCHAR(50) PRIMARY KEY,
    codigo_invitacion VARCHAR(50) UNIQUE,
    configuracion JSON,
    estado_actual INT,
    codigo_unico VARCHAR(100) UNIQUE,
    es_privada BOOLEAN DEFAULT FALSE,
    anfitrion VARCHAR(50),
    max_jugadores INT DEFAULT 4,
    id_minijuego VARCHAR(50),
    FOREIGN KEY (estado_actual) REFERENCES estados_sala(id_estado_sala),
    FOREIGN KEY (anfitrion) REFERENCES jugadores(id_jugador),
    FOREIGN KEY (id_minijuego) REFERENCES minijuegos(id_minijuego)
);

CREATE TABLE jugadores_sala (
    id_jugador VARCHAR(50),
    id_sala VARCHAR(50),
    PRIMARY KEY (id_jugador, id_sala),
    FOREIGN KEY (id_jugador) REFERENCES jugadores(id_jugador),
    FOREIGN KEY (id_sala) REFERENCES salas(id_sala)
);

CREATE TABLE partidas (
    id_partida VARCHAR(50) PRIMARY KEY,
    id_sala VARCHAR(50),
    estado_partida INT,
    configuracion JSON,
    resultado JSON,
    FOREIGN KEY (id_sala) REFERENCES salas(id_sala),
    FOREIGN KEY (estado_partida) REFERENCES estados_partida(id_estado_partida)
);

CREATE TABLE jugadores_partida (
    id_jugador VARCHAR(50),
    id_partida VARCHAR(50),
    puntos INT DEFAULT 0,
    PRIMARY KEY (id_jugador, id_partida),
    FOREIGN KEY (id_jugador) REFERENCES jugadores(id_jugador),
    FOREIGN KEY (id_partida) REFERENCES partidas(id_partida)
);

CREATE TABLE gestos_partida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_partida VARCHAR(50),
    id_jugador VARCHAR(50),
    id_gesto INT,
    FOREIGN KEY (id_partida) REFERENCES partidas(id_partida),
    FOREIGN KEY (id_jugador) REFERENCES jugadores(id_jugador),
    FOREIGN KEY (id_gesto) REFERENCES gestos(id_gesto)
);

CREATE TABLE auditorias (
    id_auditoria INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario VARCHAR(50),
    accion VARCHAR(100),
    entidad_afectada VARCHAR(50),
    id_entidad_afectada VARCHAR(50),
    descripcion TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
