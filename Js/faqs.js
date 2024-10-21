// Exporting the faqs function for use in other files
export const faqs = () => {
    // Selecting all elements with the class name 'question' and storing them in the accordion variable
    const accordion = document.getElementsByClassName('question');

    // Looping through each element in the accordion (which are the question elements)
    for (const num of accordion) {
        // Adding a 'click' event listener to each question element
        num.addEventListener('click', () => {   
            // Then, toggle the 'active' class on the clicked question element
            num.classList.toggle('active');
        });
    }
}
