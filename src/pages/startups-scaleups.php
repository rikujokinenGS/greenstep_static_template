<section class="hero section-bg--accent-100 section-padding">
    <div class="wrap">
        <div class="hero__text">
            <nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumbs">
                <ul id="breadcrumbs-list" class="menu" role="menubar">
                    <li class="menu-item" role="presentation"><a href="#" role="menuitem">Kokonaisratkaisut</a></li>
                    <li class="menu-item" role="presentation">Startup- ja kasvuyrityksille</li>
                </ul>
            </nav>

            <h1>Kasvata yrityksesi vakaalle pohjalle</h1>
            <p>Saat kattavat ratkaisut rahoitukseen, taloushallintoon, HR:ään ja raportointiin — me hoidamme tukitoiminnot, jotta sinä voit keskittyä kasvuun.</p>
            <a href="#" class="button button-primary">Varaa tapaaminen</a>
        </div>
        <div class="hero__image">
            <img src="assets/images/hero.jpg" width="672" height="730" alt="" fetchpriority="high">

            <div class="hero__image-overlay">
                <img src="assets/images/hero-overlay-1.png" width="355" height="138" alt="">
            </div>
        </div>
    </div>
</section>
<section class="text-links section-bg--white section-padding">
    <div class="wrap">
        <div class="text-links__content" data-animation="bottom">
            <h2>Kokemusta ja verkostoja kasvusi tueksi</h2>
            <p>Greenstep tuntee startup- ja kasvuyrityskentän läpikotaisin; sijoittajat, rahoituskierrosten realiteetit ja sen, millaista on rakentaa yritystä paineen alla. Olemme olleet mukana kymmenissä rahoituskierroksissa ja nähneet, miten oikea valmistautuminen vaikuttaa lopputulokseen.</p>
            <p>Palvelumme on suunniteltu skaalautumaan eri kasvun vaiheisiin aina ensimmäisistä askeleista kansainvälisille markkinoille asti. Kokemuksemme kasvuyrityksistä on kiteytynyt parhaiksi käytännöiksi, joita hyödynnämme jokaisessa asiakkuudessa. Sijoittavat luottavat työkaluihimme ja raportteihimme, mikä antaa asiakkaillemme kilpailuetua neuvotteluissa.</p>
            <p>Tehtävämme on varmistaa, että tukitoiminnot, prosessit ja raportointi tukevat kasvuasi jokaisessa vaiheessa.</p>
        </div>
        <div class="text-links__links" data-animation="bottom">
            <h3>Tukea kasvuunne</h3>
            <ul>
                <li><a href="#">Rahoitusneuvonta ja sijoittajamateriaalit <span class="caret"></span></a></li>
                <li><a href="#">Startupin CFO-palvelut <span class="caret"></span></a></li>
                <li><a href="#">Taloushallinon palvelut <span class="caret"></span></a></li>
                <li><a href="#">HR-palvelut ja rekrytointituki <span class="caret"></span></a></li>
                <li><a href="#">Analytiikka ja raportointi <span class="caret"></span></a></li>
                <li><a href="#">Palkanlaskenta <span class="caret"></span></a></li>
                <li><a href="#">Laki- ja veropalvelut <span class="caret"></span></a></li>
                <li><a href="#">Netsuite ERP <span class="caret"></span></a></li>
            </ul>
        </div>
    </div>
