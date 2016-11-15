import React from 'react';
import FontAwesome from 'react-fontawesome';
import createStyledComponent from 'react-css-modules';
import styles from './Tweet.css';

class Tweet extends React.Component {
  render() {
    let location = encodeURIComponent(this.props.location);
    let message = encodeURIComponent(this.props.message);

    const tweet = () => {
      if (!this.props.enabled) return;

      ga && ga('send', 'Share', 'share', 'Share on Twitter');
      window.open(`https://twitter.com/share?url=${location}&text=${message}`, '_blank');
    }

    return (
      <div>
        <a styleName="tweet-link" href="#" onClick={tweet}>
          Review and Tweet
          <FontAwesome name="twitter" size="2x" styleName="twitter-icon"/>
        </a>
      </div>
    );
  }
}

export default createStyledComponent(Tweet, styles);