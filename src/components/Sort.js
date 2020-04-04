import React from 'react'
import { Radio } from 'semantic-ui-react'

const Sort = props => {
  return (
    <div>
      <Radio toggle 
        style={{marginBottom: "20px"}} 
        label="Sort by HP" 
        onClick={props.byHP}/>
    </div>
  )
}

export default Sort
