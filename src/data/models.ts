import { Model } from '../types/models';

export const modelData: Model[] = [
  {
    id: "tavascan",
    name: "CUPRA Tavascan",
    price: "From €45,000",
    year: 2023,
    power: "286 HP (VZ) / 340 HP (VZ Performance)",
    acceleration: "5.6s (VZ) / 5.1s (VZ Performance)",
    description: "CUPRA's first 100% electric SUV with a bold design that breaks conventions. The Tavascan represents the future of sporty mobility, combining electric power with futuristic design and cutting-edge technology. Its impressive performance demonstrates that electrification and sportiness can go hand in hand perfectly.",
    model3D: "/models/cupra_tavascan.glb",
    image: "/assets/images/cupra_tavascan.jpg",
    specs: {
      "Engine": "Dual electric motor",
      "Battery": "77 kWh net",
      "Range": "550 km (WLTP)",
      "Fast charging": "135 kW (10-80% in 30 min)",
      "Drive": "All-wheel drive",
      "Trunk": "480 l",
      "Weight": "2,184 kg"
    }
  },
  {
    id: "seat",
    name: "SEAT Leon",
    price: "From €36,920",
    year: 2023,
    power: "150-231 HP",
    acceleration: "6.6-8.9s",
    description: "The SEAT version of the Leon offers a perfect balance between performance, practicality, and value. With a more conservative but equally attractive design, the SEAT Leon provides an agile and refined driving experience, along with all the modern features and technologies you expect from a premium compact car.",
    model3D: "/models/seat_leon.glb",
    image: "/assets/images/seat_leon.jpeg",
    specs: {
      "Engine": "1.0 TSI / 1.5 TSI / 2.0 TDI",
      "Battery": "Only versions with combustion engine",
      "Range": "Not applicable",
      "Fast charging": "Not applicable",
      "Drive": "Front-wheel drive",
      "Trunk": "385 l",
      "Weight": "1,724-1,918 kg"
    }
  },
  {
    id: "formentor",
    name: "CUPRA Formentor",
    price: "From €40,900",
    year: 2023,
    power: "150-310 HP",
    acceleration: "4.9-8.9s",
    description: "The first vehicle exclusively designed by CUPRA, the Formentor combines the practicality of an SUV with the spirit of a sporty coupe. Its bold design and muscular lines make a clear statement of intent, while its range of powerful engines delivers performance that lives up to its appearance.",
    model3D: "/models/cupra_formentor.glb",
    image: "/assets/images/cupra_formentor.webp",
    specs: {
      "Engine": "1.5 TSI / 2.0 TSI / 2.0 TSI hybrid",
      "Transmission": "DSG / Manual",
      "Drive": "Front-wheel drive / 4Drive",
      "Consumption": "5.9-1.6 l/100km",
      "Emissions": "134-37 g/km",
      "Trunk": "420 l",
      "Weight": "1,482-1,714 kg"
    }
  },
  {
    id: "leon",
    name: "CUPRA Leon",
    price: "From €37,500",
    year: 2023,
    power: "245-310 HP",
    acceleration: "5.7-6.4s",
    description: "The CUPRA Leon combines sporty design with advanced technology. With exceptional performance and striking aesthetics, it represents the perfect fusion of sportiness and functionality. Its powerful engine and dynamic chassis offer an exciting driving experience without sacrificing daily comfort.",
    model3D: "/models/cupra_leon.glb",
    image: "/assets/images/leon_1.jpg",
    specs: {
      "Engine": "2.0 TSI / 1.4 eHybrid",
      "Transmission": "DSG / Manual",
      "Drive": "Front-wheel drive / 4Drive",
      "Consumption": "6.1-1.5 l/100km",
      "Emissions": "138-34 g/km",
      "Trunk": "380-587 l",
      "Weight": "1,428-1,634 kg"
    }
  }
];