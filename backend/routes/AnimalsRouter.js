const express = require("express");
const router = express.Router();

const animalsList = [
  {
    id: "animal@1",
    image: "/images/animals/Tiger.jpg",
    name: "Lion",
    description:
      "The lion (Panthera leo) is a large carnivorous mammal known for its majestic appearance and roaring vocalizations. Lions are typically found in grasslands and savannas, forming social groups called prides. The male lion, with its distinctive mane, is often regarded as the king of the jungle.",
    habitat: "Grasslands and Savannas",
    averageLifespan: "10 to 14 years in the wild",
  },
  {
    id: "animal@2",
    image: "/images/animals/Elephant.jpg",
    name: "Elephant",
    description:
      "The elephant is the largest land mammal, known for its long trunk, tusks, and large ears. Elephants are highly intelligent and social animals, living in close-knit family groups. They are herbivores, primarily feeding on grass, leaves, and fruits. Unfortunately, elephants face threats such as habitat loss and poaching for their ivory tusks.",
    habitat: "Various habitats including savannas, forests, and grasslands",
    averageLifespan: "60 to 70 years",
  },
  {
    id: "animal@3",
    image: "/images/animals/Giraffe.jpg",
    name: "Giraffe",
    description:
      "The giraffe is the world's tallest land animal, recognized for its long neck and distinctively patterned coat. These herbivores inhabit the savannas of Africa, using their long necks to reach high branches and leaves. Giraffes are social animals and live in loose groups. Despite their height, they are graceful and agile.",
    habitat: "African Savannas",
    averageLifespan: "20 to 25 years in the wild",
  },
  {
    id: "animal@4",
    image: "/images/animals/Penguin.jpg",
    name: "Penguin",
    description:
      "Penguins are flightless birds adapted to life in the Southern Hemisphere, particularly in Antarctica. They have distinctive black and white plumage, and their wings have evolved into flippers for efficient swimming. Penguins often form large colonies, and they are known for their amusing waddling walk on land.",
    habitat: "Antarctic and Subantarctic regions",
    averageLifespan: "15 to 20 years",
  },
  {
    id: "animal@5",
    image: "/images/animals/Tiger.jpg",
    name: "Tiger",
    description:
      "The tiger (Panthera tigris) is a powerful big cat known for its striking orange coat with dark stripes. Tigers are solitary hunters and are found in various habitats, including forests, grasslands, and mangrove swamps. Unfortunately, many tiger species are endangered due to habitat loss and illegal poaching for their skin and bones.",
    habitat:
      "Various habitats including forests, grasslands, and mangrove swamps",
    averageLifespan: "10 to 15 years in the wild",
  },
  {
    id: "animal@6",
    image: "/images/animals/Kangaroo.jpg",
    name: "Kangaroo",
    description:
      "Kangaroos are marsupials native to Australia, known for their powerful hind legs and distinctive hopping locomotion. Female kangaroos have pouches where they carry and nurture their underdeveloped young, called joeys. Kangaroos are herbivores, feeding on grasses and plants in the Australian outback.",
    habitat: "Australian Outback",
    averageLifespan: "6 to 8 years",
  },
  {
    id: "animal@7",
    image: "/images/animals/Dolphin.jpg",
    name: "Dolphin",
    description:
      "Dolphins are highly intelligent marine mammals known for their playful behavior and social interactions. They belong to the family Delphinidae and are found in oceans and seas around the world. Dolphins use echolocation for navigation and communication, and they are known for their acrobatic displays, including jumps and flips.",
    habitat: "Oceans and Seas",
    averageLifespan: "25 to 30 years",
  },
  {
    id: "animal@8",
    image: "/images/animals/Panda.jpg",
    name: "Panda",
    description:
      "The giant panda (Ailuropoda melanoleuca) is a bear native to south-central China, recognized for its distinctive black and white fur. Pandas are herbivores, primarily consuming bamboo, and are solitary in nature. Due to habitat loss and low reproduction rates, giant pandas are classified as endangered, and conservation efforts are in place to protect them.",
    habitat: "Mountainous Bamboo Forests of China",
    averageLifespan: "20 years in the wild",
  },
  {
    id: "animal@9",
    image: "/images/animals/Koala.jpg",
    name: "Koala",
    description:
      "Koalas are tree-dwelling marsupials native to Australia, known for their adorable appearance and distinctive fluffy ears. They primarily feed on eucalyptus leaves, and their diet contributes to their low energy levels. Koalas have a unique digestive system adapted to break down the tough eucalyptus leaves.",
    habitat: "Eucalyptus Forests of Australia",
    averageLifespan: "10 to 12 years",
  },
  {
    id: "animal@10",
    image: "/images/animals/Gorilla.jpg",
    name: "Gorilla",
    description:
      "Gorillas are large apes native to the forests of Africa. They are herbivores, mainly consuming fruits, leaves, and shoots. Gorillas live in cohesive groups led by a dominant silverback male. These intelligent and social animals share about 98% of their DNA with humans, making them one of our closest living relatives in the animal kingdom.",
    habitat: "African Rainforests",
    averageLifespan: "35 to 40 years in the wild",
  },
];

// Get All Aniamls
router.get("/", (req, res) => {
  res.json(animalsList);
});

// Find By ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const findedAnimal = animalsList.find((item) => item.id === id);
  return res.json(findedAnimal);
});

module.exports = router;
