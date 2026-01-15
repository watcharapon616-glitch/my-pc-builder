// โครงสร้างประเภทข้อมูลเพื่อความปลอดภัย (TypeScript)
// src/data/part.ts
export interface Product {  // <--- ต้องมีคำว่า export นำหน้า
    id: string | number;
    category: string;
    brand: string;
    name: string;
    socket?: string;
    wattage?: number;
    wattLimit?: number;
    speed: number;
    image: string;
    prices: {
        shopA: number;
        shopB: number;
        shopC: number;
    };
}
// อย่าลืมเซฟไฟล์นี้ (Ctrl + S) จนวงกลมขาวบน Tab หายไป
export const categories = [
    { id: 'CPU', name: 'Processor', icon: 'Cpu' },
    { id: 'GPU', name: 'Graphic Card', icon: 'Monitor' },
    { id: 'Mainboard', name: 'Motherboard', icon: 'Layout' },
    { id: 'RAM', name: 'Memory', icon: 'Memory' },
    { id: 'SSD', name: 'Storage', icon: 'HardDrive' },
    { id: 'PSU', name: 'Power Supply', icon: 'Zap' },
    { id: 'Case', name: 'Chassis', icon: 'Box' },
    { id: 'Cooler', name: 'Cooling', icon: 'Wind' },
];

export const products: Product[] = [
    // --- CPU (INTEL LGA1700) ---
    {
        id: 'cpu-i9',
        category: 'CPU',
        brand: 'Intel',
        name: 'Core i9-14900K',
        socket: 'LGA1700',
        wattage: 125,
        speed: 98,
        image: 'https://m.media-amazon.com/images/I/61S66GfTIDL._AC_SL1500_.jpg',
        prices: { shopA: 22900, shopB: 22500, shopC: 23100 }
    },
    {
        id: 'cpu-i7',
        category: 'CPU',
        brand: 'Intel',
        name: 'Core i7-14700K',
        socket: 'LGA1700',
        wattage: 125,
        speed: 92,
        image: 'https://m.media-amazon.com/images/I/619H-60Uv0L._AC_SL1500_.jpg',
        prices: { shopA: 15900, shopB: 16200, shopC: 15750 }
    },

    // --- CPU (AMD AM5) ---
    {
        id: 'cpu-r9',
        category: 'CPU',
        brand: 'AMD',
        name: 'Ryzen 9 7950X3D',
        socket: 'AM5',
        wattage: 120,
        speed: 99,
        image: 'https://m.media-amazon.com/images/I/61G7fR9XHeL._AC_SL1000_.jpg',
        prices: { shopA: 24500, shopB: 24900, shopC: 23900 }
    },
    {
        id: 'cpu-r7',
        category: 'CPU',
        brand: 'AMD',
        name: 'Ryzen 7 7800X3D',
        socket: 'AM5',
        wattage: 120,
        speed: 94,
        image: 'https://m.media-amazon.com/images/I/51fS8B6vSBL._AC_SL1000_.jpg',
        prices: { shopA: 16500, shopB: 16800, shopC: 16300 }
    },

    // --- MAINBOARD (LGA1700) ---
    {
        id: 'mb-z790',
        category: 'Mainboard',
        brand: 'ASUS',
        name: 'ROG MAXIMUS Z790 HERO',
        socket: 'LGA1700',
        speed: 90,
        image: 'https://m.media-amazon.com/images/I/71R2oA19SdL._AC_SL1500_.jpg',
        prices: { shopA: 24500, shopB: 24000, shopC: 24900 }
    },
    {
        id: 'mb-b760',
        category: 'Mainboard',
        brand: 'MSI',
        name: 'MAG B760M MORTAR WIFI',
        socket: 'LGA1700',
        speed: 75,
        image: 'https://m.media-amazon.com/images/I/81S9p9iS-XL._AC_SL1500_.jpg',
        prices: { shopA: 6500, shopB: 6700, shopC: 6400 }
    },

    // --- MAINBOARD (AM5) ---
    {
        id: 'mb-x670',
        category: 'Mainboard',
        brand: 'GIGABYTE',
        name: 'X670E AORUS MASTER',
        socket: 'AM5',
        speed: 88,
        image: 'https://m.media-amazon.com/images/I/81Y7y6O6D3L._AC_SL1500_.jpg',
        prices: { shopA: 18900, shopB: 18500, shopC: 19200 }
    },

    // --- GPU (Graphic Cards) ---
    {
        id: 'gpu-4090',
        category: 'GPU',
        brand: 'NVIDIA',
        name: 'GeForce RTX 4090 24GB',
        wattage: 450,
        speed: 100,
        image: 'https://m.media-amazon.com/images/I/718Vv8S98HL._AC_SL1500_.jpg',
        prices: { shopA: 65900, shopB: 67000, shopC: 64500 }
    },
    {
        id: 'gpu-7900',
        category: 'GPU',
        brand: 'AMD',
        name: 'Radeon RX 7900 XTX 24GB',
        wattage: 355,
        speed: 85,
        image: 'https://m.media-amazon.com/images/I/818mYI+48fL._AC_SL1500_.jpg',
        prices: { shopA: 36900, shopB: 37500, shopC: 35900 }
    },

    // --- PSU (Power Supply) ---
    {
        id: 'psu-1000',
        category: 'PSU',
        brand: 'Corsair',
        name: 'RM1000e 80+ Gold (1000W)',
        wattLimit: 1000,
        speed: 85,
        image: 'https://m.media-amazon.com/images/I/71fL90W39XL._AC_SL1500_.jpg',
        prices: { shopA: 5900, shopB: 6100, shopC: 5850 }
    },
    {
        id: 'psu-750',
        category: 'PSU',
        brand: 'MSI',
        name: 'MAG A750GL 80+ Gold (750W)',
        wattLimit: 750,
        speed: 70,
        image: 'https://m.media-amazon.com/images/I/71YyP6K0yUL._AC_SL1500_.jpg',
        prices: { shopA: 3500, shopB: 3700, shopC: 3450 }
    },

    // --- RAM ---
    {
        id: 'ram-64',
        category: 'RAM',
        brand: 'Corsair',
        name: 'Dominator Titanium 64GB DDR5 6000MHz',
        speed: 95,
        image: 'https://m.media-amazon.com/images/I/61NfD15zU6L._AC_SL1500_.jpg',
        prices: { shopA: 15900, shopB: 15500, shopC: 16100 }
    }
];
