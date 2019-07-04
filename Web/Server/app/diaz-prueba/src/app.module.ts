import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule} from './carros/carros.module';
import { ClientesModule} from './clientes/clientes.module';
import { VendedoresModule} from './vendedores/vendedores.module'
@Module({
  imports: [CarrosModule, ClientesModule, VendedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
