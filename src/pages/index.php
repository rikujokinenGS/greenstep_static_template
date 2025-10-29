<section class="big-hero section-bg--accent-100 section-padding" data-greenstep-big-hero>
    <div class="wrap">
        <div class="big-hero__text">
            <h1><strong>What's your next big challenge?</strong> We'll make sure you're ready for it.</h1>
            <p>We offer tailored financial, HR, and technology services for every stage of your business journey.</p>

            <a href="#" class="button button-primary">Book a meeting</a>
            <a href="#" class="button button-outline">Explore our services</a>
        </div>
    </div>
    <div class="big-hero__case-stories">
        <div class="case-story__slider">
            <ul class="case-story__list">
                <?php for ($i = 1; $i <= 15; $i++): ?>
                    <li class="case-story__item<?php echo $i > 5 ? ' case-story__item--clone' : ''; ?>">
                        <a href="#" class="case-story__link">
                            <div class="case-story__background">
                                <img src="assets/images/case-story.jpg" width="365" height="435" alt="" loading="lazy">
                                <video loop muted playsinline disablepictureinpicture background width="365" height="435">
                                    <source data-src="assets/videos/case-story.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="case-story__content">
                                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" class="case-story__logo" loading="lazy">
                                <p class="case-story__text">
                                    We help you scale with confidence. From financial clarity to stronger teams, we enable your sustainable growth.
                                </p>
                                <p class="case-story__read-more button-arrow">Read the case story</p>
                                <span class="case-story__category">Ensuring sustainability</span>
                            </div>
                        </a>
                    </li>
                <?php endfor; ?>
            </ul>
        </div>
    </div>
    <div class="big-hero__logos">
        <p class="big-hero__logos-tagline">Trusted by <strong>3,000+ companies world wide</strong> to streamline their operations</p>

        <ul class="big-hero__logos-list">
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
            <li class="big-hero__logos-item">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" loading="lazy">
            </li>
        </ul>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepBigHero(document.querySelector('[data-greenstep-big-hero]'));
    });
</script>
<section class="text-media section-bg--white section-padding">
    <div class="wrap" data-animation="bottom">
        <div class="text-media__content">
            <h3>Flexible interim solutions</h3>
            <p>Get the expert support you need quickly in CFO, HR, IT or sustainability roles.</p>
            <a href="#" class="button button-primary">Explore our partnership model</a>
        </div>
        <div class="text-media__media">
            <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
        </div>
    </div>
</section>
<section class="text-media section-bg--neutral-100 section-padding">
    <div class="wrap" data-animation="bottom">
        <div class="text-media__media">
            <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
        </div>
        <div class="text-media__content">
            <h3>Greenstep as your technology partner</h3>
            <p>Our 100+ tech experts help implement and optimize ERP, BI and automation.</p>
            <ul>
                <li>NetSuite</li>
                <li>Salesforce</li>
                <li>Analytics services</li>
            </ul>

            <a href="#" class="button button-arrow">Explore technology services</a>
        </div>        
    </div>
</section>
<section class="text-media section-bg--white section-padding">
    <div class="wrap" data-animation="bottom">       
        <div class="text-media__content">
            <h3>Your financial backbone</h3>
            <p>From accounting and payroll to CFO support and strategic financial planning, we provide world-class financial services to help your business thrive.</p>
            <ul>
                <li>Accounting services</li>
                <li>Payroll services</li>
                <li>CFO services</li>
                <li>Group accounting and IFRS services</li>
            </ul>

            <a href="#" class="button button-arrow">Book a meeting</a>
        </div>
        <div class="text-media__media">
            <img src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
        </div>     
    </div>
</section>
<section class="cards section-bg--white section-padding">
    <div class="wrap">
        <h2 class="cards__title" data-animation>Tailored solutions for every business</h2>
        <div class="cards__grid cards__grid--boxed" data-animation="bottom">
            <div class="card-item">
                <h3 class="card-item__title">Startup and growth companies</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-startup-growth-companies.svg); mask-image: url(assets/images/icon-startup-growth-companies.svg);"></div>
                <p class="card-item__text">Tailored financial and operational solutions are provided to help startups streamline their processes and scale efficiently.</p>
            </div>
            <div class="card-item">
                <h3 class="card-item__title">Investors and PE funds</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-investors-pe-funds.svg); mask-image: url(assets/images/icon-investors-pe-funds.svg);"></div>
                <p class="card-item__text">Comprehensive due diligence and financial advisory services assist investors and private equity funds in making informed decisions.</p>
            </div>
            <div class="card-item">
                <h3 class="card-item__title">Listed companies</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-listed-companies.svg); mask-image: url(assets/images/icon-listed-companies.svg);"></div>
                <p class="card-item__text">Comprehensive due diligence and financial advisory services assist investors and private equity funds in making informed decisions.</p>
            </div>
            <div class="card-item">
                <h3 class="card-item__title">International companies</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-international-companies2.svg); mask-image: url(assets/images/icon-international-companies2.svg);"></div>
                <p class="card-item__text">Global operations are facilitated through localized financial expertise and support for international compliance and regulations.</p>
            </div>
            <div class="card-item">
                <h3 class="card-item__title">SaaS companies</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-saas-companies.svg); mask-image: url(assets/images/icon-saas-companies.svg);"></div>
                <p class="card-item__text">Specialization in subscription-based revenue models helps SaaS companies optimize their financial management and reporting.</p>
            </div>
            <div class="card-item">
                <h3 class="card-item__title">Non-profit organizations</h3>
                <div class="card-item__icon" style="-webkit-mask-image: url(assets/images/icon-non-profit-organizations.svg); mask-image: url(assets/images/icon-non-profit-organizations.svg);"></div>
                <p class="card-item__text">Financial planning and grant management support non-profits in maximizing their impact while maintaining fiscal responsibility.</p>
            </div>
        </div>
    </div>
