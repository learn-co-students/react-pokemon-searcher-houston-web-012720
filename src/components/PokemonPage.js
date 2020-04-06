import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      filter: null,
      pokemons: []
    }
  }

  changeFilter = (event) => {
    let filter = event.target.value
    filter.length === 0 ? filter = null : filter
    this.setState({filter})
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokemons = () => {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemons}))
  }

  filterPokemons = () => {
    return this.state.filter? this.state.pokemons.filter(p => p.name.includes(this.state.filter)) : this.state.pokemons 
  }

  addPokemon = (pokemon) =>{
    let params = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokemon)
    }
    fetch("http://localhost:3000/pokemon", params)
      .then(resp => resp.json())
      .then(json => this.setState({pokemons: [...this.state.pokemons, json]}))

  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon = {this.addPokemon}/>
        <br />
        <Search onChange={this.changeFilter} />
        <br />
        <PokemonCollection pokemons = {this.filterPokemons()} />
      </Container>
    )
  }
}

export default PokemonPage
