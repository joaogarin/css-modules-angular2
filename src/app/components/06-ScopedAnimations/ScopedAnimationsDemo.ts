/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';

/**
 * Include all necessary CSS and ts
 */
var styles = require('./ScopedAnimations.css');
var js = require('raw-loader!./ScopedAnimations.ts');
var css = require('raw-loader!./ScopedAnimations.css');
var animations = require('raw-loader!./../shared/styles/animations.css');

/**
 * Wraps the component in a snippet component
 */
@Component({
    'selector': 'scoped-animations-demo',
    'template': `<snippet [files]="files">
        <div class="${styles.root}">
         <div class="${styles.ball}"></div>
        </div>
    </snippet>`
})
export class ScopedAnimationsDemo implements OnInit {
    files: any;

    ngOnInit() {
        this.files = [
            { name: 'ScopedAnimations.ts', source: js },
            { name: 'ScopedAnimations.css', source: css },
            { name: 'animations.css', source: animations }
        ];
    }
}
