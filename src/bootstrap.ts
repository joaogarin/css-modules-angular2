/*
 * Providers provided by Angular
 */
 import {provide, enableProdMode} from '@angular/core';
 import {bootstrap} from '@angular/platform-browser-dynamic'

 // Angular 2
 import {LocationStrategy, HashLocationStrategy} from '@angular/common';

 //ROUTER
 import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return bootstrap(App, [
    // These are dependencies of our App
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
      .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
