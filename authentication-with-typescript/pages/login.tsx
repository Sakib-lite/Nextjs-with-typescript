import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import styles from '../components/svg/bg.module.css';

export default function Signup() {
  const { enqueueSnackbar } = useSnackbar();
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const session = await getSession();
      console.log(session);

      if (session) {
        setLoggedIn(true);
        console.log(session.user?.email);
        router.replace('/profile');
      }
    })();
  }, [loggedIn, router]);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInputRef.current && passwordInputRef.current) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (result) {
        if (result.error === null) {
          emailInputRef.current.value = '';
          passwordInputRef.current.value = '';

          enqueueSnackbar('Logged in', {
            variant: 'success',
          });
          router.replace('/profile');
        }

        if (result.error) {
          enqueueSnackbar(result.error, {
            variant: 'error',
          });
        }
      }
    }
  };

  return (
    <Fragment>
    <div className={styles.bg }>   <div className="h-screen w-full"> 
     
        <section className='max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white mb-10'>
            Log in
          </h2>

          <form onSubmit={submitHandler}>
            <div className=''>
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

          {/* {!loggedIn && <button onClick={() => signIn()}> Sign with Google </button>} */}
        </section>
      </div></div>
    </Fragment>
  );
}
