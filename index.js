const cardObjectDefinitions = [
    {id: 1, imagePath: 'images/card-KingHearts.png'},
    {id: 2, imagePath: 'images/card-JackClubs.png'},
    {id: 3, imagePath: 'images/card-QueenDiamonds.png'},
    {id: 4, imagePath: 'images/card-AceSpades.png'}
];

const cardBackImgPath = 'images/card-back-Blue.png'

let cards = [];

const cardContainerElem = document.querySelector('.card-container');
const playGameButtonElem = document.getElementById('playGame');

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-pos-a";

loadGame();

function loadGame() {
    createCards();

    cards = document.querySelectorAll('.card');

    playGameButtonElem.addEventListener('click', () => startGame());
}

function startGame() {
    initializeNewGame();
    startRound();
}

function initializeNewGame() {

}

function startRound() {
    initializeNewRound();
    collectCards();
}

function initializeNewRound() {

}

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate);
    addCardsToGridAreaCell(cardCollectionCellClass);
}

function transformGridArea(areas){
    cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName);

    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card);
    })
}

function createCards() {
    cardObjectDefinitions.forEach((cardItem)=> {
        createCard(cardItem);
    })
}

function createCard(cardItem) {

    //create div elements that make up a card
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    //create front and back image elements for a card
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back');

    //add src attribute and appropraite value to img element - back of card
    addSrcToImageElem(cardBackImg, cardBackImgPath);

    //add src attribute and appropraite value to img element - front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

    //assign class to back image element of back of card
    addClassToElement(cardBackImg, 'card-img');

    //assign class to back image element of front of card
    addClassToElement(cardFrontImg, 'card-img');
    
    //add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg);

    //add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg);

    //add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem);
    
    //add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem);

    //add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem);

    //add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem);
}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
    if (card.id == 1) {
        return '.card-pos-a'
    } else if (card.id == 2) {
        return '.card-pos-b'
    } else if (card.id == 3) {
        return '.card-pos-c'
    } else if (card.id == 4) {
        return '.card-pos-d'
    }
}