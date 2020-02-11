import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={ 'button' } onClick={ this.props.onClick }>
        { this.props.text || '' }
      </button>
    );
  }
}

Button.propTypes = {
  customClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default Button;
