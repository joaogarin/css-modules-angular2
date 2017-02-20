/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';

/**
 * Include all necessary CSS and ts
 */
var styles = require('./CompositionOverrides.css');
var js = require('raw-loader!./CompositionOverrides.ts');
var css = require('raw-loader!./CompositionOverrides.css');
var layout = require('raw-loader!./../shared/styles/layout.css');
var heading = require('raw-loader!./../shared/styles/typography.css');

/**
 * Wraps the component in a snippet component
 */
@Component({
    'selector': 'composition-overrides-demo',
    'template': `<snippet [files]="files">
        <div class="${styles.root}">
            <p class="${styles.text}">Class Composition with Overrides</p>
        </div>
    </snippet>`
})
export class CompositionOverridesDemo implements OnInit {
    files:any;

    ngOnInit() {
        this.files = [
            {name: 'CompositionOverrides.ts', source: js},
            {name: 'CompositionOverrides.css', source: css},
            {name: 'layout.css', source: layout},
            {name: 'typography.css', source: heading}
        ];
    }
}
