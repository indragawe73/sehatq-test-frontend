import { combineReducers } from 'redux'

import homePage from './homeReducer'
import detailAdd from './detailReducer'
import wislishAdd from './detailReducer'

import posts from './postReducer'
import detail from './postReducer'
// import { postReducer } from './postReducer'

export default combineReducers({
	homePage: homePage,
	post: posts,
	detail: detail,
	detailAdd: detailAdd,
	wislishAdd: wislishAdd,
	// post: postReducer
})