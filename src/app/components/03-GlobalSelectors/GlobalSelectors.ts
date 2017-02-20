/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Include GlobalSelectors css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
import styles from './GlobalSelectors.css';

@Component({
    'selector': 'global-selectors',
    'template': `<div class="${ styles.root }">
        <p class="text">Global Selectors</p>
      </div>`
})
export class GlobalSelectors {

}
