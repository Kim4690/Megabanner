(function () {

  // === SETTINGS ===
  var clickUrl = "https://bygtek.dk";
  var image = "viden-om-bg.jpg";

  // === INJECT HTML ===
  var bannerHTML = `
  <div class="banner-wrapper">

    <div class="banner">

      <div class="banner-bg"></div>

      <div class="banner-content">
        <div class="guide-text">
          Find alle fagsektioner under <strong>VIDEN OM</strong>
        </div>

        <div class="cta">SE ALLE FAGSEKTIONER</div>
      </div>

      <!-- MODAL -->
      <div class="banner-modal" id="bannerModal">
        <div class="modal-content">

          <span class="close">&times;</span>

          <h2>Tak for din interesse</h2>

          <p>
            Kontakt:<br><br>
            <strong>Kim Anker</strong><br>
            kim@odsgard.dk<br>
            26 25 51 22
          </p>

          <div class="modal-cta">GÅ VIDERE</div>

        </div>
      </div>

    </div>

  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", bannerHTML);

  // === INJECT CSS ===
  var style = document.createElement("style");
  style.innerHTML = `
  .banner-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .banner {
    position: relative;
    width: 1920px;
    height: 600px;
    overflow: hidden;
    font-family: Arial, sans-serif;
    cursor: pointer;
  }

  .banner-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('${image}') right center / cover no-repeat;
  }

  .banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.4),
      rgba(0,0,0,0)
    );
  }

  .banner-content {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  .guide-text {
    position: absolute;
    left: 6%;
    bottom: 20%;
    color: #fff;
    font-size: 30px;
  }

  .cta {
    position: absolute;
    left: 6%;
    bottom: 10%;
    background: #007ac3;
    color: #fff;
    padding: 12px 18px;
    font-size: 14px;
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
    font-size: 18px;
  }

  .modal-cta {
    margin-top: 20px;
    background: #007ac3;
    color: #fff;
    padding: 10px;
    cursor: pointer;
  }
  `;
  document.head.appendChild(style);

  // === LOGIC ===
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

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    modal.classList.remove('active');
    firstClick = false;
  });

  ctaBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    window.open(clickUrl, "_blank");
  });

})();
