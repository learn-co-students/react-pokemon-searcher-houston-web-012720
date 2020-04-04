import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     name: '',
  //     hp: '',
  //     frontUrl: '',
  //     backUrl: ''
  //   }
  // }

  // handleName = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }
  // handleHp = (event) => {
  //   this.setState({
  //     hp: event.target.value
  //   })
  // }

  // handleFrontUrl = (event) => {
  //   this.setState({
  //     frontUrl: event.target.value
  //   })
  // }

  // handleBackUrl = (event) => {
  //   this.setState({
  //     backUrl: event.target.value
  //   })
  // }

  render() {
    return (
      
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.props.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>

      // <div>
      // <h3>Add a Pokemon!</h3>
      // <Form onSubmit={() => this.handleSubmit(event)}>
      //   <Form.Group widths="equal">
      //     <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleName} />
      //     <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHp}/>
      //     <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFrontUrl} />
      //     <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleBackUrl}/>
      //   </Form.Group>
      //   <Form.Button>Submit</Form.Button>
      // </Form>
      // </div>
    )
  }
}

export default PokemonForm
