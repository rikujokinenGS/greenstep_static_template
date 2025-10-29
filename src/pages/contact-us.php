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
<section class="people-cards section-bg--white section-padding">
    <div class="wrap">
        <div class="people-cards__grid">
            <div class="people-card people-card--ask-more">
                <h2>Kysy lisää palveluistamme</h2>
                <a href="#" class="button button-primary">Jätä yhteydenottopyyntö</a>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--unavailable">Väliaikaisesti poissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
            <div class="people-card">
                <img src="assets/images/person-card.jpg" width="450" height="550" alt="Annimari Aalto">
                
                <div class="people-card__text">
                    <h3 class="people-card__name">Annimari Aalto</h3>

                    <div class="people-card__availability people-card__availability--available">Tavoitettavissa</div>
                    <p class="people-card__position">Senior Process Consultant</p>
                    <p class="people-card__city">Espoo</p>
                    <a href="tel:+358408018767" class="people-card__phone">+358 40 801 8767</a>
                    <a href="mailto:annimari.aalto@greenstep.fi" class="people-card__email">annimari.aalto@greenstep.fi</a>
                </div>
            </div>
        </div>
    </div>
</section>