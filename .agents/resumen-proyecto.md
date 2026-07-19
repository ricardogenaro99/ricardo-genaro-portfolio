# ricardo-genaro-portfolio — Resumen Ejecutivo y Alcance

## Cómo se hizo este análisis
Este análisis se realizó mediante una inspección a fondo de la estructura local del repositorio, incluyendo archivos de configuración del proyecto (`package.json`, `jsconfig.json`), puntos de entrada de renderizado (`src/index.js`, `src/App.js`), enrutamiento (`src/app/components/main/components/Main.js`), vistas principales (`src/app/pages/`) y la base de datos de constantes globales (`src/app/shared/utils/globalConsts.js`). Al ser un proyecto frontend estático (SPA), no se requirió análisis de base de datos relacional o lógica de servidor local.

**Última actualización:** 2026-07-19

---

## Resumen Ejecutivo
El proyecto `ricardo-genaro-portfolio` es la aplicación web personal de Ricardo Genaro (Líder Técnico y Especialista en Desarrollo Backend). Funciona como su portafolio profesional interactivo, diseñado bajo una estética **inmersiva de IDE / editor de código** (Dark Mode OLED), simulando la experiencia de VS Code con fuentes monoespaciadas (`Fira Code`), barra de pestañas de archivos, explorador de directorios lateral y numeración de líneas de código. El sitio sirve para presentar su perfil, experiencia laboral, habilidades técnicas, proyectos desarrollados y canales de contacto a reclutadores y stakeholders del sector de software.

---

## Alcance Funcional

La aplicación está organizada en una arquitectura de pestañas interactivas tipo editor de código:

1. **Página de Inicio (Hero - `/`):**
   * Saludo de bienvenida con estilo de consola animada.
   * Declaración de su rol principal (*Tech Lead Backend Developer Specialist*).
   * Enlace directo a su perfil de GitHub y acceso a su portafolio.

2. **Sobre Mí (`/sobre-mi`):**
   * Archivo `SobreMi.md` — Presentación profesional completa con texto en bloque de comentario de código.
   * Directorio `formacion-experiencia/`:
     * `experiencia_laboral.md` — Historial laboral detallado por empresa.
     * `formación_academica.md` — Formación universitaria y certificaciones.
   * Directorio `aptitudes/`:
     * `creativo.md` — Aptitudes creativas e innovación.
     * `analítico.md` — Capacidades analíticas y resolución de problemas.
   * **Comportamiento:** Al seleccionar un archivo en el explorador lateral, la barra de pestañas activa la pestaña correspondiente y el editor muestra **únicamente el contenido de ese archivo aislado**. Los directorios se representan con iconos de carpeta y los archivos con icono de Markdown (`.md`).

3. **Proyectos Explorer (`/proyectos`):**
   * Buscador interactivo con filtros de tecnologías (React, Node, AWS, Spring Boot, etc.).
   * **Todos los filtros se inicializan activos** al entrar, mostrando el portafolio completo por defecto.
   * Al activar/desactivar filtros, la galería se recalcula en tiempo real.
   * Visualización mediante tarjetas (`CardProyecto`) con animaciones hover en cascada (stagger) que muestran tecnologías, rol y categoría de negocio.
   * Iconos de tecnología renderizados con el componente centralizado `TechIcon`, mapeando strings a SVG de `react-icons`.
   * Enlaces directos a demos en producción y repositorios.

4. **Contáctame (`/contactame`):**
   * Formulario de contacto con validación y vista previa en tiempo real del mensaje (layout de dos columnas).
   * Sección de valores/información de contacto renderizada con estilo de variables de código.
   * En pantallas móviles las dos columnas se colapsan en una sola.

---

## Alcance Técnico

### Stack
* **Lenguaje:** JavaScript (ES6+).
* **Framework Frontend:** React v18.1.0.
* **Manejador de Rutas:** React Router DOM v6.3.0 (con hash-based navigation para anchors internos).
* **Estilado:** Styled Components v5.3.5 (CSS-in-JS) y Vanilla CSS para configuraciones globales (`index.css`).
* **Iconografía:** `react-icons` (sub-paquetes: `si`, `fa`, `ri`, `bi`).
* **Tipografía de código:** `Fira Code` (Google Fonts).

### Arquitectura

El proyecto sigue una arquitectura modular en el frontend:

* **`src/app/pages/`:** Vistas de primer nivel mapeadas con las rutas del enrutador. Cada página gestiona su propio scroll ref, tabs y state.
* **`src/app/components/`:** Componentes modulares específicos de cada sección (Sobre Mí, Proyectos, Contacto).
* **`src/app/shared/`:**
  * `components/` — Componentes genéricos de UI reutilizables:
    * `EditorTabBar` — Barra de pestañas tipo VS Code con soporte de `path` + `hash`.
    * `TechIcon` — Mapeador centralizado de strings a iconos SVG de tecnologías.
    * `Enumeracion` — Numerador de líneas de código (columna izquierda del editor).
    * `ComentMultiple` — Bloque de texto estilo comentario multi-línea (`/** ... **/`).
    * `Explorer` — Panel lateral de explorador de archivos y directorios.
  * `hooks/` — Custom hooks reutilizables (`useScrollToAnchor`).
  * `utils/` — Constantes globales (`globalConsts.js`) y funciones de utilidad (`globalFuntions.js`).
  * `styles/` — Breakpoints responsivos (`Breakpoints.js`).
