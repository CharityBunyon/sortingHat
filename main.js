const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];




const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
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
        <label for="exampleInputPassword1">Student:</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Neville Longbottom">
        </div>
        
        <button id= "" type="submit" class="btn btn-primary">Sort!</button>
        </form>
    `
    printToDom('form', formContents)
};

const formButton = (e) => {
document.getElementById('formAppear').addEventListener('click',createForm)
};

formButton();

//Create  Cards 

const createCard = () => {
    const cardContents = `
    <div class="card" style="width: 18rem;">            
    <div class="card-body">
        <h5 class="card-title">Person Name</h5>
        <p class="card-text">House Name</p>
        <a id= "expel" href="#" class="btn btn-primary">Expel</a>
    </div>
    </div>
    `
};