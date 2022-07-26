import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any): string {
    let modifiedDescription;
    if(value== undefined){

      modifiedDescription = "None";
      return modifiedDescription;

    }
    else if(value.length>70){
      
      return value.slice(0,70)+"...";
    }
    else{
      
      return value;
    }

   
    
  }

}