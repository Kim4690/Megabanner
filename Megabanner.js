(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
  <div class="banner-wrapper">

    <div class="banner">

      <div class="banner-bg"></div>

      <div class="banner-content">

        <div class="big-text">VIDEN OM</div>
        <div class="big-text-static">VIDEN OM</div>

        <div class="guide-text">
          Vi har 15 fagsektioner med nyheder, artikler og virksomheder.
        </div>

        <div class="cta">
          Se alle fagsektionerne under Viden om, der er vist under BygTek logoet
        </div>

        <div class="fake-dropdown">
          <div class="dropdown-label">Se din fagsektion her:</div>
          <div class="dropdown-header">VIDEN OM ☰</div>

          <ul class="dropdown-list">
            <li>TAG</li>
            <li>FACADER</li>
            <li>INDEKLIMA</li>
            <li>ENTREPRENØR</li>
            <li>ISOLERING</li>
            <li>TRÆ</li>
            <li>VVS</li>
            <li>KLOAK</li>
            <li>SE ØVRIGE UNDER</li>
            <li>VIDEN OM</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  // === CSS ===
  var style = document.createElement("style");
  style.innerHTML = `

  /* WRAPPER = RESPONSIV */
  .banner-wrapper {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .banner {
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 600;
    overflow: hidden;
    font-family: Arial;
  }

  .banner-bg {
    position: absolute;
    inset: 0;
    background: url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') right center / cover no-repeat;
  }

  .banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,60,120,0.65),
      rgba(0,90,160,0.45),
      rgba(0,120,200,0.15),
      transparent
    );
  }

  .banner-content {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  /* 🔥 RESPONSIV TYPO */
  .big-text {
    position: absolute;
    left: 6%;
    top: 42%;
    transform: translateY(-50%) scale(0.2);
    font-size: clamp(60px, 10vw, 180px);
    font-weight: 800;
    color: #ffcc00;

    animation: zoomText 3s forwards;
  }

  @keyframes zoomText {
    0% { transform: translateY(-50%) scale(0.2); opacity: 0; }
    40% { transform: translateY(-50%) scale(1.2); opacity: 1; }
    100% { 
      transform: translateY(-50%) scale(1);
      color: rgba(255,255,255,0.08);
    }
  }

  .big-text-static {
    position: absolute;
    left: 14%;
    top: 65%;
    transform: translateY(-50%);
    font-size: clamp(40px, 6vw, 120px);
    color: rgba(255,255,255,0.05);
  }

  .guide-text {
    position: absolute;
    left: 6%;
    bottom: 30%;
    color: #fff;
    font-size: clamp(14px, 1.6vw, 26px);
    max-width: 40%;
  }

  .cta {
    position: absolute;
    left: 6%;
    bottom: 10%;
    background: #ffcc00;
    color: #000;
    padding: 12px 18px;
    font-weight: 700;
    font-size: clamp(12px, 1vw, 16px);
    max-width: 40%;
  }

  /* DROPDOWN */
  .fake-dropdown {
    position: absolute;
    top: 30%;
    right: 6%;
    width: clamp(180px, 18vw, 280px);
  }

  .dropdown-label {
    color: #003f7a;
    font-size: clamp(10px, 1vw, 14px);
    margin-bottom: 6px;
  }

  .dropdown-header {
    background: #e5e5e5;
    padding: 10px;
    font-size: clamp(10px, 1vw, 14px);
  }

  .dropdown-list li {
    background: #f2f2f2;
    padding: 8px;
    font-size: clamp(10px, 1vw, 14px);
    display: none;
  }

  /* 📱 MOBIL */
  @media (max-width: 768px) {

    .fake-dropdown {
      display: none; /* dropdown væk på mobil */
    }

    .guide-text {
      max-width: 80%;
      bottom: 20%;
    }

    .cta {
      bottom: 8%;
    }

  }

  `;
  document.head.appendChild(style);

  // === DROPDOWN LOGIK ===
  var items = document.querySelectorAll('.dropdown-list li');
  var index = 0;
  var direction = "down";

  function runDropdown() {

    if (direction === "down") {
      if (index < items.length) {
        items[index].style.display = "block";
        index++;
      } else {
        direction = "up";
      }
    } else {
      if (index > 0) {
        index--;
        items[index].style.display = "none";
      } else {
        direction = "down";
      }
    }
  }

  setTimeout(function () {
    setInterval(runDropdown, 500);
  }, 3000);

})();
