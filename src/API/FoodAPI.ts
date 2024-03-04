import { FoodShopType } from "../store/slices/foodShopsSlice";

export const foodShopsApi: FoodShopType[] = [
  {
    id: "s1",
    shopName: "La Pino'z Pizza",
    shopDescription: "Pizza, Fast Food, Beverages",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/7d1a/fa8b/2ac55f06b511137279f4021e3e0a2a16?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bgTq5QDwqt~02R2-Dfgm3Jngya1fkzRNsJnWYx14SAoh0pfHFoyulug8o64D0fuEpgbWjuRknkrQPKbGw0caIAEUNn-gx8QerbN-nTmswSeh8DVLg5dWMFW~mgpdfJAOgPXbVbt6-1mc2Kchv~foIQ5BFdunXnfY9O5qzeWqsPHLeGdGNd9a3~R-lszoV0Cihy~ETh5hVtyIaKSSnvaJXeo1kNjTnDMpp5hBE7N2Kye4u-NpKCP0opycTWML82V1FzLmNclBsNKxrY-d2tusCkU6lt1BZgtlK9RcuflABaXFqO3svkNh7bpOdNQ4V79l1Ws~OhiXk9Qu-TsV3PCSPw__",
    location: "Vesu, Surat",
    openingStatus: "Open Now",
    openingTime: "11:00 AM",
    closingTime: "11:00 PM",
    averageCost: "700rs per 2 person",
    foods: [
      {
        foodCategoryName: "Recommended",
        foodCategoryList: [
          {
            foodId: "f1l1r1",
            foodImage:
              "https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxLAQJ3cKEKID4ZDZWACicdsgzWPX55lD1I15orAAgXTcbeSIweK~JLnQzwkY6aDlOtFGYJmohmuwln~ulr7UTVin2T~5y67dqOBHqSHqZvzKsaQBi-odiPG-4ntt0pBcM7A86PVrHfQ2W~YdrlSDNDcJ9sRepce5wEB~5Iz7TEo8pAB~Umu5347G8D7-8QCBwpHLqRmRwGsBKkOUTku2MBpnegVpaJTLdEUBzen3pOsboqidDNenJAnGQeu3bX37zxdaIh81D0JLkzEchbATrTl7oiIWxKX0VJ7seNU~ZC171SdKfjB7hGRKstjZ3pzuvIpXCkKZTDj-WG78oeEKw__",
            title: "Margherita Pizza",
            subtitle: "A Classic Cheesy Margherita. Can't Go Wrong.",
            price: 140,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l1r2",
            foodImage:
              "https://s3-alpha-sig.figma.com/img/6fd0/9028/28118dbd3e2fa8a04936dab7dae3eec2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiQQOkNlMgmkmiw0AwM15FrifNBM-zUo2D1dq2bBpBZ8luXdRu995o2BSZFJoEZnACFOme8qDPSaYbJyAcgbhGCwdVJmZJB1XsDOK419L5nnG6Oyk9U-4eH6Tfg7sqvpEpndIp9IsKSQRlo9X6vwNzYtCm0kp9vfKF3B0psxFg8aPsuIgalgrVDvftjHLmsKqPzMJDz3LGtpP60Os~mWmK-fNVnc87Ax~QZO1sZ0EC-lnOZyh3LxJNYxH2IGMSbClnFcg7Mf1DVUKkDaPhYfhbwyhqzB9Vk4YsUfa93oIZ7eGJDm1L8gyhGLfKTAcspMY6ydDPqyW7FGdJj5Hfpw6w__",
            title: "7 Cheese Pizza",
            subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
            price: 160,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l1r3",
            foodImage:
              "https://s3-alpha-sig.figma.com/img/6531/6d76/d88ef20a996dfbc61532e2cd66287380?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSP7sS~gvloLbNRSC4sPAWB7bbTcz4SVM0EiKveTPdnM~TM5f6slpbuUfRajTz1SwExBSAZiHijEDq6HwAp2atFFNRqbzEQF58KV8H0sR2~pyNEOjnDtY-XxkTaT1lIJA1xzH37R5Ko4gN9UpOgsaigRwFWxRafINFqL5GZ4PNMl4YXZkW~sx8IDA7jW4YTqOxen~JgiYszNU2YUsw~1MvH-1h1s6pedc45nSB9~YV6EVkvlWa-8VYwtXDbnquMU-EeiiEKxSSrKyPVaGtvvMrFaJ6-SZzU9phPHub68oidNjtP42NeXFFNu1mR3aUcIunRmrwIKm--e9~ajtRQbGg__",
            title: "Garden Delight Pizza",
            subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
            price: 160,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l1r4",
            foodImage:
              "https://s3-alpha-sig.figma.com/img/bbfc/19e0/bdf65d920e61723a1c7e733e7c34a5e9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Am6qzecszE02eG2K6PAGYlKutLQdQlP4WLqzdWpBH3gxBin7Nqh4ttXt80JsRQmPoSvZsFpJns3G9ubfzI2L2M~91rsU64A3ICgoMsGEsZRJXgV4kqmkprbvt8G3hOn9cXwK1l3q7Gtd9H8IYwN2OsK~6UC2tC3XaXngHvjFxyaZGtVsROUBkoaIM5jvXh3vwGQeyaYzUwrX4TDfhEt3Eol0kA-noj0JnKwXPEPw76bdaPb1obX0IRkDnuJM82bHcghuZ-cESHRWOlNRYj7a47S5xuYgZmRQxI9bqOchG7QL8roovbb2f~Qyim7JkWuRzEbYar3BVjROgLzUmvp2UQ__",
            title: "Lovers Bite Pizza",
            subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
            price: 750,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l1r5",
            foodImage:
              "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
            title: "Pepperoni Pizza",
            subtitle: "Classic Pepperoni with Cheese and Tomato Sauce.",
            price: 160,
            foodTag: "Pizza",
          },
        ],
      },
      {
        foodCategoryName: "Classic Pizzas",
        foodCategoryList: [
          {
            foodId: "f1l2c1",
            foodImage:
              "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
            title: "Cheese Pizza",
            subtitle:
              "Simple and Delicious Cheese Pizza.f kjfwnads  adsihdsuhsd  ",
            price: 120,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l2c2",
            foodImage:
              "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg",
            title: "Delicious Pizza",
            subtitle: "Simple and Delicious Cheese Pizza.",
            price: 120,
            foodTag: "Pizza",
          },
          {
            foodId: "f1l2c3",
            foodImage:
              "https://cdn.pixabay.com/photo/2015/12/07/22/27/pizza-1081534_1280.jpg",
            title: "hot Pizza",
            subtitle: "Simple and Delicious Cheese Pizza.",
            price: 120,
            foodTag: "Pizza",
          },
        ],
      },
      {
        foodCategoryName: "Specialty Pizzas",
        foodCategoryList: [
          {
            foodId: "f1l3s1",
            foodImage:
              "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",
            title: "Veggie Supreme",
            subtitle: "Loaded with Fresh Veggies and Cheese.",
            price: 180,
            foodTag: "Pizza",
          },
        ],
      },
      {
        foodCategoryName: "Garlic Breads",
        foodCategoryList: [
          {
            foodId: "f1l4g1",
            foodImage:
              "https://www.generalmillsindiabfs.in/wp-content/uploads/2020/10/Pillsbury-India-GarlicBread-770x513-1.jpg",
            title: "Garlic Bread",
            subtitle: "Freshly Baked Bread with Garlic Butter.",
            price: 80,
            foodTag: "Sides",
          },
          // More garlic bread items...
        ],
      },
      {
        foodCategoryName: "Pasta",
        foodCategoryList: [
          {
            foodId: "f1l5p1",
            foodImage:
              "https://www.jocooks.com/wp-content/uploads/2018/12/creamy-tomato-chicken-pasta-1-20-500x500.jpg",
            title: "Spaghetti Pasta",
            subtitle: "Classic Spaghetti with Tomato Sauce.",
            price: 150,
            foodTag: "Pasta",
          },
          // More pasta items...
        ],
      },
      {
        foodCategoryName: "Beverages",
        foodCategoryList: [
          {
            foodId: "f1l6b1",
            foodImage:
              "https://media.nutrition.org/wp-content/uploads/2019/06/beverages-carbonated-drink-cold-drink-1571849.jpg",
            title: "Cold Coffee",
            subtitle: "Refreshing Cold Coffee.",
            price: 90,
            foodTag: "Drinks",
          },
        ],
      },
    ],
  },

  {
    id: "s2",
    shopName: "McDonald's",
    shopDescription: "Burgers, Fast Food, Beverages",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/afd5/e62e/2e83a3f55dc7749274fa0937217cee46?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cw4sdGermMT1zbvk6RYv~qW8aNFt1mqMFv~1KvF0aY2jQsdelbrNAG6Qz55zEplOXM4CR6RL-cRky6fk3toLL5DOkEoEBri8n3Uq1cgE2~o6B5QKET75pYDlCeGxoZx5f~jPwzTqn4J~eKXvvqIHghjYP5~iIAUHXt8rZOYWx8BHS9-U9MXjrBw0qGWhXd747hLVCQWgKqZg4xZR3p6Eco6LZC8KZzf5nWlvvHJpYDVSeeX6Oy3kbXqHoA2VsvqY9s8VW2qUZSw77q02lH9I2~0idxcEPQBoyzUNQEZiVNAoKW4IOOs8ll0Eaxu--mYLVP66nuMe~qx2alLnWJGJAg__",
    location: "Dumas Road, Surat",
    openingStatus: "Open Now",
    openingTime: "10:00 AM",
    closingTime: "11:00 PM",
    averageCost: "200rs per person",
    foods: [
      {
        foodCategoryName: "Burgers",
        foodCategoryList: [
          {
            foodId: "s2m1b1",
            foodImage:
              "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off",
            title: "Big Mac Burger",
            subtitle: "Classic Big Mac Burger.",
            price: 120,
            foodTag: "Burgers",
          },
          // Add more burger items
        ],
      },
      {
        foodCategoryName: "Chicken McNuggets",
        foodCategoryList: [
          {
            foodId: "s2m2c1",
            foodImage:
              "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets-500x500.webps",
            title: "Chicken McNuggets (6 pieces)",
            subtitle: "Crispy Chicken McNuggets.",
            price: 80,
            foodTag: "Chicken",
          },
          // Add more McNuggets items
        ],
      },
      {
        foodCategoryName: "French Fries",
        foodCategoryList: [
          {
            foodId: "s2m3f1",
            foodImage:
              "https://urbanfarmie.com/wp-content/uploads/Air-Fryer-French-Fries-1x1-Image-6.jpg",
            title: "French Fries (Regular)",
            subtitle: "Classic French Fries.",
            price: 50,
            foodTag: "Sides",
          },
        ],
      },
      {
        foodCategoryName: "Desserts",
        foodCategoryList: [
          {
            foodId: "s2m4d1",
            foodImage:
              "https://img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg",
            title: "McFlurry",
            subtitle: "Creamy Soft Serve with Chocolate.",
            price: 60,
            foodTag: "Dessert",
          },
        ],
      },
      {
        foodCategoryName: "Cold Drinks",
        foodCategoryList: [
          {
            foodId: "s2m5c1",
            foodImage:
              "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
            title: "Coca-Cola (Regular)",
            subtitle: "Classic Coca-Cola.",
            price: 30,
            foodTag: "Drinks",
          },
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s3",
    shopName: "STARBUCKS",
    shopDescription: "Coffee, Tea, Bakery",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/1717/1950/069942f431805741313788ca2405b9b4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alx3i8mUfBqEiZ7ve2HrpsS-bIThGxRr2NjbLxrfMRxrnrLpZdS6Uo~ohd3pyH9GngmqcfG5o3BdPMrDQD8ZPiUeKKknwxAY0xuB7q-kSO4ORii3JD~bgvy8GEUB80-AlgpLTq~MoGWJsvs3ZD2tG2jh7IdglbgboweNTF~AiGYL6BAvg7ieIx0XtLlxgFUjRi3dC3PeQ9N6kphk9aSWYvK-MIRB58ibyWvaG0p-GQXqZQWp-TrjqaPixbwLNCJ3srmrkgAT08QKbQODrk-p0k-mjL~XN~hYDXOY0AWQRLo2QtnjmvdLYOQgKxrLlQzTPIaSPwrP30MKRGm6IDIPSA__",
    location: "Adajan, Surat",
    openingStatus: "Open Now",
    openingTime: "8:00 AM",
    closingTime: "10:00 PM",
    averageCost: "300rs per person",
    foods: [
      {
        foodCategoryName: "Hot Coffee",
        foodCategoryList: [
          {
            foodId: "s3s1h1",
            foodImage: "https://example.com/hot-cappuccino.jpg",
            title: "Hot Cappuccino",
            subtitle: "Rich and Creamy Cappuccino.",
            price: 120,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Iced Coffee",
        foodCategoryList: [
          {
            foodId: "s3s2i1",
            foodImage:
              "https://www.plattershare.com/storage/2021/09/5d7666515bc4e.jpg",
            title: "Iced Mocha",
            subtitle: "Chilled Mocha with Espresso and Chocolate.",
            price: 150,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Hot Tea",
        foodCategoryList: [
          {
            foodId: "s3s3h1",
            foodImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2gtXMqHBdb35o3AqKdMcUyv4fWJP9bh1zg&usqp=CAU",
            title: "Hot Green Tea",
            subtitle: "Refreshing Green Tea.",
            price: 100,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Iced Tea",
        foodCategoryList: [
          {
            foodId: "s3s4i1",
            foodImage:
              "https://hot-thai-kitchen.com/wp-content/uploads/2014/02/Thai-lime-tea-1.jpg",
            title: "Iced Lemon Tea",
            subtitle: "Cool and Citrusy Lemon Tea.",
            price: 120,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Bakery",
        foodCategoryList: [
          {
            foodId: "s3s5b1",
            foodImage:
              "https://www.yummytummyaarthi.com/wp-content/uploads/2019/02/1-22.jpg",
            title: "Blueberry Muffin",
            subtitle: "Moist and Flavorful Blueberry Muffin.",
            price: 80,
            foodTag: "Bakery",
          },
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s4",
    shopName: "Burger King",
    shopDescription: "Burgers, Fast Food, Beverages",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/aba9/871d/a959b4300ae94f6b4efc5c1ea5afd099?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DuW1gHJfWd7-avYlESTb-pqOq3MsPvfwtdg4QvQ2blEgQOAX-7Z30XXwB8P9KkJioUGxDBqBD3A6hF8snTQX99uXN7fBFy0~NcFBlsZssUBif1XO1V~KEe1pmlVt9B9rrXrJzRW7ZEl2J3oIM1tbHxbLJ6M1CIAVozJ4gGnaT0y~EX4Xcz3beYxiLCLy70sFL~StH1uxbgUWPU80xuXQPaIH~F56a3ednwk4gkyFhGUQgm63ppfzjIpfjDSo0th88kcJTEbCdwsSznxtlRqvOkdFXn90cfoBb9mm~Z51kjyfIB-09ju5Km59jVx-7JyGnQ1bPcPIsVYO-Xx2q-uViw__",
    location: "Piplod, Surat",
    openingStatus: "Open Now",
    openingTime: "10:30 AM",
    closingTime: "10:00 PM",
    averageCost: "250rs per person",
    foods: [
      {
        foodCategoryName: "Burgers",
        foodCategoryList: [
          {
            foodId: "s4b1b1",
            foodImage:
              "https://www.recipetineats.com/wp-content/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg",
            title: "Whopper Burger",
            subtitle: "Juicy Beef Burger with Fresh Veggies.",
            price: 150,
            foodTag: "Burgers",
          },
        ],
      },
      {
        foodCategoryName: "Chicken Fries",
        foodCategoryList: [
          {
            foodId: "s4b2c1",
            foodImage:
              "https://airfryingfoodie.com/wp-content/uploads/2022/05/Air-Fryer-Chicken-Fries-copy-4-1.jpeg",
            title: "Chicken Fries",
            subtitle: "Crunchy Chicken Strips.",
            price: 100,
            foodTag: "Chicken",
          },
        ],
      },
      {
        foodCategoryName: "French Fries",
        foodCategoryList: [
          {
            foodId: "s4b4f1",
            foodImage:
              "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
            title: "Crispy French Fries",
            subtitle: "Crispy and Golden French Fries.",
            price: 60,
            foodTag: "Sides",
          },
        ],
      },
      {
        foodCategoryName: "Desserts",
        foodCategoryList: [
          {
            foodId: "s4b5d1",
            foodImage:
              "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg",
            title: "Oreo Shake",
            subtitle: "Creamy Shake with Oreo Cookies.",
            price: 80,
            foodTag: "Dessert",
          },
        ],
      },
      {
        foodCategoryName: "Beverages",
        foodCategoryList: [
          {
            foodId: "s4b6b1",
            foodImage:
              "https://www.drinkpreneur.com/wp-content/uploads/2016/12/drinkpreneur_819_main.jpg",
            title: "Iced Tea",
            subtitle: "Refreshing Iced Tea.",
            price: 40,
            foodTag: "Drinks",
          },
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s5",
    shopName: "KFC",
    shopDescription: "Chicken, Burgers, Fast Food",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/ab8a/f2b3/0e0eba04d90c3da4a451e4ed5dc0f746?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azyMsLLPKbEcBGkN5xXZyYymQfzOthKcK4IZXl-VhsO79tiMxmf7REVBw~kAHCKvpma6bspg4WO-9BkseSpDSQ6j6rkPAxL2Y2d7U31ZAj9imJB4jRYzpBXIg-lSTSaBD-ClV9-2AZOVyHWP48rrm2feDlpZK8DyJkeZcthgVWCprI2QkQDjjIeAnE~~garPrMCyQhvm29QziHVtDppvE0UhsqyJ1EzpFYwXuTe58Q8az74YDFCFrK5LayAsKjY3f8E2s6jhJRjalUpHyFLUoYIkYQYnkvB3uYMmQ7IT-lNIUtcNBwB-N5LIbJP1wDbbjq~sk0vdfDItPyk6Uy9jaw__",
    location: "Adajan, Surat",
    openingStatus: "Open Now",
    openingTime: "10:00 AM",
    closingTime: "11:00 PM",
    averageCost: "300rs per person",
    foods: [
      {
        foodCategoryName: "Chicken",
        foodCategoryList: [
          {
            foodId: "f23",
            foodImage: "https://example.com/fried-chicken-bucket.jpg",
            title: "Fried Chicken Bucket",
            subtitle: "Crunchy Fried Chicken Pieces.",
            price: 200,
            foodTag: "Chicken",
          },
          // Add more chicken items
        ],
      },
      {
        foodCategoryName: "Burgers",
        foodCategoryList: [
          {
            foodId: "f24",
            foodImage: "https://example.com/chicken-zinger-burger.jpg",
            title: "Chicken Zinger Burger",
            subtitle: "Spicy Chicken Burger with Zesty Sauce.",
            price: 120,
            foodTag: "Burgers",
          },
          // Add more burger items
        ],
      },
      {
        foodCategoryName: "Fried Chicken Bucket",
        foodCategoryList: [
          {
            foodId: "f25",
            foodImage: "https://example.com/popcorn-chicken.jpg",
            title: "Popcorn Chicken",
            subtitle: "Crispy Bite-Sized Chicken Pieces.",
            price: 100,
            foodTag: "Chicken",
          },
          // Add more fried chicken bucket items
        ],
      },
      {
        foodCategoryName: "French Fries",
        foodCategoryList: [
          {
            foodId: "f26",
            foodImage: "https://example.com/spicy-fries.jpg",
            title: "Spicy Fries",
            subtitle: "Fries with a Kick of Spice.",
            price: 70,
            foodTag: "Sides",
          },
          // Add more fries items
        ],
      },
      {
        foodCategoryName: "Beverages",
        foodCategoryList: [
          {
            foodId: "f27",
            foodImage: "https://example.com/krushers.jpg",
            title: "Krushers",
            subtitle: "Creamy and Delicious Krushers.",
            price: 90,
            foodTag: "Drinks",
          },
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s6",
    shopName: "COFFEE CULTURE",
    shopDescription: "Coffee, Tea, Snacks",
    shopLogo:
      "https://s3-alpha-sig.figma.com/img/0549/9e9d/ed8d8f95f578b9989a2a1898944298a0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGqxD7rF~6~DHXYpF8-AarnyVwHXr2dMXCKvWR8epCHjTwloiRXFmJmA9-eOjEACyRYuAJ6ciPRkZzfC4LY0SC4ctoOKHUcel9MwZNQv0dBqzbmtoBDcqihtnV2NQ8~UZXjzJQkpd~3zB18OtmbeKlCqVm-9K4QXj-YWCk65b5PgpyOLwLK-FqNr5h6C0vc8grOFlIB6jt7atr6oP4AnEZvfBYjrscdMj8znXFYUTL6JRYba1fz9Cn-SzzsdrcqXuVnB9xT~tEd2sGr4B0L2Y1VM76Bjbt49bEMAdfR8okigfcI1-2xyaa6s2me2PnUq1jpnhfZg9fKgtyvBXWSfuA__",
    location: "City Light Town, Surat",
    openingStatus: "Open Now",
    openingTime: "7:00 AM",
    closingTime: "11:00 PM",
    averageCost: "150rs per person",
    foods: [
      {
        foodCategoryName: "Hot Coffee",
        foodCategoryList: [
          {
            foodId: "f28",
            foodImage: "https://example.com/hot-cappuccino.jpg",
            title: "Hot Cappuccino",
            subtitle: "Rich and Creamy Cappuccino.",
            price: 120,
            foodTag: "Drinks",
          },
          // Add more hot coffee items
        ],
      },
      {
        foodCategoryName: "Iced Coffee",
        foodCategoryList: [
          {
            foodId: "f29",
            foodImage: "https://example.com/iced-mocha.jpg",
            title: "Iced Mocha",
            subtitle: "Chilled Mocha with Espresso and Chocolate.",
            price: 150,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Hot Tea",
        foodCategoryList: [
          {
            foodId: "f30",
            foodImage: "https://example.com/hot-green-tea.jpg",
            title: "Hot Green Tea",
            subtitle: "Refreshing Green Tea.",
            price: 100,
            foodTag: "Drinks",
          },
        ],
      },
      {
        foodCategoryName: "Iced Tea",
        foodCategoryList: [
          {
            foodId: "f31",
            foodImage: "https://example.com/iced-lemon-tea.jpg",
            title: "Iced Lemon Tea",
            subtitle: "Cool and Citrusy Lemon Tea.",
            price: 120,
            foodTag: "Drinks",
          },
          // Add more iced tea items
        ],
      },
      {
        foodCategoryName: "Snacks",
        foodCategoryList: [
          {
            foodId: "f32",
            foodImage: "https://example.com/panini-sandwich.jpg",
            title: "Panini Sandwich",
            subtitle: "Grilled Sandwich with Cheese and Veggies.",
            price: 80,
            foodTag: "Snacks",
          },
          // Add more snack items
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s7",
    shopName: "Malhan Dosa",
    shopDescription: "South Indian Food, Dosas, Idlis",
    shopLogo:
      "https://cdn.dribbble.com/users/963818/screenshots/4168355/media/060fc021ae18c1c471aaeb33c47ae5dd.jpg",
    location: "Varachha Road, Surat",
    openingStatus: "Open Now",
    openingTime: "8:00 AM",
    closingTime: "10:00 PM",
    averageCost: "100rs per person",
    foods: [
      {
        foodCategoryName: "Dosas",
        foodCategoryList: [
          {
            foodId: "f33",
            foodImage: "https://example.com/masala-dosa.jpg",
            title: "Masala Dosa",
            subtitle: "Crispy Dosa with Potato Masala.",
            price: 50,
            foodTag: "Main Course",
          },
        ],
      },
      {
        foodCategoryName: "Idlis",
        foodCategoryList: [
          {
            foodId: "f34",
            foodImage: "https://example.com/plain-idli.jpg",
            title: "Plain Idli",
            subtitle: "Soft and Fluffy Steamed Idli.",
            price: 40,
            foodTag: "Main Course",
          },
          // Add more idli items
        ],
      },
      {
        foodCategoryName: "Vada Sambhar",
        foodCategoryList: [
          {
            foodId: "f35",
            foodImage: "https://example.com/vada-sambhar.jpg",
            title: "Vada Sambhar",
            subtitle: "Crispy Vada with Spicy Sambar.",
            price: 60,
            foodTag: "Main Course",
          },
          // Add more vada sambhar items
        ],
      },
      {
        foodCategoryName: "Masala Dosa",
        foodCategoryList: [
          {
            foodId: "f36",
            foodImage: "https://example.com/onion-dosa.jpg",
            title: "Onion Dosa",
            subtitle: "Dosa with Spicy Onion Topping.",
            price: 60,
            foodTag: "Main Course",
          },
          // Add more masala dosa items
        ],
      },
      // Add more food categories if needed
    ],
  },
  {
    id: "s8",
    shopName: "Tea Post",
    shopDescription: "Tea, Snacks, Beverages",
    shopLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-hwKIIiI9X591s4kObsInBbjh6YGhIdB5jmTAH5w_-kr3G6R-sVtRP0MxuIWda7vy1k&usqp=CAU",
    location: "Ghod Dod Road, Surat",
    openingStatus: "Open Now",
    openingTime: "7:30 AM",
    closingTime: "11:00 PM",
    averageCost: "80rs per person",
    foods: [
      {
        foodCategoryName: "Hot Tea",
        foodCategoryList: [
          {
            foodId: "f37",
            foodImage: "https://example.com/masala-tea.jpg",
            title: "Masala Tea",
            subtitle: "Spiced Tea with Milk.",
            price: 20,
            foodTag: "Beverages",
          },
          // Add more hot tea items
        ],
      },
      {
        foodCategoryName: "Iced Tea",
        foodCategoryList: [
          {
            foodId: "f38",
            foodImage: "https://example.com/peach-iced-tea.jpg",
            title: "Peach Iced Tea",
            subtitle: "Refreshing Iced Tea with Peach Flavor.",
            price: 30,
            foodTag: "Beverages",
          },
          // Add more iced tea items
        ],
      },
      {
        foodCategoryName: "Snacks",
        foodCategoryList: [
          {
            foodId: "f39",
            foodImage: "https://example.com/kachori.jpg",
            title: "Kachori",
            subtitle: "Crispy and Spicy Fried Snack.",
            price: 15,
            foodTag: "Snacks",
          },
          // Add more snack items
        ],
      },
      {
        foodCategoryName: "Beverages",
        foodCategoryList: [
          {
            foodId: "f40",
            foodImage: "https://example.com/cold-coffee.jpg",
            title: "Cold Coffee",
            subtitle: "Chilled Coffee with Milk.",
            price: 40,
            foodTag: "Beverages",
          },
          // Add more beverage items
        ],
      },
      // Add more categories as needed
    ],
  },
  {
    id: "s9",
    shopName: "Subway",
    shopDescription: "Sandwiches, Salads, Wraps",
    shopLogo:
      "https://i.pinimg.com/originals/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.png",
    location: "Athwalines, Surat",
    openingStatus: "Open Now",
    openingTime: "10:00 AM",
    closingTime: "10:00 PM",
    averageCost: "250rs per person",
    foods: [
      {
        foodCategoryName: "Subway Club",
        foodCategoryList: [
          {
            foodId: "f41",
            foodImage: "https://example.com/subway-club-sandwich.jpg",
            title: "Subway Club Sandwich",
            subtitle: "Classic Sandwich with Turkey, Ham, and Roast Beef.",
            price: 100,
            foodTag: "Sandwiches",
          },
          // Add more Subway Club items
        ],
      },
      {
        foodCategoryName: "Veggie Delight",
        foodCategoryList: [
          {
            foodId: "f42",
            foodImage: "https://example.com/veggie-delight-sandwich.jpg",
            title: "Veggie Delight Sandwich",
            subtitle: "Healthy Sandwich with Fresh Veggies.",
            price: 90,
            foodTag: "Sandwiches",
          },
          // Add more Veggie Delight items
        ],
      },
      {
        foodCategoryName: "Wraps",
        foodCategoryList: [
          {
            foodId: "f43",
            foodImage: "https://example.com/chicken-teriyaki-wrap.jpg",
            title: "Chicken Teriyaki Wrap",
            subtitle: "Grilled Chicken Wrap with Teriyaki Sauce.",
            price: 120,
            foodTag: "Wraps",
          },
          // Add more wrap items
        ],
      },
      {
        foodCategoryName: "Salads",
        foodCategoryList: [
          {
            foodId: "f44",
            foodImage: "https://example.com/chicken-caesar-salad.jpg",
            title: "Chicken Caesar Salad",
            subtitle: "Fresh Salad with Grilled Chicken.",
            price: 130,
            foodTag: "Salads",
          },
          // Add more salad items
        ],
      },
      // Add more categories as needed
    ],
  },
];

// export const foodShopsApi: FoodShopType[] = [
//   {
//     id: "s1",
//     shopName: "La Pino'z Pizza",
//     shopDescription: "Pizza, Fast Food, Beverages",
//     shopLogo:
//       "https://s3-alpha-sig.figma.com/img/7d1a/fa8b/2ac55f06b511137279f4021e3e0a2a16?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bgTq5QDwqt~02R2-Dfgm3Jngya1fkzRNsJnWYx14SAoh0pfHFoyulug8o64D0fuEpgbWjuRknkrQPKbGw0caIAEUNn-gx8QerbN-nTmswSeh8DVLg5dWMFW~mgpdfJAOgPXbVbt6-1mc2Kchv~foIQ5BFdunXnfY9O5qzeWqsPHLeGdGNd9a3~R-lszoV0Cihy~ETh5hVtyIaKSSnvaJXeo1kNjTnDMpp5hBE7N2Kye4u-NpKCP0opycTWML82V1FzLmNclBsNKxrY-d2tusCkU6lt1BZgtlK9RcuflABaXFqO3svkNh7bpOdNQ4V79l1Ws~OhiXk9Qu-TsV3PCSPw__",
//     location: "Vesu, Surat",
//     openingStatus: "Open Now",
//     openingTime: "11:00 AM",
//     closingTime: "11:00 PM",
//     averageCost: "700rs per 2 person",
//     foods: {

//       Recommended: [
// {
//   foodId: "f1l1r1",
//   foodImage:
//     "https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxLAQJ3cKEKID4ZDZWACicdsgzWPX55lD1I15orAAgXTcbeSIweK~JLnQzwkY6aDlOtFGYJmohmuwln~ulr7UTVin2T~5y67dqOBHqSHqZvzKsaQBi-odiPG-4ntt0pBcM7A86PVrHfQ2W~YdrlSDNDcJ9sRepce5wEB~5Iz7TEo8pAB~Umu5347G8D7-8QCBwpHLqRmRwGsBKkOUTku2MBpnegVpaJTLdEUBzen3pOsboqidDNenJAnGQeu3bX37zxdaIh81D0JLkzEchbATrTl7oiIWxKX0VJ7seNU~ZC171SdKfjB7hGRKstjZ3pzuvIpXCkKZTDj-WG78oeEKw__",
//   title: "Margherita Pizza",
//   subtitle: "A Classic Cheesy Margherita. Can't Go Wrong.",
//   price: 140,
// },
// {
//   foodId: "f1l1r2",
//   foodImage:
//     "https://s3-alpha-sig.figma.com/img/6fd0/9028/28118dbd3e2fa8a04936dab7dae3eec2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiQQOkNlMgmkmiw0AwM15FrifNBM-zUo2D1dq2bBpBZ8luXdRu995o2BSZFJoEZnACFOme8qDPSaYbJyAcgbhGCwdVJmZJB1XsDOK419L5nnG6Oyk9U-4eH6Tfg7sqvpEpndIp9IsKSQRlo9X6vwNzYtCm0kp9vfKF3B0psxFg8aPsuIgalgrVDvftjHLmsKqPzMJDz3LGtpP60Os~mWmK-fNVnc87Ax~QZO1sZ0EC-lnOZyh3LxJNYxH2IGMSbClnFcg7Mf1DVUKkDaPhYfhbwyhqzB9Vk4YsUfa93oIZ7eGJDm1L8gyhGLfKTAcspMY6ydDPqyW7FGdJj5Hfpw6w__",
//   title: "Double Cheese Margherita Pizza",
//   subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
//   price: 160,
// },
// {
//   foodId: "f1l1r3",
//   foodImage:
//     "https://s3-alpha-sig.figma.com/img/6531/6d76/d88ef20a996dfbc61532e2cd66287380?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSP7sS~gvloLbNRSC4sPAWB7bbTcz4SVM0EiKveTPdnM~TM5f6slpbuUfRajTz1SwExBSAZiHijEDq6HwAp2atFFNRqbzEQF58KV8H0sR2~pyNEOjnDtY-XxkTaT1lIJA1xzH37R5Ko4gN9UpOgsaigRwFWxRafINFqL5GZ4PNMl4YXZkW~sx8IDA7jW4YTqOxen~JgiYszNU2YUsw~1MvH-1h1s6pedc45nSB9~YV6EVkvlWa-8VYwtXDbnquMU-EeiiEKxSSrKyPVaGtvvMrFaJ6-SZzU9phPHub68oidNjtP42NeXFFNu1mR3aUcIunRmrwIKm--e9~ajtRQbGg__",
//   title: "Garden Delight Pizza",
//   subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
//   price: 160,
// },
// {
//   foodId: "f1l1r4",
//   foodImage:
//     "https://s3-alpha-sig.figma.com/img/bbfc/19e0/bdf65d920e61723a1c7e733e7c34a5e9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Am6qzecszE02eG2K6PAGYlKutLQdQlP4WLqzdWpBH3gxBin7Nqh4ttXt80JsRQmPoSvZsFpJns3G9ubfzI2L2M~91rsU64A3ICgoMsGEsZRJXgV4kqmkprbvt8G3hOn9cXwK1l3q7Gtd9H8IYwN2OsK~6UC2tC3XaXngHvjFxyaZGtVsROUBkoaIM5jvXh3vwGQeyaYzUwrX4TDfhEt3Eol0kA-noj0JnKwXPEPw76bdaPb1obX0IRkDnuJM82bHcghuZ-cESHRWOlNRYj7a47S5xuYgZmRQxI9bqOchG7QL8roovbb2f~Qyim7JkWuRzEbYar3BVjROgLzUmvp2UQ__",
//   title: "Lovers Bite Pizza",
//   subtitle: "A Classic Cheesy Margharita. Can't Go Wrong.",
//   price: 750,
// },
// {
//   foodId: "f1l1r5",
//   foodImage:
//     "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
//   title: "Pepperoni Pizza",
//   subtitle: "Classic Pepperoni with Cheese and Tomato Sauce.",
//   price: 160,
// },
//       ],

//       "Classic Pizzas": [
// {
//   foodId: "f1l2c1",
//   foodImage:
//     "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
//   title: "Cheese Pizza",
//   subtitle:
//     "Simple and Delicious Cheese Pizza.f kjfwnads  adsihdsuhsd  ",
//   price: 120,
// },
// {
//   foodId: "f1l2c2",
//   foodImage:
//     "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg",
//   title: "Delicious Pizza",
//   subtitle: "Simple and Delicious Cheese Pizza.",
//   price: 120,
// },
// {
//   foodId: "f1l2c3",
//   foodImage:
//     "https://cdn.pixabay.com/photo/2015/12/07/22/27/pizza-1081534_1280.jpg",
//   title: "hot Pizza",
//   subtitle: "Simple and Delicious Cheese Pizza.",
//   price: 120,
// },
//       ],
//       "Specialty Pizzas": [
//         {
//           foodId: "f1l3s1",
//           foodImage:
//             "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",
//           title: "Veggie Supreme Pizza",
//           subtitle: "Loaded with Fresh Veggies and Cheese.",
//           price: 180,
//         },
//       ],
//       "Garlic Breads": [
//         {
//           foodId: "f1l4g1",
//           foodImage:
//             "https://www.generalmillsindiabfs.in/wp-content/uploads/2020/10/Pillsbury-India-GarlicBread-770x513-1.jpg",
//           title: "Garlic Bread",
//           subtitle: "Freshly Baked Bread with Garlic Butter.",
//           price: 80,
//         },
//         {
//           foodId: "f1l4g2",
//           foodImage:
//             "https://www.simplyrecipes.com/thmb/5JwdiUjcSPTxyuhmdqv8pM8kWs0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Garlic-Bread-METHOD-2-3-1c5f5cfa8bf6408c84c0596eea83f8e8.jpg",
//           title: "Crispy Bread",
//           subtitle: "Freshly Baked Bread with Garlic Butter.",
//           price: 80,
//         },
//         {
//           foodId: "f1l4g3",
//           foodImage:
//             "https://cookingwithcurls.com/wp-content/uploads/2017/08/Easy-Garlic-Bread-Recipe-2-cookingwithcurls.com_.jpg",
//           title: "Hot Bread",
//           subtitle: "Freshly Baked Bread with Garlic Butter.",
//           price: 80,
//         },
//       ],
//       Pasta: [
//         {
//           foodId: "f1l5p1",
//           foodImage:
//             "https://www.jocooks.com/wp-content/uploads/2018/12/creamy-tomato-chicken-pasta-1-20-500x500.jpg",
//           title: "Spaghetti Pasta",
//           subtitle: "Classic Spaghetti with Tomato Sauce.",
//           price: 150,
//         },
//       ],
//       Beverages: [
//         {
//           foodId: "f1l6b1",
//           foodImage:
//             "https://media.nutrition.org/wp-content/uploads/2019/06/beverages-carbonated-drink-cold-drink-1571849.jpg",
//           title: "Cold Coffee",
//           subtitle: "Refreshing Cold Coffee.",
//           price: 90,
//         },
//       ],
//       // Add more categories as needed
//     },
//   },

// {
//   id: "s2",
//   shopName: "McDonald's",
//   shopDescription: "Burgers, Fast Food, Beverages",
//   shopLogo:
//     "https://s3-alpha-sig.figma.com/img/afd5/e62e/2e83a3f55dc7749274fa0937217cee46?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cw4sdGermMT1zbvk6RYv~qW8aNFt1mqMFv~1KvF0aY2jQsdelbrNAG6Qz55zEplOXM4CR6RL-cRky6fk3toLL5DOkEoEBri8n3Uq1cgE2~o6B5QKET75pYDlCeGxoZx5f~jPwzTqn4J~eKXvvqIHghjYP5~iIAUHXt8rZOYWx8BHS9-U9MXjrBw0qGWhXd747hLVCQWgKqZg4xZR3p6Eco6LZC8KZzf5nWlvvHJpYDVSeeX6Oy3kbXqHoA2VsvqY9s8VW2qUZSw77q02lH9I2~0idxcEPQBoyzUNQEZiVNAoKW4IOOs8ll0Eaxu--mYLVP66nuMe~qx2alLnWJGJAg__",
//   location: "Dumas Road, Surat",
//   openingStatus: "Open Now",
//   openingTime: "10:00 AM",
//   closingTime: "11:00 PM",
//   averageCost: "200rs per person",
//   foods: {
//     Burgers: [
//       {
//         foodId: "s2m1b1",
//         foodImage:
//           "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off",
//         title: "Big Mac Burger",
//         subtitle: "Classic Big Mac Burger.",
//         price: 120,
//       },
//       // Add more burger items
//     ],
//     "Chicken McNuggets": [
//       {
//         foodId: "s2m2c1",
//         foodImage:
//           "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets-500x500.webps",
//         title: "Chicken McNuggets (6 pieces)",
//         subtitle: "Crispy Chicken McNuggets.",
//         price: 80,
//       },
//       // Add more McNuggets items
//     ],
//     "French Fries": [
//       {
//         foodId: "s2m3f1",
//         foodImage:
//           "https://urbanfarmie.com/wp-content/uploads/Air-Fryer-French-Fries-1x1-Image-6.jpg",
//         title: "French Fries (Regular)",
//         subtitle: "Classic French Fries.",
//         price: 50,
//       },
//     ],
//     Desserts: [
//       {
//         foodId: "s2m4d1",
//         foodImage:
//           "https://img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg",
//         title: "McFlurry",
//         subtitle: "Creamy Soft Serve with Chocolate.",
//         price: 60,
//       },
//     ],
//     "Cold Drinks": [
//       {
//         foodId: "s2m5c1",
//         foodImage:
//           "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
//         title: "Coca-Cola (Regular)",
//         subtitle: "Classic Coca-Cola.",
//         price: 30,
//       },
//     ],
//   },
// },
// {
//   id: "s3",
//   shopName: "STARBUCKS",
//   shopDescription: "Coffee, Tea, Bakery",
//   shopLogo:
//     "https://s3-alpha-sig.figma.com/img/1717/1950/069942f431805741313788ca2405b9b4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alx3i8mUfBqEiZ7ve2HrpsS-bIThGxRr2NjbLxrfMRxrnrLpZdS6Uo~ohd3pyH9GngmqcfG5o3BdPMrDQD8ZPiUeKKknwxAY0xuB7q-kSO4ORii3JD~bgvy8GEUB80-AlgpLTq~MoGWJsvs3ZD2tG2jh7IdglbgboweNTF~AiGYL6BAvg7ieIx0XtLlxgFUjRi3dC3PeQ9N6kphk9aSWYvK-MIRB58ibyWvaG0p-GQXqZQWp-TrjqaPixbwLNCJ3srmrkgAT08QKbQODrk-p0k-mjL~XN~hYDXOY0AWQRLo2QtnjmvdLYOQgKxrLlQzTPIaSPwrP30MKRGm6IDIPSA__",
//   location: "Adajan, Surat",
//   openingStatus: "Open Now",
//   openingTime: "8:00 AM",
//   closingTime: "10:00 PM",
//   averageCost: "300rs per person",
//   foods: {
//     "Hot Coffee": [
//       {
//         foodId: "s3s1h1",
//         foodImage: "https://example.com/hot-cappuccino.jpg",
//         title: "Hot Cappuccino",
//         subtitle: "Rich and Creamy Cappuccino.",
//         price: 120,
//       },
//     ],
//     "Iced Coffee": [
//       {
//         foodId: "s3s2i1",
//         foodImage:
//           "https://www.plattershare.com/storage/2021/09/5d7666515bc4e.jpg",
//         title: "Iced Mocha",
//         subtitle: "Chilled Mocha with Espresso and Chocolate.",
//         price: 150,
//       },
//     ],
//     "Hot Tea": [
//       {
//         foodId: "s3s3h1",
//         foodImage:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2gtXMqHBdb35o3AqKdMcUyv4fWJP9bh1zg&usqp=CAU",
//         title: "Hot Green Tea",
//         subtitle: "Refreshing Green Tea.",
//         price: 100,
//       },
//     ],
//     "Iced Tea": [
//       {
//         foodId: "s3s4i1",
//         foodImage:
//           "https://hot-thai-kitchen.com/wp-content/uploads/2014/02/Thai-lime-tea-1.jpg",
//         title: "Iced Lemon Tea",
//         subtitle: "Cool and Citrusy Lemon Tea.",
//         price: 120,
//       },
//     ],
//     Bakery: [
//       {
//         foodId: "s3s5b1",
//         foodImage:
//           "https://www.yummytummyaarthi.com/wp-content/uploads/2019/02/1-22.jpg",
//         title: "Blueberry Muffin",
//         subtitle: "Moist and Flavorful Blueberry Muffin.",
//         price: 80,
//       },
//     ],
//   },
// },
// {
//   id: "s4",
//   shopName: "Burger King",
//   shopDescription: "Burgers, Fast Food, Beverages",
//   shopLogo:
//     "https://s3-alpha-sig.figma.com/img/aba9/871d/a959b4300ae94f6b4efc5c1ea5afd099?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DuW1gHJfWd7-avYlESTb-pqOq3MsPvfwtdg4QvQ2blEgQOAX-7Z30XXwB8P9KkJioUGxDBqBD3A6hF8snTQX99uXN7fBFy0~NcFBlsZssUBif1XO1V~KEe1pmlVt9B9rrXrJzRW7ZEl2J3oIM1tbHxbLJ6M1CIAVozJ4gGnaT0y~EX4Xcz3beYxiLCLy70sFL~StH1uxbgUWPU80xuXQPaIH~F56a3ednwk4gkyFhGUQgm63ppfzjIpfjDSo0th88kcJTEbCdwsSznxtlRqvOkdFXn90cfoBb9mm~Z51kjyfIB-09ju5Km59jVx-7JyGnQ1bPcPIsVYO-Xx2q-uViw__",
//   location: "Piplod, Surat",
//   openingStatus: "Open Now",
//   openingTime: "10:30 AM",
//   closingTime: "10:00 PM",
//   averageCost: "250rs per person",
//   foods: {
//     Burgers: [
//       {
//         foodId: "s4b1b1",
//         foodImage:
//           "https://www.recipetineats.com/wp-content/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg",
//         title: "Whopper Burger",
//         subtitle: "Juicy Beef Burger with Fresh Veggies.",
//         price: 150,
//       },
//     ],
//     "Chicken Fries": [
//       {
//         foodId: "s4b2c1",
//         foodImage:
//           "https://airfryingfoodie.com/wp-content/uploads/2022/05/Air-Fryer-Chicken-Fries-copy-4-1.jpeg",
//         title: "Chicken Fries",
//         subtitle: "Crunchy Chicken Strips.",
//         price: 100,
//       },
//     ],
//     "French Fries": [
//       {
//         foodId: "s4b4f1",
//         foodImage:
//           "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
//         title: "Crispy French Fries",
//         subtitle: "Crispy and Golden French Fries.",
//         price: 60,
//       },
//       // Add more fries items
//     ],
//     Desserts: [
//       {
//         foodId: "s4b5d1",
//         foodImage:
//           "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg",
//         title: "Oreo Shake",
//         subtitle: "Creamy Shake with Oreo Cookies.",
//         price: 80,
//       },
//     ],
//     Beverages: [
//       {
//         foodId: "s4b6b1",
//         foodImage:
//           "https://www.drinkpreneur.com/wp-content/uploads/2016/12/drinkpreneur_819_main.jpg",
//         title: "Iced Tea",
//         subtitle: "Refreshing Iced Tea.",
//         price: 40,
//       },
//     ],
//   },
// },
// {
//   id: "s5",
//   shopName: "KFC",
//   shopDescription: "Chicken, Burgers, Fast Food",
//   shopLogo:
//     "https://s3-alpha-sig.figma.com/img/ab8a/f2b3/0e0eba04d90c3da4a451e4ed5dc0f746?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azyMsLLPKbEcBGkN5xXZyYymQfzOthKcK4IZXl-VhsO79tiMxmf7REVBw~kAHCKvpma6bspg4WO-9BkseSpDSQ6j6rkPAxL2Y2d7U31ZAj9imJB4jRYzpBXIg-lSTSaBD-ClV9-2AZOVyHWP48rrm2feDlpZK8DyJkeZcthgVWCprI2QkQDjjIeAnE~~garPrMCyQhvm29QziHVtDppvE0UhsqyJ1EzpFYwXuTe58Q8az74YDFCFrK5LayAsKjY3f8E2s6jhJRjalUpHyFLUoYIkYQYnkvB3uYMmQ7IT-lNIUtcNBwB-N5LIbJP1wDbbjq~sk0vdfDItPyk6Uy9jaw__",
//   location: "Adajan, Surat",
//   openingStatus: "Open Now",
//   openingTime: "10:00 AM",
//   closingTime: "11:00 PM",
//   averageCost: "300rs per person",
//   foods: {
//     Chicken: [
//       {
//         foodId: "f23",
//         foodImage: "https://example.com/fried-chicken-bucket.jpg",
//         title: "Fried Chicken Bucket",
//         subtitle: "Crunchy Fried Chicken Pieces.",
//         price: 200,
//       },
//       // Add more chicken items
//     ],
//     Burgers: [
//       {
//         foodId: "f24",
//         foodImage: "https://example.com/chicken-zinger-burger.jpg",
//         title: "Chicken Zinger Burger",
//         subtitle: "Spicy Chicken Burger with Zesty Sauce.",
//         price: 120,
//       },
//       // Add more burger items
//     ],
//     "Fried Chicken Bucket": [
//       {
//         foodId: "f25",
//         foodImage: "https://example.com/popcorn-chicken.jpg",
//         title: "Popcorn Chicken",
//         subtitle: "Crispy Bite-Sized Chicken Pieces.",
//         price: 100,
//       },
//       // Add more fried chicken bucket items
//     ],
//     "French Fries": [
//       {
//         foodId: "f26",
//         foodImage: "https://example.com/spicy-fries.jpg",
//         title: "Spicy Fries",
//         subtitle: "Fries with a Kick of Spice.",
//         price: 70,
//       },
//       // Add more fries items
//     ],
//     Beverages: [
//       {
//         foodId: "f27",
//         foodImage: "https://example.com/krushers.jpg",
//         title: "Krushers",
//         subtitle: "Creamy and Delicious Krushers.",
//         price: 90,
//       },
//     ],
//   },
// },
// {
//   id: "s6",
//   shopName: "COFFEE CULTURE",
//   shopDescription: "Coffee, Tea, Snacks",
//   shopLogo:
//     "https://s3-alpha-sig.figma.com/img/0549/9e9d/ed8d8f95f578b9989a2a1898944298a0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGqxD7rF~6~DHXYpF8-AarnyVwHXr2dMXCKvWR8epCHjTwloiRXFmJmA9-eOjEACyRYuAJ6ciPRkZzfC4LY0SC4ctoOKHUcel9MwZNQv0dBqzbmtoBDcqihtnV2NQ8~UZXjzJQkpd~3zB18OtmbeKlCqVm-9K4QXj-YWCk65b5PgpyOLwLK-FqNr5h6C0vc8grOFlIB6jt7atr6oP4AnEZvfBYjrscdMj8znXFYUTL6JRYba1fz9Cn-SzzsdrcqXuVnB9xT~tEd2sGr4B0L2Y1VM76Bjbt49bEMAdfR8okigfcI1-2xyaa6s2me2PnUq1jpnhfZg9fKgtyvBXWSfuA__",
//   location: "City Light Town, Surat",
//   openingStatus: "Open Now",
//   openingTime: "7:00 AM",
//   closingTime: "11:00 PM",
//   averageCost: "150rs per person",
//   foods: {
//     "Hot Coffee": [
//       {
//         foodId: "f28",
//         foodImage: "https://example.com/hot-cappuccino.jpg",
//         title: "Hot Cappuccino",
//         subtitle: "Rich and Creamy Cappuccino.",
//         price: 120,
//       },
//       // Add more hot coffee items
//     ],
//     "Iced Coffee": [
//       {
//         foodId: "f29",
//         foodImage: "https://example.com/iced-mocha.jpg",
//         title: "Iced Mocha",
//         subtitle: "Chilled Mocha with Espresso and Chocolate.",
//         price: 150,
//       },
//     ],
//     "Hot Tea": [
//       {
//         foodId: "f30",
//         foodImage: "https://example.com/hot-green-tea.jpg",
//         title: "Hot Green Tea",
//         subtitle: "Refreshing Green Tea.",
//         price: 100,
//       },
//     ],
//     "Iced Tea": [
//       {
//         foodId: "f31",
//         foodImage: "https://example.com/iced-lemon-tea.jpg",
//         title: "Iced Lemon Tea",
//         subtitle: "Cool and Citrusy Lemon Tea.",
//         price: 120,
//       },
//       // Add more iced tea items
//     ],
//     Snacks: [
//       {
//         foodId: "f32",
//         foodImage: "https://example.com/panini-sandwich.jpg",
//         title: "Panini Sandwich",
//         subtitle: "Grilled Sandwich with Cheese and Veggies.",
//         price: 80,
//       },
//       // Add more snack items
//     ],
//     // Add more categories as needed
//   },
// },
// {
//   id: "s7",
//   shopName: "Malhan Dosa",
//   shopDescription: "South Indian Food, Dosas, Idlis",
//   shopLogo:
//     "https://cdn.dribbble.com/users/963818/screenshots/4168355/media/060fc021ae18c1c471aaeb33c47ae5dd.jpg",
//   location: "Varachha Road, Surat",
//   openingStatus: "Open Now",
//   openingTime: "8:00 AM",
//   closingTime: "10:00 PM",
//   averageCost: "100rs per person",
//   foods: {
//     Dosas: [
//       {
//         foodId: "f33",
//         foodImage: "https://example.com/masala-dosa.jpg",
//         title: "Masala Dosa",
//         subtitle: "Crispy Dosa with Potato Masala.",
//         price: 50,
//       },
//     ],
//     Idlis: [
//       {
//         foodId: "f34",
//         foodImage: "https://example.com/plain-idli.jpg",
//         title: "Plain Idli",
//         subtitle: "Soft and Fluffy Steamed Idli.",
//         price: 40,
//       },
//       // Add more idli items
//     ],
//     "Vada Sambhar": [
//       {
//         foodId: "f35",
//         foodImage: "https://example.com/vada-sambhar.jpg",
//         title: "Vada Sambhar",
//         subtitle: "Crispy Vada with Spicy Sambar.",
//         price: 60,
//       },
//       // Add more vada sambhar items
//     ],
//     "Masala Dosa": [
//       {
//         foodId: "f36",
//         foodImage: "https://example.com/onion-dosa.jpg",
//         title: "Onion Dosa",
//         subtitle: "Dosa with Spicy Onion Topping.",
//         price: 60,
//       },
//       // Add more masala dosa items
//     ],
//     // Add more categories as needed
//   },
// },
// {
//   id: "s8",
//   shopName: "Tea Post",
//   shopDescription: "Tea, Snacks, Beverages",
//   shopLogo:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-hwKIIiI9X591s4kObsInBbjh6YGhIdB5jmTAH5w_-kr3G6R-sVtRP0MxuIWda7vy1k&usqp=CAU",
//   location: "Ghod Dod Road, Surat",
//   openingStatus: "Open Now",
//   openingTime: "7:30 AM",
//   closingTime: "11:00 PM",
//   averageCost: "80rs per person",
//   foods: {
//     "Hot Tea": [
//       {
//         foodId: "f37",
//         foodImage: "https://example.com/masala-tea.jpg",
//         title: "Masala Tea",
//         subtitle: "Spiced Tea with Milk.",
//         price: 20,
//       },
//       // Add more hot tea items
//     ],
//     "Iced Tea": [
//       {
//         foodId: "f38",
//         foodImage: "https://example.com/peach-iced-tea.jpg",
//         title: "Peach Iced Tea",
//         subtitle: "Refreshing Iced Tea with Peach Flavor.",
//         price: 30,
//       },
//       // Add more iced tea items
//     ],
//     Snacks: [
//       {
//         foodId: "f39",
//         foodImage: "https://example.com/kachori.jpg",
//         title: "Kachori",
//         subtitle: "Crispy and Spicy Fried Snack.",
//         price: 15,
//       },
//       // Add more snack items
//     ],
//     Beverages: [
//       {
//         foodId: "f40",
//         foodImage: "https://example.com/cold-coffee.jpg",
//         title: "Cold Coffee",
//         subtitle: "Chilled Coffee with Milk.",
//         price: 40,
//       },
//       // Add more beverage items
//     ],
//     // Add more categories as needed
//   },
// },
// {
//   id: "s8",
//   shopName: "Tea Post",
//   shopDescription: "Tea, Snacks, Beverages",
//   shopLogo:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-hwKIIiI9X591s4kObsInBbjh6YGhIdB5jmTAH5w_-kr3G6R-sVtRP0MxuIWda7vy1k&usqp=CAU",
//   location: "Ghod Dod Road, Surat",
//   openingStatus: "Open Now",
//   openingTime: "7:30 AM",
//   closingTime: "11:00 PM",
//   averageCost: "80rs per person",
//   foods: {
//     "Hot Tea": [
//       {
//         foodId: "f37",
//         foodImage: "https://example.com/masala-tea.jpg",
//         title: "Masala Tea",
//         subtitle: "Spiced Tea with Milk.",
//         price: 20,
//       },
//       // Add more hot tea items
//     ],
//     "Iced Tea": [
//       {
//         foodId: "f38",
//         foodImage: "https://example.com/peach-iced-tea.jpg",
//         title: "Peach Iced Tea",
//         subtitle: "Refreshing Iced Tea with Peach Flavor.",
//         price: 30,
//       },
//       // Add more iced tea items
//     ],
//     Snacks: [
//       {
//         foodId: "f39",
//         foodImage: "https://example.com/kachori.jpg",
//         title: "Kachori",
//         subtitle: "Crispy and Spicy Fried Snack.",
//         price: 15,
//       },
//       // Add more snack items
//     ],
//     Beverages: [
//       {
//         foodId: "f40",
//         foodImage: "https://example.com/cold-coffee.jpg",
//         title: "Cold Coffee",
//         subtitle: "Chilled Coffee with Milk.",
//         price: 40,
//       },
//       // Add more beverage items
//     ],
//     // Add more categories as needed
//   },
// },
// {
//   id: "s9",
//   shopName: "Subway",
//   shopDescription: "Sandwiches, Salads, Wraps",
//   shopLogo:
//     "https://i.pinimg.com/originals/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.png",
//   location: "Athwalines, Surat",
//   openingStatus: "Open Now",
//   openingTime: "10:00 AM",
//   closingTime: "10:00 PM",
//   averageCost: "250rs per person",
//   foods: {
//     "Subway Club": [
//       {
//         foodId: "f41",
//         foodImage: "https://example.com/subway-club-sandwich.jpg",
//         title: "Subway Club Sandwich",
//         subtitle: "Classic Sandwich with Turkey, Ham, and Roast Beef.",
//         price: 100,
//       },
//       // Add more Subway Club items
//     ],
//     "Veggie Delight": [
//       {
//         foodId: "f42",
//         foodImage: "https://example.com/veggie-delight-sandwich.jpg",
//         title: "Veggie Delight Sandwich",
//         subtitle: "Healthy Sandwich with Fresh Veggies.",
//         price: 90,
//       },
//       // Add more Veggie Delight items
//     ],
//     Wraps: [
//       {
//         foodId: "f43",
//         foodImage: "https://example.com/chicken-teriyaki-wrap.jpg",
//         title: "Chicken Teriyaki Wrap",
//         subtitle: "Grilled Chicken Wrap with Teriyaki Sauce.",
//         price: 120,
//       },
//       // Add more wrap items
//     ],
//     Salads: [
//       {
//         foodId: "f44",
//         foodImage: "https://example.com/chicken-caesar-salad.jpg",
//         title: "Chicken Caesar Salad",
//         subtitle: "Fresh Salad with Grilled Chicken.",
//         price: 130,
//       },
//       // Add more salad items
//     ],
//     // Add more categories as needed
//   },
// },
// ];
