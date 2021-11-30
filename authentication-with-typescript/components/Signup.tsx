/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useRef } from 'react';
import { useSnackbar } from 'notistack';

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

export default function Signup() {
  const { enqueueSnackbar } = useSnackbar();

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameInputRef.current &&
      emailInputRef.current &&
      passwordInputRef.current
    ) {
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      await createUser(enteredName, enteredEmail, enteredPassword);

      enqueueSnackbar('Users created', {
        variant: 'success',
      });
    }
  };

  return (
    <Fragment>
      <div className='md:py-10'>
        <section className='max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white mb-10'>
            Account settings
          </h2>

          <form onSubmit={submitHandler}>
            <div className=''>
              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Fullname
                </label>
                <input
                  id='username'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  ref={nameInputRef}
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  ref={emailInputRef}
                />
              </div>

              <div>
                <label className='text-gray-700 dark:text-gray-200'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  ref={passwordInputRef}
                />
              </div>
            </div>

            <div className='flex justify-end mt-6'>
              <button
                className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
}
