//Initial Commit

//Task 2
function createEmployeeCard(name, paragraph, position) {// Creates the card container
    const card = document.createElement('div'); //Uses the document.createElement() method to create a new div element
    card.setAttribute('class', 'employeeCard'); //Uses the setAttribute() method to add a class attribute to the card div element

    const nameHeading = document.createElement('h3'); // Create the heading for the employee's name
    nameHeading.textContent = name; //Uses the textContent property to set the text content of the nameHeading element to the name parameter
    card.appendChild(nameHeading); //Uses the appendChild() method to append the nameHeading element to the card div element

    const positionParagraph = document.createElement('h4');// Create the paragraph for the employee's position
    positionParagraph.textContent = position;//Uses the textContent property to set the text content of the positionParagraph element to the position parameter
    card.appendChild(positionParagraph); //Uses the appendChild() method to append the positionParagraph element to the card div element

    const paragraphElement = document.createElement('p'); // Create the paragraph for the employee's description
    paragraphElement.textContent = paragraph; //Uses the textContent property to set the text content of the paragraphElement element to the paragraph parameter
    card.appendChild(paragraphElement); //Uses the appendChild() method to append the paragraphElement element to the card div element

    const removeButton = document.createElement('button'); // Create the remove button
    removeButton.textContent = 'Remove'; //Writes the text content of the removeButton element to 'Remove'
    removeButton.addEventListener('click', () => { //Adds an event listener to the removeButton element
        card.remove(); //Uses the remove() method to remove the card div element when the remove button is clicked
    });
    card.appendChild(removeButton); //Uses the appendChild() method to append the removeButton element to the card div element

    const employeeContainer = document.getElementById('employeeContainer');// Append the card to the employee container
    employeeContainer.appendChild(card); //Uses the appendChild() method to append the card div element to the employeeContainer div element
}