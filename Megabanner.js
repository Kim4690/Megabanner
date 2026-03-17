(function () {

  var clickUrl = "https://bygtek.dk";

  var html = `
  <div class="banner">

    <!-- BAGGRUND -->
    <div class="banner-bg"></div>

    <div class="banner-content">

      <div class="guide-text">
        Vi har 15 fagsektioner, med nyheder, artikler og virksomheder - sikkert også en inden for dit fagområde. Se fagsektionerne under<br><br><strong>VIDEN OM</strong>
      </div>

      <div class="cta">SE ALLE FAGSEKTIONER</div>

      <!-- DROPDOWN -->
      <div class="fake-dropdown">
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
          <li>SE RESTEN PÅ BYGTEK.DK</li>
        </ul>
      </div>

    </div>

    <!-- DIT OVERLAY -->
    <div class="banner-modal" id="bannerModal">
      <div class="modal-content">

        <span class="close">&times;</span>

        <h2>Tak for din interesse</h2>

        <p>
        Tak for at du klikkede på banneret på fagsektionen.<br><br>
        Du er meget velkommen til at kontakte:
        </p>

        <div class="contact-box">
          <strong>Kim Anker</strong><br>
          kim@odsgard.dk<br>
          26 25 51 22
        </div>

        <p style="margin-top:20px;">
        for flere informationer om markedsføring på BygTek.dk.
        </p>

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
    
    /* fallback baggrund (ALTID virker) */
    background: #1a1a1a;
  }

  /* BILLEDE (valgfrit – kan fejle uden at ødelægge layout) */
  .banner-bg {
    position: absolute;
    inset: 0;
    background: url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') right center / cover no-repeat;
    opacity: 0.9;
  }

  /* 🔥 ISOLERINGS-STYLE OVERLAY */
  .banner::after {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to right,
    rgba(0,0,0,0.85) 0%,
    rgba(0,0,0,0.75) 20%,
    rgba(0,0,0,0.55) 40%,
    rgba(0,0,0,0.30) 60%,
    rgba(0,0,0,0.10) 80%,
    rgba(0,0,0,0.00) 100%
  );

  z-index: 1;
}

  .banner-content {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  .guide-text {
    position: absolute;
    left: 6%;
    bottom: 22%;
    color: #fff;
    font-size: 30px;
    max-width: 500px;
    line-height: 1.2;
  }

  .cta {
    position: absolute;
    left: 6%;
    bottom: 10%;
    background: #007ac3;
    color: #fff;
    padding: 12px 18px;
    font-size: 14px;
    font-weight: 600;
  }

  /* DROPDOWN */
  .fake-dropdown {
    position: absolute;
    top: 60px;
    right: 6%;
    width: 260px;
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
    animation: dropdown 9s infinite;
  }

  .dropdown-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  @keyframes dropdown {
    0% { max-height: 0; }
    40% { max-height: 320px; }
    80% { max-height: 320px; }
    100% { max-height: 0; }
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
