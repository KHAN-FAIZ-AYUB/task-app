import React from "react";
import Student from "./Student";

const people = [
  {
    _id: "65d4d36db6520b3725603fb7",
    index: 0,
    guid: "28364588-0856-49ee-bf45-94709cb55173",
    isActive: true,
    balance: "10000",
    age: 38,
    eyeColor: "red",
    name: "Sharon Bruce",
    gender: "female",
    company: "TERRAGO",
    email: "sharonbruce@terrago.com",
    phone: "+1 (855) 441-2737",
  },
  {
    _id: "65d4d36d5db53419e1394fb3",
    index: 1,
    guid: "8a8c864c-2341-490c-8a5e-4e54f905c850",
    isActive: false,
    balance: "200",
    age: 35,
    eyeColor: "green",
    name: "Audrey Little",
    gender: "female",
    company: "KIGGLE",
    email: "audreylittle@kiggle.com",
    phone: "+1 (853) 492-3811",
  },
  {
    _id: "65d4d36d8838f2464ca75fcb",
    index: 2,
    guid: "172f5945-09fd-4e5d-9ef9-722c7475a530",
    isActive: false,
    balance: "1244",
    age: 36,
    eyeColor: "blue",
    name: "Beth Henry",
    gender: "female",
    company: "DIGIQUE",
    email: "bethhenry@digique.com",
    phone: "+1 (892) 506-2215",
  },
  {
    _id: "65d4d36d4c92ec866b536bbd",
    index: 3,
    guid: "55e0a1e8-d44f-4851-a593-9a83016b32ff",
    isActive: false,
    balance: "30336",
    age: 30,
    eyeColor: "brown",
    name: "Dunlap Bentley",
    gender: "male",
    company: "ZIGGLES",
    email: "dunlapbentley@ziggles.com",
    phone: "+1 (836) 449-3875",
  },
  {
    _id: "65d4d36db78919e550c7c28f",
    index: 4,
    guid: "cf10e9bc-1cff-4d0f-983b-360af1995284",
    isActive: true,
    balance: "12587",
    age: 39,
    eyeColor: "orange",
    name: "Summers Morse",
    gender: "male",
    company: "SCHOOLIO",
    email: "summersmorse@schoolio.com",
    phone: "+1 (875) 531-2104",
  },
  {
    _id: "65d4d36d27fc15aa0f27f6de",
    index: 5,
    guid: "9b1e3b51-df39-4eaa-ba22-bc3e4fbb5a2c",
    isActive: true,
    balance: "498",
    age: 20,
    eyeColor: "blue",
    name: "Elinor Lang",
    gender: "female",
    company: "BULLJUICE",
    email: "elinorlang@bulljuice.com",
    phone: "+1 (899) 472-2379",
  },
  {
    _id: "65d4d36dd132fa7ebf393550",
    index: 6,
    guid: "c4f9e89c-22b2-4081-87d4-1ab7fd406baf",
    isActive: true,
    balance: "2633",
    age: 20,
    eyeColor: "blue",
    name: "Dillard Pittman",
    gender: "male",
    company: "EXODOC",
    email: "dillardpittman@exodoc.com",
    phone: "+1 (858) 513-2665",
  },
  {
    _id: "65d4d36d8f751ef2dc624647",
    index: 7,
    guid: "cf2050c3-1d4d-4e0e-9cbf-10597f137a6f",
    isActive: false,
    balance: "1698",
    age: 29,
    eyeColor: "green",
    name: "Lacey Cross",
    gender: "female",
    company: "MEDMEX",
    email: "laceycross@medmex.com",
    phone: "+1 (823) 435-3015",
  },
];

// console.log(Object.keys(people[0]));
const App = () => {
  return (
    <div>
      <h1>TEST REACT</h1>
      <Student people={people} />
    </div>
  );
};

export default App;
