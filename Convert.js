const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const buildOutputPath = path.join(repositoryRootPath, 'out');
const fullName = name || 'buddy';