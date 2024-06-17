import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CheckResultTitle } from "../checkResult/CheckResultTitle";

export const ClassificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="checkResults"
          reference="CheckResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
