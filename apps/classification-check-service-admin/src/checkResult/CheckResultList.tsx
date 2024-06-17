import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CLASSIFICATION_TITLE_FIELD } from "../classification/ClassificationTitle";

export const CheckResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CheckResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Classification"
          source="classification.id"
          reference="Classification"
        >
          <TextField source={CLASSIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
