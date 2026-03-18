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

          <div class="cta">
            Hold musen over VIDEN OM og se alle fagsektionerne.<br> 
            VIDEN OM finder du under BygTek logoet.
          </div>

          <div class="fake-dropdown">
            <div class="dropdown-label">Se fagsektionerne her:</div>
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
      .banner-wrapper { width:100%; max-width:1920px; margin:0 auto; }
      .banner { position:relative; width:100%; aspect-ratio:1920/600; overflow:hidden; font-family:Arial; }

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

      .cta {
        position:absolute; left:6%; bottom:10%;
        background:#ffcc00; color:#000;
        padding:12px 18px; font-weight:700;
      }

      .fake-dropdown {
        position:absolute; top:20%; right:6%;
        width:clamp(180px,18vw,280px);
      }

      .dropdown-header {
        background:#e5e5e5;
        padding:10px;
        margin:0;
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
    `;
    document.head.appendChild(style);

    // === DROPDOWN LOGIK ===
    var items = document.querySelectorAll('.dropdown-list li');
    var index = 0;

   function showNext() {
  if (index < items.length) {
    items[index].style.display = "block";
    index++;
  } else {
    // reset alle på én gang
    setTimeout(function () {

      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }

      index = 0;

      // 🔥 GENSTART VIDEN OM ANIMATION
      var text = document.querySelector('.big-text');
      if (text) {
        text.style.animation = "none";
        text.offsetHeight; // trigger reflow
        text.style.animation = "zoomText 3s forwards";
      }

    }, 1000);
  }
}

    // starter efter tekst animation
    setTimeout(function () {
      setInterval(showNext, 800);
    }, 3000);
  }

  // sikker init
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }

})();
