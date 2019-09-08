//House Array
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];



//Print to Dom
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};


const createJumbo = () => {

    const jumboContents =
    `
        <div class="jumbotron">
        <h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>
        <p class="lead">The Hogwarts letter is a letter of acceptance to Hogwarts School of Witchcraft and Wizardry, sent to British wizards and witches prior to their first year at Hogwarts. A special quill exists, which writes down the name of every magical child in Britain at the time of their birth. This allows Hogwarts letters to be sent to all magical children at the appropriate time, even those who are Muggle-born.</p>
        <hr class="my-4">
        <p>However, you must belong to a house before we send you a letter.</p>
        <a id="formAppear" class="btn btn-primary btn-lg" href="#" role="button">Let's start sorting!</a>
        </div>
    `;

    printToDom('jumbo', jumboContents);
};

createJumbo();





//Need to make form appear on screen
const createForm = () => {
    const formContents = `
        <form>
        <div class="form-group">
        <label class="title" for="exampleInputEmail1">Enter First Year's Name</label>
        </div>

        <div class="form-group">
        <label for="exampleInputName">Student Name</label>
        <input id= "studentName" type="studentName" class="form-control" placeholder="Neville Longbottom">
        </div>
        
        <button id= "sort" type="submit" class="btn btn-primary">Sort!</button>
        </form>
    `
    printToDom('form', formContents);
    randomize(); //called this function after making event button on form card to work
};

const formButton = (e) => {
document.getElementById('formAppear').addEventListener('click',createForm)
};

formButton();

//Create  Cards 

const makeCard = (arr) => {
    const startSorting = studentName.value;
    let randomHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
    let cardPrint = `
        <div class="card" style="width: 18rem;">            
        <div class="card-body">
            <h5 class="card-title">${startSorting}</h5>
            <p class="card-text">${randomHouse}</p>
            <button type= "submit" class= "expel">Expel</button>
        </div>
        </div>
        `
    printToDom('houses', cardPrint)
    removeCard();
};


//event listener for form sort button

const randomize = (e) => {
    document.getElementById('sort').addEventListener('click', makeCard)
}


const removeCard = () => {
    const cardsToRemove = document.getElementsByClassName('expel');
    for(let i = 0; i < cardsToRemove.length; i++) {
        const deleteCard = cardsToRemove[i];
        deleteCard.addEventListener('click', (e) =>{
            const btnClicked = e.target;
            const cardsToRemove = btnClicked.parentNode.parentNode;
            cardsToRemove.remove();
        })
    }
};

//expel Student Event Listener
const expelStudent = () => {
    $(".expel").on('click', removeCard);
}
expelStudent();