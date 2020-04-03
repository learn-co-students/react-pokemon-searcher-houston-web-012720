import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  displayData = () => {
    return this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} handleClear={this.props.handleClear}/>) 
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayData()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
