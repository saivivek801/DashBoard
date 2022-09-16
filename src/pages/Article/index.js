import React from 'react'
import { useParams } from "react-router-dom"
import articles from "../ArticleContent" 

const Article = () => {
    const {name} = useParams()
    const filterArticle = articles.find(article => article.name === name)
    if(!filterArticle){
    return <h1>Article does not exist.</h1>
    }
    return (
    <div className='pt-5 pb-5'>
        <h1>{filterArticle.title}</h1>
        {filterArticle.content.map((paragraph,index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </div>
    )
}

export default Article
