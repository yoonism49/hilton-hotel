import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';

const Submit = ({ dispatch, state }) => {
     const submitTask = (e) => {
        e.preventDefault();
        dispatch(reset());
        
    };

    return (
        <div className="form-container">
            <form onSubmit={submitTask}>
                <input className="form-submit" type="submit" value="Reset All Rooms!"/>
            </form>
        </div>
    );
};

export default connect()(Submit);