</section>
<section class="people-cta section-bg--accent-100 section-padding" data-greenstep-people-cta>
    <div class="people-cta__bg">
        <img src="assets/images/person-1.jpg" data-parallax-plane="1" width="300" height="346" alt="" loading="lazy">
        <img src="assets/images/person-5.jpg" data-parallax-plane="1" width="300" height="384" alt="" loading="lazy">
        <img src="assets/images/person-4.jpg" data-parallax-plane="2" width="300" height="264" alt="" loading="lazy">
        <img src="assets/images/person-2.jpg" data-parallax-plane="4" width="300" height="332" alt="" loading="lazy">
        <img src="assets/images/person-3.jpg" data-parallax-plane="3" width="299" height="306" alt="" loading="lazy">
        <img src="assets/images/person-6.jpg" data-parallax-plane="3" width="300" height="381" alt="" loading="lazy">
        <img src="assets/images/person-7.jpg" data-parallax-plane="4" width="300" height="326" alt="" loading="lazy">
        <img src="assets/images/person-4.jpg" data-parallax-plane="2" width="300" height="264" alt="" loading="lazy">
    </div>
    <div class="wrap">
        <div class="people-cta__content" data-animation="bottom">
            <h2><strong>Your growth journey</strong>, supported every step</h2>
            <p>Whether local or international, our experts and digital tools ensure your finances and people thrive together.</p>
            <a href="#" class="button button-primary">Book a meeting</a>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepPeopleCTA(document.querySelector('[data-greenstep-people-cta]'));
    });
</script>
<section class="stats section-bg--white section-padding" data-greenstep-stats data-greenstep-stats-duration="2000" data-greenstep-stats-locale="en-US">
    <div class="wrap">
        <div class="stats__text"data-animation>
            <h2>Why <strong>growth businesses</strong> choose us</h2>
        </div>
        <div class="stats__items">
            <div class="stats-item" data-animation="bottom">
                <div class="stats-item__number" data-start="0" data-end="700" data-prefix="" data-suffix="+">700+</div>
                <div class="stats-item__text">
                    <p><strong>700+ experts, 5 countries</strong></p>
                    <p>Local expertise, Nordic scale — our cross-border teams work closely with you.</p>
                </div>
            </div>
            <div class="stats-item" data-animation="bottom">
                <div class="stats-item__number" data-start="0" data-end="10" data-prefix="" data-suffix="%">10%</div>
                <div class="stats-item__text">
                    <p><strong>of profits distributed to employees</strong></p>
                    <p>We invest in our people, because happy teams build better partnerships.</p>
                </div>
            </div>
            <div class="stats-item" data-animation="bottom">
                <div class="stats-item__number" data-start="0" data-end="3000" data-prefix="" data-suffix="+">3,000+</div>
                <div class="stats-item__text">
                    <p><strong>ISO27001-certified and GDPR-compliant</strong></p>
                    <p>Trusted by over 3,000 organizations worldwide to keep data secure and operations compliant.</p>
                </div>
            </div>
            <div class="stats-item" data-animation="bottom">
                <div class="stats-item__number" data-start="0" data-end="100" data-prefix="" data-suffix="+">100+</div>
                <div class="stats-item__text">
                    <p><strong>More than 100 technology experts</strong></p>
                    <p>Our in-house team helps you make the most of ERP, data, and automation tools.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepStats(document.querySelector('[data-greenstep-stats]'), {
            duration: document.querySelector('[data-greenstep-stats]').getAttribute('data-greenstep-stats-duration'),
            locale: document.querySelector('[data-greenstep-stats]').getAttribute('data-greenstep-stats-locale')
        });
    });
