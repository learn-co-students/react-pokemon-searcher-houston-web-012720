import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemon: [],
      displayPokemon: [],
      query: null,
      addedPokemon: null,
      defaultPokemon: {
        height: 10,
        weight: 130,
        id: 2,
        name: "ivysaur",
        abilities: [
          "overgrow",
          "chlorophyll"
        ],
        moves: [],
        stats: [
          {
            value: 0,
            name: "special-defense"
          },
          {
            value: 0,
            name: "special-attack"
          },
          {
            value: 0,
            name: "defense"
          },
          {
            value: 0,
            name: "attack"
          },
          {
            value: 0,
            name: "speed"
          },
          {
            value: 0,
            name: "hp"
          }
        ],
        types: ["normal", "none"],
        sprites: {
          front: "https://picsum.photos/49",
          back: "https://picsum.photos/50"
        }
      }
    }
  }


  componentDidMount() {
    this.getPokemon()
  }

  filterPokemon = (e) => {
    this.setState({
      query: e.target.value,
      displayPokemon: this.state.pokemon.filter(pokemons => pokemons.name.includes(e.target.value))
    })
  }

  addPokemon = (e) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target[0].value,
        stats: [{ value: e.target[1].value, name: "hp" }],
        sprites: {
          front: e.target[2].value,
          back: e.target[3].value
        }
      })
    })
      .then(response => response.json())
      .then(addedPokemon => {
        this.setState({
          pokemon: [...this.state.pokemon, addedPokemon]
        })
        this.getPokemon()
      })
    e.target.reset()
  }

  getPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(pokemon => {
        this.setState({
          pokemon,
          displayPokemon: pokemon
        })
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} defaultPokemon={this.state.defaultPokemon} />
        <br />
        <Search onChange={(e) => this.filterPokemon(e)} />
        <br />
        <PokemonCollection displayPokemon={this.state.displayPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
