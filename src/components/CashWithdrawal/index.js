import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDeleteUser = value => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div>
        <div>
          <h1>Sarah Williams</h1>
          <div>
            <p>Your Balance</p>
            <div>
              <p>{count}</p>
              <p>in Rupees</p>
            </div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul>
              <DenominationItem
                denominationDetails={denominationsList[0]}
                onDeleteUser={this.onDeleteUser}
              />
              <DenominationItem
                denominationDetails={denominationsList[1]}
                onDeleteUser={this.onDeleteUser}
              />
              <DenominationItem
                denominationDetails={denominationsList[2]}
                onDeleteUser={this.onDeleteUser}
              />
              <DenominationItem
                denominationDetails={denominationsList[3]}
                onDeleteUser={this.onDeleteUser}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
