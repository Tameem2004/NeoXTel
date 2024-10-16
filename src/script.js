// script.js
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const movieTitle = document.getElementById('movieTitle').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Simulate sending the review to the blockchain
    alert(`Your review for "${movieTitle}" has been submitted and you earned tokens!`);

    // Clear the form
    document.getElementById('reviewForm').reset();
});

function submitReview() {
    document.getElementById('review-form').style.display = 'block';
}
