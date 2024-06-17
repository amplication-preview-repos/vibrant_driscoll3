import { ClassificationWhereUniqueInput } from "../classification/ClassificationWhereUniqueInput";

export type CheckResultUpdateInput = {
  classification?: ClassificationWhereUniqueInput | null;
  result?: boolean | null;
};
