import { expect } from 'chai'
import { describe, it } from 'mocha'
import addTwoNumbers from '../src/robot.js'

describe('Test Calculator functionality', () => {
  it('Can add two numbers', () => {
    expect(addTwoNumbers(1, 3)).to.equal(4)
  })
})
