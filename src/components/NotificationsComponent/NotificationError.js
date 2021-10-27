import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';

const ErrorNotification = (props) => {
    const isOpen = useSelector(state => state.errors.isOpen);
    const error = useSelector(state => state.errors.error);

    const dispatch = useDispatch();

    const handleClose=()=> {
        dispatch({ type: 'HIDE_ERROR' });
    }

    return (
        <>
            {isOpen && error && (
                <Alert color='danger' className="fancy-error-class">
                   <span> {error} <button onClick={handleClose}><i className ='far fa-window-close'></i></button></span>
                </Alert>
            )}
        </>
    )
}

export default ErrorNotification;