import { DestacarDirective } from './destacar.directive';
import { DebugElement } from '@angular/core';

// con la x excluyo el test (xdescribe)
fdescribe('DestacarDirective', () => {

  // let component: Component;
  // let fixture: ComponentFixture<Component>;
  let elem: DebugElement;

  it('should create an instance', () => {
     const directive = new DestacarDirective(elem);
     expect(directive).toBeTruthy();
  });
});
