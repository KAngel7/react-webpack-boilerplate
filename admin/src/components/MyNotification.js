import React from 'react';
import { Notification } from 'react-admin';

const MyNotification = props => {

    return (
        <Notification {...props} autoHideDuration={5000} />
    );
}

export default MyNotification;