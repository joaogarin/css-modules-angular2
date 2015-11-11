/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

//import styles from './logo.css';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'logo', // <app></app>
    template: `
        <div>
            Here comes the logo
        </div>
    `
})
export class Logo {
    onInit(){
        //console.log(styles);
    }
}