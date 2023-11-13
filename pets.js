//images
const imageOne = "images/one.jpg";
const imageTwo = "images/two.jpg";
const imageThree = "images/three.jpg";
const imageFour = "images/four.jpg";
const imageFive = "images/five.jpg";
const imageSix = "images/six.jpg";
const imageSeven = "images/seven.jpg";
const imageEight = "images/eight.jpg";
const imageNine = "images/nine.jpg";
const imageTen = "images/ten.jpg";
const imageEleven = "images/eleven.jpg";
const imageTwelve = "images/twelve.jpg";
const imageThirteen = "images/thirteen.jpg";
const imageFourteen = "images/fourteen.jpg";
const imageFifteen = "images/fifteen.jpg";
const imageSixteen = "images/sixteen.jpg";

//Pets profiles
const pets = [
  {
    name: "Sally",
    type: "cat",
    description:
      "Sally is known for her diva-like attitude. She's a bit of a drama queen and loves to lounge around like royalty. She also enjoys lounging on soft cushions and basking in the sun🎀",
    image: `${imageOne}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Whisper",
    type: "cat",
    description:
      "Whisper is the perfect companion for someone seeking a tranquil and introspective friend. He has a sense of humility and serenity. His quiet presence and gentle nature brings a sense of peace🥰",
    image: `${imageTwo}`,
    about: {
      indoors: true,
      parks: false,
      walks: true,
      naps: true,
      backyard: true,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Rhythm",
    type: "cat",
    description:
      "Meet Rhythm, your vibrant companion with a contagious love for dancing, turning every day into a celebration of joy. 🕺💃 With lively steps and an energetic spirit, Rhythm brings boundless excitement to each moment!",
    image: `${imageThree}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Shadow",
    type: "cat",
    description:
      "Meet Shadow, the purr-fect feline exuding mystery and grace with an elegant demeanor. Whether gracefully napping or engaging in a subtle tail dance, Shadow's serene nature brings feline finesse to your daily life! 🐾✨",
    image: `${imageFour}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Fluffy",
    type: "dog",
    description:
      "With a cloud-like, fluffy coat that's as soft as a marshmallow, this adorable dog is sure to melt your heart. His big, round eyes sparkle with innocence and charm never stops moving😍",
    image: `${imageFive}`,
    about: {
      indoors: false,
      parks: true,
      walks: true,
      naps: true,
      backyard: true,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Stardust",
    type: "dog",
    description:
      "Stardust is a romantic at heart. He's a true social butterfly, always excited to meet new people and make furry friends. Enjoys the park and long walks. He is a perfect outdoor companion💖",
    image: `${imageSix}`,
    about: {
      indoors: false,
      parks: true,
      walks: true,
      naps: false,
      backyard: true,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Rocky",
    type: "dog",
    description:
      "Meet Rocky, your vivacious canine companion ready to add rhythm to your day! With a love for indoor snuggles and spontaneous dance-offs, Rocky turns every moment into a paw-sitively energetic and entertaining experience. 🐕💃",
    image: `${imageSeven}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Sunny",
    type: "dog",
    description:
      "Meet Sunny, your vibrant canine companion ready to bring sunshine into your life! With a passion for indoor cuddles and spontaneous outdoor dances, get ready to bask in the warmth of Sunny's cheerful spirit. 🌞🐾",
    image: `${imageEight}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Jazz",
    type: "cat",
    description:
      "Meet Jazz, your feline friend with a unique rhythm! With a love for lounging indoors and graceful movements, Jazz turns every moment into a poetic expression of feline finesse. 🎶🐾 Get ready to be enchanted by Jazz's rhythmic charm!",
    image: `${imageNine}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Harmony",
    type: "cat",
    description:
      "Meet Harmony, your feline maestro dancing to the rhythm of tranquility! With a flair for graceful moves and a preference for the indoor stage, Harmony turns your home into a haven of peaceful elegance. 🐾💃 Embrace the harmonious dance of life with Harmony!",
    image: `${imageTen}`,
    about: {
      indoors: true,
      parks: false,
      walks: false,
      naps: true,
      backyard: false,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Serena",
    type: "dog",
    description:
      "Meet Serena, your delightful canine companion blending serene moments with outdoor adventures! With a love for indoor snuggles and peaceful walks in the park, Serena brings a calming presence to your life. 🐾🍃 Embrace the peaceful rhythm of life with Serena by your side!",
    image: `${imageEleven}`,
    about: {
      indoors: true,
      parks: true,
      walks: true,
      naps: true,
      backyard: false,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Mystery",
    type: "cat",
    description:
      "Meet Mystery, the enigmatic feline thriving in shadows! With a preference for solitude, Mystery is the purr-fect companion for those seeking a quiet and contemplative presence. 🐾🌌 Embrace the mysterious allure of life with Mystery, the feline enigma!",
    image: `${imageTwelve}`,
    about: {
      indoors: false,
      parks: false,
      walks: false,
      naps: false,
      backyard: false,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Whiskers",
    type: "cat",
    size: "big",
    description:
      "Meet Whiskers, the adventurous feline with a zest for life's every experience! Whether dancing indoors or enjoying a sunlit backyard swim, Whiskers brings boundless energy and joy to your home. 🐾💃 Embrace the full spectrum of feline fun with your lively companion!",
    image: `${imageThirteen}`,
    about: {
      indoors: true,
      parks: true,
      walks: true,
      naps: true,
      backyard: true,
      dancing: true,
      swimming: true,
    },
  },
  {
    name: "Buddy",
    type: "dog",
    size: "big",
    description:
      "Meet Buddy, the outdoorsy canine always up for a playful adventure! With a love for parks, invigorating walks, and refreshing swims, Buddy is the paw-fect companion for those who relish an active lifestyle. 🐾🌳 Get ready to embark on exciting walks and refreshing swims with your energetic sidekick, Buddy!",
    image: `${imageFourteen}`,
    about: {
      indoors: false,
      parks: true,
      walks: true,
      naps: false,
      backyard: false,
      dancing: false,
      swimming: true,
    },
  },
  {
    name: "Snooze",
    type: "dog",
    size: "big",
    description:
      "Meet Snooze, the laid-back canine companion perfect for those who appreciate the art of relaxation! With a love for lazy backyard naps, Snooze brings a chill and easygoing vibe to your home. 🐾😴 Unwind and enjoy peaceful moments with Snooze, your expert in the art of relaxation!",
    image: `${imageFifteen}`,
    about: {
      indoors: false,
      parks: false,
      walks: false,
      naps: true,
      backyard: true,
      dancing: false,
      swimming: false,
    },
  },
  {
    name: "Bolt",
    type: "dog",
    size: "big",
    description:
      "Meet Bolt, the spirited canine bringing the excitement of the outdoors inside! With a love for indoor play, invigorating walks, and cozy naps, Bolt is the paw-some companion for those who enjoy a mix of activities. 🐾🚀 Get ready for a dynamic and joy-filled experience with Bolt!",
    image: `${imageSixteen}`,
    about: {
      indoors: true,
      parks: true,
      walks: true,
      naps: true,
      backyard: false,
      dancing: false,
      swimming: false,
    },
  },
];
