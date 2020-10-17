import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput
} from 'react-admin';

const UserTitle = ({ record }) => <span>User {record ? `"${record.name}"`: '' }</span>;

/* 
https://github.com/marmelab/react-admin/blob/master/examples/demo/src/products/ProductEdit.tsx
*/

/**
 * TODO: change FORM
 *   
 */

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <SelectInput source="status" choices={[{id: "ACTIVATED", name: "ACTIVATED"}, {id: "INACTIVE", name:"INACTIVE"}]}/>
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
)

export default UserEdit;
