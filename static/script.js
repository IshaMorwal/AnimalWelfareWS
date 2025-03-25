function showForm(tier) {
    const form = document.getElementById('membership-form');
    const tierName = document.getElementById('tier-name');
    tierName.textContent = tier;
    form.classList.remove('hidden');
}

function hideForm() {
    const form = document.getElementById('membership-form');
    form.classList.add('hidden');
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email) {
        alert(`Thank you, ${name}! You've signed up for the ${document.getElementById('tier-name').textContent} tier. We'll contact you at ${email}.`);
        hideForm();
        document.getElementById('signup-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
}
