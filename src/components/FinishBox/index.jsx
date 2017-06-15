import React from 'react'
import { Button } from 'react-toolbox/lib/button'

import './FinishBox.scss'

class FinishBox extends React.Component {

  render () {
    return (
      <div className="finishBox">
        Спасибо за внимание, мы свяжемся в ближайшее время
        <div>
          <Button icon="home" href="https://foxwel.com/" label="На сайт" raised primary />
        </div>
      </div>
    )
  }
}

export default FinishBox
