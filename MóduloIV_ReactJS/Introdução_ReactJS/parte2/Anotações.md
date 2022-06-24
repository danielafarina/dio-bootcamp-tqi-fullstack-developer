Crie o arquivo webpack.config.js e adicione o código padrão nele.

> npm init 
(para criar o package.json)

> npm i -D webpack webpack-cli
(para instalar o node_modules)

Crie um arquivo teste.js com console.log("Hello World") só para teste.

Vá no arquivo packet.json e acrescente a linha a seguir em scripts:

"build": "webpack --mode production"

Arrume a entry do webpack.config.js para test.js e faça:

> npm run build

Adicione o babel dentro do projeto:

> npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

Adicione as seguintes linhas no webpack config, dentro de module.exports:

module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

Crie o index.html.

Crie o index.js

Crie o .babelrc

Instale o react e o react-dom:

> npm i react react-dom

Crie um arquivo App.js

> npm i -D html-webpack-plugin html-loader

Adicione as seguintes linhas no webpack config:

const HtmlWebPackPlugin = require("html-webpack-plugin");

E dentro de module.exports:

plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })        
    ]

> npm run build

Para montar um ambiente de desenvolvimento, pra onde poderemos subir nossa aplicação web:

> npm i -D webpack-dev-server

Adicione em package.json, na parte scripts:

"scripts": {
    "start:dev": "webpack-dev-server"
}

# EsLint

> npm i -D eslint babel-eslint eslint-plugin-react eslint-watch

Crie o arquivo .eslintrc

Adicione a seguinte linha em scripts (package.json):

"eslint": "esLint ./src/*.js"

> npm run eslint
(para ver os erros no seu projeto e arrumá-los)

