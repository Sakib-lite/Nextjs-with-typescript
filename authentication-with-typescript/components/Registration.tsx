import { useSnackbar } from 'notistack';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type a = {
  fullname: string;
  email: string ;
  age: number | null;
  password: string | number;
};

async function createUser(name: string, email: string, password: string) {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('something went error');
    }

    return data;
  } catch (err) {
    console.log(err);
  }
}


export default function Registration(): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<a>();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const submitHandler = (data: a) => {
    console.log(data);
    enqueueSnackbar('Registration sucessful', {
      variant: 'success',
      autoHideDuration: 3000,
      persist: false,
    });

    setValue('fullname', '');
    setValue('email', '');
    setValue('age', null);
    setValue('password', '');
  };

  return (
    <Fragment>
      <div className='md:py-10'>
        <section className='max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white mb-10'>
            Account settings
          </h2>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className=''>
              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Username
                </label>
                <input
                  id='username'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  defaultValue='Sakibul Anwar'
                  {...register('fullname', {
                    required: 'This field is empty',
                    minLength: {
                      value: 6,
                      message: 'name has to be four characters long',
                    },
                  })}
                />
                {errors.fullname && (
                  <p className='text-red-500 text-base'>
                    {errors.fullname.message}{' '}
                  </p>
                )}
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  defaultValue='a@gmail.com'
                  {...register('email', {
                    required: 'This field is empty',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />

                {errors.email ? (
                  errors.email.type === 'pattern' ? (
                    <p className='text-red-500'> Email is not valid </p>
                  ) : (
                    <p className='text-red-500'> Email is required </p>
                  )
                ) : (
                  ''
                )}
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>Age</label>
                <input
                  type='number'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  defaultValue={21}
                  {...register('age', {
                    required: 'This field is empty',
                    valueAsNumber: true,
                  })}
                />

                {errors.email && (
                  <p className='text-red-500 text-base'>
                    {errors.email.message}{' '}
                  </p>
                )}
              </div>
              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  defaultValue='dlkdfhhj'
                  {...register('password', {
                    required: 'This field is empty',
                    minLength: {
                      value: 6,
                      message: 'password must be at least 6 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-red-500 text-base'>
                    {errors.password.message}{' '}
                  </p>
                )}
              </div>
            </div>

            <div className='flex justify-end mt-6'>
              <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
}
