/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

@Component({
    'selector': 'class-composition',
    'template': `<div>
        <style-variant-a></style-variant-a>
        <br/>
        <style-variant-b></style-variant-b>
      </div>`
})
export class ClassComposition {}
