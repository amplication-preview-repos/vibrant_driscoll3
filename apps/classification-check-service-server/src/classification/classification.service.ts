import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassificationServiceBase } from "./base/classification.service.base";

@Injectable()
export class ClassificationService extends ClassificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
