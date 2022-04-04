// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    darkMode: true,
  }

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    let heading
    let buttonText
    let mode
    const {darkMode} = this.state
    if (darkMode === false) {
      buttonText = `Dark Mode`
      mode = `light-mode`
      heading = `heading-light-mode`
    } else {
      buttonText = `Light Mode`
      mode = `dark-mode`
      heading = `heading-dark-mode`
    }

    return (
      <div className="bg">
        <div className={`container ${mode}`}>
          <h1 className={`heading ${heading}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
