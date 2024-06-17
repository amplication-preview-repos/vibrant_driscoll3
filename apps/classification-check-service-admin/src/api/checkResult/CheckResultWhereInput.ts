import { ClassificationWhereUniqueInput } from "../classification/ClassificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CheckResultWhereInput = {
  classification?: ClassificationWhereUniqueInput;
  id?: StringFilter;
  result?: BooleanNullableFilter;
};
