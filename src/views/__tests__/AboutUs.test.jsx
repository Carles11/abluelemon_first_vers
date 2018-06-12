// 

import React from 'react'
import { shallow } from 'enzyme'
import AboutUs from '../AboutUs'

describe('<AboutUs />', () => {
  it('should render itself', () => {
    const component = shallow(<AboutUs />)
    expect(component).toMatchSnapshot()
  })
})