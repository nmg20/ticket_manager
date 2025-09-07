# Supermarket Placeholder - Frontend

Este es el **frontend del proyecto Supermarket Placeholder**, construido con **React + TypeScript + Vite** y estilizado con **TailwindCSS**.  
Su propósito es mostrar artículos en tarjetas, permitir la asignación de perfiles mediante un modal y representar una pantalla de compra con título, fecha y total.

---

## Estado actual

- **Framework**: React + TypeScript + Vite.
- **Estilos**: TailwindCSS.
- **Componentes principales**:
  - **ArticleItem**: tarjeta rectangular de artículo con nombre y precio.
  - **ArticleItemList**: grid de artículos que permite seleccionar uno.
  - **ArticleModal**: modal para asignar perfiles a un artículo con opciones de selección y confirmación.
  - **ScreenScan**: pantalla principal con título, fecha, lista de artículos y cálculo del total.
- **Funcionalidad destacada**:
  - Los artículos se renderizan en tarjetas con bordes redondeados.
  - Al pulsar un artículo se abre un modal superpuesto.
  - El modal permite seleccionar varios perfiles, confirmarlos o cerrar.
  - La selección de perfiles se resetea cada vez que se abre para un artículo nuevo.

---

## Instalación y ejecución

### Requisitos previos
- Node.js (v18 o superior recomendado)
- npm o yarn

### Pasos
```bash
cd frontend
npm install
npm run dev
