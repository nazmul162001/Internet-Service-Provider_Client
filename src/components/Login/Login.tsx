import { useLoginMutation } from '@/redux/feature/user/userApiSlice'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Input } from 'antd'

const Login = () => {
  const [isError, setIsError] = useState('')
  const { handleSubmit, control } = useForm()
  const [login, { isLoading }] = useLoginMutation()
  const router = useRouter()
  const redirectTo = Cookies.get('redirectTo') || '/';

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

    await login(data)
      .unwrap()
      .then((data) => {
        const token = data?.token
        if (token) {
          Cookies.set('accessToken', token)
        }
        toast.success('Welcome 👋👋👋', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })

        // Redirect to the 'redirectTo' URL or the dashboard after login
        router.push(redirectTo);
      })
      .catch((error) => {
        setIsError(error?.data?.message);
      });
  }

  useEffect(() => {
    // Remove the 'redirectTo' cookie after using it
    Cookies.remove('redirectTo');
  }, []);

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
              <Input.Password
                type='password'
                className='login__input'
                placeholder='Password'
                {...field}
              />
            )}
          />
        </div>
        {isError && (
          <p className='text-[12px] font-sans font-medium text-red-500'>
            {isError}
          </p>
        )}
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
  );
}

export default Login;
