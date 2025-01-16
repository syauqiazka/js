const a = 1n + 1; // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

const b = 1n + 1n; // 2n
