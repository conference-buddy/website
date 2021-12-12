import React from 'react'
import { shallow } from 'enzyme'
import MainNav from './main-navigation'

describe('MainNav', () => {
  it('renders without crashing', () => {
    shallow(<MainNav />)
  })
  describe('renders a navigation', () => {
    const wrapper = shallow(<MainNav />)
    it('renders a nav', () => {
      expect(wrapper.find('nav')).toHaveLength(1)
    })
  })
})
