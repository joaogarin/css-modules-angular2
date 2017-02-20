/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Include StyleVariantA css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
import styles from './StyleVariantA.css';

@Component({
    'selector': 'style-variant-a',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Style Variant B</p>
      </div>`
})
export class StyleVariantA {

}
