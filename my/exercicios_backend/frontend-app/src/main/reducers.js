import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro'
        , list:[
            {_id:"5ae3bbfd240029000edc4e56",description:"Nova tarefaa, tudo em pé",__v:0,createdAt:"2018-04-28T00:10:37.131Z",done:false},{_id:"5ae3bea9240029000edc4e57",description:"Say hello to my little friend",__v:0,createdAt:"2018-04-28T00:22:01.796Z",done:false}
        ]
    })
});

export default rootReducer
