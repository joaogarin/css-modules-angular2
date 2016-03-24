/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

var styles = require('./StyleVariantA.css');

@Component({
    'selector': 'style-variant-a',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Style Variant B</p>
      </div>`
})
export class StyleVariantA {

}
