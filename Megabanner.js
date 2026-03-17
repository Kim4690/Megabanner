(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
  <div class="banner">

    <div class="banner-bg"></div>

    <div class="banner-content">

      <div class="big-text">VIDEN OM</div>

      <div class="guide-text">
        Vi har 15 fagsektioner med nyheder, artikler og virksomheder.<br><br>
        Find din fagsektion under <strong>VIDEN OM</strong>
      </div>

      <div class="cta">SE ALLE FAGSEKTIONERNE</div>

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
          <li><strong>SE ØVRIGE UNDER VIDEN OM</strong></li>
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
    background: url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') right center / cover no-repeat;
  }

  /* BLÅ OVERLAY (justeret) */
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

  /* STOR BAGGRUNDSTEKST */
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
    bottom: 22%;
    color: #fff;
    font-size: 28px;
    max-width: 520px;
  }

  /* CTA */
  .cta {
    position: absolute;
    left: 6%;
    bottom: 10%;
    background: #ffcc00;
    color: #000;
    padding: 12px 18px;
    font-weight: 700;
  }

  /* DROPDOWN */
  .fake-dropdown {
    position: absolute;
    top: 40%;
    right: 8%;
    transform: translateY(-50%);
    width: 280px;
  }

  /* 🔥 NY FARVE (ikke hvid) */
  .dropdown-label {
    color: #d0e7ff;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .dropdown-header {
    background: #e5e5e5;
    padding: 12px;
    font-weight: 600;
  }

  .dropdown-list {
    background: #f2f2f2;
    list-style: none;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    animation: dropdownOpen 6s infinite;
  }

  @keyframes dropdownOpen {
    0% { max-height: 0; opacity: 0; }
    15% { max-height: 340px; opacity: 1; }
    85% { max-height: 340px; opacity: 1; }
    100% { max-height: 0; opacity: 0; }
  }

  .dropdown-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    opacity: 0;
    transform: translateY(-5px);
    animation: itemLoop 6s infinite;
  }

  .dropdown-list li:nth-child(1) { animation-delay: 0.2s; }
  .dropdown-list li:nth-child(2) { animation-delay: 0.4s; }
  .dropdown-list li:nth-child(3) { animation-delay: 0.6s; }
  .dropdown-list li:nth-child(4) { animation-delay: 0.8s; }
  .dropdown-list li:nth-child(5) { animation-delay: 1.0s; }
  .dropdown-list li:nth-child(6) { animation-delay: 1.2s; }
  .dropdown-list li:nth-child(7) { animation-delay: 1.4s; }
  .dropdown-list li:nth-child(8) { animation-delay: 1.6s; }
  .dropdown-list li:nth-child(9) { animation-delay: 1.8s; }

  @keyframes itemLoop {
    0% { opacity: 0; transform: translateY(-5px); }
    10% { opacity: 1; transform: translateY(0); }
    80% { opacity: 1; }
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
