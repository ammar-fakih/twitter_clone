import * as React from 'react';
import AvatarIcon from '../AvatarIcon/AvatarIcon';

export default function TweetInput(props) {
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea
        name="new-tweet-input"
        type="text"
        placeholder="What's Happening?"
        className={`${props.isExpanded ? 'expanded' : ''}`}
        value={props.value}
        onChange={props.handleOnChange}
        onFocus={() => {
          props.setIsExpanded(true);
        }}
        onBlur={() => {
          props.setIsExpanded(false);
        }}
      />
      <SmileIcon />
    </div>
  );
}

export const SmileIcon = () => <i className="fas fa-smile"></i>;
export const ImageIcon = () => <i className="fas fa-image"></i>;
