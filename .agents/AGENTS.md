# Perfil Profesional del Usuario: Genaro Choquehuanca Palli (Ricardo Genaro)

Este documento contiene las directrices, perfil e historial profesional de Ricardo Genaro para guiar el comportamiento y las respuestas de Antigravity (su asistente de desarrollo).

**Última actualización:** 2026-07-19

---

## 👤 Perfil Profesional

- **Nombre:** Genaro Choquehuanca Palli (conocido profesionalmente como Ricardo Genaro)
- **Rol Actual:** Tech Lead Backend Developer Specialist en **Rimac Seguros y Reaseguros** (desde enero de 2025).
- **Experiencia:** +5 años en desarrollo de software, con 3 años liderando equipos técnicos y de soporte.
- **Educación:** Bachiller en Ingeniería de Sistemas por la Universidad Nacional Mayor de San Marcos (UNMSM).
- **Contacto:** genaro.choquehuanca.palli@gmail.com | +51933124563
- **Ubicación:** Callao, Perú.

---

## 🛠️ Stack Tecnológico Principal

- **Lenguajes:** JavaScript, TypeScript, Java.
- **Backend:** Node.js, Spring Boot, microservicios, APIs REST.
- **Cloud & DevOps:** AWS Stack (CDK, EKS, API Gateway, Lambda, Step Functions, EventBridge, RDS, DynamoDB, SQS, IAM, Secrets Manager), Google Cloud.
- **Bases de Datos:** Relacionales (RDS, PostgreSQL, MySQL) y NoSQL (DynamoDB, Redis, MongoDB).
- **Frontend:** React, Angular, Vue, HTML5, CSS3, Styled Components.
- **Herramientas & Metodologías:** Scrum (Certificado en Scrum Fundamentals), BPM (Camunda 7), Docker, CI/CD, Jira.
- **Pruebas:** Pirámide de pruebas (Unit, Integration, E2E).

---

## 💼 Trayectoria Laboral

1. **Rimac Seguros y Reaseguros** (Ene 2025 - Presente) | _Tech Lead Backend Developer Specialist_
   - Liderazgo de equipos backend para plataformas empresariales de alta disponibilidad.
   - Definición de arquitectura técnica y microservicios con AWS CDK (EKS, Step Functions).
   - Gestión y definición de actividades de negocio a requerimientos técnicos.
   - Estimaciones y optimización del time-to-market.
   - Implementación de resiliencia (Circuit Breaker, Fallbacks), BPM (Camunda) e IA en flujos de desarrollo.
2. **Indra** (Jul 2023 - Dic 2024) | _Analista Técnico Backend SSR_
   - Desarrollo backend con Node.js, TypeScript y AWS (APIGW, EventBridge, SQS).
   - Integración cloud y seguridad con AWS Cognito.
   - Optimización y escalabilidad en base de datos relacionales y NoSQL.
3. **Chazki** (May 2022 - Jul 2023) | _Analista de Incidentes / Fullstack Developer_
   - Coordinación y liderazgo técnico del equipo de soporte (1 año).
   - Automatización para mejorar tiempos de resolución de incidentes.
   - Desarrollo MERN Stack y GCP.
4. **ODYBANK** (Oct 2021 - Mar 2022) | _Analista Programador Full Stack_
   - Aplicaciones para el sector financiero y pasarelas de pago (Unibanca).
   - Desarrollo con Java Spring Boot, Angular y SQL.

---

## 🤖 Guía de Interacción para el Asistente Virtual (Antigravity)

Cuando ayudes a Ricardo Genaro:

1. **Tono Profesional y Técnico:** Trátalo como el Tech Lead que es. Ofrece explicaciones de nivel senior, enfocándote en arquitectura de microservicios, buenas prácticas de desarrollo, escalabilidad y patrones de diseño (como resiliencia, modularidad e infraestructura como código con AWS CDK).
2. **Mentalidad de Asistente Virtual:** Adopta una actitud de co-piloto activo y proactivo. Anticípate a optimizaciones de rendimiento y sugiere siempre mejores prácticas de testing (unitario, integración) y arquitectura limpia.
3. **Persistencia del Contexto:** Ten siempre presente su stack tecnológico y su trayectoria para contextualizar las soluciones que propongas en sus proyectos.
4. **Análisis de Causa Raíz:** Cuando haya un bug o warning, no suprimir con comentarios (`// eslint-disable`). Identificar y resolver la causa raíz del problema.

