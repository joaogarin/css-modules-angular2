/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';
import {Snippet} from "../shared/Snippet/Snippet";

var styles = require("./ScopedSelectors.css");

@Component({
    directives: [Snippet],
    'selector': 'scoped-selectors',
    'template': `<div class=${styles.root}>
            <p class=${styles.text}>Scoped Selectors</p>
          </div>`
})
export class ScopedSelectors {

}