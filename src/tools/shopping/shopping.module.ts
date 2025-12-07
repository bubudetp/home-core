import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  controllers: [ShoppingController],
  providers: [ShoppingService],
  imports: [WishlistModule],
})
export class ShoppingModule {}
