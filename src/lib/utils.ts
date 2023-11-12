export function validateURL(url: string): string | null {
	try {
		// Attempt to construct a URL object; this will throw an error for invalid URLs
		new URL(url);
		// If no error is thrown, return the original URL
		return url;
	} catch (error) {
		// If an error is thrown, return an empty string
		return null;
	}
}
