import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
  constructor(props) {
    //to use props inside a constructor need to se props like in rfc(func compo)
    super(props);
    this.state = {
      //here this states contains an object which can have more items (key - values)
      //we can loop through all these items using map

      articles: [], //states includes the properties a component may need
      totalResults: 0,
      page: 1,
      loading: true,
      progress : 0
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - NewsMonkey`;
  }

  update = async () => {
    this.setState({progress : 15})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url); //data hai data from the api in the form of a promise
    this.setState({
      loading: true,
    });
    this.setState({progress : 40})
    //dataparsing - changing of format to json(js ki kuch hai and fast hai)
    const parseddata = await data.json();
    this.setState({progress : 70})
    ///ye parsed data directly ab use ho skta hai just like upar articles ki tarah

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    this.setState({progress : 100})
  };

  componentDidMount() {
    this.update();
    this.setState({page : this.state.page+1});  //ye because fetch new users will be called after
                                                //calling 
  }

  nextt = () => {
    const a = Math.ceil(this.state.totalResults / this.props.pagesize);
    console.log(a);
    if (this.state.page + 1 > a) {
      alert("Last Page");
    } else {
      this.setState({ page: this.state.page + 1 });

      this.update();
    }
  };

  prev = () => {
    if (this.state.page <= 1) {
      alert("FirstPage");
    } else {
      this.setState({ page: this.state.page - 1 });
      this.update();
    }
  };

    fetchNextUsers =async () => {
    this.setState({page : this.state.page+1});

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);

    const parseddata = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseddata.articles), //concatenate the new page with prev
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
      />

      <div className="text-center">
        <div className="text-center">
          
          <h1 className="text-center font-vina mt-5 font-semibold text-4xl text-sky-800">
            News Monkey - Top{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}{" "}
            Headlines
          </h1>
          {/* {this.state.loading && <Loading />} */}
        </div>

        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchNextUsers}
          hasMore={this.state.articles.length !== this.state.totalResults} //kab tak fetch krna hai kitna data aur hai
          loader={<Loading />}
        >
          {!this.state.loading &&
            this.state.articles.map((element) => {
              //using map we're looping through the object and accessing
              //a single element each time

              //idhar niche were returning on element at a time to the class accessing the component
              return (
                <span
                  className=" inline-flex     
            text-center my-10 sm:mb-80 md:mb-20 justify-center h-80 mx-10"
                >
                  <Newsitem
                    date={element.publishedAt}
                    key={element.url}
                    imgurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://picsum.photos/200/300"
                    }
                    newsurl={element.url}
                    heading={element.title ? element.title.slice(0, 80) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : " "
                    }
                  />
                </span>
              );
            })}
        </InfiniteScroll>

        {/* <div className="w-screen text-center container flex justify-around">
          <button
            type="button"
            onClick={this.prev}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-red-300 dark:hover:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 order-1"
          >
            &larr; Previous
          </button>

          <button
            type="button"
            onClick={this.nextt}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-teal-300 dark:hover:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 order-2"
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
      </>
    );
  }
}

News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

News.defaultProps = {
  pagesize: 8,
  country: "in",
  category: "general",
};

export default News;
