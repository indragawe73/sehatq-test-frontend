import * as types from '../types'

export const buyItems = (val) => async dispatch => {
	dispatch({
		type: types.POST_DETAIL,
		payload: val,
	})	
};

export const likeItem = (val) => async dispatch => {
	dispatch({
		type: types.ADD_WISLISH,
		payload: val,
	})	
};
