import Head from 'next/head'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchposts } from '../store/actions/postAction'

export default function Backup() {
  
  const dispatch = useDispatch();
  const {posts} = useSelector(state=>state.post);

  useEffect (()=>{
    dispatch(fetchposts())
  }, [])
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {posts && posts.map(item => (
            <li key={item.id}>
              <Link href={`/homePage`}>
                <h2 key={item.id}>{item.title.rendered}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
