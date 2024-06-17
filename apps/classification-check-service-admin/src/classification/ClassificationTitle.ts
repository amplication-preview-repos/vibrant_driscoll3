import { Classification as TClassification } from "../api/classification/Classification";

export const CLASSIFICATION_TITLE_FIELD = "name";

export const ClassificationTitle = (record: TClassification): string => {
  return record.name?.toString() || String(record.id);
};
