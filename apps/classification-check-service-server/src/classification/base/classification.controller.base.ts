/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClassificationService } from "../classification.service";
import { ClassificationCreateInput } from "./ClassificationCreateInput";
import { Classification } from "./Classification";
import { ClassificationFindManyArgs } from "./ClassificationFindManyArgs";
import { ClassificationWhereUniqueInput } from "./ClassificationWhereUniqueInput";
import { ClassificationUpdateInput } from "./ClassificationUpdateInput";
import { CheckResultFindManyArgs } from "../../checkResult/base/CheckResultFindManyArgs";
import { CheckResult } from "../../checkResult/base/CheckResult";
import { CheckResultWhereUniqueInput } from "../../checkResult/base/CheckResultWhereUniqueInput";

export class ClassificationControllerBase {
  constructor(protected readonly service: ClassificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Classification })
  async createClassification(
    @common.Body() data: ClassificationCreateInput
  ): Promise<Classification> {
    return await this.service.createClassification({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Classification] })
  @ApiNestedQuery(ClassificationFindManyArgs)
  async classifications(
    @common.Req() request: Request
  ): Promise<Classification[]> {
    const args = plainToClass(ClassificationFindManyArgs, request.query);
    return this.service.classifications({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Classification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async classification(
    @common.Param() params: ClassificationWhereUniqueInput
  ): Promise<Classification | null> {
    const result = await this.service.classification({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Classification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClassification(
    @common.Param() params: ClassificationWhereUniqueInput,
    @common.Body() data: ClassificationUpdateInput
  ): Promise<Classification | null> {
    try {
      return await this.service.updateClassification({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Classification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClassification(
    @common.Param() params: ClassificationWhereUniqueInput
  ): Promise<Classification | null> {
    try {
      return await this.service.deleteClassification({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/checkResults")
  @ApiNestedQuery(CheckResultFindManyArgs)
  async findCheckResults(
    @common.Req() request: Request,
    @common.Param() params: ClassificationWhereUniqueInput
  ): Promise<CheckResult[]> {
    const query = plainToClass(CheckResultFindManyArgs, request.query);
    const results = await this.service.findCheckResults(params.id, {
      ...query,
      select: {
        classification: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        result: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/checkResults")
  async connectCheckResults(
    @common.Param() params: ClassificationWhereUniqueInput,
    @common.Body() body: CheckResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkResults: {
        connect: body,
      },
    };
    await this.service.updateClassification({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/checkResults")
  async updateCheckResults(
    @common.Param() params: ClassificationWhereUniqueInput,
    @common.Body() body: CheckResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkResults: {
        set: body,
      },
    };
    await this.service.updateClassification({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/checkResults")
  async disconnectCheckResults(
    @common.Param() params: ClassificationWhereUniqueInput,
    @common.Body() body: CheckResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkResults: {
        disconnect: body,
      },
    };
    await this.service.updateClassification({
      where: params,
      data,
      select: { id: true },
    });
  }
}
