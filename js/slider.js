const conferences = [
   
];

const cardTemplate = document.querySelector('.card-template');
const container = document.getElementById('conference-container');

conferences.forEach(conference => {
    const newCard = cardTemplate.cloneNode(true);
    newCard.style.display = 'block';
    newCard.querySelector('.card-title').textContent = conference.name;
    newCard.querySelector('.card-description').textContent = conference.description;
    newCard.querySelector('.card-date').textContent = `Date: ${conference.date}`;
    newCard.querySelector('.card-time').textContent = `Time: ${conference.time}`;
    newCard.querySelector('.card-hours').textContent = `hours: ${conference.hours}`;
    newCard.querySelector('.card-seconds').textContent = `seconds: ${conference.seconds}`;
    container.appendChild(newCard);
});
