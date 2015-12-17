/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/core';

import {StyleVariantA} from './StyleVariantA/StyleVariantA';
import {StyleVariantB} from './StyleVariantB/StyleVariantB';

@Component({
    'directives': [StyleVariantA,StyleVariantB],
    'selector': 'class-composition',
    'template': `<div>
        <style-variant-a></style-variant-a>
        <br/>
        <style-variant-b></style-variant-b>
      </div>`
})
export class ClassComposition {

}
