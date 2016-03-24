/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {Snippet} from '../shared/Snippet/Snippet';

var styles = require('./ScopedAnimations.css');
var js = require('!!raw!./ScopedAnimations.ts');
var css = require('!!raw!./ScopedAnimations.css');
var animations = require('!!raw!./../shared/styles/animations.css');

@Component({
    directives: [Snippet],
    'selector': 'scoped-animations-demo',
    'template': `<snippet [files]="files">
        <div class="${styles.root}">
         <div class="${styles.ball}"></div>
        </div>
    </snippet>`
})
export class ScopedAnimationsDemo {
    files:any;

    ngOnInit() {
        this.files = [
            {name: 'ScopedAnimations.ts', source: js},
            {name: 'ScopedAnimations.css', source: css},
            {name: 'animations.css', source: animations}
        ];
    }
}
