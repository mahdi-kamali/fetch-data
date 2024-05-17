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
  },
  {
    id: "car@6",
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "Gray",
    fuelType: "Diesel",
    transmission: "Automatic",
    horsepower: 335,
    price: 60000,
    description:
      "The BMW X5 is a luxury SUV known for its premium features, refined interior, and powerful engine options.",
  },
  {
    id: "car@7",
    brand: "Audi",
    model: "A4",
    year: 2022,
    color: "Silver",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 201,
    price: 38000,
    description:
      "The Audi A4 is a compact luxury sedan with a sophisticated design, advanced technology, and smooth performance.",
  },
  {
    id: "car@8",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    color: "White",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 255,
    price: 45000,
    description:
      "The Mercedes-Benz C-Class is a stylish and luxurious compact sedan with a blend of comfort and performance.",
  },
  {
    id: "car@9",
    brand: "Jeep",
    model: "Wrangler",
    year: 2022,
    color: "Green",
    fuelType: "Gasoline",
    transmission: "Manual",
    horsepower: 270,
    price: 34000,
    description:
      "The Jeep Wrangler is an iconic off-road SUV known for its rugged design, open-air capabilities, and adventurous spirit.",
  },
  {
    id: "car@10",
    brand: "Volkswagen",
    model: "Golf",
    year: 2022,
    color: "Blue",
    fuelType: "Gasoline",
    transmission: "Automatic",
    horsepower: 147,
    price: 23000,
    description:
      "The Volkswagen Golf is a versatile compact car with a comfortable interior, efficient engine, and European styling.",
  },
];

router.get("/", (req, res) => {
  return res.json("ok");
});

module.exports = router;
