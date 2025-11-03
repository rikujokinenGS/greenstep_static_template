<section class="hero hero--archive section-bg--white section-padding">
    <div class="wrap">
        <div class="hero__text">
            <nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumbs">
                <ul id="breadcrumbs-list" class="menu" role="menubar">
                    <li class="menu-item" role="presentation"><a href="#" role="menuitem">Greenstep</a></li>
                    <li class="menu-item" role="presentation">Oivalluksia</li>
                </ul>
            </nav>

            <h1>Inspiraatiota ja oivalluksia yrityksesi kasvun tueksi</h1>
        </div>
        <div class="hero__newsletter-signup">
            <p>Blogistamme löydät ajankohtaiset näkemykset taloudesta, johtamisesta ja liiketoiminnan kehittämisestä — asiantuntijoiltamme sinulle. Voit myös tilata uutiskirjeen, ja saat viimeisimmät oivallukset suoraan sähköpostiisi.</p>

            <div class="newsletter-form">
                <form action="https://greenstep.activehosted.com/f/94" method="get" target="_blank">
                    <label for="newsletter-email" class="visually-hidden">Kirjoita sähköpostiosoitteesi</label>
                    <input type="email" id="newsletter-email" name="email" placeholder="Kirjoita sähköpostiosoitteesi" autocomplete="email" required>
                    <button class="button button-primary" type="submit">Tilaa uutiskirje</button>
                </form>
                <p class="terms">By clicking Sign Up you're confirming that you agree with our <a href="#">Terms and Conditions</a>.</p>
            </div>
        </div>
    </div>
</section>
<section class="post-cards section-bg--white section-padding">
    <div class="wrap">
        <div class="post-cards__grid">
            <article class="post-card post-card--large">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>

            <div class="post-cards__filters">
                <div class="post-cards__filter" role="menubar">
                    <label for="post-theme" class="visually-hidden">Valitse artikkelityyppi</label>
                    <select id="post-theme" name="post-theme">
                        <option value="#" selected>Kaikki artikkelityypit</option>
                        <option value="#">Uutiset</option>
                        <option value="#">Artikkelit</option>
                        <option value="#">Referenssit</option>
                        <option value="#">Podcastit</option>
                        <option value="#">Tapahtumat</option>
                    </select>
                </div>
                <div class="post-cards__filter" role="menubar">
                    <label for="post-topic" class="visually-hidden">Valitse aihe</label>
                    <select id="post-topic" name="post-topic">
                        <option value="#" selected>Kaikki aiheet</option>
                        <option value="#">Palkanlaskenta</option>
                        <option value="#">Data & Analytiikka</option>
                        <option value="#">L&D</option>
                        <option value="#">Julkinen sektori</option>
                        <option value="#">Laki- ja veropalvelut</option>
                        <option value="#">HR</option>
                        <option value="#">Vastuullisuus</option>
                        <option value="#">Kirjanpito</option>
                        <option value="#">Netsuite</option>
                        <option value="#">CFO</option>
                        <option value="#">Rahoitus ja yritysjärjestelyt</option>
                    </select>
                </div>
                <div class="post-cards__filter post-cards__filter--order">
                    <input
                        type="checkbox"
                        id="post-order"
                        name="post-order"
                        class="visually-hidden"
                        value="1"
                        data-checked="Uusimmat"
                        data-unchecked="Vanhimmat"
                        onchange="document.querySelector('label[for=\'' + this.id + '\']').textContent = this.checked ? this.dataset.checked : this.dataset.unchecked"
                        checked
                    >
                    <label for="post-order" aria-label="Valitse järjestys">Uusimmat</label>
                </div>
            </div>

            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Artikkeli</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Arvonlisäveron vaikutus kuntien investoinneissa ja palveluissa</h2>
                        <p class="post-card__excerpt">Metsä Tissuella raportointia oltiin kehitetty pitkään pienellä tiimillä, mutta kehitystyön jatkuvuuden varmistamiseksi tarvittiin kumppani, joka toisi tekemiseen rakennetta ja systemaattisuutta. Greenstepin asiantuntijat vastasivat tarpeeseen nopeasti ja toivat tekemiseen kaivattua selkeyttä. Greenstepin interim-osaajien tuella raportointia on kehitetty ketterästi ja asiantuntevasti.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post-reference">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Referenssi</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
            <article class="post-card">
                <a href="single-post">
                    <div class="post-card__media">
                        <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                    </div> 
                    <div class="post-card__content">
                        <div class="post-card__meta">
                            <span class="post-card__meta-category">Taloushallinto</span>
                            <span class="post-card__meta-read-time">5 min read</span>
                        </div>

                        <h2 class="post-card__title">Mitä asiakkaat odottavat nykyaikaiselta tilitoimistolta?</h2>
                        <p class="post-card__excerpt">Taloushallinnon ulkoistaminen ei ole enää pelkkä keino vähentää sisäistä työkuormaa. Se on strateginen valinta, jolla yritykset hakevat selkeää lisäarvoa: tehokkuutta, varmuutta ja asiantuntevaa kumppanuutta.</p>
                    </div>
                </a>
            </article>
        </div>

        <nav class="pagination">
            <a class="page-numbers previous" href="#">Previous</a>

            <ul id="pagination-menu-list" class="page-number">
                <li><a class="page-numbers" href="#">1</a></li>
                <li><span aria-current="page" class="page-numbers current">2</span></li>
                <li><a class="page-numbers" href="#">3</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a class="page-numbers" href="#">8</a></li>
                <li><a class="page-numbers" href="#">9</a></li>
                <li><a class="page-numbers" href="#">10</a></li>
            </ul>

            <a class="page-numbers next" href="#">Next</a>
        </nav>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        let postFilters = document.querySelectorAll('.post-cards__filter select');

        if (postFilters) {
            postFilters.forEach(function(filter) {
                let filterChoices = new Choices(filter, {
                    searchEnabled: false,
                    itemSelectText: '',
                    shouldSort: false,
                });

                filterChoices.containerOuter.element.setAttribute('role', 'menuitem');

                if (filterChoices.containerInner.element.querySelectorAll('.choices__list > *').length > 0) {
                    filterChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
                    filterChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
                }
            });
        }
    });
</script>