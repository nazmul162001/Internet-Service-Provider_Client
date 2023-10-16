import { useLoginMutation } from '@/redux/feature/user/userApiSlice'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const Login = () => {
  const { handleSubmit, control } = useForm()
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (data: any) => {
    await login(data)
      .unwrap()
      .then((data) => {
        const token = data?.token
        // console.log(token)
        if (token) {
          Cookies.set('accessToken', token)
        }
        toast.success('Welcome 👋👋👋 ', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
        // console.log(data?.token)
      })
      .catch((error) => {
        // Handle login error
        console.error('Login Error:', error)
        // setLoginError(error)
      })
  }

  return (
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
          <span className='button__text'>Login Now</span>
          <i className='ri-arrow-right-s-line button__icon'></i>
        </button>
      </form>
      <div className='social-login'>
        <h3>log in via</h3>
        <div className='social-icons'>
          <a href='#' className='social-login__icon ri-facebook-box-fill'></a>
          <a href='#' className='social-login__icon ri-github-fill'></a>
          <a href='#' className='social-login__icon ri-google-fill'></a>
        </div>
      </div>
    </div>
  )
}

export default Login
