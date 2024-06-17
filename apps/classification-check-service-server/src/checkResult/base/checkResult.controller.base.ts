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
import { CheckResultService } from "../checkResult.service";
import { CheckResultCreateInput } from "./CheckResultCreateInput";
import { CheckResult } from "./CheckResult";
import { CheckResultFindManyArgs } from "./CheckResultFindManyArgs";
import { CheckResultWhereUniqueInput } from "./CheckResultWhereUniqueInput";
import { CheckResultUpdateInput } from "./CheckResultUpdateInput";

export class CheckResultControllerBase {
  constructor(protected readonly service: CheckResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CheckResult })
  async createCheckResult(
    @common.Body() data: CheckResultCreateInput
  ): Promise<CheckResult> {
    return await this.service.createCheckResult({
      data: {
        ...data,

        classification: data.classification
          ? {
              connect: data.classification,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CheckResult] })
  @ApiNestedQuery(CheckResultFindManyArgs)
  async checkResults(@common.Req() request: Request): Promise<CheckResult[]> {
    const args = plainToClass(CheckResultFindManyArgs, request.query);
    return this.service.checkResults({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async checkResult(
    @common.Param() params: CheckResultWhereUniqueInput
  ): Promise<CheckResult | null> {
    const result = await this.service.checkResult({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCheckResult(
    @common.Param() params: CheckResultWhereUniqueInput,
    @common.Body() data: CheckResultUpdateInput
  ): Promise<CheckResult | null> {
    try {
      return await this.service.updateCheckResult({
        where: params,
        data: {
          ...data,

          classification: data.classification
            ? {
                connect: data.classification,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCheckResult(
    @common.Param() params: CheckResultWhereUniqueInput
  ): Promise<CheckResult | null> {
    try {
      return await this.service.deleteCheckResult({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}