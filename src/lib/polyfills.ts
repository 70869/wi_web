// Polyfill localStorage for server-side rendering (Bun compatibility)
// Bun creates a broken localStorage object, so we need to check if it's functional
const isLocalStorageFunctional = () => {
    try {
        if (typeof globalThis.localStorage === 'undefined') return false;
        if (typeof globalThis.localStorage.getItem !== 'function') return false;
        // Test if it actually works
        globalThis.localStorage.getItem('__test__');
        return true;
    } catch {
        return false;
    }
};

if (!isLocalStorageFunctional()) {
    // Create a simple in-memory storage for SSR
    const storage = new Map<string, string>();

    // Override the broken localStorage with a working implementation
    Object.defineProperty(globalThis, 'localStorage', {
        value: {
            getItem: (key: string) => storage.get(key) ?? null,
            setItem: (key: string, value: string) => {
                storage.set(key, value);
            },
            removeItem: (key: string) => {
                storage.delete(key);
            },
            clear: () => {
                storage.clear();
            },
            key: (index: number) => {
                const keys = Array.from(storage.keys());
                return keys[index] ?? null;
            },
            get length() {
                return storage.size;
            },
        } as Storage,
        writable: true,
        configurable: true,
    });
}

export { };
