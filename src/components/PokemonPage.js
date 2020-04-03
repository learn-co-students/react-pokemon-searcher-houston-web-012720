import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemons: [],
      display_pokemons: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons,display_pokemons: pokemons}))
  }

  onChange = (e) => {
    let value = e.target.value
    let regx = new RegExp(value,"i")
    let arr = [...this.state.pokemons]
    let sort_pokemons = arr.filter(pokemon => pokemon.name.match(regx))
    this.setState({
      display_pokemons: sort_pokemons
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let name , hp , front_url , back_url , newPokemon , obj
    name = e.target[0].value
    hp = e.target[1].value 
    front_url = e.target[2].value
    back_url = e.target[3].value

    newPokemon = {
      name,
      stats: [
        {
          name: "hp",
          value: hp
        }
      ],
      sprites: {
        front: front_url,
        back: back_url
      }
    }

    obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }

    e.target.reset()

    fetch("http://localhost:3000/pokemon",obj)
    .then(res => res.json())
    .then(data => this.setState({pokemons: [...this.state.pokemons,data],display_pokemons: [...this.state.pokemons,data]}))
  }

  handleClear = (pokemon_id) => {
    let obj = {
      method: "DELETE"
    }

    let pokemons = [...this.state.pokemons]

    fetch(`http://localhost:3000/pokemon/${pokemon_id}`,obj)
    .then(res => res.json())
    .then(delete_pokemon => {
      pokemons.splice(pokemons.indexOf(delete_pokemon),1)
      console.log(pokemons)
      this.setState({pokemons, display_pokemons: pokemons})
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit= {this.handleSubmit}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={this.state.display_pokemons} handleClear={this.handleClear}/>
      </Container>
    )
  }
}

export default PokemonPage
