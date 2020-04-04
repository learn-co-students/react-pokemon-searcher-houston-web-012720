import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container , Button} from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemons:[],
      sorted: false
    }
  }


  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState({
      pokemons
    }))
  }
  

  onChange = (name) => {
    // console.log(name)
    let filtiredpokemons = this.state.pokemons.filter((pok) => pok.name == name)
    console.log(filtiredpokemons)
    this.setState({
      pokemons: filtiredpokemons
    })
  }

  handleSubmit = (event) => {
    // debugger
    console.log(pok)
    console.log(event)

    event.preventDefault()
    let pok = {
      name: event.target[0].value,
      stats: [{
        "value": event.target[1].value,
        "name": "hp"
      }],
      sprites: {
        front: event.target[2].value,
        back: event.target[3].value
      }
    }
    this.state.pokemons.push(pok)
    this.setState({
      pokemons: this.state.pokemons
    })
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json",  Accept: "application/json"},
      body:JSON.stringify(
        pok
      )
    }).then(res=> res.json())
    .then (pok => console.log(pok))
    
  }

  sortme = () => {
    this.setState ({
      sorted: !this.state.sorted
    })
  }




   render() {
    return (
      <Container>
       
        <h1>Pokemon Searcher</h1>
       
        <br />
        <PokemonForm handleSubmit = {this.handleSubmit}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <Button onClick={this.sortme} >Sort Pokemons</Button>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} sorted ={this.state.sorted}/>
        
      </Container>
    )
  }
}

export default PokemonPage


{/* <App>
    <PokemonPage>
       <PokemonForm>
       </PokemonForm>

       <Search>
       </Search>

       <PokemonCollection>
       </PokemonCollection>
    </PokemonPage>
</App> */}
