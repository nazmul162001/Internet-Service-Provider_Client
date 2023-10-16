import React, { useState } from 'react'
import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import {
  useGetProfileQuery,
  useSignupMutation,
} from '../../redux/feature/user/userApiSlice'
import Login from '../../../components/Login/Login'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


const Register = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isError, setIsError] = useState('')
  const [signup, { isLoading }] = useSignupMutation()
  const { handleSubmit, control } = useForm()
  const router = useRouter()

  const onSubmit = async (data: any) => {
    setIsError('')
    if (!data.email) {
      setIsError('Email is required')
      return
    }
    if (!data.password) {
      setIsError('Password is required')
      return
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailPattern.test(data.email)) {
      setIsError('Invalid email format')
      return
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/
    if (!passwordPattern.test(data.password)) {
      setIsError(
        'Password must contain at least 5 characters, one uppercase letter, one lowercase letter, and at least 1 number'
      )
      return
    }

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
        setIsLogin(!isLogin)
      })
      .catch((error) => {
        // Handle signup error
        // console.error('Sign-up Error:', error)
        setIsError(error?.data?.message)
      })
  }
  // const { data: profile } = useGetProfileQuery({})
  // console.log(profile)

  return (
    <div className='body'>
      <Head>
        <title>{isLogin ? 'register' : 'login'}</title>
      </Head>
      <div className='custom_container relative'>
        {/* back button  */}
        <div
          onClick={() => router.push('/')}
          className='absolute top-3 left-3  z-50 flex items-center gap-2 bg-[#B0ABE8] px-3 py-1 rounded text-[#112164] cursor-pointer'
        >
          <AiOutlineHome />
          <span>Back To Home</span>
        </div>

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
              {/* show error message  */}
              {isError && (
                <p className='text-[12px] font-sans font-medium text-red-500'>
                  {isError}
                </p>
              )}

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
