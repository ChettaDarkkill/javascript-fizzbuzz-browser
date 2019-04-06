function fizzbuzz(num) {
  if(num % 15 == 0) {
    return "FizzBuzz"
  }
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
  it('should return 11 when the value is 11', () => {
    chai.assert.equal(11, fizzbuzz(11))
  })
  it('should return Fizz when the value is 12', () => {
    chai.assert.equal("Fizz", fizzbuzz(12))
  })
  it('should return 13 when the value is 13', () => {
    chai.assert.equal(13, fizzbuzz(13))
  })
  it('should return 14 when the value is 14', () => {
    chai.assert.equal(14, fizzbuzz(14))
  })
  it('should return FizzBuzz when value is 15', () => {
    chai.assert.equal("FizzBuzz", fizzbuzz(15))
  })
  it('should return 16 when value is 16', () => {
    chai.assert.equal(16, fizzbuzz(16))
  })
  it('should return 17 when value is 17', () => {
    chai.assert.equal(17, fizzbuzz(17))
  })
  it('should return Fizz when value is 18', () => {
    chai.assert.equal("Fizz", fizzbuzz(18))
  })
  it('should return 19 when value is 19', () => {
    chai.assert.equal(19, fizzbuzz(19))
  })
  it('should return Buzz when value is 20', () => {
    chai.assert.equal("Buzz", fizzbuzz(20))
  })
  it('should return Fizz when value is 21', () => {
    chai.assert.equal("Fizz", fizzbuzz(21))
  })
  it('should return 22 when value is 22', () => {
    chai.assert.equal(22, fizzbuzz(22))
  })
  it('should return 23 when value is 23', () => {
    chai.assert.equal(23, fizzbuzz(23))
  })
  it('should return Fizz when value is 24', () => {
    chai.assert.equal("Fizz", fizzbuzz(24))
  })
  it('should return Buzz when value is 25', () => {
    chai.assert.equal("Buzz", fizzbuzz(25))
  })
  it('should return 26 when value is 26', () => {
    chai.assert.equal(26, fizzbuzz(26))
  })
  it('should return Fizz when value is 27', () => {
    chai.assert.equal("Fizz", fizzbuzz(27))
  })
  it('should return 28 when value is 28', () => {
    chai.assert.equal(28, fizzbuzz(28))
  })
})