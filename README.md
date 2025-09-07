# Analizador de tickets

Proyecto en desarrollo que combina un **frontend en React con TailwindCSS** y un futuro **backend en FastAPI**.  
El objetivo es construir un sistema que permita visualizar artículos en una interfaz limpia y modular, abrir un modal para asignar perfiles a cada artículo y gestionar tanto artículos como perfiles con persistencia de datos desde el backend.

---

## Estado actual

### Frontend
- Proyecto creado con **Vite + React + TypeScript**.
- Integración de **TailwindCSS** para estilos.
- Componentes principales:
  - **ArticleItem**: tarjeta rectangular que representa un artículo.
  - **ArticleItemList**: lista de artículos en formato grid.
  - **ArticleModal**: modal para asignar perfiles a artículos.
- Pantalla principal:
  - **ScreenScan**: muestra artículos, fecha, título y cálculo del total.
- Modal funcional:
  - Permite seleccionar perfiles asociados a un artículo.
  - La selección se resetea al cambiar de artículo.
  - Botones de confirmación y cierre.

### Backend
- Aún no implementado.
- Planificado con **FastAPI** (Python).
- Se espera incluir persistencia de datos con **SQLite** (fase inicial) y más adelante migración a **PostgreSQL**.
- Definición de modelos `Article`, `Profile` y `Assignment`.

---

## Estructura del proyecto

/frontend -> Aplicación en React + TailwindCSS
/backend -> API en FastAPI (pendiente de desarrollo)

---

## Próximos pasos

1. Completar el diseño del frontend:
   - Añadir animaciones y estética más fiel al prototipo de Figma.
   - Gestionar historial de asignaciones.
   - Mejorar usabilidad y experiencia de usuario.

2. Iniciar el backend con FastAPI:
   - Definir modelos de base de datos con **SQLAlchemy**.
   - Exponer endpoints REST para CRUD de artículos y perfiles.
   - Implementar sistema de asignaciones persistente.

3. Conectar el frontend con el backend mediante API REST:
   - Reemplazar el estado local en React por datos obtenidos del backend.
   - Guardar y recuperar artículos, perfiles y asignaciones reales.

---

## Visión a futuro

El sistema busca evolucionar hacia una aplicación completa de gestión de supermercado con:
- Escaneo y visualización de artículos.
- Asignación de perfiles personalizados.
- Persistencia de datos con API en FastAPI.
- Posible expansión a módulos adicionales como gestión de inventario o reportes.