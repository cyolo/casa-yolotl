
/**
 * Utility to transform the current path to a new locale while preserving segments and hash.
 * This function mimics the logic implemented in LanguageContext.tsx using URL API.
 */
function getTransformedPath(currentFullUrl, newLocale, allLocales) {
    const url = new URL(currentFullUrl);
    const segments = url.pathname.split('/').filter(Boolean);

    // Identification: Is the first segment a known locale?
    const hasLocalePrefix = segments.length > 0 && allLocales.includes(segments[0]);

    if (hasLocalePrefix) {
        // Replace existing locale
        segments[0] = newLocale;
    } else {
        // Prepend new locale
        segments.unshift(newLocale);
    }

    // Reconstruct pathname
    url.pathname = '/' + segments.join('/');

    return url.toString();
}

// Simple test suite
const locales = ['es', 'en', 'fr', 'it', 'pt'];
const baseUrl = "http://localhost:3000";

const testCases = [
    { name: "Basic Replacement", url: `${baseUrl}/es`, next: 'fr', expected: `${baseUrl}/fr` },
    { name: "Path Preservation", url: `${baseUrl}/es/cultura`, next: 'fr', expected: `${baseUrl}/fr/cultura` },
    { name: "Deep Path Preservation", url: `${baseUrl}/es/cultura/artesanos`, next: 'fr', expected: `${baseUrl}/fr/cultura/artesanos` },
    { name: "Hash Preservation", url: `${baseUrl}/es#curaduria`, next: 'fr', expected: `${baseUrl}/fr#curaduria` },
    { name: "Root Prepend", url: `${baseUrl}/`, next: 'en', expected: `${baseUrl}/en` },
    { name: "Inferred Locale Prepend", url: `${baseUrl}/cultura`, next: 'es', expected: `${baseUrl}/es/cultura` },
    { name: "Search Params Preservation", url: `${baseUrl}/en/catalog?q=mezcal`, next: 'fr', expected: `${baseUrl}/fr/catalog?q=mezcal` },
    { name: "Complex State Preservation", url: `${baseUrl}/en/about/legal?view=full#contact-us`, next: 'pt', expected: `${baseUrl}/pt/about/legal?view=full#contact-us` }
];

console.log("Running i18n Route Transformation Tests (URL API Version)...");
let failed = false;

testCases.forEach(tc => {
    const result = getTransformedPath(tc.url, tc.next, locales);
    if (result === tc.expected) {
        console.log(`✅ SUCCESS [${tc.name}]: ${tc.url} + ${tc.next} -> ${result}`);
    } else {
        console.log(`❌ FAILURE [${tc.name}]: ${tc.url} + ${tc.next} -> Expected ${tc.expected}, got ${result}`);
        failed = true;
    }
});

if (failed) process.exit(1);
console.log("\nAll i18n routing tests passed successfully.");
