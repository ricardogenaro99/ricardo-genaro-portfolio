# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Ricardo Genaro Portfolio
**Theme:** IDE Dark Mode (VS Code inspired)
**Last Updated:** 2026-07-19
**Category:** Developer Tool / IDE

---

## Global Rules

### Color Palette

Variables CSS definidas en `src/index.css`:

| Role                    | Hex / Value                       | CSS Variable                       |
| ----------------------- | --------------------------------- | ---------------------------------- |
| Background principal    | `#011627`                         | `--primary-color-blue`             |
| Background activo/hover | `#1d3b53`                         | `--primary-color-blue-active`      |
| Texto blanco            | `#d6deeb`                         | `--secondary-color-white`          |
| Texto gris (comentario) | `#637777`                         | `--secondary-color-gray`           |
| Acento naranja          | `#c792ea` / tab active indicator  | `--accent-color-orange`            |
| Acento verde            | `#addb67`                         | `--accent-color-green`             |
| Acento amarillo         | `#ffcb8b`                         | `--accent-color-yellow`            |
| Acento azul             | `#80cbc4`                         | `--accent-color-blue`              |
| Líneas / bordes         | `rgba(255,255,255,0.1)`           | `--lines-color`                    |
| Explorer background     | `var(--primary-color-blue)`       | —                                  |

> **Nota:** La paleta sigue el tema **Night Owl** de VS Code para máxima familiaridad entre desarrolladores.

---

### Typography

- **Fuente de Código:** `Fira Code` (Google Fonts) — usada en todo el editor, pestañas y explorador.
- **Fuente de UI:** `Inter` — usada en elementos de navegación y botones del header.
- **Variables CSS de tamaño:**

| Token                    | Uso                                    |
| ------------------------ | -------------------------------------- |
| `--size-body`            | Tamaño base del texto del editor       |
| `--size-labels`          | Etiquetas y nombres de archivo         |
| `--line-height-work-station` | Espaciado entre líneas del editor  |

```css
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Inter:wght@300;400;500;600;700&display=swap");
```

---

### Spacing & Layout

| Token                      | Valor                             | Uso                              |
| -------------------------- | --------------------------------- | -------------------------------- |
| `--max-width-explorer`     | `250px`                           | Ancho fijo del panel lateral     |
| `--height-header`          | `~40px`                           | Alto del header principal        |
| `--height-footer`          | `~25px`                           | Alto del footer                  |
| `--line-height-work-station` | Variable                        | Espaciado interno del editor     |

---

## Layout Templates (`src/app/templates/Templates.js`)

Todos los layouts reutilizables están centralizados en `Templates.js`. No usar `inline styles` en los componentes de página.

### `ContainerExplorerAndContentTemplate`
Grid de dos columnas: panel lateral (Explorer) + panel de contenido (Editor).
```css
display: grid;
grid-template-columns: var(--max-width-explorer) 1fr;
height: 100%;

/* ≤ tabletM */
grid-template-columns: 1fr;
grid-template-rows: auto 1fr;
height: 100%;
```

### `EditorPaneTemplate`
Contenedor del panel de edición. La barra de pestañas se ancla arriba y el contenido hace scroll internamente.
```css
display: flex;
flex-direction: column;
overflow: hidden;
height: 100%;

/* ≤ tabletM */
height: 100%;
overflow: visible;
```

### `WorkStationSectionTemplate`
Área de scroll del contenido del editor. En desktop tiene scroll local; en móvil, scroll nativo del navegador.
```css
overflow-y: auto;
height: 100%;

/* ≤ laptopS */
max-height: none;
overflow-y: visible;
```

### `ContentGridTemplate`
Grid flexible para layouts de dos paneles (ej: Contactame).
```css
display: grid;
grid-template-columns: [prop];
height: 100%;

/* ≤ tabletM */
grid-template-columns: 1fr;
```

---

## Component Specs

### EditorTabBar (`src/app/shared/components/EditorTabBar.js`)

Barra de pestañas que simula las tabs de archivos abiertas en VS Code.

- **Props:** `tabs: Array<{ name: string, path: string, hash?: string }>`
- **Activación:** Una pestaña se marca activa cuando `location.pathname === tab.path` **y** (si existe `tab.hash`) `location.hash === tab.hash`.
- **Navegación:** Al hacer clic, navega a `tab.path + tab.hash` (o solo `tab.path` si no hay hash).
- **Iconos de archivo:** Se asignan según la extensión del nombre del archivo:
  - `.md` → `SiMarkdown` (verde)
  - `.json` → `SiJson` (amarillo)
  - `.js` → `SiJavascript` (amarillo dorado)
  - otros → `RiCodeSSlashLine` (gris)
- **Responsivo:** Oculto en pantallas `≤ 830px` con `display: none`.

