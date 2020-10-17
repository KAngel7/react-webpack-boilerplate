import React from 'react';
import { 
	Chip, 
	makeStyles, 
	TableCell,
	TableRow,
	Checkbox
} from '@material-ui/core';
import {
	Filter,
	EmailField,
	SearchInput,
	TextField,
	Datagrid,
	List,
	DatagridBody,
	ChipField,
	EditButton
} from 'react-admin';

const useQuickFilterStyles = makeStyles(theme => ({
	root: {
    marginBottom: theme.spacing(3),
	},
}));

const QuickFilter = ({ label }) => {
	const classes = useQuickFilterStyles();
	return <Chip className={classes.root} label={label} />;
};

export const UserFilter = props => (
	<Filter {...props}>
		<SearchInput source='q' alwaysOn />
		<QuickFilter source='status' label='Status' defaultValue={"ACTIVATED"} />
	</Filter>
);

const MyDataGridRow = ({record, resource, id, onToggleItem, children, selected, basePath}) => {
	
	return (
		<TableRow key={id}>
			<TableCell >
				<Checkbox
					disabled={record.selectable}
					checked={selected}
					onClick={() => onToggleItem(id)}
				/>
			</TableCell>
			{React.Children.map(children, field => {
				if (field.props.source === 'status') {
					return (
						<TableCell key={`${id}-${field.props.source}`}>
						<Chip
							label={record[field.props.source] || "INACTIVE"}
							color={record[field.props.source] === "ACTIVATED" ? "primary" : "default"}
							size="small"
						/>
            			</TableCell>
					)
				}
				return (
					<TableCell key={`${id}-${field.props.source}`}>
					{
						React.cloneElement(field, {
							record,
							basePath,
							resource
						})
					}
            		</TableCell>
				)
			})}
		</TableRow>
	);
}

const MyDataGridBody = props => <DatagridBody {...props} row={<MyDataGridRow />} />;

const MyDataGrid = props => <Datagrid {...props} body={<MyDataGridBody />} />;

const UserList = props => {
	return (
		<List {...props} filters={<UserFilter />}>
			<MyDataGrid rowClick='edit'>
				<TextField source='id' />
				<TextField source='first_name' />
				<TextField source='last_name' />
				<EmailField source='email' />
				<ChipField 
					source='status'
				/>
				<EditButton />
			</MyDataGrid>
		</List>
	);
};

export default UserList;
