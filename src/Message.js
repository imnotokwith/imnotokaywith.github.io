import React from 'react';
import createStyledComponent from 'react-css-modules';
import styles from './Message.css';

function Message(props) {
  return (
    <article styleName="purpose">
      There has been a notable rise in people acting cruelly and hatefully
      in the name of {props.title} Trump. The actions of these emboldened
      hateful people are being attributed to those who would also remain
      silent. Whether you voted for Trump or not, the people around you
      need to know that you do not condone hate. <strong>Tell them!</strong>
    </article>
  );
}

Message.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default createStyledComponent(Message, styles)