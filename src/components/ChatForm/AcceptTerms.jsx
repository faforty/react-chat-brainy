import React from 'react'
import Checkbox from 'react-toolbox/lib/checkbox'

import './acceptTerms.scss'

class AcceptTerms extends React.Component {

  render () {
    return (
      <Checkbox
        checked={this.props.checked}
        label="Даю согласие на обработку моих данных"
        onChange={this.props.handleAcceptTerms} />
    )
  }
}

export default AcceptTerms
