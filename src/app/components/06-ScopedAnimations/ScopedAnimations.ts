/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

var styles = require("./ScopedAnimations.css");

@Component({
    'selector': 'scoped-animations',
    'template': `<div class="${styles.root}">
        <div class="${styles.ball}" />
      </div>`
})
export class ScopedAnimations {

}