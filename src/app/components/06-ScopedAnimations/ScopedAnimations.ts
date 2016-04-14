/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/**
 * Include ScopedAnimations css to be injected in the template
 * Webpack will process this CSS in module mode
 * See the webpack.config.js in the root folder
 */
var styles = require('./ScopedAnimations.css');

@Component({
    'selector': 'scoped-animations',
    'template': `<div class="${styles.root}">
        <div class="${styles.ball}"></div>
      </div>`
})
export class ScopedAnimations {

}
