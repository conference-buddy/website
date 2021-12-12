import React from 'react'
import { shallow } from 'enzyme'
import Footer from './footer'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('footer')).toHaveLength(1)
  })
})
