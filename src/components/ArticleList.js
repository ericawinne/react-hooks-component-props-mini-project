import React from "react"

import Article from "./Article"

const ArticleList = ({ posts }) => {
  const articleComponents = posts.map(post => (
    <Article
        date={post.date}
        key={post.id}
        preview={post.preview}
        title={post.title}
    />
  ))

  return (
    <main>
      {articleComponents}
    </main>
  )
}

export default ArticleList