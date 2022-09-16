import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import articles from '../ArticleContent'

const ArticleList = () => {
    return (
    <div>
        <h1 className='p-3'>Articles</h1>
        <div>
        {articles.map((each,index) => (
            <div key={index} className="p-3">
                <div className='d-flex mt-2 mb-2 shadow'>
                    <Link className='textNone' to={`/article/${each.name}`}>
                        <img className='tn-img' src={each.thumbnail} alt={each.name}/>
                    </Link>
                    <div className='w-50 ps-5 pt-3'>
                        <h1 className=''>{each.title}</h1>
                        <p className=''>{each.content[0].substring(0,100)}....</p>
                        <Link className='textNone' to={`/article/${each.name}`}>
                        <button type='button' className='btn btn-primary'>Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default ArticleList
