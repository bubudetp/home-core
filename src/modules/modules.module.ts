import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { ShoppingModulesModule } from './shopping-modules.module';
import { ShoppingModulesController } from './shopping-modules.controller';
import { ShoppingModulesService } from './shopping-modules.service';
import { LearningModulesModule } from './learning-modules.module';
import { ShoppingModulesModule } from './modules/shopping-modules/shopping-modules.module';

@Module({
  controllers: [ModulesController, ShoppingModulesController],
  providers: [ModulesService, ShoppingModulesService],
  imports: [ShoppingModulesModule, LearningModulesModule],
})
export class ModulesModule {}
