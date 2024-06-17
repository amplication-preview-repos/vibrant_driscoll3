import { ClassificationWhereUniqueInput } from "../classification/ClassificationWhereUniqueInput";

export type CheckResultCreateInput = {
  classification?: ClassificationWhereUniqueInput | null;
  result?: boolean | null;
};
