window.typeWriterHTML = function(element, htmlString, speed, delay, onComplete) {
    if (element.typewriterTimeout) {
        clearTimeout(element.typewriterTimeout);
    }
    
    // Clear innerHTML immediately and add typing 
    element.innerHTML = '';
    element.classList.add('typing');
    
    // Wait for the initial delay before starting to type
    element.typewriterTimeout = setTimeout(() => {
        let i = 0;
        let currentHTML = '';
        
        const type = () => {
            if (i < htmlString.length) {
                if (htmlString.charAt(i) === '<') {
                    let tag = '';
                    while (htmlString.charAt(i) !== '>' && i < htmlString.length) {
                        tag += htmlString.charAt(i);
                        i++;
                    }
                    if (i < htmlString.length) {
                        tag += '>';
                        i++; // skip over '>'
                    }
                    currentHTML += tag;
                    element.innerHTML = currentHTML;
                    // Tag instantly added, proceed to next immediately
                    element.typewriterTimeout = setTimeout(type, 0);
                } else {
                    currentHTML += htmlString.charAt(i);
                    element.innerHTML = currentHTML;
                    i++;
                    element.typewriterTimeout = setTimeout(type, speed);
                }
            } 
            else {
                // element.classList.remove('typing'); // optionally remove cursor at end
                if (typeof onComplete === 'function') {
                    onComplete();
                }
            }
        };
        type();
    }, delay);
};
