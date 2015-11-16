/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';
import {Snippet} from "../shared/Snippet/Snippet";

var styles = require('./CompositionOverrides.css');
var js = require('!!raw!./CompositionOverrides.ts');
var css = require('!!raw!./CompositionOverrides.css');
var layout = require('!!raw!./../shared/styles/layout.css');
var heading = require('!!raw!./../shared/styles/typography.css');

@Component({
    directives: [Snippet],
    'selector': 'composition-overrides-demo',
    'template': `<snippet [files]="files">
        <div class="${styles.root}">
            <p class="${styles.text}">Class Composition with Overrides</p>
        </div>
    </snippet>`
})
export class CompositionOverridesDemo {
    files: any;

    onInit(){
        this.files = [
            { name: 'CompositionOverrides.ts', source: js },
            { name: 'CompositionOverrides.css', source: css },
            { name: 'layout.css', source: layout },
            { name: 'typography.css', source: heading }
        ];
    }
}