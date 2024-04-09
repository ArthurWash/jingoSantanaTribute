/* Carousel Setup */

// Select the carousel inner div element
let carouselInnerDiv = document.querySelector('.carousel-inner');

// Fetch the list of image filenames from the PHP script
fetch('https://www.jingosantanatribute.com/get-images.php') // Make sure to replace this with the URL of your PHP script
  .then(response => response.json())
  .then(images => {
    // Now 'images' is an object where the values are filenames of images
    // You can use this array to generate your carousel items

    console.log(images);
    Object.values(images).forEach((image, index) => {
        // Create a div element for each carousel item
        let carouselItemDiv = document.createElement('div');
        carouselItemDiv.className = 'carousel-item';
        if(index === 0) {
            carouselItemDiv.classList.add('active');
        }

        // Create an img element for each image
        let imgElement = document.createElement('img');
        imgElement.src = 'https://www.jingosantanatribute.com/images/carousel/' + image;
        imgElement.className = 'd-block mx-auto img-fluid';
        imgElement.alt = 'Image ' + (index + 1);

        // Create an a element for lightbox
        let aElement = document.createElement('a');
        aElement.href = imgElement.src;
        aElement.setAttribute('data-lightbox', 'carouselImages');

        // Append the img element to the a element
        aElement.appendChild(imgElement);

        // Append the a element to the carousel item div
        carouselItemDiv.appendChild(aElement);

        // Append the carousel item div to the carousel inner div
        carouselInnerDiv.appendChild(carouselItemDiv);
    });
  });