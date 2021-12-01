import type { NextPage } from 'next';
import { Fragment } from 'react';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Link href='login'>
        <a className='text-4xl font-bold mx-auto'>Log in</a>
      </Link>
    </Fragment>
  );
};

export default Home;
