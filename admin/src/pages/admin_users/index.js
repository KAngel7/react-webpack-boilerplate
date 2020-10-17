import {
    ListGuesser,
    EditGuesser,
} from 'react-admin';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default {
    list: ListGuesser,
    edit: EditGuesser,
    options: {label: "Admin"},
    name: "admin_users",
    icon: SupervisorAccountIcon
}