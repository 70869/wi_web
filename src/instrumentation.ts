// This file runs before Next.js initialization
// Perfect place for polyfills that need to be loaded early

export async function register() {
    // Import polyfills on server-side
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await import('./lib/polyfills');
    }
}
