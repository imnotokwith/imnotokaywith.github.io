import React from 'react'
import ReactDOM from 'react-dom'
import ImNotOkWith from './ImNotOkWith';
import Message from './Message';
import Share from './Share';

const problems = [
  'women getting grabbed by the pussy',
  'people getting used and abused',
  'calling language of rape and sexual assault "locker room talk"',
  'forcefully removing hijabs from women\'s heads',
  'rape culture',
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: '',
      twitter: '',
      problem: this.getRandomProblem(),
      timeout: 250,
    };

    this.updateProblem();
  }

  updateProblem() {
    this.setState({
      problem: this.getRandomProblem(),
      timeout: this.state.timeout * 1.6,
    })
    setTimeout(this.updateProblem.bind(this), this.state.timeout);
  }

  getRandomProblem() {
    var index = Math.floor(Math.random() * problems.length);
    return problems[index];
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
          problem={this.state.problem}
          action="do something about it"
          handleResult={this.handleResult.bind(this)} />
        <Share enabled={this.state.sharingEnabled} message={this.state.message} location="http://imnotokwith.com"/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));