export type FoodByWeatherApiType = {
  id: string;
  foodName: string;
  time: string;
  foodImageUrl: string;
};

export const FoodByWeatherApi: FoodByWeatherApiType[] = [
  {
    id: "fw1",
    foodName: "Vadapav",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdWRByu1jQUlFg7uQd75TqPpO2x9u4YVIMMhXz3FFiWelsIg-H-90b7KAAikb6LU2HuQmvsNFLdy8mBHkLJKgMmyfZDq-vIAhIWVKIu-8DfyGTVTU23pn9WAD5QKOkzO3lUTGzpQyiPoU67KzV-OsksWBzpzdr3n6D3AdW3q--Qso~jyf8NfiFWku8-cqoyXtPtEtnrlB55zFNoGMnNhIDLs-7J6Iqb4QoB5wmCCMfzZJLfApQ-6EJ9uAsQbXaKBMX~FOQ7rzjPzuMjMOZViJcG5ojaCSXigSfvuGgyGGIwbkFwhY9ZfoFT14yUEWwFpADCUNzaYKMEoXykgRj-BQQ__",
  },

  {
    id: "fw2",
    foodName: "Panipuri",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/7c1a/20b9/d3569903de67fe5b78d22a24a116afac?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ke5tYB~akdN2KZMUFUSPN7lTWqZJQwdWa0F3tFeQvsPBqu6cvJmXjdyFU5rn-CXkAqi-TOOiU5K3C8hC2g2HnbL9BEO6GEJPJcqxI~q97noXt8etzqC2Cy3P8ytS0BrMNxEZXgvMRSAX0y-G13QbkrRF7BHn1RNn6KMqbNdLXZohJCArqoxIeWqIor6z3cyQuRPYUryTqBC~2zNtNbk0qYJaUvHw9Nwh-DgiCX3whAKmMtuppnQ2~wcBjJh9eezaLjVs4HSenQoZaPiiHtnpJRWkSvS4fGQ-L-NDg7FF6DDXmgXXL1dQvJPKNXeHgSCaThIiVTZHIzN8BvF2xwd1yQ__",
  },
  {
    id: "fw3",
    foodName: "Pav Bhaji",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/1f89/1efe/e85951aa486be2b8e64d2934fef0a064?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTIh2Mnjihtu~R1sCHZTYXt2I4iqCe3P-iqbMlIcTqp8CQprn2GPkRNALi8xMy02ysYwvGJtx5tTIKNS~rQDOH8l~6hHU9aqiuZwFOHGmwXSkt3tk5MfRLimcdybD3JKRZV4rHumvLEC-tFVP7hDeU~zEi0VmRa~2se--fKsoCVRuxGD4qpeIGbcd938rnJbAmWgdpuH8WRXWISvdYNY2g~sbvjcl4NgAGCTfV6662e6C2I1w3V991vwBvJ28Qb5PRc9DW3X3KVQwBGEwZGG~XL36tpjX7gLaQWLtSalDrkmpRrQ2~8mHGgMian7oaHpZBEKpFrhR2lCQQBtka78BQ__",
  },

  {
    id: "fw4",
    foodName: "Ice-Cream",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/df62/8072/5b629f3f0237087b21c2603696c4c1b4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5~6Nv9rHDht3gFKgg5YNPdntOR0IebBGHxHE9rpAZC6O0KvGe1NPhCV50BXWzXRZzukb1-uMk7Hgn3rWBUaVDkVsHavAD8yOmH21nkFZFEeMv5H3YqRrteSbw8iP9~TisgBMbqIdCkNNbTfwD30Xab97rToombDdUEuuT8tMvRzwbDhDVMS6lWP6th34OMmIg~GGKOB5rxVpfcVYXIlPl6~i2wFCmhS2C7fUK1i9a-g4ODsSaTbJTDPpjmCOCxryoYqSqe7B-LuTQ~fl0ISltMwFM78e21PwDeuAb8nRG46BG4YAHBIFG43XDkFWjn7579OkrPS8nvL00Fy1adkgQ__",
  },
  {
    id: "fw5",
    foodName: "Sandwich",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/171f/1e79/17423c04f7fc2a454f20c6a0fc561139?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bOhpo3kWamjx8OIrtBWg0PcOk0GqkT07GYVQmQka6OKiqHKt6UDQObZLaTfsGaPpzLBgxnNY0Lzw0x2aFi2dg8o82mnGUUG6eegDrgbLnGkU~9ycFNIOmkT6h9gyRQJ6Yz2A9xuloznFRyBxv1nRR9LSDRLzm45Hdc9-jv8Yg7xEyQ5NRBX32PCUu-3ZTsqPaIGs2pRx0UD1tFw9Xp6sMIpyx0oEjvUuYlcjOPuh4mGZl6NMnCljxwDRoW0xAQimKt-az9xKZ3YlKYtPIqr6QUQIGk2ClRT741577G2boF4KSXu0Zm0udyrUJHyvh0PpyV17dcyzc38Q-5YlZJsY7A__",
  },
  {
    id: "fw6",
    foodName: "Pizza",
    time: "20 Min",
    foodImageUrl:
      "https://s3-alpha-sig.figma.com/img/bacd/72da/5ca60da26e39113cd5e3386593f3497b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MnlfZYePpOZJAFTU4EzcDdMhG0CVsM-67M9mIYoq~W5mb5SbRKQyjgnO78OnDA2qsvlYySb2E2A2S7dCQUnUVcvvlBddMa9Wdp6jgJ63YxCC3HziVrgAkDMEcbWPhao6hEYMk-OjMMwTJ6pVENyYLMuQoZ3uFCniFN9rD59iX0pV259hsbEpZGE-7gq~DP2~bssDKR5-A~rCbNf5-tDXFRuOVREmTlqSrcJGwaq8dWRFtRaLx4FmgbmpSqSy5Ha5ZEKfrc5Hx75hKEJpl15wrtMjs0OD4X~IdrsxtDbGeFT8oh5-pvwtSoNadiqD9zGo~hkc3Jv01x1zyqOFfmviCw__",
  },
  {
    id: "fw7",
    foodName: "Biryani",
    time: "30 Min",
    foodImageUrl:
      "https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate-n1z3gc9gJ8I",
  },
  {
    id: "fw8",
    foodName: "Samosa",
    time: "25 Min",
    foodImageUrl:
      "https://plus.unsplash.com/premium_photo-1695297515622-d0991a12efe3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "fw9",
    foodName: "Chole Bhature",
    time: "35 Min",
    foodImageUrl:
      "https://img.freepik.com/premium-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24973.jpg?w=740",
  },
  {
    id: "fw10",
    foodName: "Dosa",
    time: "25 Min",
    foodImageUrl:
      "https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?t=st=1708690189~exp=1708693789~hmac=69f58b6737c93e3d5c24089489b3b4a1b843110eb6b2427d806578e98588bc12&w=1380",
  },
  {
    id: "fw11",
    foodName: "Idli",
    time: "20 Min",
    foodImageUrl:
      "https://img.freepik.com/free-photo/baked-meatballs-chicken-fillet-tomato-sauce_2829-11139.jpg?t=st=1708690333~exp=1708693933~hmac=759b03bbebe0ed7b4ed9ea532426415a69e68cd5900c660e3b51973e79f23b8f&w=740",
  },
  {
    id: "fw12",
    foodName: "Pakora",
    time: "20 Min",
    foodImageUrl:
      "https://img.freepik.com/free-photo/side-view-snack-crunchy-deep-fried-snack-with-sauce-bread-table_141793-5100.jpg?t=st=1708690297~exp=1708693897~hmac=d6399f9b6e114692c052804ce6cf536b2ecf7215d811b0c4c6c0d6c01875f432&w=1380",
  },
  {
    id: "fw13",
    foodName: "Burger",
    time: "25 Min",
    foodImageUrl:
      "https://img.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg?t=st=1708690380~exp=1708693980~hmac=9abdf83b4ab65d3b932d298b00ce93303ab76b63c8b568794e612ca4ca646d47&w=1380",
  },
  {
    id: "fw14",
    foodName: "Pasta",
    time: "30 Min",
    foodImageUrl:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1708690400~exp=1708694000~hmac=9be0d7712e6665c3c485fc1f10f022cc66c49962af8860f93c32b000c9a67df6&w=1380",
  },

  //   {
  //     id: "fw15",
  //     foodName: "Fried Rice",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/fried_rice.jpg",
  //   },
  //   {
  //     id: "fw16",
  //     foodName: "Taco Salad",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/taco_salad.jpg",
  //   },
  //   {
  //     id: "fw17",
  //     foodName: "Shawarma",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/shawarma.jpg",
  //   },
  //   {
  //     id: "fw18",
  //     foodName: "Falafel",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/falafel.jpg",
  //   },
  //   {
  //     id: "fw19",
  //     foodName: "Hummus",
  //     time: "15 Min",
  //     foodImageUrl: "https://example.com/hummus.jpg",
  //   },
  //   {
  //     id: "fw20",
  //     foodName: "Lasagna",
  //     time: "40 Min",
  //     foodImageUrl: "https://example.com/lasagna.jpg",
  //   },
  //   {
  //     id: "fw21",
  //     foodName: "Sushi",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/sushi.jpg",
  //   },
  //   {
  //     id: "fw22",
  //     foodName: "Ramen",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/ramen.jpg",
  //   },
  //   {
  //     id: "fw23",
  //     foodName: "Pho",
  //     time: "35 Min",
  //     foodImageUrl: "https://example.com/pho.jpg",
  //   },
  //   {
  //     id: "fw24",
  //     foodName: "Pad Thai",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/pad_thai.jpg",
  //   },
  //   {
  //     id: "fw25",
  //     foodName: "Momo",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/momo.jpg",
  //   },
  //   {
  //     id: "fw26",
  //     foodName: "Noodles",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/noodles.jpg",
  //   },
  //   {
  //     id: "fw27",
  //     foodName: "Tacos",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/tacos.jpg",
  //   },
  //   {
  //     id: "fw28",
  //     foodName: "Burrito",
  //     time: "30 Min",
  //     foodImageUrl: "https://example.com/burrito.jpg",
  //   },
  //   {
  //     id: "fw29",
  //     foodName: "Quesadilla",
  //     time: "25 Min",
  //     foodImageUrl: "https://example.com/quesadilla.jpg",
  //   },
  //   {
  //     id: "fw30",
  //     foodName: "Hot Dog",
  //     time: "20 Min",
  //     foodImageUrl: "https://example.com/hot_dog.jpg",
  //   },
];
