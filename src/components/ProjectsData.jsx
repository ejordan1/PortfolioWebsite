import React from "react";

function GetProjectsData() {
    return [
      {
        name: "OD.graphics",
        description: "Interactive physics-based graphics",
        coolImplementation: "This project is similar to SuperBalls, but made using a data-oriented design rather than object oriented. It groups the data by fields rather than objects. This is similar to the difference between SQL and an objected oriented database like Mongo. It is very fast to change the position of all the objects, because they are all in one table.",
        imgurl: "https://www.youtube.com/embed/ExuPPJv3Yo8?si=kEc-yxkdy_rj0vZY"
      },
      {
        name: "Pigeonatti",
        description: "Built during my 13th game jam, 2024 Global Game Jam. Unity Engine (C#), FMOD sound design.",
        coolImplementation: "How the text and animations are managed. I discovered it in a tutorial, and really liked it: the overall script of the project is stored in an array, and each dialog object has a list of visual actions that take place when it is triggered. The visual actions are very versitle, making the script the anchor for everything that is happening.",
        imgurl: "https://www.youtube.com/embed/G30D9uieDVU?si=BiGyOcN6ioQM94Cf"
      },
      {
        name: "Superballs",
        description: "Interactive-physics based graphics",
        coolImplementation: "This project implements a number of algebraic algorithms for controlling the movement of the balls. The best was the one to gradually bring the objects back to their shape, while the overall orientation of the shape is dynamically moving. Deployed at https://emersonjordan.itch.io/od",
        imgurl: "https://www.youtube.com/embed/CmIgM7eTjDw?si=MJ2EJFR1KZn1NfVD"
      },
      {
        name: "Ceramicat",
        description: "From global game jam 2019.",
        coolImplementation: "The cat's legs are not an animation, but based on a programatically controlled bone structure. I started with a tutorial to make a dynamically moving gecko, and then modified it for the cat.",
        imgurl: "https://www.youtube.com/embed/aXvHqFTzjDk?si=oTHRdPqbzQdJd8sv"
      },
    ];
  }

  export default GetProjectsData;

//   <a href="https://ibb.co/85mbwfj"><img src="https://i.ibb.co/DC1YFv7/Screenshot-2024-02-04-at-11-09-44-AM.png" alt="Screenshot-2024-02-04-at-11-09-44-AM" border="0"></a>