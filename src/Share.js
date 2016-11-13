import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Share extends React.Component {
    renderFacebookShare(location) {
        // HACK: need to work out UX for posting to Facebook since pre-filled messages can't be used anymore
        return;

        const post = () => {
            if (!this.props.enabled) return;

            window.open(`http://www.facebook.com/sharer.php?u=${location}`, '_blank');
        }

        return (
            <div>
                <a href="#" onClick={post}>
                    Review and Post
                    <FontAwesome name="facebook" size="2x" />
                </a>
            </div>
        );
    }

    renderTwitterShare(location, message) {
        const tweet = () => {
            if (!this.props.enabled) return;

            ga && ga('send', 'Share', 'share', 'Share on Twitter');
            window.open(`https://twitter.com/share?url=${location}&text=${message}`, '_blank');
        }

        return (
            <div className="tweet">
                <a href="#" onClick={tweet}>
                    Review and Tweet
                    <FontAwesome name="twitter" size="2x" />
                </a>
            </div>
        );
    }
    render() {
        let location = encodeURIComponent(window.location);
        let message = encodeURIComponent(this.props.message);

        return (
            <div className="share">
              {this.renderFacebookShare(location)}
              {this.renderTwitterShare(location, message)}
            </div>
        );
    }
}

Share.propTypes = {
    enabled: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired,
};