</section>
<section class="services-dropdown section-bg--neutral-100 section-padding" data-greenstep-services-dropdown>
    <div class="wrap">
        <div class="services-dropdown__text" data-animation>
            <h2>Miten voimme auttaa sinua tänään?</h2>
            <p>Greenstep tuntee startup- ja kasvuyrityskentän läpikotaisin; sijoittajat, rahoituskierrosten realiteetit ja sen, millaista on rakentaa yritystä paineen alla. Olemme olleet mukana kymmenissä rahoituskierroksissa ja nähneet, miten oikea valmistautuminen vaikuttaa lopputulokseen.</p>

            <div class="services-dropdown__dropdowns">
                <div class="services-dropdown__dropdown" role="menubar">
                    <label for="services-dropdown-select-1" class="visually-hidden">Valitse tarve</label>
                    <select id="services-dropdown-select-1" name="services-dropdown-select-1"></select>
                </div>
                <div class="services-dropdown__dropdown" role="menubar">
                    <label for="services-dropdown-select-2" class="visually-hidden">Valitse palvelu</label>
                    <select id="services-dropdown-select-2" name="services-dropdown-select-2"></select>
                </div>
            </div>
        </div>
        <div class="services-dropdown__image" data-animation>
            <img src="" width="" height="" alt="" data-service-bg>

            <div class="services-dropdown__image-overlay">
                <div class="services-dropdown__image-overlay-text">
                    <h3 data-service-title></h3>
                    <p data-service-description></p>
                </div>

                <div class="services-dropdown__image-overlay-footer">
                    <img src="" width="" height="" alt="" data-service-logo>
                    <a href="#" class="button button-arrow" data-service-link>Read more</a>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepServicesDropdown(document.querySelector('[data-greenstep-services-dropdown]'), {
            data: [
                {
                    value: 'Tukea kasvuun',
                    label: 'Tukea kasvuun',
                    selected: true,
                    disabled: false,
                    customProperties: {
                        services: [
                            {
                                value: 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                label: 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                selected: true,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/services-dropdown.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'We help you scale with confidence. From financial clarity to stronger teams, we enable your sustainable growth.',
                                    logo: {
                                        'src': 'assets/images/logo-oura.svg',
                                        'alt': 'Oura Logo',
                                        'width': 90,
                                        'height': 29
                                    },
                                    link: '#'
                                }
                            },
                            {
                                value: 'Startupin CFO-palvelut',
                                label: 'Startupin CFO-palvelut',
                                selected: false,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/hero.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'Our CFO services provide startups with strategic financial guidance, helping them navigate growth and achieve their business goals.',
                                    logo: {
                                        'src': 'assets/images/logo-greenstep.svg',
                                        'alt': 'Greenstep Logo',
                                        'width': 156,
                                        'height': 27
                                    },
                                    link: '#'
                                }
                            },
                            {
                                value: 'Taloushallinnon palvelut',
                                label: 'Taloushallinnon palvelut',
                                selected: false,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/tmp.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'Comprehensive financial management solutions tailored for startups, ensuring accuracy, compliance, and efficiency in all financial operations.',
                                    logo: {
                                        'src': 'assets/images/logo-greenstep.svg',
                                        'alt': 'Greenstep Logo',
                                        'width': 156,
                                        'height': 27
                                    },
                                    link: '#'
                                }
                            }
                        ]
                    }
                },
                {
                    value: 'Kasvua tukeen',
                    label: 'Kasvua tukeen',
                    selected: false,
                    disabled: false,
                    customProperties: {
                        services: [
                            {
                                value: 'Startupin CFO-palvelut',
                                label: 'Startupin CFO-palvelut',
                                selected: false,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/hero.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'Our CFO services provide startups with strategic financial guidance, helping them navigate growth and achieve their business goals.',
                                    logo: {
                                        'src': 'assets/images/logo-oura.svg',
                                        'alt': 'Oura Logo',
                                        'width': 90,
                                        'height': 29
                                    },
                                    link: '#'
                                }
                            },
                            {
                                value: 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                label: 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                selected: false,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/tmp.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'We help you scale with confidence. From financial clarity to stronger teams, we enable your sustainable growth.',
                                    logo: {
                                        'src': 'assets/images/logo-greenstep.svg',
                                        'alt': 'Greenstep Logo',
                                        'width': 156,
                                        'height': 27
                                    },
                                    link: '#'
                                }
                            },                        
                            {
                                value: 'Taloushallinnon palvelut',
                                label: 'Taloushallinnon palvelut',
                                selected: false,
                                disabled: false,
                                customProperties: {
                                    bg: {
                                        'src': 'assets/images/services-dropdown.jpg',
                                        'alt': 'Rahoitusneuvonta ja sijoittajamateriaalit',
                                        'width': 672,
                                        'height': 818
                                    },
                                    description: 'Comprehensive financial management solutions tailored for startups, ensuring accuracy, compliance, and efficiency in all financial operations.',
                                    logo: {
                                        'src': 'assets/images/logo-oura.svg',
                                        'alt': 'Oura Logo',
                                        'width': 90,
                                        'height': 29
                                    },
                                    link: '#'
                                }
                            }
                        ]
                    }
                }
            ]
        });
    });
