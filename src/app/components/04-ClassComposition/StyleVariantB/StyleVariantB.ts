/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/core';

var styles = require('./StyleVariantB.css');

@Component({
    'selector': 'style-variant-b',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Style Variant B</p>
      </div>`
})
export class StyleVariantB {

}
