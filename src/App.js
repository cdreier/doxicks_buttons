import React from 'react'
import Headerbar from './components/Headerbar'

import styled from 'styled-components'

const NotARealModal = styled.div`
  border: 1px solid #333;
  width: 300px;
  height: 400px
  margin: 0 auto;
  padding: 5px;
  background-color: #EEE;
  display: flex;
  flex-direction: column;
`

const ModalBody = styled.div`
  background-color: white;
`

const BottomSticky = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`

const Spacer = styled.hr`
  margin: 20px;
`

import {
  DefaultButton,
  LargeButton,
} from './components/Buttons'

const App = () => {
  return (
    <div >
      <Headerbar >Awesome title!</Headerbar>
      <DefaultButton>
          default button
      </DefaultButton>
      <Spacer />
      <LargeButton>
        large
      </LargeButton>
      <Spacer />
      <LargeButton secondary>
        large
      </LargeButton>
      <Spacer />
      

      <NotARealModal>
        <ModalBody>
          <h1>TODO: put in form</h1>
        </ModalBody>
        <BottomSticky>
          <LargeButton secondary fullwidth >save that form!</LargeButton>
        </BottomSticky>
      </NotARealModal>

    </div>
  )
}

export default App
