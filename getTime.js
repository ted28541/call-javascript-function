const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const uniqueArr = (arr) => [...new Set(arr)];