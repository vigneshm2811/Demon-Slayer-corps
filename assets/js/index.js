// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when an element is in the viewport
function addAnimationClass() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('scroll-animation');
        }
    });
}

// Event listener to trigger the animation on scroll
window.addEventListener('scroll', addAnimationClass);

// Initial check for elements in the viewport on page load
window.addEventListener('load', addAnimationClass);
