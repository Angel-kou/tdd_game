let GuessNumberGame = require("./guess-number-game");
let AnswerGenerator = require("./answer-generator");


describe('GuessNumberGame', function () {

    var guessNumber;
    let generator;

    beforeEach(function () {
        generator = jest.spyOn(AnswerGenerator.prototype,"generator")
            .mockReturnValue("1 2 3 4");
        guessNumber = new GuessNumberGame();
    });


    it('should return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function () {
        expect(guessNumber.test("1 2 3 4")).toEqual("4A0B")
    });

    it('should return 3A0B for input 1 2 3 5 when answer is 1 2 3 4',function () {
        expect(guessNumber.test("1 2 3 5")).toEqual("3A0B")
    });

    it('should return 0A2B for input 2 1 0 5 when answer is 1 2 3 4',function () {
        expect(guessNumber.test("2 1 0 5")).toEqual("0A2B")
    });

    it('should return 2A2B for input 1 2 4 3 when answer is 1 2 3 4',function () {
        expect(guessNumber.test("1 2 4 3")).toEqual("2A2B")
    });


    it('should return wrong input , input again for input 1 2 3 3 when answer is 1 2 3 4',function () {
        expect(guessNumber.test("1 2 3 3")).toEqual("wrong input , input again")
    });

    it('should return game over! for when time equals six',function () {
        expect(guessNumber.test("1 2 3")).toEqual("wrong input , input again");
        expect(guessNumber.test("1 5 6 7")).toEqual("1A0B");
        expect(guessNumber.test("5 6 7 8")).toEqual("0A0B");
        expect(guessNumber.test("4 3 2 1")).toEqual("0A4B");
        expect(guessNumber.test("1 1 2 3")).toEqual("wrong input , input again");
        expect(guessNumber.test("0 3 2 4")).toEqual("1A2B\n"+"game over");
    });

    it('should return random number when generator is called',function () {
        expect(generator).toBeCalled()
    });


})