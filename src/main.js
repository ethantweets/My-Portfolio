import "./style.css";
import data from "./data/data"; // Assuming you have a data file

// The large image you want on the left side
const leftImage = "./chewie/A1.jpg"; // Replace with your actual image path

// Your row data for images
const row1 = [
  "./cubeDrawings/analysis1.jpg",
  "./cubeDrawings/4.jpg",
  "./cubeDrawings/1.jpg",
  "./cubeDrawings/2.jpg",
];

const row2 = [
  "./cubeDrawings/analysis2.jpg",
  "./treeDrawings/8.jpg",
  "./treeDrawings/5.jpg",
  "./treeDrawings/3.jpg",
];

const row3 = [
  "./cubeDrawings/analysis3.jpg",
  "./chewie/7.jpg",
  "./chewie/6.jpg",
  "./chewie/9.jpg",
];

// New small images with their respective links
const smallImages = [
  { src: "./chewie/r1.webp", link: "https://pt.vecteezy.com/png/27182671-dois-branco-pombas-estao-voo-isolado-em-uma-transparente-fundo" },
  { src: "./chewie/r2.jpg", link: "https://example2.comhttps://theobjectivestandard.com/2023/02/the-terrifying-prescience-of-george-orwells-1984/" },
  { src: "./chewie/r3.png", link: "https://clipart-library.com/clip-art/cloud-transparent-png-7.htm#google_vignette" },
  { src: "./chewie/r4.png", link: "https://purepng.com/photo/8799/people-climbing" },
  { src: "./chewie/r5.png", link: "https://generationology.org/intergenerational-leadership-development-workshops/man-climbing/" },
  { src: "./chewie/r6.png", link: "https://www.pngkit.com/downpic/u2w7e6e6u2u2e6a9_plagueday-locust-swarm-png/" },
  { src: "./chewie/r7.png", link: "https://www.pngkey.com/maxpic/u2q8w7y3w7a9t4i1/" },
  { src: "./chewie/r8.png", link: "https://www.nicepng.com/downpng/u2q8w7y3q8o0o0r5_ftestickers-people-man-climbing-personas-escalando-png/" },
  { src: "./chewie/r9.webp", link: "https://www.vecteezy.com/png/48559869-the-skyline-of-a-bustling-city-depicted-in-a-striking-3d-style-emerges-prominently" },
  { src: "./chewie/r10.png", link: "https://www.pngall.com/ladder-png/download/50287/" }
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
    </section>

    <div id="main-content">
      <!-- Left side with a large static image -->
      <div id="left-side">
        <img src="${leftImage}" alt="Large Image on the Left Side" />
        <h2>Manifesto</h2>
        <p> Life is like a ladder, where each step represents a different stage of life. In childhood, we have freedom and innocence, but as we climb, society’s pressures grow stronger, pushing us have less freedom and to conform. The higher we go, the less room there is for individuality. We reject the idea that success is defined by how high we climb. In my opinion, true value lies in living freely, not according to society’s standards.
        The locusts represent societal pressure. At first, we barely notice them, but as we get older, they swarm around us, pushing us to fit in and live by other’s expectations. Conformity may feel like safety, but it’s a trap that takes away our authenticity. 
        At the bottom of the ladder is freedom, the simple, quiet space where we can truly be stress free. As we climb, the world becomes crowded and noisy, filled with the pressure to constantly achieve. We don’t need the chaos. We choose simplicity, peace, and authenticity over the noise of societal expectations.
        Sometimes taking a step back to analyze your choice, can mean everything.
        </p>
      </div>

      <!-- Right side with 3 rows of images and descriptions -->
      <div id="right-side">
      <h4>Analysis</h4>
        <div id="project-row">
          <div class="images">
            ${row1.map(
              (image, index) => `<img src="${image}" alt="row1-image${index + 1}" />`
            ).join("")}
          </div>
          <p>The ladder represents the journey through life, with each set of ladders representing a different phase. As you climb higher, the influence of society and expectations intensify. The bottom ladder, where childhood resides, symbolizes a time of innocence, curiosity, and even freedom. The further up the ladder you climb, the more you're forced to conform. Each higher ladder is more crowded more and more intense. The simplicity of childhood fades as you climb toward adulthood, expectations are at their peak. The top ladder, where adulthood is, are where individuality is most often lost due to the pressures of societal norms.</p>
        </div>

        <div id="project-row">
          <div class="images">
            ${row2.map(
              (image, index) => `<img src="${image}" alt="row2-image${index + 1}" />`
            ).join("")}
          </div>
          <p>As you grow older and climb the ladder, these pressures become more tangible, and the locust’s representing conformity start to swarm around, pushing you further into a mold that isn't truly your own. At first, you may not even notice the locusts. But as you move through life and societal pressures intensify, you begin to feel them more, consuming your thoughts, your choices, and your freedom. The hordes of locusts grow larger as you approach adulthood, making it harder to retain your individuality. This symbolizes the ever-growing motivation to have a simpler life, away from social conformity. The buildings represent the chaos that is life and the eyes give the feeling of a overwhelming sensation. Lastly the clock signifies time and how its only a matter of time until we have fully conformed.</p>
        </div>

        <div id="project-row">
          <div class="images">
            ${row3.map(
              (image, index) => `<img src="${image}" alt="row3-image${index + 1}" />`
            ).join("")}
          </div>
          <p>The dark, empty space, clouds, and doves at the bottom of the ladder symbolizes freedom. This is a place where one can exist without societal expectation. It's the childhood period, where there is room for exploration and creativity, something I value greatly. But as you climb the ladder, that space become increasingly more crowded which represents the bustling city of adulthood. The strive for a simple life is the desire to return to the dark, empty space at the bottom of the ladder. It’s a desire to reject the crowded, bright city above where conformity t live in the simplicity of thrives. It's about finding contentment without the need for validation from others, choosing peace over the noise of societal expectations.</p>
        </div>
      </div>
    </div>

    <!-- New Row of Small Images -->
    <h3>Image Sources</h3>
    <div id="small-images-row">
      ${smallImages.map(
        (image) => `
          <a href="${image.link}" target="_blank">
            <img src="${image.src}" alt="Small Image" />
          </a>
        `
      ).join("")}
    </div>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;

/*
import "./style.css";
import data from "./data/data"; // Assuming you have a data file

// The large image you want on the left side
const leftImage = "./chewie/A1.jpg"; // Replace with your actual image path

// Your row data for images
const row1 = [
  "./cubeDrawings/analysis1.jpg",
  "./cubeDrawings/4.jpg",
  "./cubeDrawings/1.jpg",
  "./cubeDrawings/2.jpg",
];

const row2 = [
  "./cubeDrawings/analysis2.jpg",
  "./treeDrawings/8.jpg",
  "./treeDrawings/5.jpg",
  "./treeDrawings/3.jpg",
];

const row3 = [
  "./cubeDrawings/analysis3.jpg",
  "./chewie/7.jpg",
  "./chewie/6.jpg",
  "./chewie/9.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <div id="main-content">
      <!-- Left side with a large static image -->
      <div id="left-side">
        <img src="${leftImage}" alt="Large Image on the Left Side" />
      </div>

      <!-- Right side with 3 rows of images and descriptions -->
      <div id="right-side">
        <div id="project-row">
          
          <div class="images">
            ${row1.map(
              (image, index) => `<img src="${image}" alt="row1-image${index + 1}" />`
            ).join("")}
          </div>
          <p>The ladder represents the journey through life, with each set of ladders representing a different phase. As you climb higher, the influence of society and expectations intensify. The bottom ladder, where childhood resides, symbolizes a time of innocence, curiosity, and even freedom. The further up the ladder you climb, the more you're forced to conform. Each higher ladder is more crowded more and more intense. The simplicity of childhood fades as you climb toward adulthood, expectations are at their peak. The top ladder, where adulthood is, are where individuality is most often lost due to the pressures of societal norms.</p>
        </div>

        <div id="project-row">
          
          <div class="images">
            ${row2.map(
              (image, index) => `<img src="${image}" alt="row2-image${index + 1}" />`
            ).join("")}
          </div>
          <p>As you grow older and climb the ladder, these pressures become more tangible, and the locust’s representing conformity start to swarm around, pushing you further into a mold that isn't truly your own. At first, you may not even notice the locusts. But as you move through life and societal pressures intensify, you begin to feel them more, consuming your thoughts, your choices, and your freedom. The hordes of locusts grow larger as you approach adulthood, making it harder to retain your individuality. This symbolizes the ever-growing motivation to have a simpler life, away from social conformity. The buildings represent the chaos that is life and the eyes give the feeling of a overwhelming sensation. Lastly the clock signifies time and how its only a matter of time until we have fully conformed.</p>
        </div>

        <div id="project-row">
          
          <div class="images">
            ${row3.map(
              (image, index) => `<img src="${image}" alt="row3-image${index + 1}" />`
            ).join("")}
          </div>
          <p>The dark, empty space, clouds, and doves at the bottom of the ladder symbolizes freedom. This is a place where one can exist without societal expectation. It's the childhood period, where there is room for exploration and creativity, something I value greatly. But as you climb the ladder, that space become increasingly more crowded which represents the bustling city of adulthood. The strive for a simple life is the desire to return to the dark, empty space at the bottom of the ladder. It’s a desire to reject the crowded, bright city above where conformity t live in the simplicity of thrives. It's about finding contentment without the need for validation from others, choosing peace over the noise of societal expectations.</p>
        </div>
      </div>
    </div>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;
/*

/*

import "./style.css";
import data from "./data/data"; // Assuming you have a data file

// Your row data for images
const row1 = [
  "./cubeDrawings/analysis1.jpg",
  "./cubeDrawings/4.jpg",
  "./cubeDrawings/1.jpg",
  "./cubeDrawings/2.jpg",
];

const row2 = [
  "./treeDrawings/analysis2.jpg",
  "./treeDrawings/8.jpg",
  "./treeDrawings/5.jpg",
  "./treeDrawings/3.jpg",
];

const row3 = [
  "./chewie/analysis3.jpg",
  "./chewie/7.jpg",
  "./chewie/6.jpg",
  "./chewie/9.jpg",
];


document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Model 1
        <div class="three-model">
          <div id="model1"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${row1
              .map(
                (row1, index) => `<img src="${row1}" alt="row1${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">The ladder represents the journey through life, with each set of ladders representing a different phase. As you climb higher, the influence of society and expectations intensify. The bottom ladder, where childhood resides, symbolizes a time of innocence, curiosity, and even freedom. The further up the ladder you climb, the more you're forced to conform. Each higher ladder is more crowded more and more intense. The simplicity of childhood fades as you climb toward adulthood, expectations are at their peak. The top ladder, where adulthood is, are where individuality is most often lost due to the pressures of societal norms.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${row2
              .map(
                (row2, index) =>
                  `<img src="${row2}" alt="row2${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">As you grow older and climb the ladder, these pressures become more tangible, and the locusts representing conformity start to swarm around, pushing you further into a mold that isn't truly your own. At first, you may not even notice the locusts. But as you move through life and societal pressures intensify, you begin to feel them more, consuming your thoughts, your choices, and your freedom. The hordes of locusts grow larger as you approach adulthood, making it harder to retain your individuality. This symbolizes the ever-growing motivation to have a simpler life, away from social conformity. The buildings represent the chaos that is life and the eyes give the feeling of a overwhelming sensation. Lastly the clock signifies time and how its only a matter of time until we have fully conformed.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${row3
              .map(
                (row3, index) => `<img src="${row3}" alt="row3${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">The dark, empty space, clouds, and doves at the bottom of the ladder symbolizes freedom. This is a place where one can exist without societal expectation. It's the childhood period, where there is room for exploration and creativity, something I value greatly. But as you climb the ladder, that space become increasingly more crowded which represents the bustling city of adulthood. The strive for a simple life is the desire to return to the dark, empty space at the bottom of the ladder. It’s a desire to reject the crowded, bright city above where conformity t live in the simplicity of thrives. It's about finding contentment without the need for validation from others, choosing peace over the noise of societal expectations.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/A1.jpg");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
*/