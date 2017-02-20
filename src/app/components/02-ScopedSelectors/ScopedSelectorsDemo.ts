/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';

/**
 * Include ScopedSelectors css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
import styles from "./ScopedSelectors.css";

var js = require('raw-loader!./ScopedSelectors.ts');
var css = require('raw-loader!./ScopedSelectors.css');

/**
 * Wraps the main component in a snippet component
 */
@Component({
    'selector': 'scoped-selectors-demo',
    'template': `<snippet [files]="files">
        <div class="${styles.root}">
            <p class="${styles.text}">Scoped Selectors</p>
          </div>
    </snippet>`
})
export class ScopedSelectorsDemo implements OnInit {
    files:any;

    ngOnInit() {
        this.files = [
            {name: 'ScopedSelectors.ts', source: js},
            {name: 'ScopedSelectors.css', source: css}
        ];
    }
}
