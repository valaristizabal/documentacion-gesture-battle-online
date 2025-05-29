---

title: Diagrama de casos de uso

---

![Diagrama casos uso](../../../assets/diagramaCasosUso.jpg)

## CU01 – Autenticación de Usuarios

Actores: Jugador
Precondición: El jugador tiene instalada la aplicación y cuenta con conexión a internet.
Postcondición: El jugador accede al sistema con sesión activa y su información sincronizada.
Descripción: El usuario requiere autenticarse para acceder a su perfil, progreso y funcionalidades del juego. La autenticación se realiza mediante proveedores externos o correo/contraseña, y es validada con Firebase Authentication.

### Flujo Principal

El jugador inicia el sistema.
Se presentan opciones de autenticación: Google, Facebook, correo y contraseña.
El jugador selecciona un método e introduce sus credenciales.
El sistema verifica las credenciales con Firebase.
Si son válidas, carga perfil, avatar y estadísticas.
Se activa la sesión y se redirige al menú principal.

### Flujos Alternos

3a. Credenciales inválidas: Se muestra mensaje de error.
4a. Cuenta ya existente: Se previene duplicación por ID externo.
5a. Error de red: Se informa y permite reintentar.

---

## CU02 – Registro de Usuarios

Actores: Jugador
Precondición: No cuenta con una cuenta previa.
Postcondición: Se crea un nuevo perfil y se inicia sesión.
Descripción: El sistema permite a nuevos usuarios registrarse proporcionando su información básica. La cuenta se almacena en Firebase y permite iniciar sesión automáticamente tras el registro exitoso.

### Flujo Principal

El jugador selecciona "Registrarse".
Introduce datos requeridos (nombre, correo, contraseña).
El sistema valida los datos.
Firebase crea la cuenta y un documento en Firestore.
Se sincroniza el progreso inicial y se inicia sesión.

### Flujos Alternos

3a. Correo ya registrado: Se solicita otro correo.
4a. Error de red: Se muestra mensaje y permite reintento.

---

## CU03 – Gestión de Usuario

Actores: Jugador autenticado
Precondición: El jugador está autenticado.
Postcondición: Se actualiza o consulta el perfil.
Descripción: El jugador puede consultar y modificar su perfil, incluyendo nombre y avatar, así como consultar estadísticas y gestionar acciones como cambio de contraseña o eliminación de cuenta.

### Flujo Principal

El jugador accede a la sección "Mi Perfil".
Puede ver estadísticas, nombre, avatar, historial.
Puede modificar nombre o avatar.
Cambios se reflejan en Firebase en tiempo real.

### Flujos Alternos

3a. Restablecer contraseña: Se envía enlace por correo.
3b. Eliminar cuenta: Se solicita confirmación doble y se borra el documento de Firestore.

---

## CU04 – Crear Sala Privada

Actores: Jugador autenticado
Precondición: El jugador está autenticado.
Postcondición: Se crea una sala con código único registrada en Firebase.
Descripción: Permite a un jugador crear una sala privada para invitar a otros jugadores, configurar el tipo de minijuego y esperar a que se unan.

### Flujo Principal

El jugador accede a "Crear Sala Privada".
El sistema genera un código único (ej. 6 caracteres).
Se registra en Firebase con datos del anfitrión.
El jugador puede configurar tipo de minijuego.
Queda a la espera de otros jugadores.

---

## CU05 – Unirse a Sala Privada

Actores: Jugador autenticado
Precondición: La sala existe y no está llena ni en juego.
Postcondición: El jugador entra a la sala correctamente.
Descripción: El jugador puede unirse a una sala privada existente mediante un código único compartido por el anfitrión.

### Flujo Principal

El jugador accede a "Unirse por Código".
Introduce el código compartido.
El sistema busca la sala.
Si es válida, añade al jugador y notifica al anfitrión.

### Flujos Alternos

3a. Código inválido: Muestra error.
4a. Sala llena o en partida: Se deniega acceso.

---

## CU06 – Unirse a Sala Pública

Actores: Jugador autenticado
Precondición: Existen salas públicas disponibles.
Postcondición: El jugador accede a una sala pública.
Descripción: El jugador puede ingresar a una sala pública para partidas rápidas, ya sea seleccionando una disponible o siendo asignado automáticamente.

### Flujo Principal

El jugador accede a "Buscar Sala Pública".
Se listan salas públicas disponibles.
El jugador elige una o el sistema lo asigna automáticamente.
Se añade al jugador y se actualiza la lista de participantes.

---

## CU07 – Gestión de Estado de Usuario

