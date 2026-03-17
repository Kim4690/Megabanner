(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
  <div class="banner">

    <div class="banner-bg"></div>

    <div class="banner-content">

      <div class="big-text">VIDEN OM</div>

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

    <!-- MODAL -->
    <div class="banner-modal" id="bannerModal">
      <div class="modal-content">

        <span class="close">&times;</span>

        <h2>Tak for din interesse</h2>

        <p>Du er meget velkommen til at kontakte:</p>

        <div class="contact-box">
          <strong>Kim Anker</strong><br>
          kim@odsgard.dk<br>
          26 25 51 22
        </div>

        <div class="modal-cta">GÅ VIDERE</div>

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
    cursor: pointer;
  }

  .banner-bg {
    position: absolute;
    inset: 0;
    background: url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/viden-om-bg.jpg') right center / cover no-repeat;
  }

  .banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,60,120,0.65) 0%,
      rgba(0,90,160,0.45) 20%,
      rgba(0,120,200,0.15) 35%,
      rgba(0,0,0,0) 50%
    );
    z-index: 1;
  }

  .banner-content {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  /* 🔥 VIDEN OM ANIMATION */
  .big-text {
    position: absolute;
    left: 6%;
    top: 50%;
    transform: translateY(-50%) scale(0.2);
    font-size: 140px;
    color: rgba(255,255,255,0.08);
    font-weight: 700;

    animation: zoomText 2.5s ease forwards;
  }

  @keyframes zoomText {
    0% { transform: translateY(-50%) scale(0.2); opacity: 0; }
    40% { transform: translateY(-50%) scale(0.75); opacity: 1; }
    70% { transform: translateY(-50%) scale(0.75); }
    100% { transform: translateY(-50%) scale(1); }
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
    top: 45%;
    right: 8%;
    transform: translateY(-50%);
    width: 280px;
  }

  .dropdown-label {
    color: #003f7a;
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .dropdown-header {
    background: #e5e5e5;
    padding: 12px;
    font-weight: 600;
    margin-top: 10px;
  }

  .dropdown-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dropdown-list li {
    background: #f2f2f2;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    opacity: 0;
    transform: translateY(-8px);

    animation: dropdownItem 14s infinite;
  }

  /* starter efter zoom */
  .dropdown-list li:nth-child(1) { animation-delay: 3.0s; }
  .dropdown-list li:nth-child(2) { animation-delay: 3.5s; }
  .dropdown-list li:nth-child(3) { animation-delay: 4.0s; }
  .dropdown-list li:nth-child(4) { animation-delay: 4.5s; }
  .dropdown-list li:nth-child(5) { animation-delay: 5.0s; }
  .dropdown-list li:nth-child(6) { animation-delay: 5.5s; }
  .dropdown-list li:nth-child(7) { animation-delay: 6.0s; }
  .dropdown-list li:nth-child(8) { animation-delay: 6.5s; }
  .dropdown-list li:nth-child(9) { animation-delay: 7.0s; }
  .dropdown-list li:nth-child(10) { animation-delay: 7.5s; }

  @keyframes dropdownItem {
    0% { opacity: 0; transform: translateY(-8px); }
    6% { opacity: 1; transform: translateY(0); }
    55% { opacity: 1; }
    70% { opacity: 0; transform: translateY(-8px); }
    100% { opacity: 0; }
  }

  .dropdown-list li:hover {
    background: #e6e6e6;
  }

  /* MODAL */
  .banner-modal {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: .3s;
    z-index: 10;
  }

  .banner-modal.active {
    opacity: 1;
    pointer-events: all;
  }

  .modal-content {
    background: #fff;
    padding: 30px;
    width: 320px;
    text-align: center;
    position: relative;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 12px;
    cursor: pointer;
  }

  .contact-box {
    background: #f2f2f2;
    padding: 10px;
    margin-top: 10px;
  }

  .modal-cta {
    margin-top: 20px;
    background: #007ac3;
    color: #fff;
    padding: 10px;
  }

  `;
  document.head.appendChild(style);

  // === LOGIK ===
  var banner = document.querySelector('.banner');
  var modal = document.getElementById('bannerModal');
  var closeBtn = document.querySelector('.close');
  var ctaBtn = document.querySelector('.modal-cta');

  var firstClick = false;

  banner.addEventListener('click', function (e) {
    if (!firstClick) {
      e.preventDefault();
      modal.classList.add('active');
      firstClick = true;
    }
  });

  closeBtn.onclick = function(e) {
    e.stopPropagation();
    modal.classList.remove('active');
    firstClick = false;
  };

  ctaBtn.onclick = function(e) {
    e.stopPropagation();
    window.open(clickUrl, "_blank");
  };

})();
