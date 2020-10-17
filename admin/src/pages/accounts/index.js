import {
    ListGuesser,
    EditGuesser,
} from 'react-admin';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
export default {
    list: ListGuesser,
    edit: EditGuesser,
    options: {label: "Accounts"},
    name: "accounts",
    icon: AccountBalanceOutlinedIcon
}