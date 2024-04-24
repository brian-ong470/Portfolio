import React, { useState } from 'react'
import PostItem from './PostItem'
import {DUMMY_POSTS} from '../data'

const Posts = () => {
    const[posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {posts.length >0 ? <div className="container posts__container">
            {
                posts.map(({id, thumbnail,category,tittle,linkgit,desc}) => <PostItem key={id} postID={id} thumbnail={thumbnail} 
                category={category} tittle={tittle} linkgit={linkgit} description={desc}  />)
            }
        </div> :<h2 className='center'>no posts found</h2>}
    </section>
  )
}

export default Posts