</script>
<section class="logo-masonry section-bg--white section-padding">
    <div class="wrap">
        <div class="logo-masonry__content logo-masonry__content-bg--accent-200" data-animation>
            <div class="text">
                <h2>Grow without the guesswork</h2>
                <p>With the right partner for finance, HR and systems, your business can focus on what matters most — growth. Our world-class team combined with cutting edge software will give you the clarity you need.</p>
                <a href="#" class="button button-outline">Explore our services</a>
            </div>
            <div class="logos" style="--_masonry-duration: 55s;">
                <?php
                    $logos = [
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                        'assets/images/logo-oura.svg',
                    ];

                    $columns[0] = $logos;
                    $columns[1] = array_merge( array_slice( $logos, 4 ), array_slice( $logos, 0, 4 ) );
                    $columns[2] = array_merge( array_slice( $logos, 7 ), array_slice( $logos, 0, 7 ) );
                ?>
                
                <?php foreach ( $columns as $index => $logos ): ?>

                    <div class="column">
                        <?php foreach ( $logos as $logo ): ?>

                            <div class="logo">
                                <img src="<?php echo $logo; ?>" width="993" height="311" alt="" loading="lazy">
                            </div>

                        <?php endforeach; ?>

                        <div class="logo duplicate"><img src="<?php echo $logos[0]; ?>" width="993" height="311" alt="" loading="lazy"></div>
                        <div class="logo duplicate"><img src="<?php echo $logos[1]; ?>" width="993" height="311" alt="" loading="lazy"></div>
                        <div class="logo duplicate"><img src="<?php echo $logos[2]; ?>" width="993" height="311" alt="" loading="lazy"></div>
                        <div class="logo duplicate absolute"><img src="<?php echo ( $index % 2 ) ? $logos[ array_key_last($logos) ] : $logos[3]; ?>" width="993" height="311" alt="" loading="lazy"></div>
                    </div>

                <?php endforeach; ?>                
            </div>
        </div>
    </div>
</section>
<section class="image-cards section-bg--white section-padding">
    <div class="wrap">
        <div class="image-cards__text" data-animation>
            <h2>Finance made simple, <strong>growth made possible</strong></h2>
            <p>Greenstep takes care of the complex stuff — you get insights, confidence and time back.</p>
        </div>
        <div class="image-cards__items">
            <a href="#" class="image-card" data-animation="bottom">
                <img class="image-card__image" src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                <h3 class="image-card__title">Flexible interim solutions</h3>
                <p class="image-card__text">
                    <strong>Get the expert support you need quickly</strong> in CFO, HR, IT or sustainability roles.
                    <span class="image-card__read-more">Find your interim expert</span>
                </p>
            </a>
            <a href="#" class="image-card" data-animation="bottom">
                <img class="image-card__image" src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                <h3 class="image-card__title">Your trusted technology partner</h3>
                <p class="image-card__text">
                    <strong>Our 100+ tech experts help implement and optimize</strong> ERP, BI and automation.
                    <span class="image-card__read-more">Explore our tech services</span>
                </p>
            </a>
            <a href="#" class="image-card" data-animation="bottom">
                <img class="image-card__image" src="assets/images/tmp.jpg" width="640" height="528" alt="" loading="lazy">
                <h3 class="image-card__title">Financial services</h3>
                <p class="image-card__text">
                    <strong>Comprehensive accounting, payroll and CFO services</strong> to support your growth.
                    <span class="image-card__read-more">View financial services</span>
                </p>
            </a>
        </div>
    </div>
</section>
<section class="testimonials section-bg--neutral-100 section-padding" data-greenstep-testimonials>
    <div class="wrap">
        <header class="testimonials__header" data-animation>
            <h2>Trusted by growth companies</h2>

            <nav class="testimonials__navigation">
                <button class="testimonials__navigation-button testimonials__navigation-button--prev" disabled>Previous</button>
                <button class="testimonials__navigation-button testimonials__navigation-button--next">Next</button>
            </nav>
        </header>
    </div>

    <div class="testimonials__items" data-animation="bottom">
        <?php for ($i = 1; $i <= 7; $i++): ?>
            <a href="#" class="testimonial-item<?php echo $i === 1 ? ' active' : ''; ?>">
                <img src="assets/images/logo-oura.svg" width="90" height="29" alt="Oura logo" class="testimonial-item__logo" loading="lazy">
                <p class="testimonial-item__text">"Working with Greenstep was smooth from the start. Clear operating models were established early in the project, which enabled us to complete the ERP implementation on time - and even under budget. We have also outsource our payroll management to Greenstep."</p>
                
                <div class="testimonial-item__footer">
                    <div class="testimonial-item__author">
                        <img src="assets/images/author-1.jpg" width="70" height="70" alt="" class="testimonial-item__author-image" loading="lazy">
                        <div class="testimonial-item__author-info">
                            <p class="testimonial-item__author-name">Vesa Salovaara</p>
                            <p class="testimonial-item__author-position">ICT Manager</p>
                        </div>
                    </div>
                    <div class="button button-arrow">Read more</div>
                </div>
            </a>
        <?php endfor; ?>
    </div>

    <nav class="testimonials__mobile-navigation" data-animation>
        <div class="wrap">
            <button class="testimonials__navigation-button testimonials__navigation-button--prev" disabled>Previous</button>
            <button class="testimonials__navigation-button testimonials__navigation-button--next">Next</button>
        </div>
    </nav>
</section>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new GreenstepTestimonials(document.querySelector('[data-greenstep-testimonials]'));
    });
</script>