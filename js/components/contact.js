document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form:not(#website-check-form)');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const jsonResponse = await response.json();

                if (response.status === 200) {
                    submitBtn.classList.add('btn-success');
                    submitBtn.textContent = 'Message Sent!';
                    form.reset();
                } else {
                    console.error(response);
                    submitBtn.classList.add('btn-error');
                    submitBtn.textContent = 'Error Sending';
                }
            } catch (error) {
                console.error(error);
                submitBtn.classList.add('btn-error');
                submitBtn.textContent = 'Something went wrong';
            } finally {
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success', 'btn-error');
                }, 3000);
            }
        });
    }
});
