import React from 'react'
import { shallow } from 'enzyme'
import MouseScrollIcon from './mouse-scroll-icon'

const testOnPageLinkId = 'anchor-target'

describe('<MouseScrollIcon />', () => {
  it('renders without crashing', () => {
    shallow(<MouseScrollIcon onPageLinkId={testOnPageLinkId} />)
  })

  describe('renders a link to navigate onPage', () => {
    const wrapper = shallow(<MouseScrollIcon onPageLinkId={testOnPageLinkId} />)

    it('rendes a link an css icon as content', () => {
      const icon = wrapper.find('.MouseScrollIcon-mouse')
      expect(icon).toHaveLength(1)
      expect(icon).toMatchSnapshot()
    })
    it('renders a link with an onClick function', () => {
      expect(wrapper.find('a').prop('href')).toEqual(testOnPageLinkId)
      expect(wrapper.find('a').prop('onClick')).toHaveLength(1)
    })
    it('renders a link with an onClick function', () => {
      expect(wrapper.find('a').prop('href')).toEqual(testOnPageLinkId)
      expect(wrapper.find('a').prop('onClick')).toHaveLength(1)
    })
  })
})
