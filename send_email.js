// Initialize EmailJS with your user ID
emailjs.init("TkwiIZqvGyEYmzKo5");

document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(this);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const education = formData.get('education');
    const experience = formData.get('experience');
    const skills = formData.get('skills');

    // Send the form data to your email using EmailJS
    emailjs.send("service_uquae8b", "template_2a5l34h", {
        fullName: fullName,
        email: email,
        education: education,
        experience: experience,
        skills: skills,
        reply_to: email // This will set the reply-to address in the email
    }).then(function(response) {
        document.getElementById('cvForm').reset(); // Reset the form
        document.getElementById('successMessage').style.display = 'block'; // Show success message
    }, function(error) {
        console.log('FAILED...', error);
    });
});
