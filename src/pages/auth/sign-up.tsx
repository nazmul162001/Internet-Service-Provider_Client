import React, { useState } from 'react'
import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='body'>
      <Head>
        <title>{isLogin ? "Login" : "sign-up"}</title>
      </Head>
      <div className='custom_container'>
        <div className='screen relative overflow-hidden'>
          <h2 className='cursor-pointer absolute z-50 top-5 left-5 w-full text-gray-400 text-xl'>
            Login
          </h2>
          <div className='screen__content'>
            <form className='login'>
              <div className='login__field'>
                <i className='ri-user-fill button__icon'></i>
                <input
                  type='text'
                  className='login__input'
                  placeholder='User name / Email'
                />
              </div>
              <div className='login__field'>
                <i className='ri-lock-fill button__icon'></i>
                <input
                  type='password'
                  className='login__input'
                  placeholder='Password'
                />
              </div>
              <button className='button login__submit'>
                <span className='button__text'>Login Now</span>
                <i className='ri-arrow-right-s-line button__icon'></i>
              </button>
            </form>
            <div className='social-login'>
              <h3>log in via</h3>
              <div className='social-icons'>
                <a
                  href='#'
                  className='social-login__icon ri-facebook-box-fill'
                ></a>
                <a href='#' className='social-login__icon ri-github-fill'></a>
                <a href='#' className='social-login__icon ri-google-fill'></a>
              </div>
            </div>
          </div>
          <div className='screen__background'>
            <span className='screen__background__shape screen__background__shape4'></span>
            <span className='screen__background__shape screen__background__shape3'></span>
            <span className='screen__background__shape screen__background__shape2'></span>
            <span className='screen__background__shape screen__background__shape1'></span>
          </div>
          {/* sing up form  */}
          <div
            className={`absolute bottom-0 left-0 w-full h-full transform ${
              isLogin ? 'translate-y-[90%]' : 'translate-y-0'
            } z-50 rounded-tl-3xl rounded-tr-3xl transition-all duration-500`}
          >
            <div className='custom_container'>
              <div className='screen relative'>
                <h2
                  onClick={() => setIsLogin(!isLogin)}
                  className='cursor-pointer absolute z-50 top-5 left-5 w-full text-gray-400 text-xl'
                >
                  {isLogin ? 'Sign Up' : 'Back To Login'}
                </h2>
                <div className='screen__content'>
                  <form className='login'>
                    <div className='login__field'>
                      <i className='ri-user-fill button__icon'></i>
                      <input
                        type='text'
                        className='login__input'
                        placeholder='User name / Email'
                      />
                    </div>
                    <div className='login__field'>
                      <i className='ri-lock-fill button__icon'></i>
                      <input
                        type='password'
                        className='login__input'
                        placeholder='Password'
                      />
                    </div>
                    <button className='button login__submit'>
                      <span className='button__text'>Sign Up Now</span>
                      <i className='ri-arrow-right-s-line button__icon'></i>
                    </button>
                  </form>
                  <div className='social-login'>
                    <h3>log in via</h3>
                    <div className='social-icons'>
                      <a
                        href='#'
                        className='social-login__icon ri-facebook-box-fill'
                      ></a>
                      <a
                        href='#'
                        className='social-login__icon ri-github-fill'
                      ></a>
                      <a
                        href='#'
                        className='social-login__icon ri-google-fill'
                      ></a>
                    </div>
                  </div>
                </div>
                <div className='screen__background'>
                  <span className='screen__background__shape screen__background__shape4'></span>
                  <span className='screen__background__shape screen__background__shape3'></span>
                  <span className='screen__background__shape screen__background__shape2'></span>
                  <span className='screen__background__shape screen__background__shape1'></span>
                </div>
                {/* login form  */}
                <div className='absolute bottom-0 left-0 w-full h-[90%] z-50 rounded-tl-3xl rounded-tr-3xl'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
