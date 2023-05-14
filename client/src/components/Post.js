import React from 'react'

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://picsum.photos/200/300" alt="Post Title"/>
      </div>
      <div className="texts">
        <h2>Full-house battery backup coming</h2>
        <p className="info">
          <a className="author" href="#">Dawid Peter</a>
          <time>2021-01-01</time>
        </p>
      </div>

    </div>
  )
}

export default Post