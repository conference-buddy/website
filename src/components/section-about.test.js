import React from 'react'
import { shallow } from 'enzyme'
import AboutSection from './section-about'

describe('<AboutSection />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AboutSection />)
  })
})
