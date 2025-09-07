# Ticket Manager

## Descripción del proyecto

`Ticket Manager` es un sistema frontend en React que permite visualizar artículos de un supermercado, gestionar perfiles de usuarios y asignarlos a cada artículo mediante un modal interactivo. El proyecto está construido con:

- React + TypeScript
- Tailwind CSS para estilos
- Vite como herramienta de desarrollo

Actualmente el proyecto permite:

- Mostrar un listado de artículos con nombre y precio.
- Abrir un modal al clicar sobre un artículo.
- Seleccionar perfiles de usuario para asignarlos al artículo.
- Reseteo automático de la selección de perfiles por cada artículo.
- Visualización del total de los artículos seleccionados.
- Mantener la estética inspirada en el diseño de Figma, con bordes redondeados y colores definidos.

## Estructura del proyecto

```
ticket_manager/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ ArticleItem.tsx
│  │  │  ├─ ArticleItemList.tsx
│  │  │  └─ ArticleModal.tsx
│  │  ├─ screens/
│  │  │  └─ ScreenScan.tsx
│  │  ├─ types.ts
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ index.css
│  └─ vite.config.ts
├─ package.json
├─ tailwind.config.js
└─ postcss.config.js
```

## Funcionalidades implementadas

1. **Pantalla principal**
   - Título, fecha y total visibles.
   - Lista de artículos en un contenedor con bordes redondeados y colores.
   
2. **Artículos**
   - Cada artículo se muestra como un rectángulo con nombre y precio.
   - Al hacer click, se abre un modal para asignar perfiles.

3. **Modal de asignación**
   - Fondo semi-transparente para resaltar el modal.
   - Lista de perfiles que se pueden seleccionar o deseleccionar.
   - Botón de cerrar y botón de confirmar selección.
   - Reseteo de perfiles seleccionados por cada artículo.

## Tecnologías y dependencias

- **React 18 + TypeScript**
- **Tailwind CSS** (con PostCSS)
- **Vite** como bundler
- Uso de `useState` para manejar la apertura de modal y selección de perfiles.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/nmg20/ticket_manager.git
cd ticket_manager/frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir la aplicación en el navegador:

```
http://localhost:5173/
```

## Próximos pasos / Backend

Para comenzar la parte backend se recomienda:

1. **Diseñar la API**
   - Endpoints para obtener artículos y perfiles.
   - Endpoints para asignar perfiles a artículos.
   - Endpoints para calcular total o generar tickets.

2. **Elegir tecnología**
   - Node.js + Express o FastAPI (Python) para prototipado rápido.
   - Base de datos: SQLite para pruebas iniciales, PostgreSQL o MySQL para producción.

3. **Conectar frontend con backend**
   - Usar `fetch` o `axios` desde React para consumir la API.
   - Reemplazar los datos estáticos actuales (`articles` y `profiles`) por datos provenientes de la API.

4. **Persistencia de datos**
   - Guardar las asignaciones de perfiles por artículo en la base de datos.
   - Gestionar actualizaciones y eliminaciones.

5. **Autenticación y roles (opcional)**
   - Si se quiere un entorno multiusuario, añadir login y control de permisos.

6. **Integración futura**
   - Añadir notificaciones o confirmaciones visuales.
   - Mejorar la estética con animaciones CSS o librerías de UI como Framer Motion o Radix.

## Conclusión

Actualmente el proyecto es un frontend funcional que refleja el diseño de Figma y soporta la lógica básica de selección y asignación de perfiles a artículos. La siguiente etapa natural es implementar el backend para persistir datos, hacer la aplicación dinámica y preparar la base para un sistema completo de gestión de tickets y perfiles.
