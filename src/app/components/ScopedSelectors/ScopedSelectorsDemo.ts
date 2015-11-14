/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';
import {Snippet} from "../shared/Snippet/Snippet";

var styles = require("./ScopedSelectors.css");

@Component({
    directives: [Snippet],
    'selector': 'scoped-selectors-demo',
    'template': `<snippet [innertext]="innerContent"></snippet>`
})
export class ScopedSelectorsDemo {
    innerContent: any;

    onInit(){
        this.innerContent = `<div class=${styles.root}>
            <p class=${styles.text}>Scoped Selectors</p>
          </div>`;
    }
}