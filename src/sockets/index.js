import { SEND_MESSAGE, ADD_USER, ALL_USERS } from '../constants/ActionTypes'
import { addUser, sendMessage, showUsers } from '../actions/ChatActions'

const socket = (dispatch, username) => {
    const ws = new WebSocket("ws://localhost:9090");

    ws.onopen = () => {
        ws.send(JSON.stringify({
            type: ADD_USER,
            name: username
        }))
    }

    ws.onmessage = (event) => {
        const action = event.data;

        switch (action.type) {
            case ADD_USER:
                dispatch(addUser(username))
                break;
            case SEND_MESSAGE:
                dispatch(sendMessage(action.message, action.author))
                break;
            case ALL_USERS:
                dispatch(showUsers(action.users))
                break;
            default:
                break;
        }
    }

    return ws;
}

export default socket;