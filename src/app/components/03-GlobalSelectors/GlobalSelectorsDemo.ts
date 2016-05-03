/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

/**
 * Import the snippet component
 */
import {Snippet} from '../shared/Snippet/Snippet';

/**
 * Include GlobalSelectors css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
var styles = require('./GlobalSelectors.css');
var js = require('!!raw!./GlobalSelectors.ts');
var css = require('!!raw!./GlobalSelectors.css');

/**
 * Wraps the main component in a snippet component
 */
@Component({
    directives: [Snippet],
    'selector': 'global-selectors-demo',
    'template': `<snippet [files]="files">
        <div class="${ styles.root }">
        <p class="text">Global Selectors</p>
      </div>
    </snippet>`
})
export class GlobalSelectorsDemo {
    files:any;

    ngOnInit() {
        this.files = [
            {name: 'GlobalSelectors.ts', source: js},
            {name: 'GlobalSelectors.css', source: css}
        ];
    }
}
