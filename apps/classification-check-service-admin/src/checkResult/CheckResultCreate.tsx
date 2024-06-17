import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { ClassificationTitle } from "../classification/ClassificationTitle";

export const CheckResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classification.id"
          reference="Classification"
          label="Classification"
        >
          <SelectInput optionText={ClassificationTitle} />
        </ReferenceInput>
        <BooleanInput label="result" source="result" />
      </SimpleForm>
    </Create>
  );
};
