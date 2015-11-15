/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

var styles = require("./CompositionOverrides.css");

@Component({
    'selector': 'composition-overrides',
    'template': `<div class="${styles.root}">
        <p class="${styles.text}">Class Composition with Overrides</p>
      </div>`
})
export class CompositionOverrides {

}