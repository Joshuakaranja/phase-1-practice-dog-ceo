console.log('JS Loaded!');

document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById('dog-image-container');
  const breedList = document.getElementById('dog-breeds');
  const breedDropdown = document.getElementById('breed-dropdown');

  // Challenge 1: Fetch and display 4 random dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '200px'; // Optional: style the image size
        img.style.margin = '10px';
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and display all dog breeds
  let allBreeds = [];

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Helper: Render breeds
  function renderBreeds(breeds) {
    breedList.innerHTML = '';
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => {
        li.style.color = 'blue'; // Click changes color
      });
      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by first letter
  breedDropdown.addEventListener('change', (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });
});
