import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    }

    this.getAnimeQuote = this.getAnimeQuote.bind(this);
  }

  async getAnimeQuote() {
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(animeQuote => this.setState({
        quote: animeQuote.quote,
        author: animeQuote.character
      }))
  }
  
  async componentDidMount() {
    this.getAnimeQuote();
  }

  render() { 
    return ( 
      <div className="container-fluid">
        <div id="quote-box">
          <figure id="quote">
            <blockquote className='blockquote'>
              <span className='quote left-quote text-lg'>❝</span>
              <p id="text" style={ (this.state.quote.length > 165) ? {fontSize: "0.7em"} : {fontSize: "1.2em"} }><strong>{this.state.quote}</strong></p>
              <span className='quote right-quote text-lg'>❞</span></blockquote>
            <figcaption className="blockquote-footer text-end">
              <p id="author">{this.state.author}</p>
            </figcaption>
          </figure>
          <div id="btns">
            <a href={"http://twitter.com/intent/tweet?text=" + encodeURIComponent(this.state.quote + " - " + this.state.author)} id="tweet-quote" className="btn btn-dark"><i className="fab fa-twitter"></i></a>
            <button type='button' onClick={this.getAnimeQuote} className="btn btn-dark" id="new-quote">New Quote</button>
          </div>
        </div>
        <img src="./random-quote-machine/images/naruto-img-sm.png" alt="Naruto looking up" id="img-hero" className="img"/>
        <p className='attribution'>Image by <a href="https://pixabay.com/users/hiteshhtsharma-7440487/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5150379">Hitesh Sharma</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5150379">Pixabay</a></p> 
      </div>
    );
  }
}
 
export default App;