* **`src/app/templates/Templates.js`:** Plantillas de layout reutilizables:
  * `ContainerExplorerAndContentTemplate` — Grid de dos columnas (explorer + editor).
  * `EditorPaneTemplate` — Contenedor del panel de edición con barra de tabs fija en la parte superior.
  * `WorkStationSectionTemplate` — Área de scroll del contenido del editor.
  * `ContentGridTemplate` — Grid flexible de columnas para layouts de dos paneles (Contacto).

### Patrones de Navegación
* **Hash-based routing:** Las sub-secciones de `Sobre Mí` usan hash anchors (`/sobre-mi/aptitudes#creativo`) para navegar a secciones específicas dentro de la misma vista.
* **Aislamiento de contenido por hash:** `ModelContentSobreMi` filtra el array de items según el `location.hash` activo, renderizando únicamente el item correspondiente al archivo seleccionado.
* **Scroll reset por pathname:** Un `useEffect` vinculado a `location.pathname` restablece `scrollTop = 0` al cambiar de sección principal, sin afectar la navegación por hash.
* **Concordancia sidebar-tabs 1-a-1:** Cada item del explorador lateral tiene su pestaña individual en `EditorTabBar`. Al seleccionar un item, su pestaña se activa por coincidencia de `pathname + hash`.

### Responsividad
* **Breakpoints** definidos en `src/app/shared/styles/Breakpoints.js`.
* **`≤ 830px`:** La barra de pestañas (`EditorTabBar`) se oculta con `display: none`.
* **`≤ tabletM`:** El layout de dos columnas (explorer + editor) cambia a una sola columna vertical, con alturas fluidas (`height: auto`) para scroll nativo del navegador.
* **`≤ laptopS`:** El `WorkStationSectionTemplate` cambia de scroll local a `overflow: visible`, permitiendo que la página entera se desplace.
* **`≤ mobileL (463px)`:** Todos los componentes colapsan en diseño de columna simple.

### Integraciones
* **Demos en producción:** Vercel Hosting para redirección a proyectos en producción.
* **APIs de Mensajería:** APIs de WhatsApp Web y Mailto para inicio de conversaciones directas.
* **EmailJS:** Servicio de envío de formulario de contacto sin backend.

### Dependencias Clave
* `styled-components`: Motor de estilos CSS-in-JS para encapsulación de diseño dinámico.
* `react-icons`: Librería de iconos vectoriales (Devicons, Simple Icons, Remix Icons, etc.).
* `react-router-dom`: Enrutamiento declarativo del lado del cliente con soporte de hash.
* `web-vitals`: Herramienta para medición de Core Web Vitals en producción.

### Configuración y Despliegue
* **Comando de Desarrollo:** `npm run start`
* **Comando de Producción:** `npm run build` (genera bundle estático optimizado en `build/`)
* **Hosting:** Despliegue estático continuo en Vercel.

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── assets/               # Recursos multimedia locales (imágenes de proyectos)
│   ├── components/           # Componentes modulares por sección
│   │   ├── sobre-mi/
│   │   │   └── components/
│   │   │       ├── ModelContentSobreMi.js   # Renderizador con filtrado por hash
│   │   │       ├── ItemListSpanDefault.js   # Links del explorador lateral (.md)
│   │   │       ├── SobreMiIndex.js          # Contenido del archivo SobreMi.md
│   │   │       └── SobreMiFormacionExperiencia.js
│   │   ├── proyectos/
│   │   │   └── components/
│   │   │       ├── CardProyecto.js          # Tarjeta de proyecto (React.memo)
│   │   │       └── ItemCheckSpanDefault.js  # Filtro de tecnología en sidebar
│   │   └── contactame/
│   ├── pages/                # Vistas de primer nivel
│   │   ├── SobreMi.js        # Página con tabs, scroll reset y rutas anidadas
│   │   ├── Proyectos.js      # Página con filtros activos por defecto
│   │   └── Contactame.js
│   ├── shared/
│   │   ├── components/
│   │   │   ├── EditorTabBar.js    # Barra de pestañas tipo VS Code
│   │   │   ├── TechIcon.js        # Mapeador string → SVG de tecnología
│   │   │   └── editor-text-style/ # Enumeracion, ComentMultiple, Coment
│   │   ├── hooks/
│   │   │   └── useScrollToAnchor.js
│   │   ├── styles/
│   │   │   └── Breakpoints.js
│   │   └── utils/
│   │       ├── globalConsts.js    # Base de datos estática (PROJECTS, ICONS_TECH)
│   │       └── globalFuntions.js
│   └── templates/
│       └── Templates.js           # Plantillas de layout (Explorer, Editor, Grid)
├── index.css                      # Variables CSS globales y reset
└── index.js                       # Punto de montaje React 18
```

---

## Notas y Limitaciones

* **Frontend Estático:** El portafolio no requiere de base de datos local ni servidor, ya que consume datos directamente del archivo de constantes estáticas `globalConsts.js`.
* **Datos de Proyectos:** El filtrado de tecnologías se realiza completamente en memoria utilizando el estado local de React, lo que brinda una respuesta de UI instantánea sin latencia de red.
* **Aislamiento de Secciones:** El componente `ModelContentSobreMi` depende del `location.hash` para determinar qué contenido renderizar. Si se accede sin hash, muestra el primer item de la lista como fallback.
* **Concordancia Sidebar-Tabs:** El sistema de archivos del explorador y las pestañas se mantienen sincronizados mediante rutas absolutas + hash anchors. Los nombres de archivo en el sidebar incluyen la extensión `.md` para concordar visualmente con las pestañas.
