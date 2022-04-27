import React from 'react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />)
}
const findbyAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

//test that component is rendered without error
test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findbyAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})
//test that counter display is rendered

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findbyAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})
//test that button for increment is rendered
test('renders button increase', () => {
  const wrapper = setup()
  const buttonIncrease = findbyAttr(wrapper, 'button-increase')
  expect(buttonIncrease.length).toBe(1)
})

//find counter display and test value starts at 0
test('counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = findbyAttr(wrapper, 'counter-display')
  expect(initialCounterState.text()).toBe('1')
})
//find button and test value
test('clicking button increments counter display', () => {
  const wrapper = setup()
  const buttonIncrease = findbyAttr(wrapper, 'button-increase')
  buttonIncrease.simulate('click')
  wrapper.update()
  let initialCounterState = findbyAttr(wrapper, 'counter-display').text()
  expect(initialCounterState).toContain(initialCounterState++)
})

test('renders button decrease', () => {
  const wrapper = setup()
  const buttonDecrease = findbyAttr(wrapper, 'button-decrease')
  expect(buttonDecrease.length).toBe(1)
})

test('counter decrease on click', () => {
  const wrapper = setup()
  const buttonDecrease = findbyAttr(wrapper, 'button-decrease')
  buttonDecrease.simulate('click')
  wrapper.update()
  let initialCounterState = findbyAttr(wrapper, 'counter-display').text()
  expect(initialCounterState).toContain(initialCounterState--)
})
