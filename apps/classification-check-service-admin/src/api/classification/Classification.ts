import { CheckResult } from "../checkResult/CheckResult";

export type Classification = {
  checkResults?: Array<CheckResult>;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
