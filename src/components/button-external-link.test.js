import React from 'react'
import { shallow } from 'enzyme'
import ButtonExternalLink from './button-external-link'

const testUrl = 'http://forum.conferencebuddy.io/'

const linkText = 'Test Button Linktext'
const linkImage = <img src="test.jpg" />

const requiredProps = {
  url: testUrl,
  children: linkText,
}

describe('<ButtonExternalLink />', () => {
  it('renders without crashing', () => {
    shallow(
      <ButtonExternalLink {...requiredProps}>{linkText}</ButtonExternalLink>
    )
  })

  describe('renders a link with an url and the "btn" class', () => {
    const wrapper = shallow(
      <ButtonExternalLink url={testUrl}>{linkText}</ButtonExternalLink>
    )
    it('renders a link', () => {
      expect(wrapper.find('a')).toHaveLength(1)
    })
    it('renders a link with a url', () => {
      expect(wrapper.find('a').prop('href')).toEqual(testUrl)
    })
    it('renders a link with a class', () => {
      expect(wrapper.hasClass('btn')).toBe(true)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('renders an a-element with a given content', () => {
    it('renders a link with a text as children', () => {
      const wrapper = shallow(
        <ButtonExternalLink url={testUrl}>{linkText}</ButtonExternalLink>
      )
      expect(wrapper.text()).toBe(linkText)
      expect(wrapper).toMatchSnapshot()
    })
    it('renders a link with an image as children', () => {
      const wrapper = shallow(
        <ButtonExternalLink url={testUrl}>{linkImage}</ButtonExternalLink>
      )
      expect(wrapper.contains(linkImage)).toBe(true)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('adds a additional class dependend on props', () => {
    it('adds a class for style primary', () => {
      const wrapper = shallow(
        <ButtonExternalLink url={testUrl} primary>
          {linkText}
        </ButtonExternalLink>
      )
      expect(wrapper.hasClass('btn-primary')).toBe(true)
      expect(wrapper.hasClass('btn-secondary')).toBe(false)
      expect(wrapper).toMatchSnapshot()
    })
    it('adds a class for style secondary', () => {
      const wrapper = shallow(
        <ButtonExternalLink url={testUrl} secondary>
          {linkText}
        </ButtonExternalLink>
      )
      expect(wrapper.hasClass('btn-secondary')).toBe(true)
      expect(wrapper.hasClass('btn-primary')).toBe(false)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('adds a additional class dependend on props', () => {
    const wrapperSmallBtn = shallow(
      <ButtonExternalLink url={testUrl} small>
        {linkText}
      </ButtonExternalLink>
    )
    const wrapperBtn = shallow(
      <ButtonExternalLink url={testUrl}>{linkText}</ButtonExternalLink>
    )
    it('adds "btn-custom" class if no small prop is given', () => {
      expect(wrapperBtn.hasClass('btn-custom')).toBe(true)
      expect(wrapperBtn.hasClass('btn-custom-small')).toBe(false)
      expect(wrapperBtn).toMatchSnapshot()
    })
    it('adds "btn-custom-small" class if prop small is true', () => {
      expect(wrapperSmallBtn.hasClass('btn-custom')).toBe(false)
      expect(wrapperSmallBtn.hasClass('btn-custom-small')).toBe(true)
      expect(wrapperSmallBtn).toMatchSnapshot()
    })
  })
})
