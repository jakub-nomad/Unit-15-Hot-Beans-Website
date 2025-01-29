document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application! We will get back to you soon.');
    this.reset();
});
