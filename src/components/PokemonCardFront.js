import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCardFront extends React.Component {

  state = { clickCounter: 0 }

  render() {
    return (
      <Card >
        <div >
          <div className="image">
            <img src={this.state.clickCounter % 2 === 0
              ? this.props.pokemon.sprites.front
              : this.props.pokemon.sprites.back} alt="oh no!" onClick={() => this.setState({ clickCounter: this.state.clickCounter + 1 })} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCardFront
