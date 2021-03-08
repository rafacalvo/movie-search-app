import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import SearchMovies from '../components/searchMovies'

export default function Home() {
  return (
    <div className='box-border m-0'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container-lg h-full text-center font-sans'>
        <h1 className='text-4xl font-bold leading-loose my-6'>
          Movie Search App
        </h1>
        <SearchMovies />
      </main>

      <footer className='flex justify-center justify-items-center items-center'>
        <a
          className='leading-loose my-6'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
