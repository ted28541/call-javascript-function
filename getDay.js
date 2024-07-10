var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);