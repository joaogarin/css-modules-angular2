/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

var styles = require("./snippet.css");

@Component({
    'inputs': ['innertext'],
    'selector': 'snippet',
    'template': `<div class=${styles.output}>
          <div class=${styles.fileName}>Output</div>
          <div class=${styles.outputContent} [inner-html]="innertext">
          </div>
        </div>`
})
export class Snippet {
    innertext: any;
}