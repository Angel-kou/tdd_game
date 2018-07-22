let AnswerGenerator = require("./answer-generator");

describe('AnswerGenerator', function () {

    var answerGenerator;
    var number = 1;
    beforeEach(function () {
        jest.spyOn(Math, 'random')
            .mockImplementation(()=> {
                return 1/number++;
            })
    });

    it('should return 4A0B for input 1 2 3 4 when answer is 1 2 3 4', function () {
        // console.log(new AnswerGenerator().generator());
        expect(new AnswerGenerator().generator()).toEqual("5 3 2 1")
        // const mock = jest.fn();
        // expect(mock).toBeCalledWith(generator);
    });
})
