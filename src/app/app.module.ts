import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the root component
import { AppComponent } from './app';


import { ScopedAnimationsDemo } from './components/06-ScopedAnimations/ScopedAnimationsDemo';
import { CompositionOverridesDemo } from './components/05-CompositionOverrides/CompositionOverridesDemo';
import { ClassCompositionDemo } from './components/04-ClassComposition/ClassCompositionDemo';
import { GlobalSelectorsDemo } from './components/03-GlobalSelectors/GlobalSelectorsDemo';
import { Snippet } from './components/shared/Snippet/snippet';
import { ScopedSelectorsDemo } from './components/02-ScopedSelectors/ScopedSelectorsDemo';
import { Logo } from './components/01-Logo/logo';
import { StyleVariantB } from './components/04-ClassComposition/StyleVariantB/StyleVariantB';
import { StyleVariantA } from './components/04-ClassComposition/StyleVariantA/StyleVariantA';

if ('production' === ENV) {
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
    ], declarations: [
        AppComponent,
        Logo,
        ScopedSelectorsDemo,
        Snippet,
        GlobalSelectorsDemo,
        ClassCompositionDemo,
        CompositionOverridesDemo,
        ScopedAnimationsDemo,
        StyleVariantA,
        StyleVariantB,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
