/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/**
 * Include ScopedSelectors css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
var styles = require('./ScopedSelectors.css');

@Component({
    'selector': 'scoped-selectors',
    'template': `<div class="${styles.root}">
            <p class="${styles.text}">Scoped Selectors</p>
          </div>`
})
export class ScopedSelectors {

}
