const AnswerGenerator = require("./answer-generator.js");

class GuessNumberGame{

    constructor(){
        this.count = 0;
        this.random = new AnswerGenerator().generator();
    }


    test(input){
        var result =[0,0];
        this.count++;
        if(!this.validate(input)){
            return "wrong input , input again";
        }
        for(let num of input){
            var isExist = this.random.split(' ').indexOf(num);
            if(isExist !== -1){
                if(isExist == input.split(' ').indexOf(num)){
                    result[0]++;
                }else{
                    result[1]++;
                }
            }
        }
        if(this.count == 6){
            return ''+result[0]+'A'+result[1]+'B\ngame over';
        }else{
            return ''+result[0]+'A'+result[1]+'B';
        }


    }


    validate(input){

        var inputList = input.split(' ');

        var digit = false;
        var single = false;

        if(inputList.length == 4) digit = true;

        var count = inputList.filter(function (item, index,self) {
            return self.indexOf(item) == index;
        }).filter(function (num) {
            return num < 10;
        }).length;

        if(count == 4) single = true;

        return digit && single;
    }

}

module.exports = GuessNumberGame;