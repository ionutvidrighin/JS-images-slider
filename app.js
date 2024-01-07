const images = document.querySelectorAll(".single-image");
const prevBtn = document.querySelector('.backward');
const nextBtn = document.querySelector('.forward');

const imageText = [
	{
		message: "There's a new beginning for us tomorrow.",
		HTMLelementClass: ".image-1",
	},
	{
		message: "Always come back to the nature.",
		HTMLelementClass: ".image-2",
	},
	{
		message: "Christmas feeling with joy and nostalgia.",
		HTMLelementClass: ".image-3",
	},
	{
		message: "Snowy evening with a warm glow over the empty benches.",
		HTMLelementClass: ".image-4",
	},
	{
		message: "Every sunset has its own uniqueness.",
		HTMLelementClass: ".image-5",
	},
	{
		message: "I'm here to inspire you.",
		HTMLelementClass: ".image-6",
	}
];

images.forEach((element, index) => {
  element.style.left = `${index * 100}%`
})

let sliderCounter = 0;
let charsCount = 0;


function typeText(HTMLelement, text) {
  prevBtn.style.visibility = "hidden";
  nextBtn.style.visibility = "hidden";
  
	const h1Element = document.querySelector(HTMLelement);
	h1Element.textContent = "";

	const characters = text.split("");

	const startTyping = setInterval(() => {
		// Add the current character to the target element
		h1Element.textContent += characters[charsCount];

		// Move to the next character
		charsCount++;

		// Check if there are more characters to display
		if (charsCount >= characters.length) {
			// Stop the interval when all characters have been displayed
			clearInterval(startTyping);
			charsCount = 0;
			prevBtn.style.visibility = "visible";
			nextBtn.style.visibility = "visible";
		}
	}, 100);
}

const switchImage = () => {
  if (sliderCounter === images.length) { 
    sliderCounter = 0;
  }
  if (sliderCounter < 0) { 
    sliderCounter = images.length - 1
  }

  images.forEach((image) => {
    image.style.transform = `translateX(-${sliderCounter * 100}%)`;
  });
}

prevBtn.addEventListener('click', () => { 
  sliderCounter--;
  switchImage()

  const message = imageText[sliderCounter].message
  const htmlClass = imageText[sliderCounter].HTMLelementClass
  typeText(htmlClass, message);
})

nextBtn.addEventListener('click', () => { 
  sliderCounter++;
  switchImage()

  const message = imageText[sliderCounter].message;
  const htmlClass = imageText[sliderCounter].HTMLelementClass;
  typeText(htmlClass, message);
})

