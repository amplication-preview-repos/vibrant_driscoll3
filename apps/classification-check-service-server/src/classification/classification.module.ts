import { Module } from "@nestjs/common";
import { ClassificationModuleBase } from "./base/classification.module.base";
import { ClassificationService } from "./classification.service";
import { ClassificationController } from "./classification.controller";
import { ClassificationResolver } from "./classification.resolver";

@Module({
  imports: [ClassificationModuleBase],
  controllers: [ClassificationController],
  providers: [ClassificationService, ClassificationResolver],
  exports: [ClassificationService],
})
export class ClassificationModule {}
