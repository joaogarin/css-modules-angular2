/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Include the logo css
 */
import styles from "./logo.css";

/*
 * Logo Component
 *
 * Just includes the logo for use in the main app
 */
@Component({
    selector: 'logo', // <app></app>
    template: `
        <div class="${styles.logo}"></div>
    `
})
export class Logo {

}
