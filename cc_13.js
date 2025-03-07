//Initial Commit

//Task 2
function createEmployeeCard(name, paragraph, position) {
    // Create the card container
    const card = document.createElement('div');
    card.setAttribute('class', 'employeeCard');

    // Create the heading for the employee's name
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
    card.appendChild(nameHeading);

    // Create the paragraph for the employee's position
    const positionParagraph = document.createElement('h4');
    positionParagraph.textContent = position;
    card.appendChild(positionParagraph);

    // Create the paragraph for the employee's description
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraph;
    card.appendChild(paragraphElement);

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the container
        card.remove(); // Remove the card from the DOM
    });
    card.appendChild(removeButton);

    // Create the highlight button
    const highlightButton = document.createElement('button');
    highlightButton.textContent = 'Highlight';
    highlightButton.addEventListener('click', () => {
        if (card.style.backgroundColor === 'yellow') {
            card.style.backgroundColor = '';
        } else {
            card.style.backgroundColor = 'yellow';
        }
    });
    card.appendChild(highlightButton);

    // Append the card to the employee container
    const employeeContainer = document.getElementById('employeeContainer');
    employeeContainer.appendChild(card);
}

//Task 3
function highlightAllEmployeeCards() {
    const employeeCards = document.querySelectorAll('.employeeCard');
    const employeeCardsArray = Array.from(employeeCards);
    employeeCardsArray.forEach((employeeCard) => {
        if (employeeCard.style.backgroundColor === 'yellow') {
            employeeCard.style.backgroundColor = '';
        } else {
            employeeCard.style.backgroundColor = 'yellow';
        }
    });
}

//Task 4
// Attach event listener to the employee container
document.getElementById('employeeContainer').addEventListener('click', () =>  {
    console.log('Employee container clicked');
});
