import {
    SET_USERS
} from '../constants/Users';

const initState = {
  usersList: null,
}

const users = (state = initState, action) => {
    console.log('REDUCER', action)
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				usersList: action.payload
			}
		default:
			return state;
	}
}

export default users