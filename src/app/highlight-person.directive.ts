import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightPerson]',
})
export class HighlightPersonDirective implements OnInit {
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'lightblue';
    // this.renderer.setStyle(
    //   this.elementref.nativeElement,
    //   'background-color',
    //   'lightblue'
    // ); //set background color with renderer in a directive
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'lightyellow';

    // this.renderer.setStyle(
    //   this.elementref.nativeElement,
    //   'background-color',
    //   'transparent'
    // ); //set background color with renderer in a directive
  }
}
