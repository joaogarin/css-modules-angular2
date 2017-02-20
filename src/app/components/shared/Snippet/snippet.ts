/*
 * Angular 2 decorators and services
 */
import { Component, Input } from '@angular/core';

import styles from './snippet.css';

@Component({
  'inputs': ['files'],
  'selector': 'snippet',
  'template': `<div class=${styles.output}>
                  <div class=${styles.fileName}>Output</div>
                  <div class=${styles.outputContent}>
                    <ng-content></ng-content>
                  </div>
                </div>
                <div *ngFor="let file of files" class=${styles.file}>
                  <div class=${styles.fileName}>{{ file.name }}</div>
                  <pre class=${styles.pre}>{{ file.source }}</pre>
                </div>`
})
export class Snippet {
  @Input() files: any;
}
