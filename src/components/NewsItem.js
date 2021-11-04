import React from 'react'
// import PropTypes from 'prop-types'

const NewsItem = (props) => {
        let { title, desc, imageURL, newsURL, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card " >
                    <div>
                        <span className="badge rounded-pill bgg-col d-flex " style={{justifyContent: 'flex-end', position:'absolute', right:'0'}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={!imageURL ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZIuhTSp-E31VJTrqbTZ8IBOABIwJwCyTXw&usqp=CAU":imageURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-muted">By {!author?'Unknown': author} on { new Date (date).toGMTString() }</small></p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-col">Read More</a>
                        </div>
                </div>
            </div>
        )
    }


export default NewsItem
