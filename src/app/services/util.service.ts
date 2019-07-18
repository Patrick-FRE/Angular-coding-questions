import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private logger: LoggerService) { }

  add(n1: number, n2: number) {
    this.logger.log('addition called');
    return n1 + n2;
  }

  substract(n1: number, n2: number) {
    this.logger.log('substract called');
    return n1 - n2;
  }
}
