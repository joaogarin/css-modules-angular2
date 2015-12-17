/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/core';
import {Snippet} from '../shared/Snippet/Snippet';

var styles = require('./GlobalSelectors.css');
var js = require('!!raw!./GlobalSelectors.ts');
var css = require('!!raw!./GlobalSelectors.css');

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
