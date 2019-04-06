function fizzbuzz(num) {
  if(num == 3) {
    return "Fizz"
  }
  return num
}

describe('Fizzbuzz', function() {
  it('should return 1 when the value is 1', () => {
     chai.assert.equal(1, fizzbuzz(1))
  })
  it('should return 2 when the value is 2', () => {
     chai.assert.equal(2, fizzbuzz(2))
  })
  it('should return Fizz when the value is 3', () => {
    chai.assert.equal("Fizz", fizzbuzz(3))
  })
})