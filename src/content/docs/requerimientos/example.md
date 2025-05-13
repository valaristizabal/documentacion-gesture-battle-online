---
title: Requerimientos seleccionados
---
<h1><u>Requerimientos funcionales</u></h1>


<h2>Autenticación de Usuarios</h2>
<p>El sistema debe permitir que cualquier jugador, ya sea nuevo o recurrente, pueda autenticarse para acceder al videojuego.  Este proceso será gestionado mediante Firebase Authentication y se habilitarán métodos de inicio de sesión como cuenta de Google, cuenta de Facebook, y dirección de correo electrónico y contraseña.</p>
<h2>Creación de Salas Privadas</h2>
<p>El sistema debe permitir a los jugadores autenticados crear salas privadas de juego, generando un identificador único o código de invitación para la sala.</p>
<h2>Invitación a Salas Privadas mediante un Código</h2>
<p>El sistema debe permitir que los jugadores se unan a una sala privada existente mediante la introducción de un código único generado al momento de su creación.</p>
<h2>Permitir a los Usuarios Unirse a Salas Públicas</h2>
<p>El sistema debe ofrecer un sistema de emparejamiento público que permita a los jugadores unirse a salas abiertas sin necesidad de un código, mostrando una lista de salas disponibles o uniéndose automáticamente a una compatible.</p>
<h2>Detección de Gestos mediante la Cámara Permitiendo Interacción en Tiempo Real</h2>
<p>El sistema debe utilizar la cámara del dispositivo del jugador para detectar gestos en tiempo real, como principal método de interacción en el videojuego, utilizando tecnologías como MediaPipe.</p>
<h2>Determinación Automática de Ganador</h2>
<p>El sistema debe ser capaz de determinar de manera automática el jugador ganador de cada minijuego, basándose en las reglas específicas de cada uno y evaluando el rendimiento de los jugadores en tiempo real.</p>

<h1><u>Requerimientos no funcionales</u></h1>

<h2>Rendimiento de Concurrencia de Usuarios</h2>
<p>El sistema debe tener capacidad de soportar inicialmente 500 usuarios.</p>
<h2>Rendimiento de Emparejamiento:</h2>
<p>Los emparejamientos en salas públicas deben realizarse en menos de 15 segundos.</p>
<h2>Latencia de Red:</h2>
<p>El sistema debe garantizar una latencia máxima de 150 ms en la comunicación entre clientes en una partida.</p>
<h2>Restricción de Plataforma:</h2>
<p>El juego estará disponible solo para plataformas Windows (PC).</p>
<h2>Requisito de Hardware (Cámara):</h2>
<p>Se requerirá que las cámaras de los jugadores soporten al menos una resolución de 640x480 píxeles y una tasa de captura de 15 fps para asegurar una detección de gestos funcional.</p>
<h2>Seguridad de Acceso</h2>
<p>Se usará Firebase Authentication para el control de acceso de los usuarios, implementando autenticación por correo electrónico y contraseña, así como métodos opcionales como Google o Facebook.</p>