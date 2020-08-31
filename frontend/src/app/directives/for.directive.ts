import { Directive, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnChanges {


  @Input('myForEm') numbers : number[]
  @Input('myForUsando') texto : string

  constructor() { 
    
  }
  ngOnInit(): void {
    console.log(this.numbers)
    console.log(this.texto)
    //throw new Error('Method not implemented.');
  }

}
