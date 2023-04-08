import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe  implements PipeTransform {
    
    transform(arg: string ): string {
        return arg ? 'vuela' : 'no vuela';
    }

}