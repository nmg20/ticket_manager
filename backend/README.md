# Backend - Ticket Manager

Este directorio contiene la API del sistema **Ticket Manager**, implementada con **FastAPI**. El backend se encarga de gestionar los artículos, perfiles, asignaciones y toda la lógica de negocio, mientras que el frontend se conecta a través de esta API para mostrar y manipular los datos.

## Estructura del proyecto
/backend
/app
init.py
main.py # Punto de entrada principal de la API
models.py # Modelos de base de datos (SQLAlchemy)
schemas.py # Esquemas Pydantic para validación
crud.py # Operaciones CRUD separadas
database.py # Configuración de la base de datos
routers/ # Endpoints organizados por funcionalidad
articles.py
profiles.py
assignments.py
requirements.txt # Dependencias de Python

## Instalación

1. Clonar el repositorio y entrar en la carpeta del backend:
   ```bash
   cd backend
   ```

2. Crear y activar un entorno virtual:
    ```
    python -m venv venv
    source venv/bin/activate    # Linux/Mac
    venv\Scripts\activate       # Windows
    ```

3. Crear y activar un entorno virtual:
    ```
    pip install -r requirements.txt
    ```

## Dependencias principales

FastAPI → Framework principal para la API

Uvicorn → Servidor ASGI para correr FastAPI

SQLAlchemy → ORM para la base de datos

SQLite (por defecto) → Base de datos ligera para desarrollo (puede migrarse a PostgreSQL/MySQL en el futuro)

```
uvicorn app.main:app --reload
```

El servidor quedará disponible en:
http://localhost:8000

# Documentación interactiva de la API:

Swagger UI → http://localhost:8000/docs
Redoc → http://localhost:8000/redoc

# Endpoints esperados

GET /articles/ → Lista todos los artículos

POST /articles/ → Crea un artículo

GET /profiles/ → Lista todos los perfiles

POST /profiles/ → Crea un perfil

POST /assignments/ → Asigna perfiles a artículos

GET /assignments/{article_id} → Consulta asignaciones de un artículo

# Próximos pasos

Definir modelos de datos iniciales:

Artículos (id, nombre, precio)

Perfiles (id, nombre)

Asignaciones (artículo ↔ perfiles)

Crear la base de datos SQLite y migraciones (opcionalmente con Alembic)

Implementar CRUD básico en crud.py

Dividir la API en routers (articles.py, profiles.py, assignments.py) para mantener el código limpio

Integrar con el frontend mediante fetch/axios en los componentes React

Notas

Durante desarrollo se recomienda usar SQLite por su simplicidad

Para producción, migrar a PostgreSQL y añadir autenticación (OAuth2/JWT)

Es posible empaquetar backend y frontend en Docker más adelante


# Notas:
- models.py -> lo que se va a guardar en la bd
- schemas.py -> lo que entra y sale de la API