import React from 'react'
import { Link } from 'react-router-dom'
import Posts from './Posts';


const PostItem = ({postID, category, tittle, description, thumbnail,linkgit}) => {
    const shortenDescription= description.length > 145 ? description.substr(0,145) +'...': description;
    const postTittle= tittle.length > 50 ? tittle.substr(0,50) +'...': tittle;
  return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={tittle} />
        </div>
        <div className="post__content">
            
            <h4>{postTittle}</h4>
            <a href={linkgit} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <p>{shortenDescription}</p>
            
            <div className='post__footer'>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
