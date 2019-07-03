import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule} from './carros/carros.module';
import { ClientesModule} from './clientes/clientes.module';
@Module({
  imports: [CarrosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
