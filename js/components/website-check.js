document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('website-check-form');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const resultsArea = document.getElementById('check-results');
        const loadingArea = document.getElementById('check-loading');
        const scorePerf = document.getElementById('score-performance');
        const scoreSeo = document.getElementById('score-seo');
        const circlePerf = document.getElementById('circle-performance');
        const circleSeo = document.getElementById('circle-seo');
        let websiteUrl = document.getElementById('website').value.trim();

        // Ensure URL has http/https protocol
        if (websiteUrl && !websiteUrl.startsWith('http://') && !websiteUrl.startsWith('https://')) {
            websiteUrl = 'https://' + websiteUrl;
            document.getElementById('website').value = websiteUrl;
        }

        // Reset UI
        form.style.display = 'none';
        loadingArea.style.display = 'block';
        resultsArea.style.display = 'none';
        scorePerf.textContent = '0';
        scoreSeo.textContent = '0';
        circlePerf.style.strokeDashoffset = 339.292;
        circleSeo.style.strokeDashoffset = 339.292;

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            // Step 1: Send email via Web3Forms (Disabled for testing)
            /*
            const emailPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            */
            const emailPromise = Promise.resolve();

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

                // Animate score and circle
                animateScore(scorePerf, circlePerf, perfScore);
                animateScore(scoreSeo, circleSeo, seoScore);

                // Save to sessionStorage so it remembers across pages
                sessionStorage.setItem('websiteCheckResults', JSON.stringify({
                    perfScore: perfScore,
                    seoScore: seoScore
                }));

                // Hide loading, show results
                loadingArea.style.display = 'none';
                resultsArea.style.display = 'block';
            //remove this else if statement after testing
            } else {
                throw new Error("Ongeldige response van Lighthouse");
            }

        } catch (error) {
            console.error(error);
            loadingArea.style.display = 'none';
            form.style.display = 'block';
            submitBtn.textContent = 'Fout bij analyseren';
            submitBtn.classList.add('btn-error');
        } finally {
            submitBtn.disabled = false;
        }
    });

    function animateScore(textElement, circleElement, target) {
        let current = 0;
        const increment = target / 50; 
        const circumference = 339.292;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            textElement.textContent = Math.round(current);
            const offset = circumference - (current / 100) * circumference;
            circleElement.style.strokeDashoffset = offset;
            
            // Color based on score
            let color = '#ff4e42'; // Red
            if (current >= 90) color = '#0cce6b'; // Green
            else if (current >= 50) color = '#ffa400'; // Yellow/Orange
            
            textElement.style.color = color;
            circleElement.style.stroke = color;
            
        }, 30);
    }

    // Check on page load if we already have results
    const savedResults = sessionStorage.getItem('websiteCheckResults');
    if (savedResults) {
        const resultsArea = document.getElementById('check-results');
        const form = document.getElementById('website-check-form');
        const scorePerf = document.getElementById('score-performance');
        const scoreSeo = document.getElementById('score-seo');
        const circlePerf = document.getElementById('circle-performance');
        const circleSeo = document.getElementById('circle-seo');
        
        if (resultsArea && form) {
            const data = JSON.parse(savedResults);
            
            form.style.display = 'none';
            resultsArea.style.display = 'block';
            
            // Instantly animate from 0 to the saved score so the user sees it when the page loads
            setTimeout(() => {
                animateScore(scorePerf, circlePerf, data.perfScore);
                animateScore(scoreSeo, circleSeo, data.seoScore);
            }, 500);
        }
    }
});
