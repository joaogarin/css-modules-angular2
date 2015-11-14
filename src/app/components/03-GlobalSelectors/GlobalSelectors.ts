/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

var styles = require("./GlobalSelectors.css");

@Component({
    'selector': 'global-selectors',
    'template': `<div class="${ styles.root }">
        <p class="text">Global Selectors</p>
      </div>`
})
export class GlobalSelectors {

}