'use strict';

class AnswerGenerator{
    constructor(){

    }

    generator() {
        var t = '';
        var json = {};
        var count = 0;
        while (count < 4) {
            //产生单个随机数
            console.log("kkk"+Math.random());
            var ranNum = Math.ceil(Math.random() * (9 - 0)) + 0;
            //通过判断json对象的索引值是否存在 来标记 是否重复
            if (!json[ranNum]) {
                json[ranNum] = 1;
                t += ranNum;
                count++;
                console.log(t);
            }

        }
        console.log("random:" + t.split('').join(' '));
        // return t.join(' ');
        return this.random = t.split('').join(' ');
    }


}

module.exports = AnswerGenerator;