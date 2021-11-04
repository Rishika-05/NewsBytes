import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    // const [data, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // const [total, setTotalResults] = useState(0)
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // const url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}?countries=${props.country}&categories=${props.category}&page=${page}&limit=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        // setArticles(parsedData.data)
        setTotalResults(parsedData.totalResults)
        // setTotalResults(parsedData.total)
        setLoading(false)
        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} | NewsBytes`;
        updateNews();
    }, [])


    // const handlePrev = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    // const handleNext = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // const url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}?countries=${props.country}&categories=${props.category}&page=${page}&limit=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        // setArticles(data.concat(parsedData.data))
        setTotalResults(parsedData.totalResults)
        // setTotalResults(parsedData.total)
    };


    return (
        <>
            <h3 className="text-center mb-4" style={{marginTop: '90px'}}>NewsBytes - Top {capitalize(props.category)} Headlines</h3>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                // dataLength={data.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                // hasMore={data.length !== total}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-3">
                        {articles.map((ele) => {
                        // {data.map((ele) => {
                            return <div className="col-md-4 col-sm-6 col-xs-12 " key={ele.url}>
                                <NewsItem title={ele.title ? ele.title : ""} desc={ele.description ? ele.description : ""} imageURL={ele.urlToImage} newsURL={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-evenly ">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-col" onClick={this.HandlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize )} type="button" className="btn btn-col" onClick={this.HandleNext}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProp = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News


// REACT_APP_NEWS_API = '84f2d98d8d1240bbb6a8697baf47232c'
