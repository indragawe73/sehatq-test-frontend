import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function Login() {
  function componentClicked (data) {
    console.log(data)
  }
  function responseFacebook (res) {
    console.log(res)
    if(res.name){
      Router.push({
          pathname: '/homePage',
      })
    }
  }

  function responseGoogle (res) {
    console.log(res)
    if(!res.error){
      Router.push({
          pathname: '/homePage',
      })
    }
  }


  return (
    <div className="container">
      <Head>
        <title>SehatQ Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="warap_login">
          <p className="login_title">Login</p>
          <input
            className="login_input"
            name="login_input"
            placeholder="username"
          />
          <input
            className="login_input"
            name="login_input"
            placeholder="password"
          />
          <Link href={`/homePage`}>
              <div className="login_button">Login</div>
          </Link>
          <div className="facebook_button">
            <FacebookLogin
              appId="2548930872088695"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook} />
          </div>
              <GoogleLogin
                clientId="802363916628-kktcpc3nvi8qlbgggstavumb8rb46rrj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                  <button className="google_button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</button>
                )}
              />,
        </div>
      </main>
    </div>
  )
}
