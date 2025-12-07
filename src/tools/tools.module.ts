import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { ShoppingToolsModule } from './shopping-tools/shopping-tools.module';
import { StreamingToolsModule } from './streaming-tools/streaming-tools.module';
import { ShoppingModule } from './shopping/shopping.module';
import { StreamingModule } from './streaming/streaming.module';
import { LearningModule } from './learning/learning.module';
import { WikiModule } from './wiki/wiki.module';

@Module({
  controllers: [ToolsController],
  providers: [ToolsService],
  imports: [ShoppingToolsModule, StreamingToolsModule, ShoppingModule, StreamingModule, LearningModule, WikiModule],
})
export class ToolsModule {}
