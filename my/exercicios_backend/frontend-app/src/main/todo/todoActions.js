import axios from 'axios'
import GlobalConfig from '../../config'
const serviceUrl = GlobalConfig.SERVICE_URL + '/todos'


export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED'
    , payload: event.target.value
})

export const searchTodos = () => {
    //const search = desc ? `&description__regex=/${desc}/` : '';
    const request = axios.get(`${serviceUrl}?=sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED'
        , payload: request
    }
}

export const addTodo = (description) => {
    const request = axios.post(serviceUrl , { description })

    return {
        type: 'TODO_ADDED'
        , payload: request
    }
}