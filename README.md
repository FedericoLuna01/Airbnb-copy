<a name="readme-top"></a>

# Airbnb - copy

## Sobre la aplicación

Proyecto basado en un [video](https://www.youtube.com/watch?v=c_-b_isI4vg&list=WL&index=37&ab_channel=CodeWithAntonio) de YouTube.

Se trata de una copia de Airbnb con backend en MongoDB y Prisma, tiene la función de Login con Google y Github, rutas protegidas, filtros para buscar una casa determinada, favoritos, reservas.

[Sitio web](https://proyecto-clon-viajes.vercel.app/)

[Repositorio](https://github.com/FedericoLuna01/Airbnb-copy)

## Vista previa

<img src='./public/airbnb-clon-1.jpeg' width='700' />

<img src='./public/airbnb-clon-2.jpeg' width='700' />

<img src='./public/airbnb-clon-3.jpeg' width='700' />

### Construida con

- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]
- [![Tailwind][Tailwind]][Tailwind-url]
- [![Next][Next]][Next-url]
- [![Prisma][Prisma]][Prisma-url]
- [![MongoDB][MongoDB]][MongoDB-url]

### Tecnologias y paquetes utilizados

- zustand
- react hook form
- react hot toast
- prisma
- next auth
- bcrypt
- query string
- world countries
- react select
- leaflet
- cloudinary
- date fns
- react date range
- react spinners

## Getting Started

Para tener una copia local de esta aplicación seguí los siguientes pasos.

### Requisitos previos

Instalar la ultima versión de NodeJS.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clonar el repositorio.
   ```sh
   git clone https://github.com/FedericoLuna01/Airbnb-copy.git
   ```
2. Instalar los paquetes de NPM.
   ```sh
   npm install
   ```
3. Crear carpeta .env
   ```js
     DATABASE_URL=
     NEXTAUTH_SECRET=
     GITHUB_ID=
     GITHUB_SECRET=
     GOOGLE_CLIENT_ID=
     GOOGLE_CLIENT_SECRET=
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   ```
4. Iniciar prisma
   ```sh
   npx prisma db push
   ```

### Iniciar aplicación

```sh
npm run dev
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] ~~Agregar Navbar~~
- [x] ~~Agregar UI Auth~~
  - [x] ~~Agregar funcionalidad al Auth~~
- [x] ~~Agregar categorías~~
- [x] ~~Agregar listado~~
- [x] ~~Funcionalidad de favoritos~~
- [x] ~~Funcionalidad de reservaciones~~
- [x] ~~Funcionalidad de filtros~~

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- CONTACT -->

## Contacto

Federico Luna - [LinkdedIn](https://www.linkedin.com/in/federico-luna-dev/) - [Sitio Web](https://federicoluna.netlify.app) - federicolun4@gmail.com

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[logo]: '/public/images/logo.png'
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB
[Typescript-url]: https://www.typescriptlang.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwind-url]: https://tailwindcss.com/
[Next]: https://img.shields.io/badge/next-20232A?style=for-the-badge&logo=nextdotjs&logoColor=000000
[Next-url]: https://nextjs.org/
[Prisma]: https://img.shields.io/badge/prisma-20232A?style=for-the-badge&logo=prisma&logoColor=2D3748
[Prisma-url]: https://nextjs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=mongodb&logoColor=47A248
[MongoDB-url]: https://www.mongodb.com/
