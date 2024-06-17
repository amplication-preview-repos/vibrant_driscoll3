import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckResultService } from "./checkResult.service";
import { CheckResultControllerBase } from "./base/checkResult.controller.base";

@swagger.ApiTags("checkResults")
@common.Controller("checkResults")
export class CheckResultController extends CheckResultControllerBase {
  constructor(protected readonly service: CheckResultService) {
    super(service);
  }
}
