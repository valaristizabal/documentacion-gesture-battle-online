---
title: Diagrama de Casos de Uso
---

![Diagrama casos uso](../../../assets/diagramaCasosUso.jpg)

## CU01 – Autenticación de Usuarios

**Actores:** Jugador  
**Precondición:** El jugador tiene instalada la aplicación y cuenta con conexión a internet.  
**Postcondición:** El jugador accede al sistema con sesión activa y su información sincronizada.  
**Descripción:** El usuario debe autenticarse para acceder a su perfil, progreso y funcionalidades del juego. La autenticación se realiza mediante proveedores externos o correo/contraseña, y se valida a través de Firebase Authentication.

### Flujo Principal
1. El jugador inicia el sistema.
2. Se presentan opciones de autenticación: Google, Facebook, correo y contraseña.
3. El jugador selecciona un método e introduce sus credenciales.
4. El sistema verifica las credenciales con Firebase.
5. Si son válidas, se cargan el perfil, avatar y estadísticas.
6. Se activa la sesión y se redirige al menú principal.

### Flujos Alternos
- **3a.** Credenciales inválidas: Se muestra mensaje de error.
- **4a.** Cuenta ya existente: Se previene duplicación por ID externo.
- **5a.** Error de red: Se informa al usuario y se permite reintentar.

---

## CU02 – Registro de Usuarios

**Actores:** Jugador  
**Precondición:** No cuenta con una cuenta previa.  
**Postcondición:** Se crea un nuevo perfil y se inicia sesión.  
**Descripción:** Permite a nuevos usuarios registrarse proporcionando su información básica. La cuenta se almacena en Firebase y permite iniciar sesión automáticamente tras el registro exitoso.

### Flujo Principal
1. El jugador selecciona "Registrarse".
2. Introduce los datos requeridos (nombre, correo, contraseña).
3. El sistema valida los datos.
4. Firebase crea la cuenta y un documento en Firestore.
5. Se sincroniza el progreso inicial y se inicia sesión.

### Flujos Alternos
- **3a.** Correo ya registrado: Se solicita otro correo.
- **4a.** Error de red: Se muestra mensaje y se permite reintentar.

---

## CU03 – Gestión de Usuario

**Actores:** Jugador autenticado  
**Precondición:** El jugador está autenticado.  
**Postcondición:** Se actualiza o consulta el perfil.  
**Descripción:** El jugador puede consultar y modificar su perfil (nombre, avatar), revisar estadísticas y realizar acciones como cambiar la contraseña o eliminar su cuenta.

### Flujo Principal
1. El jugador accede a la sección "Mi Perfil".
2. Puede ver estadísticas, nombre, avatar e historial.
3. Puede modificar nombre o avatar.
4. Los cambios se reflejan en Firebase en tiempo real.

### Flujos Alternos
- **3a.** Restablecer contraseña: Se envía un enlace por correo.
- **3b.** Eliminar cuenta: Se solicita doble confirmación y se borra el documento en Firestore.

---

## CU04 – Crear Sala Privada

**Actores:** Jugador autenticado  
**Precondición:** El jugador está autenticado.  
**Postcondición:** Se crea una sala con código único registrada en Firebase.  
**Descripción:** Permite a un jugador crear una sala privada para invitar a otros, configurar el tipo de minijuego y esperar que se unan.

### Flujo Principal
1. El jugador accede a "Crear Sala Privada".
2. El sistema genera un código único (ej. 6 caracteres).
3. Se registra en Firebase con los datos del anfitrión.
4. El jugador configura el tipo de minijuego.
5. Queda a la espera de otros jugadores.

---

## CU05 – Unirse a Sala Privada

**Actores:** Jugador autenticado  
**Precondición:** La sala existe, no está llena ni en juego.  
**Postcondición:** El jugador entra correctamente a la sala.  
**Descripción:** Permite unirse a una sala privada existente mediante un código único proporcionado por el anfitrión.

### Flujo Principal
1. El jugador accede a "Unirse por Código".
2. Introduce el código compartido.
3. El sistema busca la sala.
4. Si es válida, se añade al jugador y se notifica al anfitrión.

### Flujos Alternos
- **3a.** Código inválido: Se muestra mensaje de error.
- **4a.** Sala llena o en partida: Se deniega el acceso.

---

## CU06 – Unirse a Sala Pública

**Actores:** Jugador autenticado  
**Precondición:** Existen salas públicas disponibles.  
**Postcondición:** El jugador accede a una sala pública.  
**Descripción:** Permite ingresar a una sala pública para partidas rápidas, ya sea eligiendo una disponible o siendo asignado automáticamente.

### Flujo Principal
1. El jugador accede a "Buscar Sala Pública".
2. Se listan las salas públicas disponibles.
3. El jugador elige una o el sistema lo asigna automáticamente.
4. Se añade al jugador y se actualiza la lista de participantes.

---

## CU07 – Gestión de Estado de Usuario

