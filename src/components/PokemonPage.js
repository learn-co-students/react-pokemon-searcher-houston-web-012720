import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSearch: "",
      pokemons: []
    }
  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => {
        this.setState({pokemons: pokemons.filter(p => p.name.includes(this.state.currentSearch))})
      })
  }

  postPokemon = (formData) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: formData[0].value,
        stats: [
          {
            value: formData[1].value,
            name: "hp"
          },
        ],
        sprites: {
          front: formData[2].value,
          back: formData[3].value
        }
      })
    })
      .then(res => res.json())
      .then(pokemon => console.log(pokemon))
  }

  handleSearch = (event) => {
    this.setState({currentSearch: event.target.value})
    this.fetchPokemon()
  }

  handleCreatePokemon = (event) => {
    this.postPokemon(event)
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmit={this.handleCreatePokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} search={this.state.currentSearch}/>
      </Container>
    )
  }
}

export default PokemonPage
