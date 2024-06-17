import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckResultServiceBase } from "./base/checkResult.service.base";

@Injectable()
export class CheckResultService extends CheckResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
