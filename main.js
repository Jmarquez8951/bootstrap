const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'single',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on'
    },
    {
        color: 'brown',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'single',
        diet: 'meat',
        age: 10,
        featherNum: 2,
        name: 'John',
        imgUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60291251-480px.jpg'
    },
    {
        color: 'red',
        isRubber: false,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'single',
        diet: 'vegan',
        age: 5,
        featherNum: 3300,
        name: 'Samantha',
        imgUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60310501-480px.jpg'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'single',
        diet: 'vegan',
        age: 21,
        featherNum: 0,
        name: 'Bob',
        imgUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Clouds-rubber-duck-front-Amsterdam-Duck-Store.jpg'
    },
    {
        color: 'blue',
        isRubber: false,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'married',
        diet: 'meat',
        age: 90,
        featherNum: 5000,
        name: 'Maria',
        imgUrl: 'https://www.naturespic.com/i/34092BB00_w.jpg'
    },
    {
        color: 'brown',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'taken',
        diet: 'meat',
        age: 30,
        featherNum: 0,
        name: 'Steven',
        imgUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2016/02/coffee-rubber-duck-leaning.jpg'
    },
    {
        color: 'brown',
        isRubber: true,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'single',
        diet: 'pescatarian',
        age: 50,
        featherNum: 0,
        name: 'Jimmy',
        imgUrl: 'https://i.ebayimg.com/images/g/cDoAAOSw9ZhbbaPr/s-l640.jpg'
    },
    {
        color: 'red',
        isRubber: true,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'single',
        diet: 'vegetarian',
        age: 14,
        featherNum: 0,
        name: 'Megan',
        imgUrl: 'https://i.ebayimg.com/images/g/dGUAAOSw1LNZ4NAG/s-l300.jpg'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckPrinter = (quacks) => {
    let domString = '';
    for (let i = 0; i < quacks.length; i++){
        domString += '<div class="col-md-6 col-lg-4">';
        domString += ' <div class="card ">';
        domString += `   <img src="${quacks[i].imgUrl}" class="card-img-top" alt="...">`;
        domString += '   <div class="card-body">';
        domString += `     <h5 class="card-title">${quacks[i].name}</h5>`;
        domString += `     <p class="card-text">${quacks[i].socialStatus}</p>`;
        domString += `     <p class="card-text">${quacks[i].diet}</p>`;
        domString += '   </div>';
        domString += ' </div>';
        domString += '</div>';
    }
    printToDom('pond', domString);
};

const chooseColor = (e) => {
    const buttonId = e.target.id;
    const selectedColor = [];
    for (let i = 0; i < ducks.length; i++){
        if (ducks[i].color === buttonId){
            selectedColor.push(ducks[i]);
        }
    }
    duckPrinter(selectedColor);
};

const chooseGender = (e) => {
    const buttonId = e.target.id;
    const selectedGender = [];
    for (let i = 0; i < ducks.length; i++){
        if (ducks[i].gender === buttonId){
            selectedGender.push(ducks[i]);
        }
    }
    duckPrinter(selectedGender);
};

const chooseRubber = () => {
    const rubber = [];
    for (let i = 0; i < ducks.length; i++){
        if (ducks[i].isRubber){
            rubber.push(ducks[i]);
        }
    }
    duckPrinter(rubber);
};

const events = () => {
    document.getElementById('blue').addEventListener('click', chooseColor);
    document.getElementById('red').addEventListener('click', chooseColor);
    document.getElementById('brown').addEventListener('click', chooseColor);
    document.getElementById('female').addEventListener('click', chooseGender);
    document.getElementById('male').addEventListener('click', chooseGender);
    document.getElementById('rubber').addEventListener('click', chooseRubber);
};

const init = () => {
    duckPrinter(ducks);
    events();
};

init();