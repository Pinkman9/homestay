
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const locationInput = form.querySelector("input[type='text']");
    const checkInInput = form.querySelector("input[type='date']:nth-child(2)");
    const checkOutInput = form.querySelector("input[type='date']:nth-child(3)");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const location = locationInput.value;
      const checkInDate = checkInInput.value;
      const checkOutDate = checkOutInput.value;
  
      if (!location || !checkInDate || !checkOutDate) {
        alert("Please fill in all fields.");
        return;
      }
  
      displaySearchResults(location, checkInDate, checkOutDate);
    });
  
    function displaySearchResults(location, checkInDate, checkOutDate) {
      const resultSection = document.createElement('section');
      resultSection.classList.add('search-results');
  
      const resultMessage = document.createElement('p');
      resultMessage.innerHTML = `
        You searched for homestays in <strong>${location}</strong> 
        from <strong>${checkInDate}</strong> to <strong>${checkOutDate}</strong>.
      `;
  
      resultSection.appendChild(resultMessage);
  
      document.querySelector('main').appendChild(resultSection);
    }
  });
  
