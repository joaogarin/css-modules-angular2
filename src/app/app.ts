/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'app'
    selector: 'app', // <app></app>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Logo],
    // Our list of styles in our component. We may add more to compose many styles together
    template: `
        <logo></logo>
    `
})
export class App {
    // These are member type
    title:string;
    // TypeScript public modifiers
    constructor(public http:Http) {
        this.title = 'Angular 2';
    }

    onInit() {
        // Our API
    }

}