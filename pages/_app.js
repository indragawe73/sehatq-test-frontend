import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import '../css/main.css'
import '../css/home.css'
import '../css/detail.css'

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider store={store}>
				<div>
					<Component {...pageProps}></Component>
				</div>
			</Provider>
		)
	}
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp) 