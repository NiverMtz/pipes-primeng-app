import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe  implements PipeTransform {
    
    transform(arg: string, enMayusculas: boolean = true ): string {
        return enMayusculas 
        ? arg.toUpperCase() 
        : arg;
    }

}