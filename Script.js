document.getElementById('ticketForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const route = document.getElementById('route').value;
  const time = new Date().toLocaleTimeString();

  const ticketHTML = `
    <h2>Your Ticket</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Route:</strong> ${route}</p>
    <p><strong>Issued At:</strong> ${time}</p>
    <p>Status: ✅ Valid</p>
  `;
  const display = document.getElementById('ticketDisplay');
  display.innerHTML = ticketHTML;
  display.style.display = 'block';
});
