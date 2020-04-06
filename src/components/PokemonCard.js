import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor() {
    super()
    this.state = {
      showFace: true
    }
  }

  changeState = () => this.setState({showFace: !this.state.showFace})

  front = () => {
    let pok = this.props.pokemon
    return (
      <Card>
        <div onClick = {this.changeState}>
          <div className="image">
            <img alt="oh no!" src = {pok.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{pok.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pok.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }

  back = () => {
    let pok = this.props.pokemon
    return (
      <Card>
        <div onClick = {this.changeState}>
          <div className="image">
            <img alt="oh no!" src = {pok.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{pok.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pok.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }

  render() {
    return (
     this.state.showFace? this.front(): this.back()
    )
  }
}

export default PokemonCard
