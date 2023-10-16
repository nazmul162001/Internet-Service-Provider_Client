import React, { useState } from 'react'
import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import {
  useGetProfileQuery,
  useSignupMutation,
} from '../../redux/feature/user/userApiSlice'
import Login from '../../../components/Login/Login'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

const Register = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [signup, { isLoading }] = useSignupMutation()
  const { handleSubmit, control } = useForm()

  const onSubmit = async (data: any) => {
    await signup(data)
      .unwrap()
      .then((data) => {
        toast.success('Registration Successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
        console.log(data)
      })
      .catch((error) => {
        // Handle signup error
        console.error('Sign-up Error:', error)
      })
  }
  // const { data: profile } = useGetProfileQuery({})
  // console.log(profile)


  return (
    <div className='body'>
      <Head>
        <title>{isLogin ? 'register' : 'login'}</title>
      </Head>
      <div className='custom_container'>
        <div className='screen relative overflow-hidden'>
          <h2 className='cursor-pointer absolute z-50 top-5 left-5 w-full text-gray-400 text-xl flex gap-2 items-center'>
            Register{' '}
            <span>
              {' '}
              <MdKeyboardDoubleArrowDown className='text-2xl' />{' '}
            </span>
          </h2>
          <div className='screen__content'>
            <form className='login' onSubmit={handleSubmit(onSubmit)}>
              <div className='login__field'>
                <i className='ri-user-fill button__icon'></i>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <input
                      type='text'
                      className='login__input'
                      placeholder='Email'
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='login__field'>
                <i className='ri-lock-fill button__icon'></i>
                <Controller
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <input
                      type='password'
                      className='login__input'
                      placeholder='Password'
                      {...field}
                    />
                  )}
                />
              </div>
              <button type='submit' className='button login__submit'>
                <span className='button__text'>Sign UP</span>
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
                  className={`cursor-pointer absolute z-50 top-5 left-5 w-full text-gray-400 flex items-center gap-2 text-2xl ${
                    isLogin ? '' : 'flex-row-reverse justify-end'
                  }`}
                >
                  {isLogin ? 'Login' : 'Back To Register'}{' '}
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight
                      className={isLogin ? '' : 'transform rotate-180'}
                    />
                  </span>
                </h2>

                {/* register component  */}
                <Login />

                <div className='screen__background'>
                  <span className='screen__background__shape screen__background__shape4'></span>
                  <span className='screen__background__shape screen__background__shape3'></span>
                  <span className='screen__background__shape screen__background__shape2'></span>
                  <span className='screen__background__shape screen__background__shape1'></span>
                </div>
                {/* login form  */}
                <div className='absolute bottom-0 left-0 w-full h-[90%]  rounded-tl-3xl rounded-tr-3xl'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
