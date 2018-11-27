let nextTaskId = 1;

export const reset = () => {
    console.log('dfadsf');
            
    return {
        type: 'RESET',
    };
};

export const removeTask = (item) => {
    return {
            type: 'REMOVE_ROOM',
            count: item
        };
};

export const changeTaskStatus = (item) => {
    console.log('dfadsf2');

    return {
        type: 'ADD_ROOM',
        count: item
    };
};
