(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
  <div class="banner">

    <div class="banner-bg"></div>

    <div class="banner-content">

      <div class="big-text">VIDEN OM</div>

      <div class="guide-text">
        Vi har 15 fagsektioner med nyheder, artikler og virksomheder. Sikkert også en til dig
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
          <li><strong>SE ØVRIGE UNDER</strong></li>
          <li><strong>VIDEN OM</strong></li>
        </ul>
      </div>

    </div>

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
    background: url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') right center / cover no-repeat;
  }

  /* BLÅ OVERLAY */
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

  .big-text {
    position: absolute;
    left: 6%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 140px;
    color: rgba(255,255,255,0.08);
    font-weight: 700;
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

  /* MØRKERE BLÅ */
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

  /* 👇 DEN VIGTIGE DEL */
  .dropdown-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dropdown-list li {
  background: #f2f2f2;/* CONTAINER */
.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ITEMS */
.dropdown-list li {
  background: #f2f2f2;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  opacity: 0;
  transform: translateY(-6px);

  animation: dropdownItem 12s infinite;
}

/* 🔽 ÅBNER (top → bund, langsommere) */
.dropdown-list li:nth-child(1) { animation-delay: 0.5s; }
.dropdown-list li:nth-child(2) { animation-delay: 1.0s; }
.dropdown-list li:nth-child(3) { animation-delay: 1.5s; }
.dropdown-list li:nth-child(4) { animation-delay: 2.0s; }
.dropdown-list li:nth-child(5) { animation-delay: 2.5s; }
.dropdown-list li:nth-child(6) { animation-delay: 3.0s; }
.dropdown-list li:nth-child(7) { animation-delay: 3.5s; }
.dropdown-list li:nth-child(8) { animation-delay: 4.0s; }
.dropdown-list li:nth-child(9) { animation-delay: 4.5s; }
.dropdown-list li:nth-child(10) { animation-delay: 5.0s; }

/* 🔥 ANIMATION */
@keyframes dropdownItem {

  /* skjult */
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }

  /* falder ned */
  6% {
    opacity: 1;
    transform: translateY(0);
  }

  /* står stille */
  60% {
    opacity: 1;
  }

  /* 🔼 LUKKER (bund → top via delay systemet) */
  80% {
    opacity: 0;
    transform: translateY(-6px);
  }

  100% {
    opacity: 0;
  }
}
  padding: 10px;
  border-bottom: 1px solid #ddd;

  opacity: 0;
  transform: translateY(-8px);

  animation: dropItem 10s infinite;
}

/* ÅBNER (top → bund) */
.dropdown-list li:nth-child(1) { animation-delay: 0.3s; }
.dropdown-list li:nth-child(2) { animation-delay: 0.6s; }
.dropdown-list li:nth-child(3) { animation-delay: 0.9s; }
.dropdown-list li:nth-child(4) { animation-delay: 1.2s; }
.dropdown-list li:nth-child(5) { animation-delay: 1.5s; }
.dropdown-list li:nth-child(6) { animation-delay: 1.8s; }
.dropdown-list li:nth-child(7) { animation-delay: 2.1s; }
.dropdown-list li:nth-child(8) { animation-delay: 2.4s; }
.dropdown-list li:nth-child(9) { animation-delay: 2.7s; }
.dropdown-list li:nth-child(10) { animation-delay: 3.0s; }

/* NY ANIMATION */
@keyframes dropItem {

  0% {
    opacity: 0;
    transform: translateY(-8px);
  }

  8% {
    opacity: 1;
    transform: translateY(0);
  }

  /* 👇 HER ER DEN DU LEDER EFTER */
  60% {
    opacity: 1;
  }

  75% {
    opacity: 0;
    transform: translateY(-8px);
  }

  100% {
    opacity: 0;
  }
}

  /* fade ind */
  8% {
    opacity: 1;
    transform: translateY(0);
  }

  /* står stille (læsbart!) */
  70% {
    opacity: 1;
  }

  /* begynder at forsvinde */
  75% {
    opacity: 0;
    transform: translateY(-8px);
  }

  /* reset */
  100% {
    opacity: 0;
  }
}

  /* STAGGER (opbygning oppefra) */
  .dropdown-list li:nth-child(1) { animation-delay: 0.2s; }
  .dropdown-list li:nth-child(2) { animation-delay: 0.4s; }
  .dropdown-list li:nth-child(3) { animation-delay: 0.6s; }
  .dropdown-list li:nth-child(4) { animation-delay: 0.8s; }
  .dropdown-list li:nth-child(5) { animation-delay: 1.0s; }
  .dropdown-list li:nth-child(6) { animation-delay: 1.2s; }
  .dropdown-list li:nth-child(7) { animation-delay: 1.4s; }
  .dropdown-list li:nth-child(8) { animation-delay: 1.6s; }
  .dropdown-list li:nth-child(9) { animation-delay: 1.8s; }
  .dropdown-list li:nth-child(10) { animation-delay: 2.0s; }

  @keyframes dropItem {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    70% { opacity: 1; }
    85% { opacity: 0; transform: translateY(-10px); }
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
