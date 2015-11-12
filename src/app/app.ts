/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES} from 'angular2/angular2';

/*
* Custom components
*/
import {Logo} from "./components/logo/logo";

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'app', // <app></app>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [CORE_DIRECTIVES, Logo],
    // The template for our app
    template: `
        <logo></logo>
    `
})
export class App {
    onInit() {
        // Our API
    }
}