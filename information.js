const myInfo = {
    name: 'Vitalii',
    campus: 'Berlin Campus!',
    greeting: () => {
        let name = prompt('What is your name');
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
};

module.exports = myInfo;