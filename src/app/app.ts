/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/*
 * Custom components
 */
import {Logo} from './components/01-Logo/logo';
import {Snippet} from './components/shared/Snippet/Snippet';
import {ScopedSelectorsDemo} from './components/02-ScopedSelectors/ScopedSelectorsDemo';
import {GlobalSelectorsDemo} from './components/03-GlobalSelectors/GlobalSelectorsDemo';
import {ClassCompositionDemo} from './components/04-ClassComposition/ClassCompositionDemo';
import {CompositionOverridesDemo} from './components/05-CompositionOverrides/CompositionOverridesDemo';
import {ScopedAnimationsDemo} from './components/06-ScopedAnimations/ScopedAnimationsDemo';

var styles = require('./app.css');

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'app', // <app></app>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [Logo, ScopedSelectorsDemo, Snippet, GlobalSelectorsDemo, ClassCompositionDemo, CompositionOverridesDemo, ScopedAnimationsDemo],
    // The template for our app
    template: `
    <div class="${styles.app}">
        <logo></logo>
        <h1>CSS Modules Angular2 + Webpack Demo</h1>
        <hr class="${styles.hr}" />
        <h2>Scoped Selectors</h2>
        <p>In CSS Modules, selectors are scoped by default.</p>
        <p>The following component uses two classes, <strong>.root</strong> and <strong>.text</strong>, both of which would typically be too vague in a larger project.</p>
        <p>CSS Module semantics ensure that these <strong>classes are locally scoped</strong> to the component and don't collide with other classes in the global scope.</p>
        <scoped-selectors-demo></scoped-selectors-demo>
        <h2>Global Selectors</h2>
        <p>Although they should be used as sparingly as possible, <strong>global selectors are still available when required.</strong></p>
        <p>The following component styles all <strong>&lt;p&gt;</strong> tags nested inside it.</p>
        <global-selectors-demo></global-selectors-demo>
        <hr class="${styles.hr}" />
        <h2>Class Composition</h2>
        <p>Both of the components below have <strong>locally scoped CSS</strong> that is <strong>composed from a common set of CSS Modules.</strong></p>
        <p>Since <strong>CSS Modules can be composed</strong>, the resulting markup is optimised by <b>reusing classes between components</b>.</p>
        <class-composition-demo></class-composition-demo>
        <hr class="${styles.hr}" />
        <h2>Composition Overrides</h2>
        <p>When composing classes, <strong>inherited style properties can be overridden</strong> as you'd expect.</p>
        <p>The following component composes two different classes, but provides overrides which then take precedence.</p>
        <composition-overrides-demo></composition-overrides-demo>
        <hr class="${styles.hr}" />
        <h2>Scoped Animations</h2>
        <p>CSS Modules even provide <strong>locally scoped animations</strong>, which are typically defined in the global scope.</p>
        <p>The animation's keyframes are private to the animations module, only exposed publicly via a class which this component inherits from.</p>
        <scoped-animations-demo></scoped-animations-demo>
    </div>
    `
})
export class App {
    ngOnInit() {
        // Our API
    }
}
