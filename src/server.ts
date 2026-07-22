import { Config } from './config/index.js';

function welcome(name: string): void {
    console.log(`Welcome ${name}`);

    // const user = {
    //     name: 'Hemant',
    // };

    // console.log(user.name);
    console.log(Config.PORT);
}

welcome('Hemant');
