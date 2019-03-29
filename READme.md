
** 'npm install -D %package%' is alternative command for 'npm install --save-dev %package%'
** note that devDependencies are not included in your final project. It is only needed for bundling.

$ npm init -y

$
npm install --save-dev webpack webpack-cli


adding initial webpack config

$ webpack 
e.g. we try to run webpack, and test if it works
if errors, try to install webpack globally:
$ npm i -g webpack webpack-cli

then try to test our code: console.log(helloworld..)
$ node dist/bundle.js

try to run a command in dev mode (without file optimizations and minifyings):
$ webpack --mode development

https://webpack.js.org/plugins/html-webpack-plugin/
$ npm install --save-dev html-webpack-plugin



