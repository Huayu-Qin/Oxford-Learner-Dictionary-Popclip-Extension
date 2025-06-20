// Oxford Dictionary - Lowercase Version
const text = popclip.input.text
    .toLowerCase()
    .trim()
    .replace(/[^a-z\s-]/g, '') // Keep only letters, spaces, hyphens
    .replace(/\s+/g, '-');     // Replace spaces with hyphens

const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${encodeURIComponent(text)}`;

popclip.openUrl(url);