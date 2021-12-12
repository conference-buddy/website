import React from 'react'
import { shallow } from 'enzyme'
import ExternalLink from './external-link'

const testUrl = 'http://conferencebuddy.io/'
const classTextLink = 'TextLink'
const linkText = 'Conference Buddy'
const linkImage = <img src="image.jpg" />

const additionalClassLinkPrimary = 'TextLink-primary'
const additionalClassLinkSecondary = 'TextLink-secondary'

const requiredProps = {
  url: testUrl,
  primary: true,
  secondary: false,
}

describe('<ExternalLink />', () => {
  it('renders without crashing', () => {
    shallow(<ExternalLink {...requiredProps}>{linkText}</ExternalLink>)
  })

  describe('renders a link with an url and a fixed class', () => {
    const wrapper = shallow(
      <ExternalLink url={testUrl}>{linkText}</ExternalLink>
    )
    it('renders a link', () => {
      expect(wrapper.find('a')).toHaveLength(1)
    })
    it('renders a link with a url', () => {
      expect(wrapper.find('a').prop('href')).toEqual(testUrl)
    })
    it('renders a link with a class', () => {
      expect(wrapper.hasClass(classTextLink)).toBe(true)
    })
  })

  describe('renders an a-element with a given content', () => {
    it('renders a link with a text as children', () => {
      const wrapper = shallow(
        <ExternalLink url={testUrl}>{linkText}</ExternalLink>
      )
      expect(wrapper.text()).toBe(linkText)
      expect(wrapper).toMatchSnapshot()
    })
    it('renders a link with an image as children', () => {
      const wrapper = shallow(
        <ExternalLink url={testUrl}>{linkImage}</ExternalLink>
      )
      expect(wrapper.contains(linkImage)).toBe(true)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('adds a additional class dependend on props', () => {
    it('adds a class for style primary', () => {
      const wrapper = shallow(
        <ExternalLink url={testUrl} primary>
          {' '}
          {linkText}
        </ExternalLink>
      )
      expect(wrapper.hasClass(additionalClassLinkPrimary)).toBe(true)
      expect(wrapper.hasClass(additionalClassLinkSecondary)).toBe(false)
      expect(wrapper).toMatchSnapshot()
    })
    it('adds a class for style secondary', () => {
      const wrapper = shallow(
        <ExternalLink url={testUrl} secondary>
          {linkText}
        </ExternalLink>
      )
      expect(wrapper.hasClass(additionalClassLinkSecondary)).toBe(true)
      expect(wrapper.hasClass(additionalClassLinkPrimary)).toBe(false)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