Actores: Sistema, Jugador
Precondición: El jugador está conectado.
Postcondición: El estado del jugador se sincroniza y refleja en pantalla.
Descripción: Permite mostrar el estado actual del jugador (activo, listo, en partida) en tiempo real a otros participantes usando sincronización con Firebase o red de juego.

### Flujo Principal

El jugador se conecta, entra a sala o empieza partida.
El sistema actualiza el estado (ej. conectado, listo, en juego).
El estado se sincroniza vía Firebase o FishNet.
Otros jugadores visualizan el estado actualizado.

---

## CU08 – Selección de Minijuego

Actores: Jugador anfitrión o sistema
Precondición: Hay al menos dos jugadores en sala.
Postcondición: Se selecciona un minijuego y se comunica a todos.
Descripción: El anfitrión elige o el sistema selecciona aleatoriamente un minijuego. Esta acción sincroniza la lógica del juego con todos los jugadores.

### Flujo Principal

El anfitrión selecciona manualmente el minijuego o
El sistema selecciona uno al azar.
Se notifica el minijuego a todos los jugadores.
Se prepara la lógica del minijuego en la escena.

---

## CU09 – Detección de Gestos en Tiempo Real

Actores: Sistema, Jugador
Precondición: El jugador tiene cámara funcional.
Postcondición: Los gestos se traducen en acciones de juego.
Descripción: El sistema usa tecnologías de visión artificial para detectar gestos del jugador en tiempo real y convertirlos en comandos dentro del minijuego.

### Flujo Principal

El jugador se posiciona frente a la cámara.
MediaPipe detecta gestos (manos, cuerpo, rostro).
El sistema interpreta y traduce los gestos en acciones (moverse, activar, etc).
Se aplica lógica del minijuego.
Se garantiza baja latencia y precisión.

---

## CU10 – Determinación Automática de Ganador

Actores: Sistema
Precondición: Finaliza un minijuego.
Postcondición: Se anuncia el ganador y se guardan los resultados.
Descripción: Automatiza la evaluación de resultados del minijuego según reglas establecidas, determina al ganador y actualiza estadísticas en tiempo real.

### Flujo Principal

El sistema evalúa desempeño de los jugadores.
Aplica reglas del minijuego.
Determina al ganador o empate.
Muestra pantalla de resultados.
Guarda estadísticas en Firebase.

---

## CU11 – Expulsar Jugador

Actores: Jugador (Anfitrión)
Precondición: El jugador es el creador de una sala privada.
Postcondición: Un jugador es removido de la sala y su estado es actualizado.
Descripción: El anfitrión tiene la facultad de gestionar el grupo, incluyendo la expulsión de jugadores por comportamiento indebido o inactividad.

### Flujo Principal

El anfitrión visualiza la lista de jugadores en la sala.
Selecciona a un jugador que desea expulsar.
El sistema solicita confirmación.
Se expulsa al jugador y se actualiza el estado de la sala.
El jugador expulsado es notificado y redirigido al menú principal.

### Flujos Alternos

2a. Selección inválida: El jugador no existe o ya salió de la sala.
4a. El anfitrión cancela la acción: No ocurre expulsión.

---

## CU12 – Detección de Gestos Inapropiados

Actores: Sistema
Precondición: El sistema está ejecutando detección de gestos en tiempo real.
Postcondición: Se detecta y gestiona un gesto considerado ofensivo.
Descripción: El sistema analiza los gestos capturados en cámara para identificar comportamientos ofensivos y aplicar medidas como advertencias o suspensión automática.

### Flujo Principal

El sistema detecta un gesto mediante MediaPipe.
Compara contra una base de gestos prohibidos (modelo ML o lista predefinida).
Si se identifica un gesto ofensivo:

* Se registra el evento con timestamp y jugador.
* Se muestra advertencia al jugador.

### Flujos Alternos

2a. Gesto ambiguo o sin clasificación: Se ignora y continúa el juego.
3a. Gesto reiterado: Se activa una Cloud Function que suspende temporalmente al jugador o lo reporta.

---

## CU13 – Ver Estadísticas del Jugador

Actores: Jugador
Precondición: El jugador ha completado al menos una partida.
Postcondición: Las estadísticas son mostradas en pantalla.
Descripción: Permite a los jugadores consultar su rendimiento histórico en el juego, incluyendo partidas jugadas, tiempo activo y logros.

### Flujo Principal

El jugador accede a la sección "Estadísticas".
El sistema recupera los datos desde Firebase Firestore.
Se muestran:

* Número de partidas jugadas
* Minijuegos ganados
* Tiempo total jugado
* Última vez conectado
* Racha de victorias (si aplica)

### Flujos Alternos

2a. Error de red: Se notifica al jugador y se permite reintentar.
3a. Jugador sin historial: Se muestra mensaje informativo como “Aún no has jugado ninguna partida”.