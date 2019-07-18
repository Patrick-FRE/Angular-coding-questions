import { UtilService } from './util.service';
import { LoggerService } from './logger.service';

describe('UtilService', () => {
  let logger: LoggerService;
  let utilService: UtilService;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ['log']);
    utilService = new UtilService(logger);
  });

  fit('should add two numbers with logger', () => {

    expect(logger.log).toHaveBeenCalledTimes(0);
    const result = utilService.add(2, 2);
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(result).toBe(4);
  });
  fit('should substract two numbers with logger', () => {

    expect(logger.log).toHaveBeenCalledTimes(0);
    const result = utilService.substract(2, 2);
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(result).toBe(0);
  });

});
