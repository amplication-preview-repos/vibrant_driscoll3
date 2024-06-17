import { CheckResult as TCheckResult } from "../api/checkResult/CheckResult";

export const CHECKRESULT_TITLE_FIELD = "id";

export const CheckResultTitle = (record: TCheckResult): string => {
  return record.id?.toString() || String(record.id);
};
