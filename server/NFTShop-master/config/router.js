import express from "express";
const router = express.Router();

router.get("/main-section", (req, res) => {
  const infos = {
    title: "Discover Digital Art, Collect and Sell Your SpecificNFTs",
    text: "Partner with one of the world's largest retailers to showcase your brand and products.",
  };

  res.json(infos);
});

router.get("/exclusive-drops", (req, res) => {
  const infos = {
    title: "Exclusive Drops",
    text: "Lorem amet the at on consectetur adipiscing.",
    cards: [
      {
        title: "The Digital Cube",
        price: 189.0,
        username: "Jenny Wilson",
        rating: 4.2,
      },
      {
        title: "Animations Unique",
        price: 100.0,
        username: "Jenny Wilson",
        rating: 5,
      },
      {
        title: "Popup Builder",
        price: 129.0,
        username: "Jenny Wilson",
        rating: 4,
      },
      {
        title: "Discover Market",
        price: 55.0,
        username: "Annette Black",
        rating: 4,
      },
    ],
  };
  res.json(infos);
});

router.get("/trending-explore", (req, res) => {
  const infos = {
    title: "Trending Explore",
    text: "Lorem ipsum dolor amet the at on consectetur adipiscing.",
    cards: [
      {
        title: "Bestup Builder",
        username: "Kristin Watson",
        price: "$120.00",
        rating: 5,
      },
      {
        title: "Unique Animations",
        username: "Eleanor Pena",
        price: "$199.00",
        rating: 3,
      },
      {
        title: "Digital Cube",
        username: "Eleanor Pena",
        price: "$110.00",
        rating: 4.2,
      },
      {
        title: "Cube Builder",
        username: "Jenny Wilson",
        price: "$255.00",
        rating: 5,
      },
      {
        title: "The Color Wall",
        username: "William Samson",
        price: "$93.00",
        rating: 3,
      },
      {
        title: "The Digital Bird",
        username: "Eleanor Pena",
        price: "$59.00",
        rating: 1,
      },
      {
        title: "Coat of Color",
        username: "Dianne Russell",
        price: "$77.00",
        rating: 3,
      },
      {
        title: "Discover Market",
        username: "Annette Black",
        price: "$55.00",
        rating: 4,
      },
    ],
  };

  res.json(infos);
});

router.get("/seller-users", (req, res) => {
  const infos = {
    title: "Seller Users",
    text: "Lorem ipsum dolor amet the at on consectetur adipiscing.",
    cards: [
      { username: "William Samson", rating: 3 },
      { username: "Jenny Wilson", rating: 4.5 },
      { username: "Kristin Watson", rating: 5 },
      { username: "Annette Black", rating: 4 },
      { username: "Dianne Russell", rating: 3 },
      { username: "Eleanor Pena", rating: 2 },
      { username: "floroid", rating: 0 },
      { username: "dsfwr", rating: 0 },
      { username: "Prompt", rating: 0 },
    ],
  };
  res.json(infos);
});

router.get("/browse-by-category", (req, res) => {
  const infos = {
    title: "Browse by Category",
    text: "Lorem ipsum dolor amet the at on consectetur adipiscing.",
    cards: [
      "Art Work",
      "Music",
      "Imagination",
      "Collectible",
      "Virtual World",
      "Domain Names",
      "Trending Cards",
      "Utility",
    ],
  };

  res.json(infos);
});

router.get("/create-and-sell", (req, res) => {
  const infos = {
    title: "Create and sell your NFTs",
    text: "Lorem amet the at on consectetur adipiscing.",
    cards: [
      {
        title: "Set up Your Wallet",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. Ornare nulla faucibus pulvinar.",
      },
      {
        title: "Create your collection",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. Ornare nulla faucibus pulvinar.",
      },
      {
        title: "Add your NFTs",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. Ornare nulla faucibus pulvinar.",
      },
      {
        title: "List them for sale",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer quam dolor nunc semper. Ornare nulla faucibus pulvinar.",
      },
    ],
  };

  res.json(infos);
});

router.get("/footer", (req, res) => {
  const infos = {
    title1: "Informed By Newsletter",
    text1:
      "*Subscribe to our newsletter to receive early discount offers and updates.",
    title2: "Marketplace",
    text2: ["All NFTs", "Art", "Music", "Domain Names", "Virtual World"],
    title3: "Our Company",
    text3: ["Wishlist", "My account", "Checkout", "Cart", "Shop"],
    text4:"We Developer & Create Your Digital Future",
    phoneNumber:"+1467-573-1456",
    email:"info@gmail.com"
  };
  res.json(infos);
});
export default router;
