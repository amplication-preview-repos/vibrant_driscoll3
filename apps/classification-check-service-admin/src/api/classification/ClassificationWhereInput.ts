import { CheckResultListRelationFilter } from "../checkResult/CheckResultListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClassificationWhereInput = {
  checkResults?: CheckResultListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
