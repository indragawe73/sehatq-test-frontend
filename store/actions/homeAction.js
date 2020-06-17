import * as types from '../types'

export const fetchHomePage = () => async dispatch => {
fetch("https://private-4639ce-ecommerce56.apiary-mock.com/home")
	.then(res => res.json())
	.then(res => {
		dispatch({
			type: types.GET_HOMEPAGE,
			payload: res,
		})		
	})
  	.catch(function (error) {
    	console.log('GET_HOMEPAGE', error, error.response)
  	});
};
