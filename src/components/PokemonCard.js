import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       imgclicked: false
     }
   }

   back = (e) => {
    this.setState({
      imgclicked: !this.state.imgclicked

    })
  }
  render() {
    let p = this.props.pok.stats.find((element)=> element["name"] == "hp")
    return (
      <Card>
        <div onClick = {(e) => this.back(e)}>
          <div className="image">
            <img src={ this.state.imgclicked ?this.props.pok.sprites.back :this.props.pok.sprites.front } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pok.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {p.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
