###Aplikacja dla dzieci 

Na stronie znajduje się interaktywna mapa 
1. Klikając na poszczególne kraje świata dostajemy informacj o podstawowych informacjach  o danym państwie '
2. Klikając dwa razy w dane państwo dodajemy je do listy z odwiedzonymi przez siebie państwami  
3.Jest to prosta aplikacja uwzględniająca możliwości poznawcze najmłodszych

















# Webpack React Demo App

### How to install:
1. `git clone https://github.com/beniaminrychter/webpack-react-demo`
2. `cd webpack-react-demo`
3. `npm i`

Then `npm start` for development mode, and `npm run build` for production.

In development mode, localhost server will run on `localhost:8080` with autoreloading.


### File structure:
```
src/
    images/
    scss/
    js/
    index.js
    index.html
webpack.config.js
package.json
```

- `index.html` in `src` folder is a HTML template for our project.
- `index.js` in `src` folder is main JavaScript file with ReactDOM.render() function. This is good place to import `scss` file.
