const filterReducer = (state = 'All', action) => {
    
}

export const filterChange = filter => {
    return { 
        type: 'setFilter',
        filter
    }
}

export default filterReducer