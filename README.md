Resumen general del proyecto - Prototipo de lectura de facturas y asignación de perfiles

1. Progreso hasta ahora:

- Pantalla principal (Screen Scan)
  - Lista de artículos (ArticleList) -> cada artículo es un componente (ArticleItem).
  - Al pulsar un artículo -> abre un overlay (AssignProfilesOverlay) para asignar perfiles.

- Overlay de selección de perfiles
  - Componente AssignProfilesOverlay con lista (ProfileList) de ProfileItem con variantes (Selected / Unselected).
  - Botones Aceptar y Cancelar, y clic fuera para cerrar overlay.
  - Cada overlay mantiene su propia instancia de la lista para evitar que se mezclen selecciones entre artículos.

- Interacciones simuladas en Figma
  - Tocar perfil -> toggle Selected / Unselected.
  - Aceptar -> cerrar overlay y reflejar visualmente asignación en el artículo.
  - Cancelar / click fuera -> cerrar overlay sin guardar cambios.

2. Exportación del diseño:

- Elementos gráficos estáticos: iconos, botones, logos -> exportar como SVG o PNG.
- Componentes dinámicos (listas, overlays, items) -> no exportar como imagen; mantener como referencia visual para React.
- Documentar tamaños, colores, tipografía, padding usando Figma Inspect para frontend.
- Mantener Figma abierto como guía para consistencia de UI.

3. Clases / componentes claros para modelar:

Frontend (React):
- ArticleItem: Muestra información de un artículo; variantes NoAssigned / WithAssigned.
- ArticleList: Contenedor vertical que instancia ArticleItem según datos.
- ProfileItem: Componente de perfil con variantes Selected / Unselected.
- ProfileList: Contenedor vertical de ProfileItem, dinámico según usuarios.
- AssignProfilesOverlay: Modal que contiene ProfileList y botones Aceptar/Cancelar; instancia por artículo.

Backend (FastAPI):
- GET /articles: Devuelve lista de artículos.
- GET /profiles: Devuelve lista de perfiles.
- POST /assignments: Recibe articleId y lista de profileIds asignados.
- Opcional GET /assignments/{articleId}: Devuelve asignaciones actuales.

4. Unir frontend y backend:

- Fetch inicial de datos:
  - Al cargar Screen_Scan, hacer GET /articles y GET /profiles para poblar ArticleList y ProfileList.

- Abrir overlay para un artículo:
  - Pasar articleId al overlay.
  - Inicializar ProfileList según asignaciones actuales del artículo.

- Guardar asignaciones:
  - Botón Aceptar -> POST /assignments con articleId y profileIds seleccionados.
  - Actualizar estado de ArticleItem para reflejar perfiles asignados.

- Cancelar / click fuera:
  - Cierra overlay sin enviar datos.

- Estado en React:
  - Mantener articles y profiles en useState o useReducer.
  - Cada overlay trabaja sobre una copia de los datos para no afectar otros artículos hasta aceptar.

5. Concepto general:

- Figma: prototipo visual modular y dinámico.
- React: recrea los componentes dinámicos, estados y listas.
- FastAPI: backend que sirve datos de artículos, perfiles y guarda asignaciones.
- Integración: fetch de datos para poblar listas, POST para guardar asignaciones, estado reactivo para reflejar cambios en la UI.

6. Recomendación final:

- Mantener todos los componentes (artículos, listas, overlays, items de perfil) separados y en Assets.
- Cada overlay/lista debe estar limpia al abrir para un artículo nuevo.
- Documentar tamaños, colores, tipografía y paddings para facilitar la integración con el frontend.
- Mapear cada componente Figma a un componente React antes de conectar con el backend.
