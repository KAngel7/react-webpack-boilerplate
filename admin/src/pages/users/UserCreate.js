import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';

const UserCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="email" />
        <TextInput source="password" />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate;