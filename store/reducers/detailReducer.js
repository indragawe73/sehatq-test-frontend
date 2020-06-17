import * as types from '../types'

const initialState={
	detailAdd: null,
	wislishAdd: null,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case types.POST_DETAIL:
			return {
				...state,
				detailAdd: action.payload,
			}

		case types.ADD_WISLISH:
			return {
				...state,
				wislishAdd: action.payload,
			}


		default: 
			return state
	}
}