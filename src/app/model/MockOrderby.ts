import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'orderBy'})
export class MockOrderby implements PipeTransform {
    transform(value: number): number {
        // blah blah
        return value;
    }
}