'use strict'

const expect=require('chai').expect

const slowFoxes = require('../foxes')

describe('slowFoxes', () => {
	it('to be defined', () => {
		expect(slowFoxes).to.be.defined
	})
  it('takes an array of foxTypes and returns an array of foxTypes', () => {
    expect(slowFoxes([])).to.be.eql([])
  })
  it("takes array ['Red Fox'] and returns array ['Red Fox']", () => {
    expect(slowFoxes(['Red Fox'])).to.be.eql(['Red Fox'])
  })
  it("takes array ['Swift Fox','Red Fox'] and returns array ['Red Fox']", () => {
    expect(slowFoxes(['Swift Fox','Red Fox'])).to.be.eql(['Red Fox'])
  })
  it("takes array ['Red Fox','Swift Fox','Artic Fox'] and returns array ['Red Fox','Artic Fox']", () => {
    expect(slowFoxes(['Red Fox','Swift Fox','Artic Fox'])).to.be.eql(['Red Fox','Artic Fox'])
  })
})
