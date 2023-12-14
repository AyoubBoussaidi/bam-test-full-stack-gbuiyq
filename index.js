// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI !


function solutionExercice1(N) {
    var res = "EXERCICE 1"
 
    let lastOrderedNumber = 0;

    function isOrdered(number) {
        const digits = number.toString().split('').map(Number);

        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i] > digits[i + 1]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 1; i <= N; i++) {
        if (isOrdered(i)) {
            lastOrderedNumber = i;
        }
    }

    return lastOrderedNumber;
    }
    


function solutionExercice2(L) {
    var res = "EXERCICE 2"
    const positivesNumbers=[...new Set(L.filter(num=>num>0))];

    positivesNumbers.sort((a,b)=>a-b);
    let smallestPositive=1;

    for(const num of positivesNumbers){
        if(num==smallestPositive){
            smallestPositive++;
        }else{
            return smallestPositive;
        }
    }

    return res
}
function solutionExercice3(L) {
    var res = "EXERCICE 3"
    const occurenceMap=new Map();

    for(const num of L){
        occurenceMap.set(num,(occurenceMap.get(num) || 0)+1);

    }

    for (const [num, count] of occurenceMap) {
        if (count === 1) {
            return num;
        }
    }
    return null
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')