```jsx
// Ejemplo de uso:
const sobreMiTabs = [
  { name: "SobreMi.md", path: "/sobre-mi", hash: "#index" },
  { name: "experiencia_laboral.md", path: "/sobre-mi/formacion-experiencia", hash: "#experiencia_laboral" },
  { name: "formación_academica.md", path: "/sobre-mi/formacion-experiencia", hash: "#formacion_academica" },
  { name: "creativo.md", path: "/sobre-mi/aptitudes", hash: "#creativo" },
  { name: "analítico.md", path: "/sobre-mi/aptitudes", hash: "#analitico" },
];
<EditorTabBar tabs={sobreMiTabs} />
```

### TechIcon (`src/app/shared/components/TechIcon.js`)

Componente centralizado que mapea un string identificador a un icono SVG de `react-icons`.

```jsx
<TechIcon name="react" />     // → SiReact
<TechIcon name="aws" />       // → SiAmazonwebservices
<TechIcon name="nodejs" />    // → SiNodedotjs
```

> **Regla:** Nunca importar iconos directamente en los componentes de datos/constantes. Siempre usar `TechIcon` como intermediario.

### ItemListSpanDefault (`src/app/components/sobre-mi/components/ItemListSpanDefault.js`)

Item del explorador lateral de Sobre Mí.

- Muestra el nombre del archivo **con extensión `.md`**.
- El archivo `index` se muestra como `SobreMi.md`.
- Construye rutas absolutas (`/sobre-mi/...#hash`) para evitar problemas de navegación relativa.
- Icono: `RiMarkdownFill` de `react-icons/ri`.

### ModelContentSobreMi (`src/app/components/sobre-mi/components/ModelContentSobreMi.js`)

Renderizador dinámico de contenido para las sub-secciones de Sobre Mí.

- Lee `location.hash` para determinar qué item renderizar.
- Filtra el array `items` y muestra **únicamente** el item cuyo `removeAccents(itemName)` coincide con el hash activo.
- Si no hay hash, muestra el primer item como fallback.
- **No usa `useScrollToAnchor`** — el contenido aislado siempre empieza en el tope.

### CardProyecto (`src/app/components/proyectos/components/CardProyecto.js`)

Tarjeta de proyecto envuelta en `React.memo` para evitar re-renderizados innecesarios al cambiar filtros.

---

## Patrones de Scroll

### Scroll Reset por Ruta
Todas las páginas principales (`SobreMi`, `Proyectos`, `Contactame`) implementan este patrón:
```jsx
const scrollRef = useRef(null);
useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = 0;
  }
}, [location.pathname]); // Solo pathname, nunca hash
```
> **Crítico:** La dependencia es `location.pathname`, **no** `location.hash`. Esto permite que la navegación por hash (anchors) funcione sin resetear el scroll.

---

## Breakpoints (`src/app/shared/styles/Breakpoints.js`)

| Name        | Max Width | Uso Principal                              |
| ----------- | --------- | ------------------------------------------ |
| `mobileL`   | `463px`   | Colapso total de columnas                  |
| `tabletM`   | `~768px`  | Layout de explorador a columna única       |
| `laptopS`   | `~1024px` | Cambio de scroll local a scroll de página  |
| `laptopL`   | `1440px`  | Tope de ancho para grillas de proyectos    |

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis como iconos** — Usar SVG de `react-icons`
- ❌ **Inline styles en componentes de página** — Todo estilo en Styled Components de `Templates.js` o `styles/StyledComponents.js`
- ❌ **`useScrollToAnchor` en vistas con contenido aislado** — Provoca scroll al medio del pane
- ❌ **Rutas relativas en `ItemListSpanDefault`** — Usar siempre rutas absolutas con `/sobre-mi/`
- ❌ **Importar iconos en `globalConsts.js`** — El archivo de constantes debe ser puro JS, sin JSX
- ❌ **`display: flex; align-items: center`** en `MainContainer` — Genera espacio vacío superior en móviles
- ❌ **`useState(PROJECTS)` con `useEffect` de reset** — Inicializar con el estado correcto directamente
- ❌ **Transiciones > 300ms** en elementos interactivos
- ❌ **Scroll anidado en móvil** — El scroll debe ser nativo del navegador en pantallas pequeñas

---

## Pre-Delivery Checklist

Antes de entregar cualquier código de UI, verificar:

- [ ] No emojis usados como iconos (usar SVG de `react-icons`)
- [ ] Todos los estilos en Styled Components, sin `inline styles` en JSX
- [ ] `cursor: pointer` en todos los elementos clickeables
- [ ] Hover states con transiciones suaves (150-300ms)
- [ ] `EditorTabBar` oculto en `≤ 830px`
- [ ] Layout responsivo probado en: 375px, 768px, 1024px, 1440px
- [ ] Sin scroll anidado en móvil
- [ ] Scroll reset funciona al cambiar de sección (no de hash)
- [ ] Concordancia de nombres entre sidebar y pestañas (extensión `.md`, `.json`, `.js`)
- [ ] `ModelContentSobreMi` filtra por hash activo correctamente
- [ ] Filtros de proyectos inicializados como `active: true`
