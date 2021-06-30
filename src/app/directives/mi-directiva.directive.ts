import { Directive,ElementRef,Input,Renderer2,HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(public el:ElementRef,public renderer:Renderer2) { }

  @Input() miDirectiva:boolean
  @HostListener('mouseenter') onMouseEnter(){
    this.hover(true)
  }
  @HostListener('mouseleave') onMouseLeve(){
    this.hover(false)
  }
  
  ngOnInit(){
    //el renderer nos permite aplicarle cosas al elemento
  // if(this.miDirectiva) this.renderer.setStyle(this.el.nativeElement,'color',"red")
  }

  hover(color:boolean){
    if(color){
      this.renderer.setStyle(this.el.nativeElement,'color',"red")
    }else{
      this.renderer.setStyle(this.el.nativeElement,'color',"")
    }
  }
}
