import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  notsort = () => (
      <Card.Group itemsPerRow={6}> 
        {this.props.pokemons.map(pok =>  <PokemonCard pok ={pok}/>)}
      </Card.Group>
  )

  sortfun =() => {
    let copyoriginal = [...this.props.pokemons]
    let sortedpok = copyoriginal.sort((a,b) => a.name > b.name ? 1:-1)
    return(<Card.Group itemsPerRow={6}>
    {sortedpok.map(pok =>  <PokemonCard pok ={pok}/>)}
    </Card.Group>)
  }
  render() {
    
    
    return this.props.sorted? this.sortfun() : this.notsort()
      
  }
}

export default PokemonCollection


