(function () {

  function initBanner() {

    var html = `
    <div class="banner-wrapper">
      <div class="banner">

        <div class="banner-bg"></div>

        <div class="banner-content">

          <div class="big-text">VIDEN OM</div>
          <div class="big-text-static">VIDEN OM</div>

          <div class="guide-text">
            15 fagsektioner med nyheder, artikler<br>
            og virksomheder.
          </div>

          <!-- DROPDOWN -->
          <div class="fake-dropdown hidden">
            <div class="dropdown-label">Se eksempler på fagsektioner:</div>
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

          <!-- CTA -->
          <div class="cta">
            Hold musen over VIDEN OM og se alle fagsektionerne.<br> 
            VIDEN OM finder du under BygTek logoet.
          </div>

        </div>

        <!-- OVERLAY -->
        <div class="banner-modal" id="bannerModal">
          <div class="modal-content">

            <div class="close">&times;</div>

            <h2>Tak for din interesse</h2>

            <p>
              Tak for at du klikkede på banneret på fagsektionen.<br><br>
              Denne plads kan blive din!<br><br>
              Dit budskab vises HVER GANG - Der er kun en plads<br><br>
              Du er meget velkommen til at kontakte:
            </p>

            <div class="contact-box">
              <strong>Kim Anker</strong><br>
              kim@odsgard.dk<br>
              26 25 51 22 / 46 93 66 22
            </div>

            <p style="margin-top:20px;">
              for flere informationer om markedsføring på BygTek.dk.
            </p>

          </div>
        </div>

      </div>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);

    // === CSS ===
    var style = document.createElement("style");
    style.innerHTML = `
      .banner-wrapper { width:100%; max-width:1920px; margin:0 auto; }
      .banner { position:relative; width:100%; aspect-ratio:1920/600; overflow:hidden; font-family:Arial; cursor:pointer; }

      .banner-bg {
        position:absolute; inset:0;
        background:url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') right center/cover no-repeat;
      }

      .banner::after {
        content:""; position:absolute; inset:0;
        background:linear-gradient(to right, rgba(0,60,120,0.65), rgba(0,90,160,0.45), rgba(0,120,200,0.15), transparent);
      }

      .banner-content { position:relative; z-index:2; height:100%; }

      .big-text {
        position:absolute; left:6%; top:42%;
        transform:translateY(-50%) scale(0.2);
        font-size:clamp(60px,10vw,180px);
        font-weight:800; color:#ffcc00;
        animation:zoomText 3s forwards;
      }

      @keyframes zoomText {
        0% { transform:translateY(-50%) scale(0.2); opacity:0; }
        40% { transform:translateY(-50%) scale(1.2); opacity:1; }
        100% { transform:translateY(-50%) scale(1); color:rgba(255,255,255,0.08); }
      }

      .big-text-static {
        position:absolute; left:14%; top:65%;
        transform:translateY(-50%);
        font-size:clamp(40px,6vw,120px);
        color:rgba(255,255,255,0.05);
      }

      .guide-text {
        position:absolute; left:6%; bottom:30%;
        color:#fff; font-size:clamp(14px,1.6vw,26px);
        max-width:40%;
      }

      .fake-dropdown {
        position:absolute;
        top:12%;
        right:6%;
        width:clamp(180px,18vw,280px);
        transition:0.4s;
      }

      .fake-dropdown.hidden { opacity:0; transform:translateY(-10px); }
      .fake-dropdown.show { opacity:1; transform:translateY(0); }

      .dropdown-label {
        margin-bottom:6px;
        font-size:12px;
        color:#003f7a;
      }

      .dropdown-header {
        background:#e5e5e5;
        padding:10px;
      }

      .dropdown-list {
        list-style:none;
        margin:0;
        padding:0;
      }

      .dropdown-list li {
        background:#f2f2f2;
        padding:10px;
        border-bottom:1px solid #ddd;
        display:none;
      }

      .cta {
        position:absolute;
        right:6%;
        bottom:0;
        width:clamp(180px,18vw,280px);
        background:#ffcc00;
        color:#000;
        padding:10px;
        font-size:13px;
        line-height:1.3;
      }

      /* OVERLAY */
      .banner-modal {
        position:absolute;
        inset:0;
        background:rgba(0,0,0,0.75);
        display:flex;
        align-items:center;
        justify-content:center;
        opacity:0;
        pointer-events:none;
        transition:.3s;
        z-index:10;
      }

      .banner-modal.active {
        opacity:1;
        pointer-events:all;
      }

      .modal-content {
        background:#163575;
        color:#fff;
        padding:40px;
        width:420px;
        text-align:center;
        border-radius:12px;
        position:relative;
      }

      .modal-content h2 {
        color:#ffcc00;
        margin-bottom:20px;
      }

      .close {
        position:absolute;
        top:12px;
        right:16px;
        font-size:22px;
        cursor:pointer;
      }

      .contact-box {
        margin-top:15px;
        line-height:1.6;
      }
    `;
    document.head.appendChild(style);

    // === DROPDOWN ===
    var items = document.querySelectorAll('.dropdown-list li');
    var dropdown = document.querySelector('.fake-dropdown');
    var index = 0;
    var interval;

    function startCycle() {

      var text = document.querySelector('.big-text');
      text.style.animation = "none";
      text.offsetHeight;
      text.style.animation = "zoomText 3s forwards";

      dropdown.classList.remove("show");
      dropdown.classList.add("hidden");

      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }

      index = 0;

      setTimeout(function () {

        dropdown.classList.remove("hidden");
        dropdown.classList.add("show");

        interval = setInterval(function () {

          if (index < items.length) {
            items[index].style.display = "block";
            index++;
          } else {
            clearInterval(interval);
            setTimeout(startCycle, 2000);
          }

        }, 900);

      }, 3000);
    }

    startCycle();

    // === OVERLAY ===
    var banner = document.querySelector('.banner');
    var modal = document.getElementById('bannerModal');
    var closeBtn = document.querySelector('.close');

    banner.addEventListener('click', function () {
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      modal.classList.remove('active');
    });

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }

})();
