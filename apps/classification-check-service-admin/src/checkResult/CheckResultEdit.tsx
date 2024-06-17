import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { ClassificationTitle } from "../classification/ClassificationTitle";

export const CheckResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
