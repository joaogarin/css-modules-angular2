/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';

/**
 * Include all necessary CSS
 */
var js = require('raw-loader!./StyleVariantA/StyleVariantA.ts');
var css = require('raw-loader!./StyleVariantA/StyleVariantA.css');
var layout = require('raw-loader!./../shared/styles/layout.css');
var heading = require('raw-loader!./../shared/styles/typography.css');

/**
 * Wraps the two components in a snippet component
 */
@Component({
    'selector': 'class-composition-demo',
    'template': `<snippet [files]="files">
        <div>
        <style-variant-a></style-variant-a>
        <br/>
        <style-variant-b></style-variant-b>
      </div>
    </snippet>`
})
export class ClassCompositionDemo implements OnInit {
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
