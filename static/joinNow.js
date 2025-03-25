// Get the tier from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const tier = urlParams.get('tier') || 'Membership Tier';
document.getElementById('tier-name').textContent = tier;
document.getElementById('tier-name-confirm').textContent = tier;

function nextStep(currentStep, event) {
    if (event) event.preventDefault();

    // Validate avatar selection for step 2
    if (currentStep === 2) {
        const selectedAvatar = document.querySelector('input[name="avatar"]:checked');
        if (!selectedAvatar) {
            alert('Please select an animal avatar!');
            return;
        }
    }

    // Hide current step and show next
    document.getElementById(`form-step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    const nextStepNum = currentStep + 1;
    document.getElementById(`form-step-${nextStepNum}`).classList.add('active');
    document.getElementById(`step-${nextStepNum}`).classList.add('active');
}

function prevStep(currentStep) {
    // Hide current step and show previous
    document.getElementById(`form-step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    const prevStepNum = currentStep - 1;
    document.getElementById(`form-step-${prevStepNum}`).classList.add('active');
    document.getElementById(`step-${prevStepNum}`).classList.add('active');
}

function completeRegistration(event) {
    event.preventDefault();

    // Get user data
    const name = document.getElementById('name').value;
    const selectedAvatar = document.querySelector('input[name="avatar"]:checked').value;
    const avatarImages = {
        bird: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7',
        dog: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        tiger: 'https://images.unsplash.com/photo-1501820488136-726691fb6050',
        bear: 'https://images.unsplash.com/photo-1519058082700-6d69b930b325',
        penguin: 'https://images.unsplash.com/photo-1570481662006-41e58830e94c'
    };

    // Show confirmation
    document.querySelector('.form-container').classList.add('hidden');
    document.querySelector('.progress-bar').classList.add('hidden');
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    document.getElementById('user-name').textContent = name;
    document.getElementById('selected-avatar').src = avatarImages[selectedAvatar];

    // Trigger confetti animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Add missing handleSubmit function for the HTML form
function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
    // You might want to call nextStep or completeRegistration here
}