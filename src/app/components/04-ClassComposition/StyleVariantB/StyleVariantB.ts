/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Include StyleVariantB css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
var styles = require('./StyleVariantB.css');

@Component({
    'selector': 'style-variant-b',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Style Variant B</p>
      </div>`
})
export class StyleVariantB {

}
