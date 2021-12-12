import React from 'react'
import { shallow } from 'enzyme'
import CardSpecialOffer from './card-special-offer'

describe('<CardSpecialOffer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardSpecialOffer />)
    expect(wrapper.find('div.card')).toHaveLength(1)
  })
})
