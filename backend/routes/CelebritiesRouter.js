const express = require("express");
const router = express.Router();

const celebritiesList = [
  {
    id: "celebrity@1",
    image: "/images/celebrities/Leonardo_DiCaprio.jpg",
    name: "Leonardo DiCaprio",
    description:
      "Leonardo DiCaprio is an acclaimed actor known for his versatile performances and dedication to environmental activism. He has starred in numerous iconic films, including Titanic, Inception, and The Revenant, for which he won an Academy Award for Best Actor. DiCaprio is also a prominent advocate for climate change awareness and conservation efforts.",
    occupation: "Actor, Environmental Activist",
    notableWorks: ["Titanic", "Inception", "The Revenant"],
  },
  {
    id: "celebrity@2",
    image: "/images/celebrities/Oprah_Winfrey.jpg",
    name: "Oprah Winfrey",
    description:
      "Oprah Winfrey is a media mogul, talk show host, actress, and philanthropist. She is best known for her long-running talk show, The Oprah Winfrey Show, which became one of the highest-rated television programs of its kind. Winfrey is also a successful actress and producer, and she has used her platform to promote education, literature, and social causes.",
    occupation: "Media Mogul, Talk Show Host, Actress, Philanthropist",
    notableWorks: ["The Oprah Winfrey Show", "The Color Purple"],
  },
  {
    id: "celebrity@3",
    image: "/images/celebrities/Dwayne_Johnson.jpg",
    name: "Dwayne 'The Rock' Johnson",
    description:
      "Dwayne 'The Rock' Johnson is a professional wrestler turned actor and producer. He gained fame as a professional wrestler in the WWE before transitioning to a successful acting career in Hollywood. Johnson has starred in numerous blockbuster films, including the Fast & Furious franchise, Jumanji, and Moana. He is known for his charismatic personality and action-packed performances.",
    occupation: "Actor, Producer, Former Professional Wrestler",
    notableWorks: ["Fast & Furious franchise", "Jumanji", "Moana"],
  },
  {
    id: "celebrity@4",
    image: "/images/celebrities/Beyonce_Knowles.jpg",
    name: "Beyoncé Knowles",
    description:
      "Beyoncé Knowles is a multi-talented artist known for her powerhouse vocals, captivating performances, and influence on popular culture. She first gained fame as the lead singer of the girl group Destiny's Child before establishing herself as a solo artist. Beyoncé has released critically acclaimed albums and starred in successful films. She is also known for her activism and philanthropy.",
    occupation: "Singer, Songwriter, Actress, Producer",
    notableWorks: ["Destiny's Child", "Lemonade", "Dreamgirls"],
  },
  {
    id: "celebrity@5",
    image: "/images/celebrities/Elon_Musk.jpg",
    name: "Elon Musk",
    description:
      "Elon Musk is a visionary entrepreneur known for his work in technology, transportation, and space exploration. He is the founder and CEO of SpaceX, Tesla, Neuralink, and The Boring Company, among other ventures. Musk is dedicated to advancing sustainable energy and exploring the possibilities of interplanetary travel. He is also a controversial figure known for his outspokenness on social media.",
    occupation: "Entrepreneur, CEO, Engineer",
    notableWorks: ["SpaceX", "Tesla", "Neuralink"],
  },
];

router.get("/", (req, res) => {
  return res.json(celebritiesList);
});

module.exports = router;
