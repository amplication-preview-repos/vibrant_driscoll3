import { CheckResultCreateNestedManyWithoutClassificationsInput } from "./CheckResultCreateNestedManyWithoutClassificationsInput";

export type ClassificationCreateInput = {
  checkResults?: CheckResultCreateNestedManyWithoutClassificationsInput;
  name?: string | null;
  typeField?: string | null;
};
