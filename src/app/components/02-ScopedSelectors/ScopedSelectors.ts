/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

var styles = require('./ScopedSelectors.css');

@Component({
    'selector': 'scoped-selectors',
    'template': `<div class="${styles.root}">
            <p class="${styles.text}">Scoped Selectors</p>
          </div>`
})
export class ScopedSelectors {

}
