import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div id="quote-box">
        <figure id="quote">
          <blockquote className='blockquote'>
            <span className='quote left-quote text-lg'>❝</span>
            <p id="text"><strong>Lorem ipsum something blah blah</strong></p>
            <span className='quote right-quote text-lg'>❞</span></blockquote>
          <figcaption class="blockquote-footer text-end">
            <p id="author">Author name</p>
          </figcaption>
        </figure>
        <div id="btns">
          <a href="http://twitter.com/intent/tweet" id="tweet-quote" class="btn btn-dark"><i class="fab fa-twitter"></i></a>
          <button type='button' class="btn btn-dark" id="new-quote">New Quote</button>
        </div>
      </div>
      <img src='/images/naruto-img-sm.png' alt="Naruto looking up" id="img-hero" class="img"/>
    </div>
  );
}

export default App;
