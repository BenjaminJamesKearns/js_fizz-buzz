describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"fizz", when the number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual('fizz')
    });

    it('"buzz", when the number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual('buzz')
    });

    it('"fizzbuzz", when the number is divisible by 3 and 5', function() {
      expect(javabuzz.says(15)).toEqual('fizzbuzz')
    });

    it('returns number if it is not divisible by 3 or 5', function() {
      expect(javabuzz.says(1)).toEqual(1)
    });

  });

});
