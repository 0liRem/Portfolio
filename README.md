
##  Descripción
Portafolio personal diseñado para mostrar mis proyectos y habilidades como desarrollador, con una interfaz inmersiva que combina:
- **Diseño oscuro medieval** (colores rojos sangre, dorados y tipografía gótica).
- **Efectos interactivos** (bonfire encendible, barras de habilidades animadas).
- **Totalmente responsive** (móvil, tablet y desktop).

##  Características Principales
- **Home**: Presentación con efecto parallax y botones interactivos.
- **Proyectos**: Tarjetas con hover effects y filtros.
- **Habilidades**: Barras animadas por categorías.
- **Bonfire**: En el footer, al hacer click descarga el CV y se enciende (persistente hasta recarga).
- **Diseño responsive**: Adaptado a todos los dispositivos.

##  Tecnologías
| Tecnología         | Uso                              |
|--------------------|----------------------------------|
| React              | Biblioteca principal            |
| React Router       | Navegación entre páginas        |
| Framer Motion      | Animaciones avanzadas (opcional)|
| React Icons        | Iconos de redes sociales        |
| CSS Modules        | Estilos modulares               |


##  Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/0liRem/Portfolio
   npm install
   npm start

src/
├── components/      # Componentes reutilizables (Navbar, Footer, etc.)
├── pages/           # Páginas principales (Home, Projects, Skills)
├── styles/          # Estilos globales (themes, animations)
├── assets/          # Imágenes y recursos
└── App.js           # Configuración principal
