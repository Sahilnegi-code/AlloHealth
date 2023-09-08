import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jsonData } from './data.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join  } from 'path';

// __dirname = path.resolve();
console.log(__dirname+ '../my_app/', 'build');
// app.use(express.static(path.join(__dirname, '../my-app/build')))
@Module({ 
  imports: [ ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'build'),
  }),],
  controllers: [AppController],
  providers: [AppService,{
    provide: 'JSON_DATA',
    useValue: jsonData,
  }],

  exports:['JSON_DATA']

})
export class AppModule {}