</script>
<section class="cards section-bg--white section-padding">
    <div class="wrap">
        <h2 class="cards__title" data-animation>Tailored solutions for every business</h2>
        <div class="cards__grid cards__grid--boxed" data-animation="bottom">
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-startup-growth-companies.svg); mask-image: url(assets/images/icon-startup-growth-companies.svg);"></div>
                <h3 class="card-item__title">Startup and growth companies</h3>
                <p class="card-item__text">Tailored financial and operational solutions are provided to help startups streamline their processes and scale efficiently.</p>
            </div>
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-investors-pe-funds.svg); mask-image: url(assets/images/icon-investors-pe-funds.svg);"></div>
                <h3 class="card-item__title">Investors and PE funds</h3>
                <p class="card-item__text">Comprehensive due diligence and financial advisory services assist investors and private equity funds in making informed decisions.</p>
            </div>
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-listed-companies.svg); mask-image: url(assets/images/icon-listed-companies.svg);"></div>
                <h3 class="card-item__title">Listed companies</h3>
                <p class="card-item__text">Comprehensive due diligence and financial advisory services assist investors and private equity funds in making informed decisions.</p>
            </div>
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-international-companies2.svg); mask-image: url(assets/images/icon-international-companies2.svg);"></div>
                <h3 class="card-item__title">International companies</h3>
                <p class="card-item__text">Global operations are facilitated through localized financial expertise and support for international compliance and regulations.</p>
            </div>
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-saas-companies.svg); mask-image: url(assets/images/icon-saas-companies.svg);"></div>
                <h3 class="card-item__title">SaaS companies</h3>
                <p class="card-item__text">Specialization in subscription-based revenue models helps SaaS companies optimize their financial management and reporting.</p>
            </div>
            <div class="card-item">
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-non-profit-organizations.svg); mask-image: url(assets/images/icon-non-profit-organizations.svg);"></div>
                <h3 class="card-item__title">Non-profit organizations</h3>
                <p class="card-item__text">Financial planning and grant management support non-profits in maximizing their impact while maintaining fiscal responsibility.</p>
            </div>
        </div>
    </div>
</section>
<section class="logo-slider logo-slider--boxed section-bg--white section-padding">
    <div class="wrap" data-animation>
        <p class="logo-slider__title">Tuemme näitä <strong>kasvuyrityksiä kasvumatkallaan</strong></p>
    </div>

    <div class="logo-slider__slider" data-animation>
        <div class="logo-slider__items">

            <?php for ( $i = 1; $i <= 3; $i++ ): ?>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
                <div class="logo-slider__item"><img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo" loading="lazy"></div>
            <?php endfor; ?>

        </div>
    </div>
