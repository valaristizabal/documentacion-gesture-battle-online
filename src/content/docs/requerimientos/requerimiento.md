---
title: Requerimientos seleccionados
---
<h2>Autenticación de Usuarios</h2>
<p>El sistema debe permitir que cualquier jugador, ya sea nuevo o recurrente, pueda autenticarse para acceder al videojuego. Este proceso será gestionado mediante Firebase Authentication y se habilitarán métodos de inicio de sesión como cuenta de Google, cuenta de Facebook, y dirección de correo electrónico y contraseña. El jugador autenticado podrá acceder a su perfil, ver su nombre y avatar, sincronizar su progreso y mantener la sesión activa.</p>

<h2>Registro de Usuarios</h2>
<p>El sistema debe permitir el registro de nuevos usuarios, verificando la validez de los datos ingresados y asegurándose de que no existan cuentas duplicadas con el mismo correo electrónico o ID externo. Al registrarse correctamente, se creará un perfil inicial del jugador en Firebase Firestore.</p>

<h2>Gestión de Usuarios</h2>
<p>El sistema debe gestionar los perfiles de los jugadores registrados, permitiendo el almacenamiento, modificación y recuperación de información como nombre de usuario, avatar, historial de partidas y estadísticas en Firebase. Debe permitir consultar el perfil, modificar nombre y avatar, y restablecer contraseña.</p>

<h2>Creación de Salas Privadas</h2>
<p>El sistema debe permitir a los jugadores autenticados crear salas privadas de juego, generando un identificador único o código de invitación para la sala. Esta información se registrará en Firebase, incluyendo los datos del anfitrión y el estado actual de la sala.</p>

<h2>Invitación a Salas Privadas mediante un Código</h2>
<p>El sistema debe permitir que los jugadores se unan a una sala privada existente mediante la introducción de un código único generado al momento de su creación. Se debe validar que la sala exista, no esté llena y no se encuentre ya en partida.</p>

<h2>Permitir a los Usuarios Unirse a Salas Públicas</h2>
<p>El sistema debe ofrecer emparejamiento público, mostrando una lista de salas públicas disponibles o permitiendo que los jugadores se unan automáticamente a una sala compatible según disponibilidad y criterios definidos.</p>

<h2>Gestión de Estado de los Usuarios</h2>
<p>El sistema debe gestionar y reflejar en tiempo real el estado de cada jugador (por ejemplo: conectado, en sala, listo, en juego, desconectado). Estos estados deben sincronizarse eficientemente utilizando Firebase o FishNet para garantizar una experiencia fluida y precisa entre los jugadores.</p>

<h2>Selección de los Minijuegos</h2>
<p>El sistema debe permitir la selección del minijuego a jugar dentro de una sala. Esta selección puede ser determinada aleatoriamente o por elección del anfitrión, y afectará la lógica de interacción por gestos que se utilizará durante la partida.</p>

<h2>Detección de Gestos mediante la Cámara</h2>
<p>El sistema debe utilizar la cámara del dispositivo para detectar gestos en tiempo real como método principal de interacción dentro del videojuego. Esta detección se implementará usando MediaPipe y los gestos reconocidos se traducirán en acciones dentro del juego, procurando baja latencia para garantizar una experiencia ágil.</p>

<h2>Determinación Automática de Ganador</h2>
<p>El sistema debe ser capaz de determinar automáticamente al ganador de cada minijuego, basándose en las reglas específicas de cada uno y el rendimiento de los jugadores. Los resultados se mostrarán al finalizar la partida de forma clara y automática.</p>
