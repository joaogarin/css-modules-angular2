/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';

/**
 * Include GlobalSelectors css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
var styles = require('./GlobalSelectors.css');
var js = require('raw-loader!./GlobalSelectors.ts');
var css = require('raw-loader!./GlobalSelectors.css');

/**
 * Wraps the main component in a snippet component
 */
@Component({
    'selector': 'global-selectors-demo',
    'template': `<snippet [files]="files">
        <div class="${ styles.root}">
        <p class="text">Global Selectors</p>
      </div>
    </snippet>`
})
export class GlobalSelectorsDemo implements OnInit {
    files: any;

    ngOnInit() {
        this.files = [
            { name: 'GlobalSelectors.ts', source: js },
            { name: 'GlobalSelectors.css', source: css }
        ];
    }
}
