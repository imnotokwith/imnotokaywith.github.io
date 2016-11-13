import React from 'react'
import ReactDOM from 'react-dom'
import ImNotOkWith from './ImNotOkWith';
import Message from './Message';
import Share from './Share';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: '',
      twitter: '',
    };
  }
  
  handleResult(result) {
    ga && ga('send', 'Form', 'interact', 'Interacted with form');
    if (!result.problem) {
      this.setState({
        sharingEnabled: false,
      });
    }

    ga && ga('send', 'Form', 'interactWithProblem', 'Entered something into the form');
    const problem = `#ImNotOkWith ${result.problem} `;
    const action = result.action
      ? `and #ImGoingTo ${result.action} `
      : '';
    this.setState({
      sharingEnabled: true,
      message: `${problem}${action}`,
    })
  }

  render() {
    return (
      <div>
        <Message title="President-elect" />
        <ImNotOkWith
          problem="women getting grabbed by the pussy"
          action="do something about it"
          handleResult={this.handleResult.bind(this)} />
        <Share enabled={this.state.sharingEnabled} message={this.state.message} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));