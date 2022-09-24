import travelerPers from "../../src/traveler_perspective_adDetail.png";
import gradOne from "../../src/grad1ss.png";
import ecommerceReact from "../../src/react-ecommerce-app-ss.png";

const ProjectCardData = [
  {
    imgsrc: travelerPers,
    title: "Local Guide Travel App",
    text: "It's an app that connects travelers and local people. If you want to visit a new city, why not be guided by the locals who know the place better? You can search for advertisements using filters and apply the ad you want, after that you can get in contact with other users via the chat system built into the app. Technologies used: Node.js, Socket.io, mongoDB, Express.js, React, Firebase Auth, Javascript(ES6), HTML5, CSS3, MaterialUI, SemanticUI, Bootstrap.",
    view: "https://www.youtube.com/watch?v=MetOS45MqB4",
    source: "https://github.com/burakS-cloud/Local-Guide",
  },
  {
    imgsrc: ecommerceReact,
    title: "Basic Ecommerce App w/ React.js",
    text: "This is an app that I've built during the 'techcareer.net's React Bootcamp which started on March 1st 2022 and it lasted 5 weeks. This bootcamp was my first introduction to React. I was one of the 23 elected students out of 1700+ applicants. Thanks to this bootcamp, I've learned about React hooks, state management with Context API and CRUD operations as well as working with API's. Completion certificate can be seen on my Linkedin profile.",
    view: "https://www.youtube.com/watch?v=QJRd68sHoBE",
    source:
      "https://github.com/burakS-cloud/techcareer.net-React-Bootcamp-Ecommerce/tree/master/ecommerce",
  },
  {
    imgsrc: gradOne,
    title: "HealthCare Hospital App",
    text: "This is a web application for an hospital. It has authentication, appointment creation functionality and it has authorization, meaning there are some things only authorized users, namely doctors can do. Doctors and as well as users can cancel an appointment. Technologies used: Node.js, mongoDB, Express.js, Ejs Templating Engine, HTML5, CSS3, Bootstrap, Passport.js (Auth).",
    view: "https://www.youtube.com/watch?v=oaeKCy9QhKc",
    source:
      "https://github.com/burakS-cloud/HealthCare-Web-App-Refactored/tree/master",
  },
];

export default ProjectCardData;
