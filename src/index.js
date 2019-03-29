import AppService from './modules/app.service'
// importing ES6 module
import {config} from './modules/config'
import './modules/header.component'
import './css/index.css'



console.log('Config key: ', config.key);

const service = new AppService('Hello, buddy!');
service.log()