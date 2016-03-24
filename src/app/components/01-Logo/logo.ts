/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

var styles = require('./logo.css');

/*
 * Logo Component
 */
@Component({
    selector: 'logo', // <app></app>
    template: `
        <div class="${styles.logo}"></div>
    `
})
export class Logo {

}
