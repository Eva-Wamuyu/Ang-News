import { Directive,HostListener } from "@angular/core";
import { Location } from "@angular/common";


@Directive({
    selector: '[goBack]'
})
export class GoBackDirective{
    constructor(private location: Location) { }


    @HostListener('click')
    onClick = ()=>{
        this.location.back();
    }
}