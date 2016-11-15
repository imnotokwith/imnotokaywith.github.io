import React from 'react';
import createStyledComponent from 'react-css-modules';
import styles from './ImNotOkWith.css';

class ImNotOkWith extends React.Component {
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
    let checkbox = <input styleName="checkbox" type="checkbox" id="showAction" checked={this.state.showAction} onChange={this.handleShowAction.bind(this)} />
    let action = this.state.showAction
      ? <span>and I'm going to <textarea styleName="input" placeholder={this.props.action} value={this.state.action} onChange={this.handleAction.bind(this)} /></span>
      : <label htmlFor="showAction" styleName="label">I'm going to {this.props.action}</label>

    return (
      <div>
        {checkbox}
        {action}
      </div>
    );
  }

  render() {
    return (
      <div styleName="container">
        <div>
          <span>I'm not okay with </span>
          <textarea styleName="input" rows="3" placeholder={this.props.problem} value={this.state.problem} onChange={this.handleProblem.bind(this)}/>
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

export default createStyledComponent(ImNotOkWith, styles);