<div id="top"></div>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DantasticWebSolutions/carmine-sembra-brooklyn">
    <!-- <img src="src/assets/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h3 align="center">Carmine Sembra Brooklyn</h3>

  <p align="center">
    An event management company that will make you feel the joy they are spreading
    <br />
    <a href="https://carminesembrabrooklyn.it/" target="_blank">View Demo</a>
    ·
    <a href="mailto:gherasimciuc@icloud.com">Contact Me</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

# ![screenshot](src/assets/)

<!--  -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- BUILT WITH -->

### Built With

List of major frameworks/libraries used to bootstrap this project.

- [React](https://www.npmjs.com/package/react)
- [MongoDB]()
- [Express]()
- [Node.js]()
- [Redux]()
- [Axios]()
- [Bootstrap](https://www.npmjs.com/package/bootstrap)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Instructions on setting up this project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- Download and Intall Node v14.6+
- Install NPM
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the Repo
   ```sh
   git clone https://github.com/DantasticWebSolutions/carmine-sembra-brooklyn.git
   ```
2. Create a .env.local file in the root and paste the following
   ```sh
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = your mongodb uri
   JWT_SECRET = 'abc123'
   PAYPAL_CLIENT_ID = your paypal client id
   ```
3. Install Dependencies (frontend & backend)
   ```sh
   npm install
   cd frontend
   npm install
   ```
4. Start server and open project

   ```sh
   # Run frontend (:3000) & backend (:5000)
   npm run dev

   # Run backend only
   npm run server
   ```

5. Seed Database

   ```sh
   # Import data
   npm run data:import

   # Destroy data
   npm run data:destroy
   ```

   <p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Full featured shopping cart
- [x] Product reviews and ratings
- [x] Top products carousel
- [x] Product pagination
- [x] Product search feature
- [x] User profile with orders
- [x] Admin product management
- [x] Admin user management
- [x] Admin Order details page
- [x] Admin Photos page
- [x] Admin Events page
- [x] Mark orders as delivered option
- [x] Checkout process (shipping, payment method, etc)
- [x] Database seeder (products & users)
- [x] PayPal / credit card integration
- [ ] Stipe integration
- [ ] PWA use offline
- [ ] Book a table
- [ ] Sell a ticket
- [ ] Multi-language
  - [x] Italian
  - [ ] English
- [ ] Create Native App to be published to App Store and Google Play

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Dan Gherasimciuc
[@dangherasimciuc](https://www.linkedin.com/in/dangherasimciuc/) \
Send me an email at: [gherasimciuc@icloud.com](mailto:gherasimciuc@icloud.com) \
Project Link: [https://github.com/DantasticWebSolutions/carmine-sembra-brooklyn](https://github.com/DantasticWebSolutions/carmine-sembra-brooklyn)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

List of resources I find helpful and would like to give credit to:

- [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [React Router Dom](https://reactrouter.com/)
- [Netlify](https://www.netlify.com/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [ReactPaypalButton-v2]()
- [Swiper]()
- [Mongoose]()
- [Morgan]()
- [Multer]()
- [JsonWebTocken]()
- [DotEnv]()
- [Colors]()
- [Bcrypt]()
- [Concurrently]()
- [Nodemon]()

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/DantasticWebSolutions/weekly-planner/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dangherasimciuc/
