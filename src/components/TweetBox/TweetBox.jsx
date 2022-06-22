import * as React from 'react';
import TweetInput from './TweetInput';
import './TweetBox.css';

export default function TweetBox({
  tweets,
  userProfile,
  setTweets,
  tweetText,
  setTweetText,
}) {
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleOnSubmit = () => {
    // if (tweetText.length > 0 && tweetText.length <= 140) {  
      const newTweet = {
        ...userProfile,
        text: tweetText,
        comments: 0,
        retweets: 0,
        likes: 0,
        id: tweets.length,
      };
      setTweetText('');
      setTweets([...tweets, newTweet]);
    // }
    
  };

  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount characters={tweetText.length} />
        <TweetSubmitButton
          tweetText={tweetText}
          handleOnSubmit={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount({ characters }) {
  // ADD CODE HERE
  return (
    <span className={`tweet-length ${characters > 140 ? 'red' : ''}`}>
      {characters > 0 ? 140 - characters : ''}
    </span>
  );
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className={`tweet-submit`}>
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>
        Tweet
      </button>
    </div>
  );
}
