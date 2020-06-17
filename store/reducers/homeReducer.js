import * as types from '../types'

const initialState={
	homePage: null,
}

export default function(state = initialState, action) {
	switch (action.type) {

		case types.GET_HOMEPAGE:
			// alert(action.payload[0].data.category[0].name)
			return {
				...state,
				homePage: action.payload,
			}


		default: 
			return state
	}
}