<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Slider Builder for CSS Variables</title>
  <style>
    :root {
      --hue: 0;
      --sat: 100%;
      --lum: 50%;
      --alpha: 1;

      --color: hsla(var(--hue), var(--sat), var(--lum), var(--alpha));
      --blend-mode: normal;
    }

    body {
      display: flex;
      height: 100vh;
      margin: 0;
      padding: 0;

      background-image: url('https://picsum.photos/3000/3000');
      background-size: cover;
      background-position: center center;
      background-blend-mode: var(--blend-mode);
      transition: .5s ease background-color;
    }

    main {
      width: 100vw;
      max-width: 900px;
      margin: auto;
      height: 100vh;

      display: grid;
      grid-template-columns: auto min-content;
      align-items: start;
    }

    aside {
      margin: 2vmin;
      padding: 1em;
      background-color: rgba(0,0,0,.8);
      color: white;
      border-radius: .5em;

      display: grid;
      grid-template-columns: 9fr 1fr;
      align-items: center;
      grid-gap: 1em;
    }

    input {
      width: 100%;
    }

    section {
      width: 90vmin;
      height: 90vmin;
      margin: 2vmin;
      padding: 0.5em;
      border-radius: 0.5em;

      background-color: var(--color);

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 0.5em;

      transition: .5s ease all;

    }

    section div {
      position: relative;
      background-color: var(--color);
      background-image: url('https://picsum.photos/3000/3000');
      background-size: cover;
      background-position: center center;
    }
    section div::before {
      content: '';

      background: rgba(255,255,255, .5);
      padding: .2em;
      width: 100%;

      text-align: center;

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    div:nth-child(1) {
      background-blend-mode: normal;
    }
    div:nth-child(1)::before {
      content: 'normal';
    }

    div:nth-child(2) {
      background-blend-mode: multiply;
    }
    div:nth-child(2)::before {
      content: 'multiply';
    } 

    div:nth-child(3) {
      background-blend-mode: screen;
    }
    div:nth-child(3)::before {
      content: 'screen';
    }    

    div:nth-child(4) {
      background-blend-mode: overlay;
    }
    div:nth-child(4)::before {
      content: 'overlay';
    }

    div:nth-child(5) {
      background-blend-mode: darken;
    }
    div:nth-child(5)::before {
      content: 'darken';
    }

    div:nth-child(6) {
      background-blend-mode: lighten;
    }
    div:nth-child(6)::before {
      content: 'lighten';
    }

    div:nth-child(7) {
      background-blend-mode: color-dodge;
    }
    div:nth-child(7)::before {
      content: 'color-dodge';
    }

    div:nth-child(8) {
      background-blend-mode: color-burn;
    }
    div:nth-child(8)::before {
      content: 'color-burn';
    }

    div:nth-child(9) {
      background-blend-mode: hard-light;
    }
    div:nth-child(9)::before {
      content: 'hard-light';
    }

    div:nth-child(10) {
      background-blend-mode: soft-light;
    }
    div:nth-child(10)::before {
      content: 'soft-light';
    }

    div:nth-child(11) {
      background-blend-mode: difference;
    }
    div:nth-child(11)::before {
      content: 'difference';
    }

    div:nth-child(12) {
      background-blend-mode: exclusion;
    }
    div:nth-child(12)::before {
      content: 'exclusion';
    }

    div:nth-child(13) {
      background-blend-mode: hue;
    }
    div:nth-child(13)::before {
      content: 'hue';
    }

    div:nth-child(14) {
      background-blend-mode: saturation;
    }
    div:nth-child(14)::before {
      content: 'saturation';
    }

    div:nth-child(15) {
      background-blend-mode: color;
    }
    div:nth-child(15)::before {
      content: 'color';
    }

    div:nth-child(16) {
      background-blend-mode: luminosity;
    }
    div:nth-child(16)::before {
      content: 'luminosity';
    }


  </style>
</head>
<body>
  <main>
    <aside>
      <input id="hue" type="range" min="0" max="360" value="0">
      <output for="hue">0deg</output>
      <input id="sat" type="range" min="0" max="100" value="100">
      <output for="sat">100%</output>
      <input id="lum" type="range" min="0" max="100" value="50">
      <output for="lum">50%</output>
      <input id="alpha" type="range" step="0.01" min="0" max="1" value="1">
      <output for="alpha">1</output>
    </aside>
    <section id="mode-list">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </main>
  <script>
    const root = document.documentElement;
    const body = document.querySelector('body');
    const modes = document.querySelector('#mode-list');
    const aside = document.querySelector('aside');

    const hue = document.querySelector('#hue');
    const sat = document.querySelector('#sat');
    const lum = document.querySelector('#lum');
    const alpha = document.querySelector('#alpha');

    const hueOut = document.querySelector('output[for=hue]');
    const satOut = document.querySelector('output[for=sat]');
    const lumOut = document.querySelector('output[for=lum]');
    const alphaOut = document.querySelector('output[for=alpha]');

    hue.addEventListener('input', function(event) {
      hueOut.value = hue.value + 'deg';
      root.style.setProperty("--hue",hue.value);
    })
    sat.addEventListener('input', function(event) {
      satOut.value = sat.value + '%';
      root.style.setProperty("--sat",sat.value + '%');
    })
    lum.addEventListener('input', function(event) {
      lumOut.value = lum.value + '%';
      root.style.setProperty("--lum",lum.value + '%');
    })
    alpha.addEventListener('input', function(event) {
      alphaOut.value = alpha.value;
      root.style.setProperty("--alpha",alpha.value);
    })
    
    modes.addEventListener('click', function(event){
      body.style.setProperty('--blend-mode', getComputedStyle(event.target).backgroundBlendMode);
      body.style.setProperty('background-color', 'var(--color)');
      modes.style.setProperty('visibility','hidden');
      modes.style.setProperty('opacity',0);
      body.style.setProperty('transition','none');
      event.stopPropagation();
    })

    aside.addEventListener('click', function(event){
      event.stopPropagation();
    })

    body.addEventListener('click', function(event){
      body.style.setProperty('transition','.5s ease background-color');
      body.style.setProperty('background-color', 'transparent');
      modes.style.setProperty('visibility','visible');
      modes.style.setProperty('opacity',1);
    })
  </script>
</body>
</html>