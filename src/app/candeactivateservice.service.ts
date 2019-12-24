import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@Injectable()
export class CandeactivateserviceService implements CanDeactivate<ReactiveformComponent>{

  constructor() { }
  canDeactivate(component: ReactiveformComponent): boolean {
    console.log(component.abcdform)
    if (component.abcdform) {
        return confirm('Are you sure you want to discard your changes?');
        console.log("this is deactivate guard");
    }

    return true;
}

  }
