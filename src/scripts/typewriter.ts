/** Types out an HTML string character by character; tags are inserted instantly. */
export function typeWriterHTML(
  element: HTMLElement,
  html: string,
  speed: number,
  delay: number,
  onComplete?: () => void,
) {
  element.innerHTML = '';
  element.classList.add('typing');

  setTimeout(() => {
    let i = 0;
    let current = '';

    const type = () => {
      if (i >= html.length) {
        onComplete?.();
        return;
      }
      if (html[i] === '<') {
        const end = html.indexOf('>', i);
        const stop = end === -1 ? html.length : end + 1;
        current += html.slice(i, stop);
        i = stop;
        element.innerHTML = current;
        setTimeout(type, 0);
      } else {
        current += html[i++];
        element.innerHTML = current;
        setTimeout(type, speed);
      }
    };
    type();
  }, delay);
}
