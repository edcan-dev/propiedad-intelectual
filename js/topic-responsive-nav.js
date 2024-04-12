const dns = window.location.origin;

document.body.innerHTML += `
<button id="nav-button" class="btn btn-lg btn-lg nav-button bg-blue-apple">
  <i class="fa fa-bars color-light"></i>
</button>
<section class="section-nav">
<h4>Contenidos:</h4>
  <nav>
    <ul> Introducción </ul>
    
    <button class="accordion"> <b>Unidad 1</b></button>
    <div class="panel">
      <ul>
        <li class="tema-li-element"><a href="${ dns }/1.1/tema1.1.html"><b>Tema 1.1</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.1/tema1.1.1.html">Subtema 1.1.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.1/tema1.1.2.html">Subtema 1.1.2</a></li>

        <li class="tema-li-element"><a href="${ dns }/1.2/tema1.2.html"><b>Tema 1.2</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.2/tema1.2.1.html">Subtema 1.2.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.2/tema1.2.2.html">Subtema 1.2.2</a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.2/tema1.2.3.html">Subtema 1.2.3</a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.2/tema1.2.4.html">Subtema 1.2.4</a></li>
        <li class="subtema-li-element"><a href="${ dns }/1.2/tema1.2.5.html">Subtema 1.2.5</a></li>
      </ul>
    </div>
    <button class="accordion"> <b>Unidad 2</b></button>
    <div class="panel">
      <ul>
        <li class="tema-li-element"><a href="${ dns }/2.1/tema2.1.html"><b>Tema 2.1</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.1/tema2.1.2.html">Subtema 2.1.2</a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.1/tema2.1.3.html">Subtema 2.1.3</a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.1/tema2.1.4.html">Subtema 2.1.4</a></li>

        <li class="tema-li-element"><a href="${ dns }/2.2/tema2.2.html"><b>Tema 2.2</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.2/tema2.2.1.html">Subtema 2.2.1</a></li>
  
        <li class="tema-li-element"><a href="${ dns }/2.3/tema2.3.html"><b>Tema 2.3</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.3/tema2.3.1.html">Subtema 2.3.1</a></li>
        <li class="tema-li-element"><a href="${ dns }/2.4/tema2.4.html"><b>Tema 2.4</b></a></li>
  
        <li class="tema-li-element"><a href="${ dns }/2.5/tema2.5.html"><b>Tema 2.5</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.5/tema2.5.1.html">Subtema 2.5.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/2.5/tema2.5.2.html">Subtema 2.5.2</a></li>
      </ul>
    </div>
    <button class="accordion"> <b>Unidad 3</b></button>
    <div class="panel">
      <ul>
        <li class="tema-li-element"><a href="${ dns }/3.1/tema3.1.html"><b>Tema 3.1</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.1/tema.3.1.1.html">Subtema 3.1.1</a></li>
        <li class="tema-li-element"><a href="${ dns }/3.2/tema3.2.html"><b> Tema 3.2</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.1.html"> Subtema 3.2.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.2.html"> Subtema 3.2.2</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.3.html"> Subtema 3.2.3</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.4.html"> Subtema 3.2.4</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.5.html"> Subtema 3.2.5</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.6.html"> Subtema 3.2.6</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.7.html"> Subtema 3.2.7</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.8.html"> Subtema 3.2.8</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.2/tema3.2.9.html"> Subtema 3.2.9</a></li>
        <li class="tema-li-element"><a href="${ dns }/3.3/tema3.3.html"><b> Tema 3.3</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.3/tema3.3.1.html"> Subtema 3.3.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.3/tema3.3.2.html"> Subtema 3.3.2</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.3/tema3.3.3.html"> Subtema 3.3.3</a></li>
  
        <li class="tema-li-element"><a href="${ dns }/3.4/tema3.4.html"><b> Tema 3.4</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.4/tema3.4.1.html"> Subtema 3.4.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.4/tema3.4.2.html"> Subtema 3.4.2</a></li>
        <li class="tema-li-element"><a href="${ dns }/3.5/tema3.5.html"><b> Tema 3.5</b></a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.5/tema3.5.1.html"> Subtema 3.5.1</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.5/tema3.5.2.html"> Subtema 3.5.2</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.5/tema3.5.3.html"> Subtema 3.5.3</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.5/tema3.5.4.html"> Subtema 3.5.4</a></li>
        <li class="subtema-li-element"><a href="${ dns }/3.5/tema3.5.5.html"> Subtema 3.5.5</a></li>
      </ul>
    </div>
    
    <button class="accordion"><b>Unidad 4</b></button>
      <div class="panel">
        <ul>
          <li class="tema-li-element"><a href="${ dns }/4.1/tema4.1.html"><b>Tema 4.1</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.1/tema4.1.1.html">Subtema 4.1.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.1/tema4.1.2.html">Subtema 4.1.2</a></li>
          <li class="tema-li-element"><a href="${ dns }/4.2/tema4.2.html"><b>Tema 4.2</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.2/tema4.2.1.html">Subtema 4.2.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.2/tema4.2.2.html">Subtema 4.2.2</a></li>
          <li class="tema-li-element"><a href="${ dns }/4.3/tema4.3.html"><b>Tema 4.3</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.3/tema4.3.1.html">Subtema 4.3.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.3/tema4.3.2.html">Subtema 4.3.2</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.3/tema4.3.3.html">Subtema 4.3.3</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.3/tema4.3.4.html">Subtema 4.3.4</a></li>
          <li class="subtema-li-element"><a href="${ dns }/4.3/tema4.3.5.html">Subtema 4.3.5</a></li>
        </ul>
      </div>
      <button class="accordion"><b>Unidad 5</b></button>
      <div class="panel">
        <ul>
          <li class="tema-li-element"><a href="${ dns }/5.1/tema5.1.html"><b>Tema 5.1</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.1/tema5.1.1.html">Subtema 5.1.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.1/tema5.1.2.html">Subtema 5.1.2</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.1/tema5.1.3.html">Subtema 5.1.3</a></li>
          <li class="tema-li-element"><a href="${ dns }/5.2/tema5.2.html"><b>Tema 5.2</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.2/tema5.2.1.html">Subtema 5.2.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.2/tema5.2.2.html">Subtema 5.2.2</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.2/tema5.2.3.html">Subtema 5.2.3</a></li>    
          <li class="tema-li-element"><a href="${ dns }/5.3/tema5.3.html"><b>Tema 5.3</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.3/tema5.3.1.html">Subtema 5.3.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.3/tema5.3.2.html">Subtema 5.3.2</a></li>
          <li class="tema-li-element"><a href="${ dns }/5.4/tema5.4.html"><b>Tema 5.4</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.4/tema5.4.1.html">Subtema 5.4.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.4/tema5.4.2.html">Subtema 5.4.2</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.4/tema5.4.3.html">Subtema 5.4.3</a></li>
          <li class="tema-li-element"><a href="${ dns }/5.5/tema5.5.html"><b>Tema 5.5</b></a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.5/tema5.5.1.html">Subtema 5.5.1</a></li>
          <li class="subtema-li-element"><a href="${ dns }/5.5/tema5.5.2.html">Subtema 5.5.2</a></li>
        </ul>
      </div>    
    </nav>    
  </section>`;

let hidden = true;

const responsiveNavButton = document.querySelector("#nav-button");
const navContainer = document.querySelector(".section-nav");

responsiveNavButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (!hidden) {
    navContainer.style.left = "-300px";
    hidden = true;
  } else {
    navContainer.style.left = "0px";
    hidden = false;
  }
});
