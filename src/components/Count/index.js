import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Count extends Component {
  state = {input: '', list: []}

  Input = event => {
    this.setState({input: event.target.value})
  }

  Add = event => {
    event.preventDefault()
    const {input} = this.state
    this.setState(prevState => ({
      list: [...prevState.list, {id: uuidv4(), input}],
      input: '',
    }))
  }

  render() {
    const {input, list} = this.state
    const ListLength = list.length === 0
    console.log(list)
    return (
      <div className="Div">
        <div className="FDiv">
          <h1>Count the characters like a Boss...</h1>
          {ListLength ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="im"
              />
            </div>
          ) : (
            <div>
              <ul className="ul">
                {list.map(each => (
                  <li key={each.id}>
                    <p>
                      {each.input}: {each.input.length}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form className="SDiv" onSubmit={this.Add}>
          <h1 className="h1">Character Counter</h1>
          <input
            onChange={this.Input}
            className="inp"
            type="text"
            placeholder="Enter the Characters here"
            value={input}
          />
          <button className="but" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }
}
export default Count
