
# WebPack 4+ BLANK


## * ES6, SCSS, React JSX, mini(ugly)fy support

* DO NOT use Yarn. To avoid errors use NPM instead.


* 'npm install -D %package%' is alternative command for 'npm install --save-dev %package%'


* note that devDependencies are not included in your final project. It is only needed for bundling.

### Legend

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


adding loaders:
https://webpack.js.org/loaders/css-loader/
$ npm install --save-dev css-loader


https://webpack.js.org/loaders/style-loader/
$ npm install style-loader --save-dev


https://webpack.js.org/plugins/extract-text-webpack-plugin/
!:warning: Since webpack v4 the extract-text-webpack-plugin should not be used for css. Use mini-css-extract-plugin instead.
https://webpack.js.org/plugins/mini-css-extract-plugin/
$ npm install --save-dev mini-css-extract-plugin

for minimizing prod css file data:
https://github.com/NMFR/optimize-css-assets-webpack-plugin
$ npm install --save-dev optimize-css-assets-webpack-plugin

in prod bundle.js minification broked. so, go to:
https://webpack.js.org/plugins/uglifyjs-webpack-plugin
$ npm install uglifyjs-webpack-plugin --save-dev
!!uglifyjs-webpack-plugin -- natively works only with ES5 syntax

...
https://webpack.js.org/configuration/dev-server
$ npm install -D webpack-dev-server

https://babeljs.io
...

https://webpack.js.org/loaders/babel-loader
$ npm install -D babel-loader

...

https://webpack.js.org/loaders#styling
https://webpack.js.org/loaders/sass-loader/
$ npm install sass-loader node-sass --save-dev


$ npm i -S react react-dom
$ npm install --save-dev @babel/preset-react

