/*
 * Angular 2 decorators and services
 */
import {Component, View, NgFor} from 'angular2/angular2';

var styles = require("./snippet.css");

@Component({
    'inputs': ['innertext','files'],
    'selector': 'snippet',
    'directives': [NgFor],
    'template': `<div class=${styles.output}>
                  <div class=${styles.fileName}>Output</div>
                  <div class=${styles.outputContent} [inner-html]="innertext"></div>
                </div>
                <div *ng-for="#file of files" class=${styles.file}>
                  <div class=${styles.fileName}>{{ file.name }}</div>
                  <pre class=${styles.pre}>{{ file.source }}</pre>
                </div>`
})
export class Snippet {
    innertext: string;
    files: any;
}