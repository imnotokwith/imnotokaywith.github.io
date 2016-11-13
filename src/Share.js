import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Share extends React.Component {
	render() {
		let location = encodeURIComponent(window.location);
		let message = encodeURIComponent(this.props.message);

		const post = () => {
			if (!this.props.enabled) return;

			window.open(`http://www.facebook.com/sharer.php?u=${location}`, '_blank');
		}

		const tweet = () => {
			if (!this.props.enabled) return;

			window.open(`https://twitter.com/share?url=${location}&text=${message}`, '_blank');
		}

	  return (
	    <div>
	    	<a href="#" onClick={post}>
	    		Review and Post
	    		<FontAwesome name="facebook" size="2x" />
	    	</a>
	    	<a href="#" onClick={tweet}>
	    		Review and Tweet
	    		<FontAwesome name="twitter" size="2x" />
	    	</a>
	    </div>
	  );
	}
}

Share.propTypes = {
	enabled: React.PropTypes.bool.isRequired,
	message: React.PropTypes.string.isRequired,
};