import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import data from '../Data/data';
// import * as fs from 'fs';

// const rawData = fs.readFileSync(__dirname+'Data/data.json', 'utf-8');
// constructor(@Inject('JSON_DATA') private readonly jsonData: Record<string, any>) {}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/data')
  getData(): JSON{
    return this.appService.getData();
  }
}
