<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Hide the form
  document.getElementById('contact-form').style.display = 'none';

  // Show the thank you message
  document.getElementById('thank-you-message').style.display = 'block';
});
</script>
