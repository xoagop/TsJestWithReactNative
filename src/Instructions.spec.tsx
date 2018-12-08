import React from 'react'
import { render } from 'react-native-testing-library'
import Instructions from './Instructions'

const instructions = 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu'

describe('<Instructions />', () => {
  describe('given instructions', () => {
    it('renders them', () => {
      const { getByText } = render(<Instructions instructions={instructions} />)
      expect(getByText(instructions)).not.toBeNull()
    })
  })

  it('rendering matches snapshot', () => {
    const { toJSON } = render(<Instructions instructions={instructions} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
