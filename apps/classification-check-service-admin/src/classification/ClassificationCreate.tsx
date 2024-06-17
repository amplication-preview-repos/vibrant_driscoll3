import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CheckResultTitle } from "../checkResult/CheckResultTitle";

export const ClassificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
