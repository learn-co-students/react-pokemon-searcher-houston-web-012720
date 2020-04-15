import React from 'react'
import PokemonCardFront from './PokemonCardFront'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.displayPokemon.map((pokemon, idx) => <PokemonCardFront key={idx} pokemon={pokemon} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
