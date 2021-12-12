import React from 'react'
import { shallow } from 'enzyme'
import IntroSection from './section-about'

describe('<IntroSection />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<IntroSection />)
  })
})
