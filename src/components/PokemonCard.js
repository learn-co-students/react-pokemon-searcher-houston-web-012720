import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cardFlip: true,
      imgUrl: props.pokemon.sprites.front,
      hp: props.pokemon.stats.find(stat => stat.name == "hp").value
    }
  }

  handleClick = () => {
    this.setState({cardFlip: !this.state.cardFlip})
    this.state.cardFlip
    ? this.setState({imgUrl: this.props.pokemon.sprites.back})
    : this.setState({imgUrl: this.props.pokemon.sprites.front})
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.imgUrl} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.state.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
