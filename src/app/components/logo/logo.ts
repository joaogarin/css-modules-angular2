/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

var styles = require("./logo.css");

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'logo', // <app></app>
    template: `
        <div class="${styles.logo}"/>
    `
})
export class Logo {

}