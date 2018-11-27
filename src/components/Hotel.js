import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { changeTaskStatus, removeTask } from '../actions';
import PropTypes from 'prop-types';
class Hotel  extends React.Component { 
    constructor(props) {
     super(props);
     this.state = {
        rooms:[]
     }

    }
    handleChange(e) {
        console.log('handleChange happened');
        const {rooms} = this.props;
        let tempRooms = [];
        console.log("rooms" + rooms);
        
    }

    render() {
        const {rooms, status} = this.props;
        return (
              <div>
             {rooms.map((p,i) => 
                <Room key={p.count.toString()} id={p.count.toString()} status={i==0 ? 'enabled' : p.status} onChange={(e) => this.handleChange(e)} >Room {p.count}</Room>
             )
             }
             </div>
        )
    }
};
Room.propTypes = {
  rooms: PropTypes.object
}

const mapStateToProps = (state) => {
    return { 
        rooms: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: () => {
            dispatch(changeTaskStatus());
        },
        remove: () => {
            dispatch(removeTask());
        }
    };
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(Hotel);
