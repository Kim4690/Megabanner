(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
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
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  // === CSS ===
  var style = document.createElement("style");
  style.innerHTML = `

  .banner {
    position: relative;
    width: 1920px;
    height: 600px;
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

  /* 🔥 STOR VIDEN OM */
.big-text {
  position: absolute;
  left: 6%;
  top: 42%; /* 👈 rykket lidt op */
  transform: translateY(-50%) scale(0.2);
  font-size: 180px;
  font-weight: 800;
  color: #ffcc00;
  letter-spacing: 4px;

  animation: zoomText 3s ease forwards;
}

.big-text-static {
  position: absolute;
  left: 14%;
  top: 65%;
  transform: translateY(-50%);
  font-size: 120px;
  font-weight: 700;
  letter-spacing: 4px;
  color: rgba(255,255,255,0.05);
}
/* 🔥 animation som før */
@keyframes zoomText {

  0% {
    transform: translateY(-50%) scale(0.2);
    opacity: 0;
  }

  30% {
    transform: translateY(-50%) scale(1.3);
    opacity: 1;
    color: #ffcc00;
  }

  60% {
    transform: translateY(-50%) scale(1.3);
    color: #ffcc00;
  }

  100% {
    transform: translateY(-50%) scale(1);
    color: rgba(255,255,255,0.08);
  }
}

  @keyframes zoomText {
    0% { transform: translateY(-50%) scale(0.2); opacity: 0; }
    40% { transform: translateY(-50%) scale(1.2); opacity: 1; }
    70% { transform: translateY(-50%) scale(1.2); }
    100% { 
      transform: translateY(-50%) scale(1);
      color: rgba(255,255,255,0.08);
    }
  }

  .guide-text {
    position: absolute;
    left: 6%;
    bottom: 30%;
    color: #fff;
    font-size: 26px;
    max-width: 520px;
  }

  .cta {
    position: absolute;
    left: 6%;
    bottom: 10%;
    background: #ffcc00;
    color: #000;
    padding: 14px 20px;
    font-weight: 700;
    max-width: 420px;
  }

  /* DROPDOWN */
  .fake-dropdown {
    position: absolute;
    top: 20%;
    right: 8%;
    width: 280px;
  }

  .dropdown-label {
    color: #003f7a;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .dropdown-header {
    background: #e5e5e5;
    padding: 12px;
    margin-top: 10px;
  }

  .dropdown-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown-list li {
    background: #f2f2f2;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: none;
  }

  `;
  document.head.appendChild(style);

  // === DROPDOWN LOGIK (STEP-BY-STEP) ===
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

  // starter efter VIDEN OM animation
  setTimeout(function () {
    setInterval(runDropdown, 400); // tempo (justér her!)
  }, 3000);

})();
