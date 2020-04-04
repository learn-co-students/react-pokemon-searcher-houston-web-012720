import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Sort from "./Sort"
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemons: [],
      pokemonsDisplay: [],
      sortByHP: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokeData => {
      this.setState({
        pokemons: pokeData,
        pokemonsDisplay: pokeData
      })
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: event.target[0].value,
        stats: [{
          value: event.target[1].value, 
          name: "hp"
        }],
        sprites: {
          front: event.target[2].value,
          back: event.target[3].value
        }
      })
    })
    .then( resp => resp.json())
    .then( newPokemon => {
      let updatedPokemons = this.state.pokemons
      updatedPokemons.push(newPokemon)
      this.setState({
        pokemons: updatedPokemons
        // how do you reset form here? 
        // if pokemon page re-renders why doesnt PokemonForm re-render with no values input
      })
    })
  }

  handleSearch = (event) => {
    let currentList = this.state.pokemons 
    let newList = []
    if (event.target.value !== ""){
      newList = currentList.filter( pokemon => {
        return pokemon.name.toLowerCase().includes(event.target.value.toLocaleLowerCase())
      })
    } else {
      newList = currentList
    }
    this.setState({
      pokemonsDisplay: newList
    })
  }

  toggleSortByHP = (event) => {
    let prevState = this.state.sortByHP 
    this.setState({ 
      sortByHP: !prevState 
    })
  }

  sortByName = () => {
    let currentList = this.state.pokemonsDisplay
    return currentList.sort( (pokemon1, pokemon2) => pokemon1.name > pokemon2.name ? 1 : -1)
  }

  sortByHP = () => {
    let currentList = this.state.pokemonsDisplay
    return currentList.sort( (pokemon1, pokemon2) => 
      (pokemon1.stats.find( stat => stat.name === "hp").value) > (pokemon2.stats.find( stat => stat.name === "hp").value) ? 1 : -1
    )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <Sort byHP={this.toggleSortByHP}/>
        {
          this.state.sortByHP
          ? <PokemonCollection pokemons={this.sortByHP()}/>
          : <PokemonCollection pokemons={this.sortByName()}/>
        }

      </Container>
    )
  }
}

export default PokemonPage
