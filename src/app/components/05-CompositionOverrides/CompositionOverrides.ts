/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Include CompositionOverrides css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
import styles from './CompositionOverrides.css';

@Component({
    'selector': 'composition-overrides',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Class Composition with Overrides</p>
      </div>`
})
export class CompositionOverrides {

}
