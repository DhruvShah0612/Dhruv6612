document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    
    // Sample data for demonstration
    const flights = [
        { airline: 'Airline A', from, to, departureDate, returnDate, price: '$200' },
        { airline: 'Airline B', from, to, departureDate, returnDate, price: '$250' }
    ];
    
    const resultsContainer = document.getElementById('flight-results');
    resultsContainer.innerHTML = '';
    
    flights.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.classList.add('flight');
        flightDiv.innerHTML = `
            <h3>${flight.airline}</h3>
            <p>From: ${flight.from}</p>
            <p>To: ${flight.to}</p>
            <p>Departure Date: ${flight.departureDate}</p>
            <p>Return Date: ${flight.returnDate}</p>
            <p>Price: ${flight.price}</p>
        `;
        resultsContainer.appendChild(flightDiv);
    });
});
