import * as React from 'react';
import AvatarIcon from '../AvatarIcon/AvatarIcon';
import { formatLikes } from '../../utils/format';
import './Tweet.css';

export default function Tweet({ tweet }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo name={tweet.name} handle={tweet.handle} />
        <p className="tweet-text">
          {tweet.text.split(' ').map((word, i) => (
            <span
              key={i}
              style={{ color: word.charAt(0) === '#' ? '#49A1EB' : '' }}>
              {word}{i === tweet.text.length - 1 ? "" : " "}
            </span>
          ))}
        </p>
        <TweetFooter
          numComments={tweet.comments}
          numRetweets={tweet.retweets}
          numLikes={tweet.likes}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          isRetweeted={isRetweeted}
          setIsRetweeted={setIsRetweeted}
        />
      </div>
    </div>
  );
}

export function TweetUserInfo({ name, handle }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i className="fa fa-angle-down"></i>
    </div>
  );
}

export function TweetFooter({
  numComments,
  numRetweets,
  numLikes,
  isLiked,
  setIsLiked,
  ...props
}) {
  return (
    <div className="tweet-footer">
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span
        onClick={() => {
          props.setIsRetweeted(!props.isRetweeted);
        }}>
        <i
          className="fa fa-retweet"
          style={{ color: props.isRetweeted ? 'skyblue' : 'black' }}></i>
        {props.isRetweeted ? numRetweets + 1 : numRetweets}
      </span>
      <span
        onClick={() => {
          setIsLiked(!isLiked);
        }}>
        <i className="fas fa-heart" style={{ color: isLiked ? 'red' : '' }}></i>
        {formatLikes(isLiked ? numLikes + 1 : numLikes)}
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  );
}
