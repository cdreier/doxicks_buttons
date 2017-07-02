import React from 'react'

import styled from 'styled-components'

export const DefaultButton = styled.button`
  background-color: ${props => props.secondary ? '#4888D7': 'white'};
  border: 1px solid ${props => props.secondary ? '#333': '#AEAEAE'};
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  ${props => props.fullwidth ? 'width: 100%': ''};
`
// alright, the width part is a bit of a hack... 
// i think i a normal component there are media queries 
// or you can solve it with https://www.styled-components.com/docs/api#attrs

export const LargeButton = styled(DefaultButton)`
  padding: 10px;
`