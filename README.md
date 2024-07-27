## Descripcion

Este repositorio es una estructura base y claro que puede ser modificada y adaptada a tus necesidades.
Toma en cuenta que al momento de desarrollar este proyecto lo hice con las siguiente versiones de `node` y `npm`.

```version
node -v v21.7.2
npm --version 10.5.0
```

Las versiones anteriores son una sugerencia y pueden cambiar en el futuro. Si tu tienes una version mas antigua a las que yo uso, es posible que presentes problemas.

## Antes de iniciar

Debes asegurarte en instalar nest cli de manera global en tu computadora

```bash
$ npm i -g @nestjs/cli
```

El siguiente paso es solo necesario si estas clonando este repositorio. En caso de crearlo desde cero no es necesario ejecutarlo.

## Instalación de librerias

```bash
$ npm install
```

## Como iniciar un proyecto desde cero

Una vez instalado nest cli se debe correr el siguiente comando, No olvides cambiar `project-name` por el nombre de tu aplicacion o proyecto

```bash
$ nest new project-name
```

## Ejecucion de la app.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
