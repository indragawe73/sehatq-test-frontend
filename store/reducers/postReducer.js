import * as types from '../types'

const initialState={
	posts: [],
	detail: [],
	post: {},
	loading: false,
	error: null
}

// export const postReducer = (state = initialState , action ) => {
export default function(state = initialState, action) {
	switch (action.type) {
		case types.GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
				error: null,
			}

		case types.GET_DETAIL:
			return {
				...state,
				detail: action.payload,
			}

		default: 
			return state
	}
}