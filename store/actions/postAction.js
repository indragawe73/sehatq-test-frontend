import * as types from '../types'

export const fetchposts = () => async dispatch => {
fetch("http://demo.wp-api.org/wp-json/wp/v2/posts/")
	.then(res => res.json())
	.then(res => {
		console.log('sssssssssss', res)
		dispatch({
			type: types.GET_POSTS,
			payload: res,
		})		
	})
  	.catch(function (error) {
    	console.log(error);
    	console.log('GET_POSTS', error, error.response)
  	});
};

export const fetchDetail = (val) => async dispatch => {
fetch(`http://demo.wp-api.org/wp-json/wp/v2/posts/${val}`)
	.then(res => res.json())
	.then(res => {
		console.log('sssssssssss', res)
		dispatch({
			type: types.GET_DETAIL,
			payload: res,
		})		
	})
  	.catch(function (error) {
    	console.log(error);
    	console.log('GET_DETAIL', error, error.response)
  	});
};
