import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('JSON_DATA') private readonly jsonData: Record<string, any>) {}

  getData(): any {
    return this.jsonData;
  }
}
