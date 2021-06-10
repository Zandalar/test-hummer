import {
    SET_USERS
} from '../constants/Users';
  
export const setUsers = (users) => {
    console.log('ACTION', users)
  return {
    type: SET_USERS,
    payload: users
  }
};
  