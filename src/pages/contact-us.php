<section class="hero section-bg--accent-100 section-padding">
    <div class="wrap">
        <div class="hero__text">
            <h1>Löydä ihmiset palveluidemme takana</h1>
            <p>Asiantuntijamme eri toimipisteissä odottavat kuulevansa sinusta. Ota yhteys — aloitetaan keskustelu jo tänään.</p>
            
            <form id="people-search-form" class="people-search-form">
                <label for="people-search-input" class="visually-hidden">Hae asiantuntijaa</label>
                <input type="search" id="people-search-input" name="q" placeholder="Hae asiantuntijaa nimellä" aria-label="Hae asiantuntijaa nimellä">
                <button type="submit" class="button button-primary">Hae</button>
            </form>
        </div>
        <div class="hero__image hero__image--people" data-greenstep-people-parallax>
            <div class="people" data-parallax-container>
                <img src="assets/images/person-1.jpg" data-parallax-item data-parallax-plane="1" width="300" height="346" alt="" loading="lazy">
                <img src="assets/images/person-5.jpg" data-parallax-item data-parallax-plane="1" width="300" height="384" alt="" loading="lazy">
                <img src="assets/images/person-4.jpg" data-parallax-item data-parallax-plane="2" width="300" height="264" alt="" loading="lazy">
                <img src="assets/images/person-2.jpg" data-parallax-item data-parallax-plane="4" width="300" height="332" alt="" loading="lazy">
                <img src="assets/images/person-3.jpg" data-parallax-item data-parallax-plane="3" width="299" height="306" alt="" loading="lazy">
                <img src="assets/images/person-6.jpg" data-parallax-item data-parallax-plane="3" width="300" height="381" alt="" loading="lazy">
                <img src="assets/images/person-7.jpg" data-parallax-item data-parallax-plane="4" width="300" height="326" alt="" loading="lazy">
                <img src="assets/images/person-4.jpg" data-parallax-item data-parallax-plane="2" width="300" height="264" alt="" loading="lazy">
            </div>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepPeopleParallax(document.querySelector('[data-greenstep-people-parallax]'));
    });
</script>