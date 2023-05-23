document.addEventListener('DOMContentLoaded', () => {

    fetch('/actors')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('table tbody');
            tableBody.innerHTML = '';

            data.forEach(actor => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${actor.first_name}</td><td>${actor.last_name}</td>`;
                tableBody.appendChild(row);
            });
        });


    const addActorForm = document.querySelector('form');

    addActorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstNameInput = document.querySelector('#actor-first-name');
        const lastNameInput = document.querySelector('#actor-last-name');

        const actor = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value
        };

        fetch('/actors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actor)
        })
            .then(response => response.json())
            .then(data => {

                console.log(data);
            });

        firstNameInput.value = '';
        lastNameInput.value = '';
    });
});
