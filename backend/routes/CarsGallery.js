const express = require("express");
const router = express.Router();

const carsList = [
  {
    id: "car@1",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 203,
    price: 25000,
    description:
      "The Toyota Camry is a reliable midsize sedan known for its fuel efficiency, comfortable ride, and spacious interior.",
    image: "/images/cars/toyota_camry.jpg",
  },
  {
    id: "car@2",
    brand: "Honda",
    model: "Civic",
    year: 2022,
    color: "White",
    fuelType: "Gasoline",
    transmission: "Manual",
    horsepower: 158,
    price: 22000,
    description:
      "The Honda Civic is a compact car offering a balance of fuel efficiency, performance, and modern features.",
    image: "/images/cars/honda_civic.jpg",
  },
  {
    id: "car@3",
    brand: "Ford",
    model: "F-150",
    year: 2022,
    color: "Blue",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 290,
    price: 35000,
    description:
      "The Ford F-150 is a versatile and rugged pickup truck known for its powerful performance and capability.",
    image: "/images/cars/ford_f150.jpg",
  },
  {
    id: "car@4",
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    color: "Red",
    fuelType: "Electric",
    transmission: "Automatic",
    horsepower: 283,
    price: 45000,
    description:
      "The Tesla Model 3 is an all-electric sedan with cutting-edge technology and a sleek design.",
    image: "/images/cars/tesla_model3.jpg",
  },
  {
    id: "car@5",
    brand: "Chevrolet",
    model: "Equinox",
    year: 2022,
    color: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 170,
    price: 28000,
    description:
      "The Chevrolet Equinox is a compact SUV offering a comfortable ride, spacious interior, and modern tech features.",
    image: "/images/cars/chevrolet_equinox.jpg",
  },
];

// You can continue to add more detailed properties for each car.

router.get("/", (req, res) => {
  return res.json(carsList);
});

module.exports = router;
