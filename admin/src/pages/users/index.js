import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import PersonIcon from '@material-ui/icons/Person';

export default {
  list: UserList,
  create: UserCreate,
  edit: UserEdit,
  icon: PersonIcon,
  options: { label: "Users"},
  name: "users"
};
