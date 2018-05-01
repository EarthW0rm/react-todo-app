const INITIAL_STATE = {
    description: 'Ler livro'
    , list:[
        {_id:"5ae3bbfd240029000edc4e56",description:"Nova tarefa, tudo em pé",__v:0,createdAt:"2018-04-28T00:10:37.131Z",done:false},{_id:"5ae3bea9240029000edc4e57",description:"Say hello to my little friend",__v:0,createdAt:"2018-04-28T00:22:01.796Z",done:false},
        {_id:"5ae3bea9240029000edc4e58",description:"Say hello to my little friend 2",__v:0,createdAt:"2018-04-28T00:22:01.796Z",done:true}            
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload }
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data }
        default:
            return state;
    }
}