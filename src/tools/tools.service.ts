import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}

  create(createToolDto: CreateToolDto) {
    return this.prisma.tool.create({
      data: createToolDto,
    });
  }

  findAll() {
    return this.prisma.tool.findMany({
      include: { module: true },
    });
  }

  findOne(id: number) {
    return this.prisma.tool.findUnique({
      where: { id },
      include: { items: true, module: true },
    });
  }

  update(id: number, updateToolDto: UpdateToolDto) {
    return `This action updates a #${id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
