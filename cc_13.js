//Initial Commit

//Task 2
function createEmployeeCard(name, paragraph, position) { // Create the card container
    const card = document.createElement('div'); //defines the card as a div element
    card.setAttribute('class', 'employeeCard'); //sets the class attribute of the card to 'employeeCard'

    const nameHeading = document.createElement('h3');// Create the heading for the employee's name
    nameHeading.textContent = name; //sets the text content of the name heading to the name parameter
    card.appendChild(nameHeading); //appends the name heading to the card

    const positionParagraph = document.createElement('h4');// Create the paragraph for the employee's position
    positionParagraph.textContent = position; //sets the text content of the position paragraph to the position parameter
    card.appendChild(positionParagraph); //appends the position paragraph to the card

    const paragraphElement = document.createElement('p');// Create the paragraph for the employee's description
    paragraphElement.textContent = paragraph; //sets the text content of the paragraph element to the paragraph parameter
    card.appendChild(paragraphElement); //appends the paragraph element to the card

    const removeButton = document.createElement('button');// Create the remove button
    removeButton.textContent = 'Remove'; //sets the text content of the remove button to 'Remove'
    removeButton.addEventListener('click', (event) => { // Add an event listener to the remove button
        event.stopPropagation(); // Prevent the event from bubbling up to the container
        card.remove(); // Remove the card from the DOM
    });
    card.appendChild(removeButton); //appends the remove button to the card

    const highlightButton = document.createElement('button');// Create the highlight button
    highlightButton.textContent = 'Highlight'; //sets the text content of the highlight button to 'Highlight'
    highlightButton.addEventListener('click', () => { // Add an event listener to the highlight button
        if (card.style.backgroundColor === 'yellow') { // Check if the card is already highlighted
            card.style.backgroundColor = ''; // Remove the highlight
        } else { // If the card is not highlighted
            card.style.backgroundColor = 'yellow'; // Highlight the card
        }
    });
    highlightButton.addEventListener('dblclick', (event) => { // Add an event listener to the highlight button
        event.stopPropagation(); // Prevent the event from bubbling up to the container
    });
    card.appendChild(highlightButton); //appends the highlight button to the card

    const employeeContainer = document.getElementById('employeeContainer');// Append the card to the employee container
    employeeContainer.appendChild(card); //appends the card to the employee container
}

//Task 3
function highlightAllEmployeeCards() { // Create a function to highlight all employee cards
    const employeeCards = document.querySelectorAll('.employeeCard'); // Get all employee cards
    const employeeCardsArray = Array.from(employeeCards); // Convert the NodeList to an array
    employeeCardsArray.forEach((employeeCard) => { // Iterate over each employee card
        if (employeeCard.style.backgroundColor === 'yellow') { // Check if the card is already highlighted
            employeeCard.style.backgroundColor = ''; // Remove the highlight
        } else { // If the card is not highlighted
            employeeCard.style.backgroundColor = 'yellow'; // Highlight the card
        }
    });
}

//Task 4
document.getElementById('employeeContainer').addEventListener('click', () =>  {// Attach event listener to the employee container
    console.log('Employee container clicked'); // Logs a message to the console
});

//Task 5
document.getElementById('employeeContainer').addEventListener('dblclick', (event) => {// Add inline editing feature to employee cards
    const card = event.target.closest('.employeeCard'); // Gets the closest employee card. If the target is not a card, it returns null
        const nameHeading = card.querySelector('h3');  // Get the name heading
        const positionParagraph = card.querySelector('h4'); // Get the position paragraph
        const descriptionParagraph = card.querySelector('p'); // Get the description paragraph

        const nameInput = document.createElement('input'); // Create an input element for the name
        nameInput.value = nameHeading.textContent; // Set the value of the input to the current name

        const positionInput = document.createElement('input'); // Create an input element for the position
        positionInput.value = positionParagraph.textContent; // Set the value of the input to the current position
        
        const descriptionInput = document.createElement('input'); // Create an input element for the description
        descriptionInput.value = descriptionParagraph.textContent; // Set the value of the input to the current description

        nameHeading.replaceWith(nameInput); // Replace the name heading with the input
        positionParagraph.replaceWith(positionInput); // Replace the position paragraph with the input
        descriptionParagraph.replaceWith(descriptionInput); // Replace the description paragraph with the input

        const saveButton = document.createElement('button'); // Create a save button
        saveButton.textContent = 'Save'; // Set the text content of the save button to 'Save'
        saveButton.addEventListener('click', () => { // Add an event listener to the save button
            nameHeading.textContent = nameInput.value; //This sets the text content of the name heading to the value of the name input
            positionParagraph.textContent = positionInput.value; //This sets the text content of the position paragraph to the value of the position input
            descriptionParagraph.textContent = descriptionInput.value; //This sets the text content of the description paragraph to the value of the description input

            nameInput.replaceWith(nameHeading); // Replace the name input with the heading
            positionInput.replaceWith(positionParagraph); // Replace the position input with the paragraph
            descriptionInput.replaceWith(descriptionParagraph); // Replace the description input with the paragraph
            saveButton.remove(); // Remove the save button
        });

        card.appendChild(saveButton);
    }
);