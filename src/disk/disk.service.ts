import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Drawing 30 watts of power from PorwerService');
    this.powerService.supplyPower(30);
    return 'Return data';
  }
}