</section>
<section class="reference-cards section-bg--white section-padding">
    <div class="wrap">
        <div class="reference-cards__text" data-animation>
            <p>Referenssimme</p>
            <h2>Mitä kasvuyritykset ajattelevat kumppanuudesta kanssamme</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue egestas, pretium lorem a, scelerisque leo. Sed ultrices, massa id malesuada congue, ligula arcu viverra turpis, id commodo.</p>
        </div>
        <div class="reference-cards__items" data-animation="bottom">
            <div class="reference-card reference-card--large">
                <div class="reference-card__text">
                    <h3>Asiantunteva kumppani koko matkan</h3>
                    <p>Käytännössä Greenstep järjesti koko Moi Mobiilin rahoituksen alkutaipaleellamme, ja se oli hyvin merkittävä asia, sillä puhutaan kuitenkin miljoonista. Siitä syntyi heti luottamus Greenstepiä kohtaan. He ovat toimineet asiantuntevana kumppaninamme ensiaskeleistamme lähtien, mikä on ollut meille tosi tärkeä asia.</p>
                    <a href="#" class="button button-arrow">Learn more</a>
                </div>
                <div class="reference-card__media">
                    <img src="assets/images/reference-card.jpg" class="reference-card__media-image" width="672" height="410" alt="" loading="lazy">

                    <div class="reference-card__media-logo">
                        <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo">
                    </div>
                </div>
            </div>
            <div class="reference-card">
                <div class="reference-card__text">
                    <h3>Pitkäjänteinen taloushallinnon kumppanuus</h3>
                    <p>Greenstep on tukenut kasvuamme alusta asti toimimalla taloushallinnon kumppaninamme. He avustivat meitä myös meille elintärkeän ERP-järjestelmän käyttöönotossa ja kehittämisessä. Emme olisi voineet kasvaa näin nopeasti ilman Greenstepin apua!</p>
                    <a href="#" class="button button-arrow">Learn more</a>
                </div>
                <div class="reference-card__media">
                    <div class="reference-card__media-logo">
                        <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo">
                    </div>
                </div>
            </div>
            <div class="reference-card">
                <div class="reference-card__text">
                    <h3>Pitkäjänteinen taloushallinnon kumppanuus</h3>
                    <p>Greenstep on tukenut kasvuamme alusta asti toimimalla taloushallinnon kumppaninamme. He avustivat meitä myös meille elintärkeän ERP-järjestelmän käyttöönotossa ja kehittämisessä. Emme olisi voineet kasvaa näin nopeasti ilman Greenstepin apua!</p>
                    <a href="#" class="button button-arrow">Learn more</a>
                </div>
                <div class="reference-card__media">
                    <div class="reference-card__media-logo">
                        <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo">
                    </div>
                </div>
            </div>
            <div class="reference-card">
                <div class="reference-card__text">
                    <h3>Pitkäjänteinen taloushallinnon kumppanuus</h3>
                    <p>Greenstep on tukenut kasvuamme alusta asti toimimalla taloushallinnon kumppaninamme. He avustivat meitä myös meille elintärkeän ERP-järjestelmän käyttöönotossa ja kehittämisessä. Emme olisi voineet kasvaa näin nopeasti ilman Greenstepin apua!</p>
                    <a href="#" class="button button-arrow">Learn more</a>
                </div>
                <div class="reference-card__media">
                    <div class="reference-card__media-logo">
                        <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura Logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="text-media text-media--tall-media section-bg--white section-padding">
    <div class="wrap" data-animation="bottom">       
        <div class="text-media__content">
            <h2>Viisi askelta menestykseen</h2>
            <ol>
                <li><strong>Valmistaudu rahoitukseen huolella</strong><br>Ensivaikutelma sijoittajaan syntyy vain kerran. Hyvin valmisteltu rahoituskierros ja sijoittajamateriaalit nostavat mahdollisuutesi erottua joukosta.</li>
                <li><strong>Keskity ydinliiketoimintaan</strong><br>Ulkoista taloushallinto, vero- ja lakiasiat joustavalle kumppanille, joka skaalautuu kasvusi mukana.</li>
                <li><strong>Panosta henkilöstöön</strong><br>Vahva tiimi ja toimiva yrityskulttuuri mahdollistavat kestävän kasvun.</li>
                <li><strong>Rakenna vastuullinen pohja</strong><br>Kestävän kehityksen tavoitteet ja raportointi tukevat sekä kilpailukykyä että rahoituksen saamista.</li>
                <li><strong>Varmista skaalautuvuus</strong><br>Prosessit ja järjestelmät kannattaa rakentaa niin, että ne tukevat myös tulevaa kasvua ja kansainvälistymistä.</li>
            </ol>

            <a href="#" class="button button-outline">Kuuntele podcastia</a>
        </div>
        <div class="text-media__media">
            <img src="assets/images/tmp-tall.jpg" width="640" height="860" alt="" loading="lazy">
        </div>     
    </div>
</section>
<section class="small-cta section-bg--white section-padding">
    <div class="wrap">
        <div class="small-cta__content" data-animation="bottom">
            <div class="small-cta__text">
                <h2>Tutustu suomalaisiin menestysyritysten tarinoihin yhdessä kasvuyrittäjien kanssa.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <a href="#" class="button button-primary">Kuuntele podcastia</a>
        </div>
    </div>
