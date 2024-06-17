import { Classification } from "../classification/Classification";

export type CheckResult = {
  classification?: Classification | null;
  createdAt: Date;
  id: string;
  result: boolean | null;
  updatedAt: Date;
};
