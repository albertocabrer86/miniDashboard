# 📰 miniDashboard de Noticias
Este proyecto es un **mini dashboard de noticias** construido con [Next.js v15.3.3](https://nextjs.org/), que consume datos de la API pública de [NewsAPI](https://newsapi.org/). Muestra una lista de noticias con título, imagen, fuente y fecha de publicación.

## 🚀 Tecnologías utilizadas

- [Next.js v15.3.3](https://nextjs.org/)
- TypeScript
- CSS
- API REST (`newsapi.org`)
- Context API 
- `slugify` (para generar slugs legibles en URLs)

### 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/minidashboard-noticias.git
cd minidashboard-noticias

2. Instala las dependencias:
npm install
# o
yarn install

3. Crea un archivo .env.local en la raíz del proyecto con el siguiente contenido:
NEXT_PUBLIC_API_URL=https://newsapi.org/v2
NEXT_PUBLIC_API_KEY=40b6286222794ba4917df838ce2b5d7a
⚠️ Nota: La API key incluida es de ejemplo. Se recomienda obtener tu propia clave desde newsapi.org
        
#### 🛠 Estructura del proyecto
/components     → Componentes reutilizables
/pages          → Rutas de Next.js
/server         → Conexión y llamadas a la API
/context        → Gestión de estado global (si aplica)
/helpers        → Funciones auxiliares como slugify

##### ✨ Funcionalidades principales
Visualización de noticias recientes.
Filtros por categoría .
Slugs amigables en URLs.
Posibilidad de carga progresiva .

###### 📌 Notas adicionales
El proyecto está diseñado para ser fácilmente extensible.
Puedes reemplazar NewsAPI por cualquier otra fuente de noticias con mínima adaptación.

####### 🙋‍♂️ Autor
Desarrollado por Alberto Cabrer  – ¡se aceptan sugerencias y mejoras!

