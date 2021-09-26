const myInfo = require('./information');
const cowSay = require('./node_modules/cowsay');


console.log(cowSay.say({
    text : `Hello, I'm ${myInfo.name} from ${myInfo.campus}`,
    e : "oO",
    T : "U "
}));