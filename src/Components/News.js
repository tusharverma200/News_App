import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'

export class News extends Component {

  static defaultProps={
   Country:'in',
   pageSize:6,
   category:'general'

  }

  static propTypes={
    Country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    constructor(props){
      super(props)
      this.state={
        articles:[],
        loading:false,
        page:1,
        totalResults:0
      }
      document.title=`${this.capitalizeFirstLetter(this.props.category)}- My Monkey News`
    }

   

   async componentDidMount(){
    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=4bd897093c114ff988e24aa96a0b9568&page=1&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData= await data.json();
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
  
    }

    prevnews= async()=>{
      this.props.setProgress(0);
      console.log("previous clicked")
      this.setState({
        page:this.state.page - 1
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=4bd897093c114ff988e24aa96a0b9568&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData= await data.json();
      this.setState({articles: parsedData.articles,
      totalResults:parsedData.totalResults
      })
      this.props.setProgress(100);
     
    }
     nextnews=async ()=>{
      this.props.setProgress(0);
      console.log("next clicked")

      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
        this.setState({
          page:this.state.page + 1
        })
  
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=4bd897093c114ff988e24aa96a0b9568&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({articles: parsedData.articles,
          totalResults:parsedData.totalResults
        })
      }
      this.props.setProgress(100);
    }

    fetchMoreData = async() => {
     
      this.setState({page:this.state.page+1})
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=4bd897093c114ff988e24aa96a0b9568&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData= await data.json();
      this.setState({articles: this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults
      })
    };



  render() {
    return (
     
      <div className="container ">
     
            <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>My Monkey News- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
            // scrollableTarget="scrollableDiv"
          >
     <div className="container">
            <div className="row ">
              { this.state.articles.map((element)=>{
             return  <div className="col-md-4" key={element.url}>
             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://media.cnn.com/api/v1/images/stellar/prod/230217133549-child-fever-stock.jpg?c=16x9&q=w_800,c_fill"} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
           </div>
          
               }
              )
             
             }
             </div>
             </div>
              </InfiniteScroll>
             
          
           
          </div>
     
     
    )
  }
}

export default News
