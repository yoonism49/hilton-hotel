const task = (state, action) => {
    console.log('action.type'+action.type);
    switch (action.type) {
        case 'RESET':
                return {
                    count: state.count,
                    status: "disabled",
                };
            return true;

        case 'REMOVE_ROOM':
            if (state.count <= action.count) {
                return {
                    count: state.count,
                    status: "disabled",
                };
            } else {
                return {
                    count: state.count,
                    status: "disabled",
                };
            }
            return true;
        case 'ADD_ROOM':
            if (state.count <= action.count) {
                return {
                    count: state.count,
                    status: "enabled",
                };
            } 
        default:
            return state;
    }
};

const tasks = (state = [], action) => {
    switch (action.type) {
        case 'RESET':
            return state.map(t => 
                task(t, action)
            );
        case 'REMOVE_ROOM':
            return state.map(t => 
                task(t, action)
            );
        case 'ADD_ROOM':
            return state.map(t => 
                task(t, action)
            );
        default:
            return state;
    }
};

export default tasks;