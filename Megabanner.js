<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

/* RESET */
* { margin:0; padding:0; box-sizing:border-box; }

/* BANNER */
.banner {
  position: relative;
  width: 100%;
  height: 600px;
  display: block;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

/* BAGGRUND */
.banner-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('banner.jpg') right center / cover no-repeat;
}

/* OVERLAY (mørk venstre side) */
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

/* CONTENT */
.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
}

/* TEKST */
.guide-text {
  position: absolute;
  left: 6%;
  bottom: 20%;
  color: #fff;
  font-size: 30px;
}

/* CTA */
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
}

.modal-cta {
  margin-top: 20px;
  background: #007ac3;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}

</style>
</head>

<body>

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

<script>

/* JS */
(function () {

  let firstClick = false;

  const banner = document.querySelector('.banner');
  const modal = document.getElementById('bannerModal');

  banner.addEventListener('click', function (e) {
    if (!firstClick) {
      e.preventDefault();
      modal.classList.add('active');
      firstClick = true;
    }
  });

  document.querySelector('.close').onclick = function(e) {
    e.stopPropagation();
    modal.classList.remove('active');
    firstClick = false;
  };

  document.querySelector('.modal-cta').onclick = function(e) {
    e.stopPropagation();
    window.open("https://bygtek.dk", "_blank");
  };

})();

</script>

</body>
</html>