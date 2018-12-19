import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'filterBy'})
export class MockPipe implements PipeTransform {
    transform(value: number): number {
        // blah blah
        return value;
    }
}