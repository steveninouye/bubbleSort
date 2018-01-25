const expect = require('chai').expect;
const app = require('../index.js');

let testArray1 = [3,5,1,5,76,2,4,2,6];
let testArray2 = 'A curious child asked his mother Mommy why are some of your hairs turning grey The mother tried to use this occasion to teach her child It is because of you dear Every bad action of yours will turn one of my hairs grey The child replied innocently Now I know why grandmother has only grey hairs on her head'.split(' ');
let testArray3 = [43634,32414,'Do','you','know','what','you','can','hold','without','ever','touching','it',2,56,1,Infinity,null,235236,'a','conversation',63451345,66125,36];
let testArray4 = null;

describe('#sort Function', function(){
    it('Will return null if input is null', function(){
        let answer = app.sort(testArray4);
        expect(answer).to.deep.equal(null);
    });
    it('Sorts numbers from lowest to highest', function(){
        expect(app.sort(testArray1)).to.deep.equal([1, 2, 2, 3, 4, 5, 5, 6, 76])
    });
    it('Sorts strings with lowercase as higher values',function(){
        expect(app.sort(testArray2)).to.deep.equal(["A", "Every", "I", "It", "Mommy", "Now", "The", "The", "action", "are", "asked", "bad", "because", "child", "child", "child", "curious", "dear", "grandmother", "grey", "grey", "grey", "hairs", "hairs", "hairs", "has", "head", "her", "her", "his", "innocently", "is", "know", "mother", "mother", "my", "occasion", "of", "of", "of", "of", "on", "one", "only", "replied", "some", "teach", "this", "to", "to", "tried", "turn", "turning", "use", "why", "why", "will", "you", "your", "yours"])
    });
    it('Sorts null as the lowest value', function(){
        let answer = app.sort(testArray3)[0]
        expect(answer).to.deep.equal(null);
    });
    it('Sorts numbers as a lower value than string', function(){
        expect(app.sort(testArray3)[3]).to.deep.equal(36);
    });
});