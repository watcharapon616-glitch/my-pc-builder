// src/data/part.ts

export interface Product {
    id: string | number;
    category: string;
    brand: string;
    name: string;
    socket?: string;
    wattage?: number;
    wattLimit?: number;
    speed: number; // Performance score 0-100
    image: string;
    prices: {
        shopA: number; // Price in USD
        shopB: number;
        shopC: number;
    };
}

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
    // --- CPU: INTEL (LGA1700 & NEXT-GEN) ---
    { id: 'i9-14900k', category: 'CPU', brand: 'Intel', name: 'Core i9-14900K', socket: 'LGA1700', wattage: 125, speed: 100, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i9-badge-1x1.png', prices: { shopA: 589, shopB: 599, shopC: 549 } },
    { id: 'u9-285k', category: 'CPU', brand: 'Intel', name: 'Core Ultra 9 285K', socket: 'LGA1851', wattage: 125, speed: 100, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i9-badge-1x1.png', prices: { shopA: 589, shopB: 610, shopC: 579 } },
    { id: 'i7-14700k', category: 'CPU', brand: 'Intel', name: 'Core i7-14700K', socket: 'LGA1700', wattage: 125, speed: 92, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i7-badge-1x1.png', prices: { shopA: 399, shopB: 409, shopC: 389 } },
    { id: 'i5-14600k', category: 'CPU', brand: 'Intel', name: 'Core i5-14600K', socket: 'LGA1700', wattage: 125, speed: 85, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i5-badge-1x1.png', prices: { shopA: 299, shopB: 315, shopC: 289 } },
    { id: 'i5-13400f', category: 'CPU', brand: 'Intel', name: 'Core i5-13400F', socket: 'LGA1700', wattage: 65, speed: 70, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i5-badge-1x1.png', prices: { shopA: 209, shopB: 215, shopC: 199 } },
    { id: 'i3-12100f', category: 'CPU', brand: 'Intel', name: 'Core i3-12100F', socket: 'LGA1700', wattage: 58, speed: 55, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-09/processor-core-i3-badge-1x1.png', prices: { shopA: 94, shopB: 99, shopC: 89 } },

    // --- CPU: AMD (AM5 & AM4) ---
    { id: 'r9-9950x', category: 'CPU', brand: 'AMD', name: 'Ryzen 9 9950X', socket: 'AM5', wattage: 170, speed: 100, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-9-7000-series-pi-1260x709.png', prices: { shopA: 649, shopB: 659, shopC: 639 } },
    { id: 'r9-7950x3d', category: 'CPU', brand: 'AMD', name: 'Ryzen 9 7950X3D', socket: 'AM5', wattage: 120, speed: 100, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-9-7000-series-pi-1260x709.png', prices: { shopA: 649, shopB: 679, shopC: 629 } },
    { id: 'r7-7800x3d', category: 'CPU', brand: 'AMD', name: 'Ryzen 7 7800X3D', socket: 'AM5', wattage: 120, speed: 99, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-7-7000-series-pi-1260x709.png', prices: { shopA: 389, shopB: 420, shopC: 369 } },
    { id: 'r7-9700x', category: 'CPU', brand: 'AMD', name: 'Ryzen 7 9700X', socket: 'AM5', wattage: 65, speed: 94, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-7-7000-series-pi-1260x709.png', prices: { shopA: 359, shopB: 379, shopC: 349 } },
    { id: 'r5-7600x', category: 'CPU', brand: 'AMD', name: 'Ryzen 5 7600X', socket: 'AM5', wattage: 105, speed: 80, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-5-7000-series-pi-1260x709.png', prices: { shopA: 219, shopB: 229, shopC: 209 } },
    { id: 'r7-5800x', category: 'CPU', brand: 'AMD', name: 'Ryzen 7 5800X', socket: 'AM4', wattage: 105, speed: 78, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-7-7000-series-pi-1260x709.png', prices: { shopA: 205, shopB: 215, shopC: 195 } },
    { id: 'r5-5600', category: 'CPU', brand: 'AMD', name: 'Ryzen 5 5600', socket: 'AM4', wattage: 65, speed: 70, image: 'https://www.amd.com/system/files/2023-01/1815145-ryzen-5-7000-series-pi-1260x709.png', prices: { shopA: 134, shopB: 145, shopC: 129 } },

    // --- GPU: NVIDIA RTX 40-SERIES ---
    { id: 'rtx-4090', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4090 24GB', wattage: 450, speed: 100, image: 'https://dlcdnwebimgs.asus.com/gain/43C6B99E-1983-49B5-A089-6F09AD725B06/w480/h480', prices: { shopA: 1799, shopB: 1850, shopC: 1699 } },
    { id: 'rtx-4080s-white', category: 'GPU', brand: 'ASUS', name: 'ROG Strix RTX 4080 Super White', wattage: 320, speed: 96, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 1249, shopB: 1299, shopC: 1220 } },
    { id: 'rtx-4080s', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4080 Super', wattage: 320, speed: 95, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 999, shopB: 1049, shopC: 989 } },
    { id: 'rtx-4070ts', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4070 Ti Super', wattage: 285, speed: 88, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 799, shopB: 825, shopC: 789 } },
    { id: 'rtx-4070s', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4070 Super', wattage: 220, speed: 85, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 599, shopB: 620, shopC: 589 } },
    { id: 'rtx-4060ti', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4060 Ti', wattage: 160, speed: 75, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 389, shopB: 410, shopC: 379 } },
    { id: 'rtx-4060', category: 'GPU', brand: 'NVIDIA', name: 'GeForce RTX 4060', wattage: 115, speed: 65, image: 'https://dlcdnwebimgs.asus.com/gain/3920F54B-72F2-482F-B03F-8C7C90886A2D/w480/h480', prices: { shopA: 295, shopB: 305, shopC: 289 } },

    // --- GPU: AMD RADEON & INTEL ARC ---
    { id: 'rx-7900xtx', category: 'GPU', brand: 'AMD', name: 'Radeon RX 7900 XTX 24GB', wattage: 355, speed: 96, image: 'https://m.media-amazon.com/images/I/818mYI+48fL._AC_SL1500_.jpg', prices: { shopA: 929, shopB: 959, shopC: 899 } },
    { id: 'rx-7800xt', category: 'GPU', brand: 'AMD', name: 'Radeon RX 7800 XT 16GB', wattage: 263, speed: 82, image: 'https://m.media-amazon.com/images/I/818mYI+48fL._AC_SL1500_.jpg', prices: { shopA: 499, shopB: 520, shopC: 485 } },
    { id: 'rx-7600', category: 'GPU', brand: 'AMD', name: 'Radeon RX 7600 8GB', wattage: 165, speed: 60, image: 'https://m.media-amazon.com/images/I/818mYI+48fL._AC_SL1500_.jpg', prices: { shopA: 269, shopB: 285, shopC: 259 } },
    { id: 'arc-a770', category: 'GPU', brand: 'Intel', name: 'Arc A770 16GB Limited', wattage: 225, speed: 70, image: 'https://m.media-amazon.com/images/I/61S-rVnSj+L._AC_SL1500_.jpg', prices: { shopA: 299, shopB: 310, shopC: 289 } },

    // --- MAINBOARD: INTEL (LGA1700 / 1851 Ready) ---
    { id: 'z790-hero', category: 'Mainboard', brand: 'ASUS', name: 'ROG Maximus Z790 Hero', socket: 'LGA1700', speed: 95, image: 'https://dlcdnwebimgs.asus.com/gain/7706F516-72C0-461B-B65B-D86455D6C5D6/w480/h480', prices: { shopA: 629, shopB: 649, shopC: 610 } },
    { id: 'z790-a-white', category: 'Mainboard', brand: 'ASUS', name: 'ROG Strix Z790-A Gaming WiFi D4 White', socket: 'LGA1700', speed: 88, image: 'https://dlcdnwebimgs.asus.com/gain/7706F516-72C0-461B-B65B-D86455D6C5D6/w480/h480', prices: { shopA: 349, shopB: 360, shopC: 335 } },
    { id: 'b760-mortar', category: 'Mainboard', brand: 'MSI', name: 'MAG B760M Mortar WiFi', socket: 'LGA1700', speed: 78, image: 'https://static.msi.com/resize/image/global/product/product_16710041203098522709f61b369c7356c9a9289291.png62405b38c58fe0f07fcef2367d8a9ba1/600.png', prices: { shopA: 179, shopB: 189, shopC: 175 } },
    { id: 'h610m-e', category: 'Mainboard', brand: 'MSI', name: 'PRO H610M-E DDR4', socket: 'LGA1700', speed: 50, image: 'https://static.msi.com/resize/image/global/product/product_16710041203098522709f61b369c7356c9a9289291.png62405b38c58fe0f07fcef2367d8a9ba1/600.png', prices: { shopA: 79, shopB: 85, shopC: 75 } },

    // --- MAINBOARD: AMD (AM5 / AM4) ---
    { id: 'x670e-master', category: 'Mainboard', brand: 'GIGABYTE', name: 'X670E AORUS Master', socket: 'AM5', speed: 94, image: 'https://static.gigabyte.com/StaticFile/Image/Global/e61639d6e6a1464380696706e5792d4f/Product/32049/Png', prices: { shopA: 449, shopB: 470, shopC: 435 } },
    { id: 'b650-tuf', category: 'Mainboard', brand: 'ASUS', name: 'TUF Gaming B650-Plus WiFi', socket: 'AM5', speed: 82, image: 'https://dlcdnwebimgs.asus.com/gain/B687C8F2-723A-4F3D-B91A-D742F747F4B6/w480/h480', prices: { shopA: 219, shopB: 230, shopC: 209 } },
    { id: 'b650m-aorus-white', category: 'Mainboard', brand: 'GIGABYTE', name: 'B650M AORUS ELITE AX ICE (White)', socket: 'AM5', speed: 80, image: 'https://static.gigabyte.com/StaticFile/Image/Global/e61639d6e6a1464380696706e5792d4f/Product/32049/Png', prices: { shopA: 199, shopB: 210, shopC: 195 } },
    { id: 'b450-m2', category: 'Mainboard', brand: 'MSI', name: 'B450M-A PRO MAX II', socket: 'AM4', speed: 55, image: 'https://static.msi.com/resize/image/global/product/product_16710041203098522709f61b369c7356c9a9289291.png62405b38c58fe0f07fcef2367d8a9ba1/600.png', prices: { shopA: 69, shopB: 75, shopC: 65 } },

    // --- RAM: DDR5 & DDR4 ---
    { id: 'ram-64-6000', category: 'RAM', brand: 'Corsair', name: 'Dominator Titanium 64GB DDR5-6000', speed: 98, image: 'https://m.media-amazon.com/images/I/61NfD15zU6L._AC_SL1500_.jpg', prices: { shopA: 310, shopB: 325, shopC: 299 } },
    { id: 'ram-32-6000-white', category: 'RAM', brand: 'G.Skill', name: 'Trident Z5 RGB 32GB DDR5-6000 White', speed: 92, image: 'https://m.media-amazon.com/images/I/61m6-NInpPL._AC_SL1500_.jpg', prices: { shopA: 129, shopB: 135, shopC: 125 } },
    { id: 'ram-32-6000', category: 'RAM', brand: 'G.Skill', name: 'Trident Z5 RGB 32GB DDR5-6000 Black', speed: 92, image: 'https://m.media-amazon.com/images/I/61m6-NInpPL._AC_SL1500_.jpg', prices: { shopA: 119, shopB: 125, shopC: 115 } },
    { id: 'ram-16-5200', category: 'RAM', brand: 'Crucial', name: 'Crucial 16GB DDR5-5200', speed: 75, image: 'https://m.media-amazon.com/images/I/61m6-NInpPL._AC_SL1500_.jpg', prices: { shopA: 55, shopB: 59, shopC: 52 } },
    { id: 'ram-16-3200', category: 'RAM', brand: 'Corsair', name: 'Vengeance LPX 16GB DDR4-3200', speed: 70, image: 'https://m.media-amazon.com/images/I/61m6-NInpPL._AC_SL1500_.jpg', prices: { shopA: 42, shopB: 45, shopC: 39 } },

    // --- SSD: HIGH-SPEED & HIGH-CAPACITY ---
    { id: 'ssd-t700-2tb', category: 'SSD', brand: 'Crucial', name: 'T700 2TB Gen5 NVMe (12,400MB/s)', speed: 100, image: 'https://m.media-amazon.com/images/I/61p6M6H-nXL._AC_SL1500_.jpg', prices: { shopA: 279, shopB: 299, shopC: 265 } },
    { id: 'ssd-990pro-2tb', category: 'SSD', brand: 'Samsung', name: '990 PRO 2TB Gen4', speed: 98, image: 'https://m.media-amazon.com/images/I/61p6M6H-nXL._AC_SL1500_.jpg', prices: { shopA: 169, shopB: 185, shopC: 159 } },
    { id: 'ssd-firecuda-4tb', category: 'SSD', brand: 'Seagate', name: 'FireCuda 530 4TB NVMe', speed: 99, image: 'https://m.media-amazon.com/images/I/718P5mO58rL._AC_SL1500_.jpg', prices: { shopA: 420, shopB: 450, shopC: 410 } },
    { id: 'ssd-sn850x-1tb', category: 'SSD', brand: 'WD_BLACK', name: 'SN850X 1TB Gen4', speed: 94, image: 'https://m.media-amazon.com/images/I/61V1hI7nSBL._AC_SL1500_.jpg', prices: { shopA: 89, shopB: 99, shopC: 84 } },
    { id: 'ssd-p3-500', category: 'SSD', brand: 'Crucial', name: 'P3 500GB NVMe Gen3', speed: 65, image: 'https://m.media-amazon.com/images/I/61V1hI7nSBL._AC_SL1500_.jpg', prices: { shopA: 45, shopB: 49, shopC: 42 } },

    // --- PSU: POWER SUPPLIES ---
    { id: 'psu-ax1600i', category: 'PSU', brand: 'Corsair', name: 'AX1600i 1600W Titanium', wattLimit: 1600, speed: 99, image: 'https://m.media-amazon.com/images/I/71fL90W39XL._AC_SL1500_.jpg', prices: { shopA: 609, shopB: 630, shopC: 599 } },
    { id: 'psu-rm1000x-white', category: 'PSU', brand: 'Corsair', name: 'RM1000x 1000W Gold Shift White', wattLimit: 1000, speed: 92, image: 'https://m.media-amazon.com/images/I/71fL90W39XL._AC_SL1500_.jpg', prices: { shopA: 209, shopB: 219, shopC: 199 } },
    { id: 'psu-rm1000x', category: 'PSU', brand: 'Corsair', name: 'RM1000x 1000W Gold', wattLimit: 1000, speed: 90, image: 'https://m.media-amazon.com/images/I/71fL90W39XL._AC_SL1500_.jpg', prices: { shopA: 189, shopB: 199, shopC: 175 } },
    { id: 'psu-750-gold', category: 'PSU', brand: 'MSI', name: 'MAG A750GL 750W Gold', wattLimit: 750, speed: 82, image: 'https://m.media-amazon.com/images/I/71YyP6K0yUL._AC_SL1500_.jpg', prices: { shopA: 89, shopB: 99, shopC: 85 } },
    { id: 'psu-550-bronze', category: 'PSU', brand: 'Corsair', name: 'CX550 550W Bronze', wattLimit: 550, speed: 60, image: 'https://m.media-amazon.com/images/I/71fL90W39XL._AC_SL1500_.jpg', prices: { shopA: 59, shopB: 65, shopC: 54 } },

    // --- CASE: CHASSIS ---
    { id: 'case-nv9', category: 'Case', brand: 'Phanteks', name: 'NV9 Full Tower RGB Black', speed: 90, image: 'https://m.media-amazon.com/images/I/71t-u5T6hHL._AC_SL1500_.jpg', prices: { shopA: 249, shopB: 260, shopC: 239 } },
    { id: 'case-h9-flow-white', category: 'Case', brand: 'NZXT', name: 'H9 Flow White Dual-Chamber', speed: 90, image: 'https://m.media-amazon.com/images/I/710P-L88q0L._AC_SL1500_.jpg', prices: { shopA: 159, shopB: 169, shopC: 155 } },
    { id: 'case-o11d', category: 'Case', brand: 'Lian Li', name: 'O11 Dynamic EVO', speed: 88, image: 'https://m.media-amazon.com/images/I/71t-u5T6hHL._AC_SL1500_.jpg', prices: { shopA: 169, shopB: 179, shopC: 159 } },
    { id: 'case-4000d', category: 'Case', brand: 'Corsair', name: '4000D Airflow Black', speed: 82, image: 'https://m.media-amazon.com/images/I/71W8hY8F8tL._AC_SL1500_.jpg', prices: { shopA: 89, shopB: 104, shopC: 89 } },
    { id: 'case-msi-m100', category: 'Case', brand: 'MSI', name: 'MAG VAMPIRIC 100R', speed: 65, image: 'https://m.media-amazon.com/images/I/71W8hY8F8tL._AC_SL1500_.jpg', prices: { shopA: 55, shopB: 60, shopC: 52 } },

    // --- COOLER: LIQUID & AIR ---
    { id: 'cool-ryujin-iii', category: 'Cooler', brand: 'ASUS', name: 'ROG Ryujin III 360 ARGB LCD', speed: 98, image: 'https://dlcdnwebimgs.asus.com/gain/4379CC6E-72C0-461B-B65B-D86455D6C5D6/w480/h480', prices: { shopA: 349, shopB: 360, shopC: 339 } },
    { id: 'cool-galahad-white', category: 'Cooler', brand: 'Lian Li', name: 'Galahad II Trinity 360 White', speed: 94, image: 'https://m.media-amazon.com/images/I/71p0W9q1X6L._AC_SL1500_.jpg', prices: { shopA: 149, shopB: 159, shopC: 145 } },
    { id: 'cool-kraken-360', category: 'Cooler', brand: 'NZXT', name: 'Kraken 360 RGB Black', speed: 92, image: 'https://m.media-amazon.com/images/I/71W8hY8F8tL._AC_SL1500_.jpg', prices: { shopA: 219, shopB: 235, shopC: 209 } },
    { id: 'cool-ak620-digital', category: 'Cooler', brand: 'DeepCool', name: 'AK620 Digital Air Cooler', speed: 85, image: 'https://m.media-amazon.com/images/I/61NfD15zU6L._AC_SL1500_.jpg', prices: { shopA: 79, shopB: 85, shopC: 75 } },
    { id: 'cool-hyper-212', category: 'Cooler', brand: 'Cooler Master', name: 'Hyper 212 Halo RGB', speed: 65, image: 'https://m.media-amazon.com/images/I/61NfD15zU6L._AC_SL1500_.jpg', prices: { shopA: 35, shopB: 39, shopC: 32 } }
];