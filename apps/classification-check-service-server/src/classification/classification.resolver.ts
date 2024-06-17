import * as graphql from "@nestjs/graphql";
import { ClassificationResolverBase } from "./base/classification.resolver.base";
import { Classification } from "./base/Classification";
import { ClassificationService } from "./classification.service";

@graphql.Resolver(() => Classification)
export class ClassificationResolver extends ClassificationResolverBase {
  constructor(protected readonly service: ClassificationService) {
    super(service);
  }
}
