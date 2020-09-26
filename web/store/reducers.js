const defaultStore = { 
    name: '张三',
    age: 18
}

const redcuers = (store = defaultStore, action) => {
    switch(action.type){
        case 'CHANGE_AGE': 
           return {
               ... store,
               age: action.age
           }
           break;
        default:
            return store
    } 
}

export default redcuers