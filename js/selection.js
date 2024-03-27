// Initialize selectedImageIndex from sessionStorage
let selectedImageIndex = sessionStorage.getItem('selectedImageIndex') || 1; // Initially select the first image
selectImage(selectedImageIndex)
function selectImage(index) {
  // Remove border from previously selected image
  document.getElementById(`img${selectedImageIndex}`).classList.remove('selected');
  // Add border to the newly selected image
  document.getElementById(`img${index}`).classList.add('selected');
  // Update selected image index
  selectedImageIndex = index;
  // Store selectedImageIndex in sessionStorage
  sessionStorage.setItem('selectedImageIndex', selectedImageIndex);
}

// Listen for key press event
document.addEventListener('keydown', (event) => {
  // If the key pressed is 'c'
  if (event.key === 'c') {
    // Calculate next image index
    let nextIndex = selectedImageIndex + 1;
    if (nextIndex > 7) { // Assuming there are 3 images, change this if you have more
      nextIndex = 1; // Loop back to the first image
    }
    // Call selectImage function with the next index
    selectImage(nextIndex);
  }
});
