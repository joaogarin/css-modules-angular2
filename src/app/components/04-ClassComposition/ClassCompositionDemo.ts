/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/**
 * Import the snippet component
 */
import {Snippet} from '../shared/Snippet/Snippet';

/**
 * Import the variants components
 */
import {StyleVariantA} from './StyleVariantA/StyleVariantA';
import {StyleVariantB} from './StyleVariantB/StyleVariantB';

/**
 * Include all necessary CSS
 */
var js = require('!!raw!./StyleVariantA/StyleVariantA.ts');
var css = require('!!raw!./StyleVariantA/StyleVariantA.css');
var layout = require('!!raw!./../shared/styles/layout.css');
var heading = require('!!raw!./../shared/styles/typography.css');

/**
 * Wraps the two components in a snippet component
 */
@Component({
    directives: [Snippet, StyleVariantA, StyleVariantB],
    'selector': 'class-composition-demo',
    'template': `<snippet [files]="files">
        <div>
        <style-variant-a></style-variant-a>
        <br/>
        <style-variant-b></style-variant-b>
      </div>
    </snippet>`
})
export class ClassCompositionDemo {
    files:any;

    ngOnInit() {
        this.files = [
            {name: 'StyleVariantA.ts', source: js},
            {name: 'StyleVariantA.css', source: css},
            {name: 'layout.css', source: layout},
            {name: 'typography.css', source: heading}
        ];
    }
}
