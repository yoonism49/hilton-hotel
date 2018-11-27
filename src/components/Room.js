import React from 'react';
import { connect } from 'react-redux';
import { changeTaskStatus, removeTask } from '../actions';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';
class  Room  extends React.Component { 
    constructor(props) {
     super(props);

     this.state = {
       checkedItems: new Map()
     }

     this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let {changeStatus, remove}=this.props;
        const item = e.target.name;
        const isChecked = e.target.checked;
        if(isChecked) {
           this.props.changeStatus(item);
        } else {
           this.props.remove(item);
        }
        this.props.onChange(e);
    }        
    render() {
        let { status, id}=this.props;
        return (
            <div className={`room ${status}-room`}>
                {id > 1? <h5> 
                    <Checkbox key={id} name={id} checked={status==='enabled' ? true : false} onChange={this.handleChange} />
                    Room {id}
                </h5> : <h5>&nbsp;</h5>}
                <div className="room-dropdown">
                    <h5>Adult</h5>
                    <select className = {`dropdown-${status}`}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="room-dropdown">
                    <h5>Children</h5>
                    <select className = {`dropdown-${status}`}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
        );
    }
}
Room.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
}
const mapStateToProps = (state) => {
    return { 
        rooms: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: (item) => {
            dispatch(changeTaskStatus(item));
        },
        remove: (item) => {
            dispatch(removeTask(item));
        }
    };
};

export default connect(
    null, 
    mapDispatchToProps
)(Room);

