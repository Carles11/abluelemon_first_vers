// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('<Header />', () => {
  it('should render itself', () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })

  it('should render the Nav Menu when the button is clicked', () => {
    const component = shallow(<Header />)
    expect(component.find('Navigation').length).toEqual(0)
    component.find('button').simulate('click')
    expect(component.find('Navigation').length).toEqual(1)
  })
})