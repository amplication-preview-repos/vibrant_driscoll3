import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassificationService } from "./classification.service";
import { ClassificationControllerBase } from "./base/classification.controller.base";

@swagger.ApiTags("classifications")
@common.Controller("classifications")
export class ClassificationController extends ClassificationControllerBase {
  constructor(protected readonly service: ClassificationService) {
    super(service);
  }
}