**Actores:** Sistema, Jugador  
**Precondición:** El jugador está conectado.  
**Postcondición:** El estado del jugador se sincroniza y refleja en pantalla.  
**Descripción:** Permite mostrar el estado del jugador (activo, listo, en partida) en tiempo real a otros, mediante sincronización con Firebase o red de juego.

### Flujo Principal
1. El jugador se conecta, entra a una sala o comienza partida.
2. El sistema actualiza el estado (ej. conectado, listo, en juego).
3. El estado se sincroniza vía Firebase o FishNet.
4. Otros jugadores ven el estado actualizado.

---

## CU08 – Selección de Minijuego

**Actores:** Jugador anfitrión o sistema  
**Precondición:** Hay al menos dos jugadores en sala.  
**Postcondición:** Se selecciona un minijuego y se comunica a todos.  
**Descripción:** El anfitrión elige manualmente o el sistema selecciona aleatoriamente un minijuego. Se sincroniza la lógica del juego con todos los jugadores.

### Flujo Principal
1. El anfitrión selecciona manualmente un minijuego o
2. El sistema selecciona uno aleatoriamente.
3. Se notifica el minijuego a todos los jugadores.
4. Se prepara la lógica del minijuego en la escena.

---

## CU09 – Detección de Gestos en Tiempo Real

**Actores:** Sistema, Jugador  
**Precondición:** El jugador tiene una cámara funcional.  
**Postcondición:** Los gestos se traducen en acciones del juego.  
**Descripción:** Usa tecnologías de visión artificial (ej. MediaPipe) para detectar gestos del jugador en tiempo real y convertirlos en comandos dentro del minijuego.

### Flujo Principal
1. El jugador se posiciona frente a la cámara.
2. MediaPipe detecta gestos (manos, cuerpo, rostro).
3. El sistema interpreta los gestos y los traduce en acciones.
4. Se aplica la lógica del minijuego.
5. Se garantiza baja latencia y precisión.

---

## CU10 – Determinación Automática de Ganador

**Actores:** Sistema  
**Precondición:** Finaliza un minijuego.  
**Postcondición:** Se anuncia al ganador y se guardan los resultados.  
**Descripción:** Automatiza la evaluación de resultados según reglas del minijuego, determina al ganador y actualiza estadísticas en tiempo real.

### Flujo Principal
1. El sistema evalúa el desempeño de los jugadores.
2. Aplica las reglas del minijuego.
3. Determina al ganador o empate.
4. Muestra la pantalla de resultados.
5. Guarda las estadísticas en Firebase.

---

## CU11 – Expulsar Jugador

**Actores:** Jugador (Anfitrión)  
**Precondición:** El jugador es creador de una sala privada.  
**Postcondición:** Un jugador es removido de la sala y su estado actualizado.  
**Descripción:** El anfitrión puede gestionar el grupo, incluyendo la expulsión de jugadores por comportamiento indebido o inactividad.

### Flujo Principal
1. El anfitrión visualiza la lista de jugadores en la sala.
2. Selecciona al jugador que desea expulsar.
3. El sistema solicita confirmación.
4. El jugador es expulsado y el estado de la sala se actualiza.
5. El jugador expulsado es notificado y redirigido al menú principal.

### Flujos Alternos
- **2a.** Selección inválida: El jugador no existe o ya salió de la sala.
- **4a.** El anfitrión cancela la acción: No ocurre expulsión.

---

## CU12 – Detección de Gestos Inapropiados

**Actores:** Sistema  
**Precondición:** El sistema está ejecutando la detección de gestos en tiempo real.  
**Postcondición:** Se detecta y gestiona un gesto ofensivo.  
**Descripción:** Analiza los gestos capturados por la cámara para identificar comportamientos ofensivos y aplicar medidas como advertencias o suspensiones automáticas.

### Flujo Principal
1. El sistema detecta un gesto mediante MediaPipe.
2. Compara contra una base de gestos prohibidos (modelo ML o lista).
3. Si se identifica un gesto ofensivo:
   - Se registra el evento con timestamp y jugador.
   - Se muestra advertencia al jugador.

### Flujos Alternos
- **2a.** Gesto ambiguo o sin clasificación: Se ignora y continúa el juego.
- **3a.** Gesto reiterado: Se activa una Cloud Function que suspende temporalmente al jugador o lo reporta.

---

## CU13 – Ver Estadísticas del Jugador

**Actores:** Jugador  
**Precondición:** El jugador ha completado al menos una partida.  
**Postcondición:** Las estadísticas son mostradas en pantalla.  
**Descripción:** Permite consultar el rendimiento histórico del jugador, incluyendo partidas jugadas, tiempo activo y logros.

### Flujo Principal
1. El jugador accede a la sección "Estadísticas".
2. El sistema recupera los datos desde Firebase Firestore.
3. Se muestran:
   - Número de partidas jugadas
   - Minijuegos ganados
   - Tiempo total jugado
   - Última vez conectado
   - Racha de victorias (si aplica)

### Flujos Alternos
- **2a.** Error de red: Se notifica al jugador y se permite reintentar.
- **3a.** Jugador sin historial: Se muestra el mensaje “Aún no has jugado ninguna partida”.
