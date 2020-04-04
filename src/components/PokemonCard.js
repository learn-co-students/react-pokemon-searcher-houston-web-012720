import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true
  } 

  handleMouse = () => {
    // debugger
    let currentShowFront = this.state.showFront
    this.setState({
      showFront: !currentShowFront
    })
  }


  render() {
    let poke = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            {
            this.state.showFront
            ? <img src={poke.sprites.front} alt="oh no!" onMouseDown={this.handleMouse} onMouseUp={this.handleMouse} />
            : <img src={poke.sprites.back} alt="oh no!" onMouseDown={this.handleMouse} onMouseUp={this.handleMouse}/>
            }
          </div>
          <div className="content">
          <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* {poke.stats[4].value} */}
              {poke.stats.find( stat => stat.name === "hp").value}

            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
