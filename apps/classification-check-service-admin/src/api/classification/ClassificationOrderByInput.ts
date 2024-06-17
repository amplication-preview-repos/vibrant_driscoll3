import { SortOrder } from "../../util/SortOrder";

export type ClassificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
