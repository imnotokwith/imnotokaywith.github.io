import React from 'react';

export default function Message(props) {
  return (
    <article className="purpose">
      Since November 8, 2016, there has been a notable rise in people acting cruelly and hatefully in the name of {props.title} Trump. The actions of these emboldened hateful people are being attributed to those who would also remain silent. Whether you voted for Trump or not, the people around you need to know that you do not condone hate. Tell them!
    </article>
  );
}

Message.propTypes = {
  title: React.PropTypes.string.isRequired
};