# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

# Random Fox Image

Este proyecto muestra imágenes aleatorias de zorros utilizando la API de [randomfox.ca](https://randomfox.ca/). Se utiliza Tailwind CSS desde su CDN para los estilos y Snowpack-template para el desarrollo.

## Cómo funciona

El proyecto está dividido en dos archivos: `lazy.js` e `index.js`.

En `lazy.js`, se crea un Intersection Observer para observar cuando una imagen intersecta con el viewport. Cuando la imagen intersecta, se llama a la función `action`, que cambia el atributo `src` de la imagen al valor del atributo `data-src` y desobserva la imagen. La función `registerImage` se exporta, que toma una imagen como argumento y la observa utilizando el Intersection Observer.

En `index.js`, se importa la función `registerImage` desde `lazy.js`. El código crea un contenedor con una tarjeta, título y dos botones. Cuando se hace clic en el botón "New Fox", se llama a una función asíncrona que obtiene datos de la API de `https://randomfox.ca/floof/`. Se crea una nueva imagen de zorro utilizando los datos de la API y se agrega a la tarjeta. La función `registerImage` se llama con la imagen de zorro como argumento para observarla con el Intersection Observer. Cuando se hace clic en el botón "Clear Images", se eliminan todas las imágenes del contenedor.

## Cómo usarlo

Para usar este proyecto, simplemente abre el archivo `index.html` en tu navegador. Verás una tarjeta con un título y dos botones. Haz clic en el botón "New Fox" para cargar una nueva imagen de zorro. Haz clic en el botón "Clear Images" para eliminar todas las imágenes del contenedor.
"# random-fox" 
