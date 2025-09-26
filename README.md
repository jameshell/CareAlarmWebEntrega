# CareAlarmWeb

Sistema de gestión de alarmas médicas desarrollado con React, TypeScript y Material-UI. Esta aplicación permite gestionar alarmas, usuarios, notificaciones y configuraciones del sistema de manera eficiente y responsiva.

## 🚀 Características Principales

- **Dashboard Interactivo**: Panel principal con métricas y actividad reciente
- **Gestión de Alarmas**: Tabla completa con búsqueda y filtros
- **Administración de Usuarios**: Gestión de usuarios con roles y permisos
- **Sistema de Notificaciones**: Seguimiento de notificaciones enviadas
- **Reportes Visuales**: Gráficos interactivos con Recharts
- **Configuración del Sistema**: Panel de configuración con opciones avanzadas
- **Diseño Responsivo**: Compatible con dispositivos móviles y desktop
- **Tema Personalizado**: Interfaz moderna con Material-UI

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.0.0 o superior)
- **npm** (viene incluido con Node.js) o **yarn**
- **Git** (para clonar el repositorio)

### Verificar Instalación

```bash
# Verificar versión de Node.js
node --version

# Verificar versión de npm
npm --version

# Verificar versión de Git
git --version
```

## 🛠️ Instalación

### 1. Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/carealarmweb.git

# Entrar al directorio del proyecto
cd carealarmweb
```

### 2. Instalar Dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install

# O si prefieres usar yarn
yarn install
```

### 3. Verificar Instalación

```bash
# Verificar que todas las dependencias se instalaron correctamente
npm list --depth=0
```

## ▶️ Ejecutar la Aplicación

### Modo Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev

# O con yarn
yarn dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Características del Modo Desarrollo

- **Hot Module Replacement (HMR)**: Actualizaciones en tiempo real
- **Fast Refresh**: Recarga rápida de componentes
- **Source Maps**: Debugging mejorado
- **ESLint**: Verificación de código en tiempo real

## 🏗️ Construir para Producción

### 1. Construir la Aplicación

```bash
# Crear build optimizado para producción
npm run build

# O con yarn
yarn build
```

### 2. Vista Previa del Build

```bash
# Vista previa del build de producción
npm run preview

# O con yarn
yarn preview
```

Los archivos optimizados estarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
carealarmweb/
├── public/                 # Archivos estáticos
│   ├── vite.svg           # Icono de Vite
│   └── ...
├── src/                   # Código fuente
│   ├── assets/            # Recursos estáticos
│   ├── components/        # Componentes reutilizables
│   │   └── Navbar.tsx     # Barra de navegación
│   ├── pages/             # Páginas de la aplicación
│   │   ├── DashboardPage.tsx
│   │   ├── AlarmasPage.tsx
│   │   ├── UsuariosPage.tsx
│   │   ├── NotificacionesPage.tsx
│   │   ├── ReportesPage.tsx
│   │   └── ConfiguracionPage.tsx
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── ...
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite
└── README.md              # Este archivo
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca principal para la interfaz
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Material-UI (MUI)** - Componentes de interfaz de usuario
- **React Router** - Enrutamiento de la aplicación
- **Recharts** - Biblioteca de gráficos

### Desarrollo
- **ESLint** - Linting y formateo de código
- **PostCSS** - Procesamiento de CSS
- **Tailwind CSS** - Framework de estilos utilitarios

## 📜 Scripts Disponibles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build de producción
npm run preview

# Ejecutar ESLint para verificar código
npm run lint
```

## 🌐 Navegación de la Aplicación

La aplicación incluye las siguientes secciones:

1. **Dashboard** - Panel principal con métricas generales
2. **Gestión de Alarmas** - Tabla completa con búsqueda y filtros
3. **Usuarios** - Administración de usuarios del sistema
4. **Notificaciones** - Historial de notificaciones enviadas
5. **Reportes** - Gráficos y estadísticas del sistema
6. **Configuración** - Panel de configuración del sistema


```
## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

**Desarrollado con ❤️ para la gestión eficiente de alarmas médicas**
