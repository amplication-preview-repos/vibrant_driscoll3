/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Classification as PrismaClassification,
  CheckResult as PrismaCheckResult,
} from "@prisma/client";

export class ClassificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClassificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.classification.count(args);
  }

  async classifications<T extends Prisma.ClassificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClassificationFindManyArgs>
  ): Promise<PrismaClassification[]> {
    return this.prisma.classification.findMany<Prisma.ClassificationFindManyArgs>(
      args
    );
  }
  async classification<T extends Prisma.ClassificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClassificationFindUniqueArgs>
  ): Promise<PrismaClassification | null> {
    return this.prisma.classification.findUnique(args);
  }
  async createClassification<T extends Prisma.ClassificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClassificationCreateArgs>
  ): Promise<PrismaClassification> {
    return this.prisma.classification.create<T>(args);
  }
  async updateClassification<T extends Prisma.ClassificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClassificationUpdateArgs>
  ): Promise<PrismaClassification> {
    return this.prisma.classification.update<T>(args);
  }
  async deleteClassification<T extends Prisma.ClassificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClassificationDeleteArgs>
  ): Promise<PrismaClassification> {
    return this.prisma.classification.delete(args);
  }

  async findCheckResults(
    parentId: string,
    args: Prisma.CheckResultFindManyArgs
  ): Promise<PrismaCheckResult[]> {
    return this.prisma.classification
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .checkResults(args);
  }
}
