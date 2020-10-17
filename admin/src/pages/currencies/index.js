import {
    ListGuesser,
    EditGuesser,
} from 'react-admin';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

export default {
    list: ListGuesser,
    edit: EditGuesser,
    options: {label: "Currencies"},
    name: "currency",
    icon: AttachMoneyOutlinedIcon
}