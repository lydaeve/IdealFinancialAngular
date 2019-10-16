import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initValue = this.element.nativeElement.value;
    this.element.nativeElement.value = initValue.replace(/[^0-9]*/g, '');

    if (initValue !== this.element.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
