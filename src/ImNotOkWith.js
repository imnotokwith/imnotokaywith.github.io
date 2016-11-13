import React from 'react';

export default class ImNotOkWith extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showAction: false,
      problem: '',
      action: '',
    };
  }

  handleShowAction(event) {
    this.setState({
      showAction: event.target.checked,
    }, this.emitMessage);
  }

  handleProblem(event) {
    this.setState({
      problem: event.target.value,
    }, this.emitMessage);
  }

  handleAction(event) {
    this.setState({
      action: event.target.value,
    }, this.emitMessage);
  }

  emitMessage() {
    this.props.handleResult({
      problem: this.state.problem,
      action: this.state.showAction && this.state.action,
    });
  }

  renderAction() {
    let checkbox = <input type="checkbox" id="showAction" checked={this.state.showAction} onChange={this.handleShowAction.bind(this)}/>
    let action = this.state.showAction
      ? <span>and I'm going to <input type="text" placeholder={this.props.action} value={this.state.action} onChange={this.handleAction.bind(this)} /></span>
      : <label htmlFor="showAction">I'm going to {this.props.action}</label>

    return (
      <div>
        {checkbox}
        {action}
      </div>
    );
  }

  render() {
    return (
      <div className="im-not-okay-with">
        <div>
          <span>I'm not okay with </span>
          <input type="text" placeholder={this.props.problem} value={this.state.problem} onChange={this.handleProblem.bind(this)}/>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

ImNotOkWith.propTypes = {
  problem: React.PropTypes.string.isRequired,
  action: React.PropTypes.string.isRequired,
  handleResult: React.PropTypes.func.isRequired,
};