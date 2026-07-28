# Corazon Sabio

Milestone 1 de una tienda sencilla para un emprendimiento de helados conscientes.

## Como correr el proyecto

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor local:

```bash
npm run dev
```

3. Abre:

```txt
http://localhost:3000
```

## Imagenes de marca

Los archivos del brandboard y logo quedaron copiados en:

```txt
public/images/brand
```

Puedes reemplazar las imagenes temporales de productos en `public/images` cuando tengas fotos reales de los helados.

# Corazón Sabio 🍨

Aplicación web para **Corazón Sabio**, un emprendimiento de helados artesanales veganos, sin lácteos y sin azúcar refinada. El sitio presenta la marca, la filosofía, el catálogo de sabores y permite hacer pedidos directamente por WhatsApp.

- **Repositorio:** https://github.com/andcvm1-cyber/corazon-sabio
- **Web App desplegada:** https://corazon-sabio.vercel.app/
- **Autora:** Andrea

---

## 1. Descripción del proyecto

El objetivo de esta segunda entrega fue traducir el documento de planeación (`documento-definicion-proyecto-corazon-sabio.md`) en una aplicación web real, funcional y desplegada, usando IA como copiloto de desarrollo dentro de un flujo de trabajo profesional (definición → generación por milestones → iteración → despliegue).

El proyecto pasó de un plan de **página de tienda por milestones** a una **landing page de una sola página** (single-page app) que resultó más adecuada para el uso real del negocio: mostrar sabores, filosofía, puntos de venta físicos y canalizar los pedidos por WhatsApp e Instagram, en lugar de un carrito de compras con checkout propio.

### Usuario principal
Clientes interesados en comprar helados conscientes (veganos, sin lácteos, sin azúcar refinada), y Andrea como dueña del emprendimiento, quien puede actualizar sabores, precios, puntos de venta e imágenes editando archivos simples del proyecto.

### Secciones de la aplicación
1. **Inicio / Hero** — presentación de marca y llamado a la acción ("Ver sabores").
2. **Filosofía** — misión, visión y valores aplicados del negocio.
3. **Sabores disponibles** — catálogo de sabores (tipo agua y tipo cremoso) con precios por 1/2 litro y 1 litro, cada uno con botón de pedido directo por WhatsApp.
4. **Nos encontramos en** — puntos de venta físicos (tianguis y locaciones) con día y horario.
5. **Contacto** — enlaces a Instagram, WhatsApp, correo y código QR.

---

## 2. Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | Next.js (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Datos | Archivos locales (sin base de datos) |
| Control de versiones | GitHub |
| Despliegue | Vercel |

**Deliberadamente NO se usó:** base de datos, autenticación, Docker, Prisma, Redux, microservicios ni librerías externas de UI — para mantener el proyecto simple, legible y modificable por una estudiante en curso, tal como se definió desde el documento de planeación.

### Estructura del repositorio
```
corazon-sabio/
  src/                app y componentes (Next.js App Router)
  public/images/       imágenes de marca, sabores y redes sociales
  output/pdf/           material exportado del proyecto
  documento-definicion-proyecto-corazon-sabio.md   documento de planeación (Fase 1)
  package.json, tsconfig.json, tailwind.config.ts, next.config.ts
```

### Cómo correr el proyecto localmente
```bash
npm install
npm run dev
```
Luego abrir [http://localhost:3000](http://localhost:3000).

---

## 3. Prompts principales utilizados con la IA

El desarrollo siguió un flujo de **definición → generación por milestones → refinamiento**, documentado en el archivo de planeación. Los prompts clave fueron:

**1. Prompt de planeación inicial** (para transformar la idea de negocio en una arquitectura de app simple):
> "Quiero crear una app o página de mi emprendimiento... Usa el stack más simple posible: Next.js, TypeScript, Tailwind... No uses base de datos, autenticación, Docker, Prisma, Redux... Explica la app a alto nivel, páginas, componentes reutilizables, flujo de datos, estructura de carpetas y un plan por milestones."

Esto generó dos propuestas de alcance (herramienta interna de inventario/recetas vs. tienda pública), de donde se decidió avanzar con la **tienda pública**.

**2. Prompt de generación del Milestone 1** (traducido del plan a código ejecutable):
> "Crea el Milestone 1 de una aplicación web sencilla llamada 'Corazón Sabio'... página inicial con Header, sección hero, filosofía de marca y sección de productos con datos locales en `src/data/products.ts`, componentes `ProductCard`, `Header` y `SectionTitle`. Sin carrito, sin checkout, sin blog todavía."

**3. Prompt de integración de identidad de marca:**
> "Utiliza los siguientes archivos [brandboard y logo] para las imágenes públicas del sitio."

Esto llevó a reemplazar los placeholders por los logos y el brandboard reales de la marca, organizados en `public/images/brand`.

**4. Prompt de soporte de entorno:**
> "¿Puedes instalar Node?" — para resolver el bloqueo de `spawn EPERM` al intentar correr el servidor local y poder verificar la app fuera del entorno de generación.

**5. Prompt de conexión a GitHub y despliegue en Vercel**:
> "Dame los comandos para inicializar este proyecto con Git, subirlo a un repositorio en GitHub y desplegarlo en Vercel."

Esto guio la inicialización del repositorio local, la creación del repo remoto en GitHub y la conexión del proyecto con Vercel para obtener el dominio de despliegue continuo.

---

## 4. Autoevaluación

**Lo que funcionó bien:**
- Partir de un documento de planeación claro (con páginas, componentes y milestones definidos) hizo que cada prompt a la IA fuera concreto y produjera resultados usables sin retrabajo mayor.
- Mantener el stack mínimo (sin base de datos ni autenticación) permitió entender y modificar todo el código generado, en vez de depender de "caja negra".
- El resultado final resuelve un problema real del negocio (mostrar sabores y canalizar pedidos) en vez de ser solo un ejercicio académico.

**Lo que se puede mejorar:**
- El alcance final (landing page de una sola página) se alejó del plan original de tienda con carrito y checkout; el documento de planeación no se actualizó para reflejar ese cambio de dirección, algo a corregir en la documentación de próximas entregas.
- Aún no hay pruebas automatizadas ni manejo de errores para los datos de sabores/puntos de venta.
- Los pedidos dependen 100% de WhatsApp manual; una extensión futura natural es un carrito con resumen de pedido antes de enviarlo.

**Aprendizaje principal:** dividir el problema en pasos concretos (definición → milestone 1 → datos reales → refinamiento visual → integración de marca) permitió usar la IA como copiloto de forma ordenada, revisando y validando cada entrega antes de pasar a la siguiente, en lugar de pedir "la app completa" en un solo prompt.

---

## 5. Extensiones futuras (no implementadas)

- Carrito de compras y checkout simple.
- Blog / entradas de filosofía de marca como sección independiente.
- Pagos en línea (Stripe / Mercado Pago).
- Panel de administración para editar sabores sin tocar código.
- Exportar catálogo de sabores a PDF.
o.
- Exportar catálogo de sabores a PDF.
