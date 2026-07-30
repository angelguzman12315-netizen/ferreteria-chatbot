# 🔧 FerreBot — Chatbot de Atención al Cliente para Ferretería

Proyecto Integrador · Inteligencia Artificial Aplicada · UTH

## ¿Qué hace?

FerreBot es un asistente virtual inteligente para ferreterías. Permite a los clientes consultar información sobre herramientas, materiales, precios aproximados en Lempiras y recomendaciones para proyectos de construcción, plomería, pintura y electricidad, todo desde su celular o computadora sin necesidad de llamar o visitar la tienda.

## 🚀 URL del proyecto en producción

[https://ferreteria-chatbot.netlify.app](https://ferreteria-chatbot.netlify.app)

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 + CSS3 | Estructura y diseño de la interfaz |
| JavaScript (Vanilla) | Lógica del chat y llamadas a la API |
| Claude API (Anthropic) | Modelo de lenguaje que genera las respuestas |
| Netlify Functions | Función serverless que protege la API key |
| GitHub | Control de versiones y repositorio del código |
| Netlify | Despliegue público y hosting gratuito |

## 📁 Estructura del proyecto

```
ferreteria-chatbot/
├── index.html                  # Interfaz principal del chatbot
├── netlify/
│   └── functions/
│       └── chat.js             # Función serverless (protege la API key)
└── README.md                   # Este archivo
```

## ▶️ Cómo ejecutarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/angelguzman12315-netizen/ferreteria-chatbot.git
   cd ferreteria-chatbot
   ```

2. Instala Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Crea un archivo `.env` con tu API key:
   ```
   ANTHROPIC_API_KEY=sk-ant-tuclaveaqui
   ```

4. Ejecuta el servidor local:
   ```bash
   netlify dev
   ```

5. Abre tu navegador en `http://localhost:8888`

## 🔐 Seguridad

La API key de Claude nunca se expone en el código del frontend. Todas las llamadas a la API pasan por una función serverless de Netlify que lee la clave desde variables de entorno configuradas en el panel de Netlify.

## 👤 Autor

Angel Guzmán · UTH · Inteligencia Artificial Aplicada
