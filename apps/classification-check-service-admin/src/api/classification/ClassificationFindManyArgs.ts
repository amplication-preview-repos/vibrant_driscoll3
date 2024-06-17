import { ClassificationWhereInput } from "./ClassificationWhereInput";
import { ClassificationOrderByInput } from "./ClassificationOrderByInput";

export type ClassificationFindManyArgs = {
  where?: ClassificationWhereInput;
  orderBy?: Array<ClassificationOrderByInput>;
  skip?: number;
  take?: number;
};
