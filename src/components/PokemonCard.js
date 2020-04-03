import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    let pokemon = this.props.pokemon
    let hp_stats = this.props.pokemon.stats.find(pokemon_stat => pokemon_stat.name === "hp")
    return (
      <Card>
        <div>
          <span className="close" id="close" onClick={() => this.props.handleClear(pokemon.id)}>&times;</span>
          <div className="image">
            <img src={pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp_stats.value} {hp_stats.name}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
