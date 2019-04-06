function fizzbuzz(num) {
  if(num % 3 == 0) {
    return "Fizz"
  }
  if(num % 5 == 0) {
    return "Buzz"
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
  it('should return 4 when the value is 4', () => {
    chai.assert.equal(4, fizzbuzz(4))
  })
  it('should return Buzz when the value is 5', () => {
    chai.assert.equal("Buzz", fizzbuzz(5))
  })
  it('should return Fizz when the value is 6', () => {
    chai.assert.equal("Fizz", fizzbuzz(6))
  })
  it('should return 7 when the value is 7', () => {
    chai.assert.equal(7, fizzbuzz(7))
  })
  it('should return 8 when the value is 8', () => {
    chai.assert.equal(8, fizzbuzz(8))
  })
  it('should return Fizz when the value is 9', () => {
    chai.assert.equal("Fizz", fizzbuzz(9))
  })
  it('should return Buzz when the value is 10', () => {
    chai.assert.equal("Buzz", fizzbuzz(10))
  })
})