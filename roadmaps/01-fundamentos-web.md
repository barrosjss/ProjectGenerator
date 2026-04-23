# 🧱 Módulo 01: Fundamentos Web y Entorno de Desarrollo

El primer paso para ser un desarrollador web no es escribir código, sino preparar tu taller. En este módulo configuraremos tus herramientas y entenderemos la estructura básica de cualquier sitio web.

---

## 🛠️ 1. Tu Editor de Código

Un **Editor de Código** es como un procesador de texto (como Word), pero diseñado específicamente para escribir lenguaje de programación. Te ayuda con colores, sugerencias y herramientas para que seas más rápido.

### Editores Populares:
- **Visual Studio Code (Recomendado)**: El estándar de la industria. Es gratuito, rápido y poderoso.
- **Cursor**: Un editor basado en IA (fork de VS Code) que te ayuda a escribir código más rápido con sugerencias inteligentes.
- **Antigravity**: Tu asistente de IA de Google DeepMind que vive dentro del entorno de desarrollo, capaz de crear proyectos completos y guiarte paso a paso.

### 📥 Descarga e Instalación de VS Code
1.  Ve al sitio oficial: **[code.visualstudio.com](https://code.visualstudio.com/)**.
2.  Descarga la versión correspondiente a tu sistema operativo (Windows, macOS o Linux).
3.  Sigue los pasos del instalador (en Windows, asegúrate de marcar "Agregar a PATH").

#### 📺 VIDEOS DE APOYO:
- [Cómo instalar VS Code en Windows](https://www.youtube.com/results?search_query=instalar+visual+studio+code+windows+español)
- [Cómo instalar VS Code en macOS](https://www.youtube.com/results?search_query=instalar+visual+studio+code+mac+español)
- [Cómo instalar VS Code en Linux](https://www.youtube.com/results?search_query=instalar+visual+studio+code+linux+español)

---

## 📄 2. Tu Primer Archivo HTML

1.  Crea una carpeta en tu computadora para tus proyectos.
2.  Abre tu editor y arrastra esa carpeta hacia adentro.
3.  Crea un nuevo archivo llamado `index.html`.

### ¿Por qué se llama "index"?
Los servidores web están configurados para buscar un archivo con este nombre por defecto. Cuando alguien entra a `tuweb.com`, el servidor busca `index.html` para mostrarlo como la página de inicio. Si no existiera, el servidor no sabría qué mostrar primero.

---

## 🏗️ 3. Estructura Base y Etiquetas Clave

Todo documento HTML se divide en dos grandes secciones que debes conocer:

### 🧠 La Etiqueta `<head>` (El Cerebro)
Aquí va la información que el usuario **no ve directamente**, pero que es vital:
- El título de la pestaña.
- Los archivos de estilos (CSS).
- Configuraciones de idioma y SEO.
- Metadatos para redes sociales.

### 🦴 La Etiqueta `<body>` (El Cuerpo)
Aquí vive todo lo que **el usuario sí ve**:
- El texto, las imágenes y los videos.
- Los botones y los menús.
- Es el lienzo donde dibujamos nuestra interfaz.

### Código Base Comentado
Copia y pega esto en tu `index.html`:

```html
<!-- Indica al navegador que este es un documento HTML5 moderno -->
<!DOCTYPE html>

<!-- Apertura del documento. El atributo lang="es" indica que el contenido es en español -->
<html lang="es">

<head>
    <!-- Define la codificación de caracteres para que se vean bien las tildes y la ñ -->
    <meta charset="UTF-8">
    
    <!-- Asegura que la página se vea bien en dispositivos móviles (responsive) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- El título que aparecerá en la pestaña del navegador -->
    <title>Mi Primera Página Web</title>
</head>

<body>
    <!-- Todo lo que pongas aquí adentro es lo que se verá en la pantalla del navegador -->
    
    <h1>¡Hola Mundo!</h1>
    <p>Este es mi primer paso como Desarrollador Web Junior.</p>

</body>

<!-- Cierre del documento -->
</html>
```

---

## 🚀 4. Retos Prácticos: Aplicando lo Aprendido

Para dominar el HTML, no basta con leer etiquetas; hay que entender cómo presentar información estructurada. Estos dos proyectos te obligarán a pensar en la arquitectura de la página.

### Proyecto A: Tienda Estilo "Old School" (HTML Puro)
En este reto construirás una tienda al estilo de las webs asiáticas clásicas (como Rakuten o Alibaba en sus inicios). 
- **Objetivo**: Aprender a usar tablas para diseño, presentar grandes volúmenes de información, listas y jerarquía de etiquetas.
- **Regla de Oro**: ¡Solo HTML! Nada de CSS por ahora. Usa atributos como `bgcolor`, `border` y `align`.
- **Referencias Reales**: 
    - [Rakuten Japan (Legacy Style)](https://www.rakuten.co.jp/) - Nota la densidad de información.
    - [Cameron's World](https://www.cameronsworld.net/) - Inspiración visual de la web de los 90.

### Proyecto B: Newsletter (Cuerpo de Correo)
Aunque parezca mentira, el HTML "viejo" basado en tablas sigue siendo el estándar para los correos electrónicos que recibes a diario.
- **Objetivo**: Crear un boletín informativo estructurado. Aprenderás por qué las tablas siguen siendo vitales para la compatibilidad entre Gmail, Outlook y otros.
- **Referencias Reales**: 
    - [Really Good Emails](https://reallygoodemails.com/) - Mira cómo se estructuran los correos modernos.

---

### 👨‍🏫 Ejemplos del Profe
Si te bloqueas, puedes consultar estas implementaciones de referencia:
- **[Ejemplo Tienda Asiática](../ejemplos-profe/tienda-asiatica/index.html)**
- **[Ejemplo Newsletter Email](../ejemplos-profe/newsletter-email/index.html)**

---

## 📍 Temas a Dominar (Próximos Pasos)

Una vez tengas tu entorno listo, estos son los conceptos que profundizaremos:

### HTML5 (El Esqueleto)
- **Etiquetas Semánticas**: Uso de `<header>`, `<main>`, `<footer>`.
- **Formularios**: Inputs y validaciones.
- **SEO**: Meta etiquetas y títulos descriptivos.

### CSS3 (La Piel)
- **Modelo de Caja**: `margin`, `padding`, `border`.
- **Selectores**: Cómo elegir elementos para darles estilo.
- **Unidades**: `px`, `rem`, `vh/vw`.

---

## 📚 Recursos Útiles
- [MDN Web Docs - Introducción a HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML)
- [W3Schools - HTML Tutorial](https://www.w3schools.com/html/)
