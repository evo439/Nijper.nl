document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('website-check-form');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const resultsArea = document.getElementById('check-results');
        const scorePerf = document.getElementById('score-performance');
        const scoreSeo = document.getElementById('score-seo');
        const websiteUrl = document.getElementById('website').value;

        // Reset UI
        resultsArea.style.display = 'none';
        scorePerf.textContent = '0';
        scoreSeo.textContent = '0';
        submitBtn.textContent = 'Analyseren...';
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            // Step 1: Send email via Web3Forms
            const emailPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            // Step 2: Cloudflare Worker Proxy for PageSpeed API
            // URL encode the target website
            const apiUrl = `https://nijper-lighthouse-proxy.contact-nijper.workers.dev?url=${encodeURIComponent(websiteUrl)}`;
            const psiPromise = fetch(apiUrl);

            // Wait for both to complete
            const [emailRes, psiRes] = await Promise.all([emailPromise, psiPromise]);
            const psiData = await psiRes.json();

            if (psiData.lighthouseResult) {
                const perfScore = Math.round(psiData.lighthouseResult.categories.performance.score * 100);
                const seoScore = Math.round(psiData.lighthouseResult.categories.seo.score * 100);

                // Animate score (simple counter)
                animateScore(scorePerf, perfScore);
                animateScore(scoreSeo, seoScore);

                // Hide form, show results
                form.style.display = 'none';
                resultsArea.style.display = 'block';
            //remove this else if statement after testing
            } else if (psiData.error) {
                console.warn("Lighthouse API Error:", psiData.error);
                
                // Show mock scores so the UI can be tested without an API key
                animateScore(scorePerf, 88);
                animateScore(scoreSeo, 94);
                
                form.style.display = 'none';
                resultsArea.style.display = 'block';
                
                if (!document.getElementById('api-warning')) {
                    const note = document.createElement('p');
                    note.id = 'api-warning';
                    note.textContent = "Let op: Dit is een voorbeeldresultaat omdat de gratis API limiet van Google is bereikt. Voeg een API key toe voor echte resultaten.";
                    note.style.color = '#ffa400';
                    note.style.marginTop = '1rem';
                    resultsArea.appendChild(note);
                }
            } else {
                throw new Error("Ongeldige response van Lighthouse");
            }

        } catch (error) {
            console.error(error);
            submitBtn.textContent = 'Fout bij analyseren';
            submitBtn.classList.add('btn-error');
        } finally {
            submitBtn.disabled = false;
        }
    });

    function animateScore(element, target) {
        let current = 0;
        const increment = target / 50; 
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
                
                // Color based on score
                if (target >= 90) element.style.color = '#0cce6b'; // Green
                else if (target >= 50) element.style.color = '#ffa400'; // Orange
                else element.style.color = '#ff4e42'; // Red
            } else {
                element.textContent = Math.round(current);
            }
        }, 30);
    }
});
