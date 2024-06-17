import * as graphql from "@nestjs/graphql";
import { CheckResultResolverBase } from "./base/checkResult.resolver.base";
import { CheckResult } from "./base/CheckResult";
import { CheckResultService } from "./checkResult.service";

@graphql.Resolver(() => CheckResult)
export class CheckResultResolver extends CheckResultResolverBase {
  constructor(protected readonly service: CheckResultService) {
    super(service);
  }
}
