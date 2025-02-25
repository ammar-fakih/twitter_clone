import * as React from 'react';
import TweetInput from './TweetInput';
import './TweetBox.css';

let charactersLeft = 140;

export default function TweetBox({
  tweets,
  userProfile,
  setTweets,
  tweetText,
  setTweetText,
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value);
    charactersLeft = 140 - event.target.value.length;
  };

  const handleOnSubmit = () => {
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
  };

  return (
    <div className="tweet-box">
      <TweetInput
        value={tweetText}
        handleOnChange={handleOnTweetTextChange}
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons isExpanded={isExpanded} />
        <TweetCharacterCount characters={tweetText.length} />
        <TweetSubmitButton
          tweetText={tweetText}
          handleOnSubmit={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons({ isExpanded }) {
  return (
    <div className="tweet-box-icons">
      <i className={`fas ${isExpanded ? "fa-smile" : "fa-image"}`}></i>
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
      <button
        onClick={handleOnSubmit}
        disabled={charactersLeft < 0}
        className="tweet-submit-button">
        Tweet
      </button>
    </div>
  );
}
