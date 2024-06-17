import { Module } from "@nestjs/common";
import { CheckResultModuleBase } from "./base/checkResult.module.base";
import { CheckResultService } from "./checkResult.service";
import { CheckResultController } from "./checkResult.controller";
import { CheckResultResolver } from "./checkResult.resolver";

@Module({
  imports: [CheckResultModuleBase],
  controllers: [CheckResultController],
  providers: [CheckResultService, CheckResultResolver],
  exports: [CheckResultService],
})
export class CheckResultModule {}