</section>
<section class="banners section-bg--white section-padding">
    <div class="wrap" data-animation>
        <div class="banners__text">
            <h2>Ajankohtaista startup- ja kasvukentältä</h2>
            <p>Choose the service that fits your current needs or let us help you decide.</p>
        </div>

        <a href="#" class="banners__cta button button-outline">Varaa tapaaminen</a>

        <div class="banners__items">
            <a href="#" class="banner-item">
                <div class="banner-item__text">
                    <h3>Ensimmäinen iso rahoituskierros voi ratkaista tulevaisuutesi</h3>
                    <p>Kun runway on lyhyt ja sijoittajia kiinnostaa vain murto-osa kohteista, ei virheisiin ole varaa. Lue, miten talousjohtaja voi valmistautua Series A-kierrokseen ja rakentaa uskottavan valuaatiotarinan.</p>
                </div>
                <p class="banner-item__read-more">Lue lisää</p>
            </a>
            <a href="#" class="banner-item">
                <div class="banner-item__text">
                    <h3>Rehellisiä keskusteluita kasvusta ja rahoituksesta</h3>
                    <p>Greenstepin podcastit Kasvumatka ja sijoittajien aitoihin tarinoihin. Ei siloteltuja puheenvuoroja, vaan todellisia oppeja ja kokemuksia, joista jokainen kasvuyrittäjä voi saada inspiraatiota.</p>
                </div>
                <p class="banner-item__read-more">Kuuntele podcastia</p>
            </a>
            <a href="#" class="banner-item">
                <div class="banner-item__text">
                    <h3>Älä jätä lakiasioita ja verotusta tuurin varaan</h3>
                    <p>Startupin vauhdikas arki vie helposti huomion, ja tärkeät asiakirjat tai rekisteröinnit jäävät puolitiehen. Ennakoiva laki- ja veroasiantuntija säästää aikaa, rahaa ja hermoja, ja antaa yrityksellesi turvallisen pohjan kasvaa.</p>
                </div>
                <p class="banner-item__read-more">Lue lisää veropalveluista</p>
            </a>
        </div>
    </div>
</section>
<section class="text-media text-media--tall-media section-bg--white section-padding">
    <div class="wrap" data-animation="bottom">
        <div class="text-media__media">
            <img src="assets/images/tmp-tall.jpg" width="640" height="860" alt="" loading="lazy">
        </div>
        <div class="text-media__content">
            <h2>Kasvuyritys on olemassa, koska sillä on ylivertainen teknologia, palvelukonsepti tai tuote.</h2>
            <p>Sen tehtävä on keskittyä edistämään tuotteen menestymistä. Meidän roolimme on varmistaa, että yrityksen ei tarvitse käyttää aikaa tukifunktioihin ja se saa aina tukea kasvunsa eri vaiheissa.</p>
            <p><strong>Tore Teir</strong></p>
        </div>
    </div>
</section>
<section class="accordion section-bg--white section-padding" data-greenstep-accordion>
    <div class="wrap wrap-narrow">
        <div class="accordion__header" data-animation>
            <h2>Usein kysyttyä kansainvälistymisestä</h2>
            <p>Everything you need to know about the product and billing.</p>
        </div>
        <div class="accordion__items">
            <div class="accordion-item" data-animation="bottom">
                <h3 id="accordion-heading-1" class="accordion-item__title">
                    <button type="button" aria-controls="accordion-content-1" aria-expanded="false">
                        Voitteko auttaa kansainvälisessä palkanlaskennassa ja paikallisessa lainsäädännössä?
                        <span class="indicator"></span>
                    </button>
                </h3>
                <div class="accordion-item__content" id="accordion-content-1" aria-labelledby="accordion-heading-1" aria-hidden="true" role="region">
                    <div class="accordion-item__text">
                        <p>Kyllä, tarjoamme palkanlaskenta- ja HR-palveluita useissa maissa Greenstepin oman tiimin ja kumppaniverkoston kautta.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" data-animation="bottom">
                <h3 id="accordion-heading-1" class="accordion-item__title">
                    <button type="button" aria-controls="accordion-content-1" aria-expanded="false">
                        Mitä taloushallinnon asioita pitää huomioida ulkomaille laajentuessa?
                        <span class="indicator"></span>
                    </button>
                </h3>
                <div class="accordion-item__content" id="accordion-content-1" aria-labelledby="accordion-heading-1" aria-hidden="true" role="region">
                    <div class="accordion-item__text">
                        <p>Kyllä, tarjoamme palkanlaskenta- ja HR-palveluita useissa maissa Greenstepin oman tiimin ja kumppaniverkoston kautta.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" data-animation="bottom">
                <h3 id="accordion-heading-1" class="accordion-item__title">
                    <button type="button" aria-controls="accordion-content-1" aria-expanded="false">
                        Milloin on oikea hetki laajentua kansainvälisille markkinoille?
                        <span class="indicator"></span>
                    </button>
                </h3>
                <div class="accordion-item__content" id="accordion-content-1" aria-labelledby="accordion-heading-1" aria-hidden="true" role="region">
                    <div class="accordion-item__text">
                        <p>Kyllä, tarjoamme palkanlaskenta- ja HR-palveluita useissa maissa Greenstepin oman tiimin ja kumppaniverkoston kautta.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepAccordion(document.querySelector('[data-greenstep-accordion]'));
    });
</script>