---

## 📜 Reglas y Documentación del Proyecto (ricardo-genaro-portfolio)

Cuando trabajes en este repositorio, debes guiarte estrictamente por las siguientes reglas y archivos de referencia:

### 1. Referencias de Contexto
* **Estructura y Arquitectura:** Consulta el archivo [.agents/resumen-proyecto.md](file:///Users/ricardogenaro1999/Documents/GitHub/ricardogenaro99/ricardo-genaro-portfolio/.agents/resumen-proyecto.md) para entender la organización de carpetas, enrutamiento de vistas, patrones de navegación y dependencias del portafolio.
* **Sistema de Diseño (UI/UX):** Consulta [.agents/design-system.md](file:///Users/ricardogenaro1999/Documents/GitHub/ricardogenaro99/ricardo-genaro-portfolio/.agents/design-system.md) para aplicar la paleta de colores (Night Owl), tipografías (`Fira Code`/`Inter`), templates de layout y reglas de componentes del tema **Dark Mode (OLED)**.

### 2. Lineamientos Técnicos Obligatorios

* **Uso de Styled Components:** Todo estilo modular de los componentes debe implementarse mediante `styled-components` en la subcarpeta `styles/` de cada módulo, utilizando variables CSS globales de `index.css` para fuentes y tamaños (ej. `var(--size-labels)`). **Nunca usar `inline styles` en componentes de página.**

* **Templates Centralizados:** Los layouts de página (explorer + editor, grids de columnas) deben usar los componentes de `src/app/templates/Templates.js`. No crear layouts ad-hoc en los archivos de página.

* **Iconografía:** No utilices emojis como iconos. Utiliza iconos vectoriales de la librería `react-icons` (importando desde sub-paquetes específicos como `react-icons/si`, `react-icons/fa`, `react-icons/ri`) y agrégales un contenedor SVG estilizado. Para tecnologías, usar siempre el componente `TechIcon`.

* **Interactividad y Animaciones:** Los elementos interactivos deben contar con transiciones suaves (150-300ms) y animaciones escalonadas (stagger) en cascada al activarse hovers o eventos.

* **Responsividad Estricta:** Todo nuevo componente de UI debe colapsar ordenadamente en pantallas móviles de tamaño ≤ 463px (`device.mobileL`). Los breakpoints están definidos en `Breakpoints.js`.

* **Scroll Reset Pattern:** Usar `useRef` + `useEffect` vinculado a `location.pathname` (nunca a `location.hash`) para resetear el scroll al tope al cambiar de sección principal.

* **Hash Navigation:** La concordancia entre el sidebar de `Sobre Mí` y las pestañas del editor se mantiene mediante rutas absolutas con hash (`/sobre-mi/aptitudes#creativo`). Los items del sidebar muestran la extensión `.md` para concordar con los nombres de las pestañas.

* **Estado Inicial Correcto:** Inicializar el estado de React con el valor correcto desde el principio. No usar `useEffect` como parche para corregir un estado inicial incorrecto.

* **Filtros de Proyectos:** Los filtros de tecnología se inicializan con `active: true` para que todos los proyectos se listen al entrar a `/proyectos`. Al desactivar todos los filtros, se muestran todos los proyectos.

### 3. Patrones de React a Aplicar

* **`React.memo`** para componentes de lista que reciben props estables (ej: `CardProyecto`, `SobreMiFormacionExperiencia`).
* **`useCallback`** para funciones de estado que se pasan como props y podrían causar re-renders innecesarios.
* **Operador ternario** (`condition ? JSX : null`) en lugar de `&&` para renderizado condicional, previniendo renderizado de valores falsy.
* **`Set` para búsquedas de filtros** en lugar de `Array.includes`, logrando complejidad temporal O(1).
* **`Array.some()`** para filtrados con condición de cortocircuito.
