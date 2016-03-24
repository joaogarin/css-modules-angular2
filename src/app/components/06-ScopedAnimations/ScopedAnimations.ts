/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

var styles = require('./ScopedAnimations.css');

@Component({
    'selector': 'scoped-animations',
    'template': `<div class="${styles.root}">
        <div class="${styles.ball}"></div>
      </div>`
})
export class ScopedAnimations {

}
