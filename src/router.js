import {
  siteConfig,
  heroSlidesData,
  heroServicePills,
  homeServiceCards,
  allServicesData,
  coursesData,
  pricingPlans,
  blogArticles,
  horoscopesData
} from './data/pagesData.js';

import {
  vastuDirectionsData,
  calculateNumerology,
  calculateKundliMilan,
  muhuratData,
  gemstonesData,
  babyNamesData,
  dreamDictionary
} from './data/toolsData.js';

export function renderRoute(route) {
  const cleanRoute = route.replace(/^#\/?/, '').toLowerCase() || 'home';
  const mainContent = document.getElementById('mainContent');
  if (!mainContent) return;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.replace(/^#\/?/, '').toLowerCase() === cleanRoute) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Handle Dynamic Routes
  if (cleanRoute === 'home' || cleanRoute === '') {
    mainContent.innerHTML = renderHomePage();
  } else if (cleanRoute === 'about') {
    mainContent.innerHTML = renderAboutPage();
  } else if (cleanRoute === 'services') {
    mainContent.innerHTML = renderServicesMasterPage();
  } else if (cleanRoute === 'book-consultation') {
    mainContent.innerHTML = renderBookConsultationPage();
  } else if (cleanRoute === 'pricing') {
    mainContent.innerHTML = renderPricingPage();
  } else if (cleanRoute === 'courses') {
    mainContent.innerHTML = renderCoursesPage();
  } else if (cleanRoute === 'projects') {
    mainContent.innerHTML = renderProjectsPage();
  } else if (cleanRoute === 'elite') {
    mainContent.innerHTML = renderElitePage();
  } else if (cleanRoute === 'vastu/home') {
    mainContent.innerHTML = renderVastuSubpage('home');
  } else if (cleanRoute === 'vastu/office-shop') {
    mainContent.innerHTML = renderVastuSubpage('office-shop');
  } else if (cleanRoute === 'vastu/factory') {
    mainContent.innerHTML = renderVastuSubpage('factory');
  } else if (cleanRoute === 'vastu/plot-selection') {
    mainContent.innerHTML = renderVastuSubpage('plot-selection');
  } else if (cleanRoute === 'vastu/business') {
    mainContent.innerHTML = renderVastuSubpage('business');
  } else if (cleanRoute === 'vastu/business/hospitals') {
    mainContent.innerHTML = renderVastuSubpage('hospitals');
  } else if (cleanRoute === 'vastu/business/hotels') {
    mainContent.innerHTML = renderVastuSubpage('hotels');
  } else if (cleanRoute === 'vastu/business/it-offices') {
    mainContent.innerHTML = renderVastuSubpage('it-offices');
  } else if (cleanRoute === 'vastu/business/schools') {
    mainContent.innerHTML = renderVastuSubpage('schools');
  } else if (cleanRoute === 'vastu/ai-report-generator') {
    mainContent.innerHTML = renderAiReportGeneratorPage();
  } else if (cleanRoute === 'astrology') {
    mainContent.innerHTML = renderAstrologyPage();
  } else if (cleanRoute === 'numerology') {
    mainContent.innerHTML = renderNumerologyPage();
  } else if (cleanRoute.startsWith('services/')) {
    const serviceSlug = cleanRoute.replace('services/', '');
    mainContent.innerHTML = renderDedicatedServicePage(serviceSlug);
  } else if (cleanRoute === 'tools') {
    mainContent.innerHTML = renderToolsHubPage();
  } else if (cleanRoute === 'blog') {
    mainContent.innerHTML = renderBlogPage();
  } else if (cleanRoute.startsWith('blog/')) {
    const blogSlug = cleanRoute.replace('blog/', '');
    mainContent.innerHTML = renderBlogDetailPage(blogSlug);
  } else if (cleanRoute === 'horoscope' || cleanRoute.startsWith('horoscope/')) {
    const sign = cleanRoute.replace('horoscope/', '');
    mainContent.innerHTML = renderHoroscopePage(sign !== 'horoscope' ? sign : null);
  } else if (cleanRoute === 'contact') {
    mainContent.innerHTML = renderContactPage();
  } else {
    mainContent.innerHTML = render404Page();
  }

  // Re-trigger icon creation and dynamic component setup
  if (window.onRouteRendered) {
    window.onRouteRendered();
  }
}

// 1. HOME PAGE
function renderHomePage() {
  return `
    <!-- PURE HIGHLIGHTED HERO SLIDESHOW SECTION -->
    <section class="hero-slideshow-container">
      <div class="slides-wrapper" id="heroSlidesWrapper">
        ${heroSlidesData.map((slide, index) => `
          <div class="hero-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
            <a href="${slide.ctaLink}" class="hero-slide-link" title="${slide.title}">
              <img src="${slide.image}" alt="${slide.title}" class="hero-clean-slide-img" />
            </a>
          </div>
        `).join('')}
      </div>

      <!-- Slide Navigation Controls -->
      <button class="slide-nav-btn prev" id="slidePrevBtn" aria-label="Previous Slide"><i data-lucide="chevron-left"></i></button>
      <button class="slide-nav-btn next" id="slideNextBtn" aria-label="Next Slide"><i data-lucide="chevron-right"></i></button>
      
      <!-- Slide Indicators -->
      <div class="slide-indicators" id="slideIndicators">
        ${heroSlidesData.map((_, i) => `
          <button class="indicator-dot ${i === 0 ? 'active' : ''}" data-to-slide="${i}" aria-label="Go to slide ${i+1}"></button>
        `).join('')}
      </div>
    </section>

    <!-- HERO SERVICE QUICK PILLS -->
    <div class="hero-pills-bar">
      <div class="container">
        <div class="pills-scroll-row">
          ${heroServicePills.map(p => `
            <a href="${p.link}" class="hero-service-pill">
              <i data-lucide="${p.icon}"></i>
              <span>${p.name}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- COMPACT FOUNDER TRUST BAR -->
    <div class="founder-compact-bar">
      <div class="container">
        <div class="fcb-content">
          <div class="fcb-avatar">
            <img src="/assets/about_founder_new.jpg" alt="Er. Pradeep Panwar" />
          </div>
          <div class="fcb-info">
            <h3>Er. Pradeep Panwar</h3>
            <p class="fcb-roles">Civil Engineer • Architect • Vastu Consultant</p>
            <p class="fcb-skills">Scientific Vastu | Architectural Planning | Astro-Vastu</p>
          </div>
          <div class="fcb-action">
             <a href="#/about" class="btn btn-outline-gold btn-sm">Read Profile</a>
          </div>
        </div>
      </div>
    </div>

    <!-- TRUST SECTION -->
    <section class="section trust-section">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-image-col">
            <div class="trust-image-frame">
              <img src="/assets/founder_acharya_pankaj.jpg" alt="Er. Pradeep Panwar — Founder Anant Vastu Architect" class="trust-img" />
            </div>
          </div>
          <div class="trust-content-col">
            <div class="section-tag"><i data-lucide="shield-check"></i> TRUSTED VASTU CONSULTANCY</div>
            <h2 class="section-title">Traditional Wisdom. Practical Guidance. Personalized Solutions.</h2>
            <p class="trust-intro">
              <strong>Anant Vastu Architect</strong>, founded by <strong>Er. Pradeep Panwar</strong>, is a premier professional Vastu Shastra and Astrology consultancy headquartered in <strong>Khategaon, near Indore, Madhya Pradesh</strong>, serving clients across India and globally.
            </p>
            <p class="text-muted">
              We bridge the profound principles of 5,000-year-old Vedic spatial architecture with contemporary lifestyle needs. Our signature approach emphasizes <strong>zero structural demolition</strong>, utilizing elemental color therapy, metal energy tapes, geopathic stress neutralization, and planetary Kundli alignment.
            </p>
            
            <div class="trust-points-list">
              <div class="tp-item">
                <i data-lucide="check-circle-2" class="text-gold"></i>
                <div>
                  <strong>Scientific 16-Zone Energy Mapping:</strong> Pinpoint precision for entrance, kitchen, bedroom, cash flow & health zones.
                </div>
              </div>
              <div class="tp-item">
                <i data-lucide="check-circle-2" class="text-gold"></i>
                <div>
                  <strong>Non-Demolition Remedies:</strong> Tailored metallic strips, sacred geometries, crystals & directional corrections.
                </div>
              </div>
              <div class="tp-item">
                <i data-lucide="check-circle-2" class="text-gold"></i>
                <div>
                  <strong>Astro-Vastu Synergy:</strong> Synchronizing your personal natal chart (Kundli) with the directional degrees of your property.
                </div>
              </div>
            </div>

            <div class="trust-cta-row">
              <a href="#/about" class="btn btn-gold"><i data-lucide="user"></i> Learn About Our Philosophy</a>
              <a href="tel:+918269646419" class="btn btn-outline-light"><i data-lucide="phone-call"></i> Call +91 82696 46419</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOMEPAGE SERVICES GRID -->
    <section class="section bg-card-surface">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i data-lucide="sparkles"></i> COMPREHENSIVE EXPERTISE</div>
          <h2 class="section-title">Vastu & Astrology Services For Every Sphere of Life</h2>
          <p class="section-subtitle">From residential sanctuaries to high-yield industrial factories and executive Kundli readings.</p>
        </div>

        <div class="services-grid">
          ${homeServiceCards.map(s => `
            <div class="service-card">
              <div class="sc-img-wrap">
                <img src="${s.image}" alt="${s.title}" class="sc-thumb-img" loading="lazy" />
              </div>
              <div class="sc-badge">${s.badge}</div>
              <div class="sc-icon-box"><i data-lucide="${s.icon}"></i></div>
              <h3 class="sc-title">${s.title}</h3>
              <p class="sc-desc">${s.desc}</p>
              <a href="${s.link}" class="sc-link">Explore Details <i data-lucide="arrow-right"></i></a>
            </div>
          `).join('')}
        </div>

        <div class="text-center mt-4">
          <a href="#/services" class="btn btn-gold btn-lg"><i data-lucide="grid"></i> View All Vastu & Spiritual Services</a>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE VASTU WHEEL SHOWCASE -->
    <section class="section">
      <div class="container">
        <div class="chakra-showcase-box">
          <div class="chakra-visual">
            <img src="/assets/shakti_chakra_circle.jpg" alt="16-Zone Shakti Chakra Grid" class="chakra-img-spin" />
          </div>
          <div class="chakra-content">
            <div class="section-tag"><i data-lucide="compass"></i> THE 16-ZONE ENERGY CHAKRA</div>
            <h2 class="section-title">How Scientific Vastu Transforms Your Space</h2>
            <p class="text-muted">
              Every home or building is divided into 16 distinct angular energy zones. When aligned with the five natural elements (Pancha Bhootas: Water, Air, Fire, Earth, Space), health, wealth, clarity, and peace flourish naturally.
            </p>
            <div class="chakra-key-zones">
              <div class="ckz-item"><span class="badge-gold">NE</span> <strong>Ishanya:</strong> Mental Clarity & Spiritual Peace</div>
              <div class="ckz-item"><span class="badge-gold">SE</span> <strong>Agni:</strong> Cash Flow & Digestive Vitality</div>
              <div class="ckz-item"><span class="badge-gold">SW</span> <strong>Nairitya:</strong> Family Stability & Mastery</div>
              <div class="ckz-item"><span class="badge-gold">N</span> <strong>Kuber:</strong> Endless Wealth & Career Opportunities</div>
            </div>
            <div class="mt-4">
              <a href="#/vastu/ai-report-generator" class="btn btn-gold"><i data-lucide="cpu"></i> Generate AI Vastu Report</a>
              <a href="#/tools" class="btn btn-outline-gold ml-2"><i data-lucide="tool"></i> Test Live Vastu Compass</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED COURSES BANNER -->
    <section class="section bg-card-surface">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i data-lucide="graduation-cap"></i> PROFESSIONAL EDUCATION</div>
          <h2 class="section-title">Master Vastu & Astrology With Anant Vastu Architect</h2>
          <p class="section-subtitle">Step into a fulfilling career or deepen your personal knowledge with our professional training programs.</p>
        </div>

        <div class="courses-grid-preview">
          ${coursesData.map(c => `
            <div class="course-card-premium ${c.id === 'vastu-consultant' ? 'featured-course' : ''}">
              <div class="cc-badge">${c.badge}</div>
              <h3 class="cc-title">${c.title}</h3>
              <div class="cc-price">${c.price} <span class="cc-duration">(${c.duration})</span></div>
              <p class="cc-sub">${c.subtitle}</p>
              <p class="cc-desc">${c.description}</p>
              <div class="cc-curriculum-preview">
                <strong>Key Modules:</strong>
                <ul>
                  ${c.includes.slice(0, 5).map(item => `<li><i data-lucide="check"></i> ${item}</li>`).join('')}
                </ul>
              </div>
              <div class="cc-footer">
                <a href="#/courses" class="btn btn-gold btn-block"><i data-lucide="book-open"></i> Enroll Now — ${c.price}</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- GLOBAL CTA BANNER -->
    ${renderGlobalCtaBanner()}
  `;
}

// 2. ABOUT PAGE
function renderAboutPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>About Us</span></div>
        <h1 class="page-title">About Anant Vastu Architect</h1>
        <p class="page-subtitle">Pioneering Scientific Vastu Shastra, Modern Architectural Intelligence & Vedic Astrology Guidance.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="about-overview-grid">
          <div class="about-text-content">
            <div class="section-tag"><i data-lucide="bookmark"></i> WHO WE ARE</div>
            <h2 class="section-title">Transforming Spaces, Harmonizing Lives</h2>
            <p class="lead-text">
              <strong>Anant Vastu Architect</strong> provides professional Vastu Shastra and astrology consultation for individuals, families, entrepreneurs, and commercial enterprises.
            </p>
            <p class="text-muted">
              Headquartered in <strong>Khategaon, near Indore, Madhya Pradesh</strong>, our practice focuses on understanding the sacred geometry between physical space, cardinal directions, architectural layouts, and time-tested Vedic principles. We pride ourselves on providing practical, non-destructive recommendations that clients can easily understand and implement.
            </p>
            <p class="text-muted">
              Whether designing a multi-acre industrial factory, a corporate headquarters, or an urban apartment, we align environmental energies with your personal astrological blueprint for lasting prosperity, health, and peace of mind.
            </p>
          </div>
          <div class="about-image-card">
            <div class="about-card-logo-stamp">
              <img src="/assets/anant_vastu_official_logo_transparent.png" alt="Anant Vastu Official Logo" />
            </div>
            <img src="/assets/about_founder_new.jpg" alt="Er. Pradeep Panwar - Anant Vastu Architect" class="about-visual-img" />
            <div class="about-stat-bar">
              <div class="as-item"><strong>500+</strong><span>Properties Aligned</span></div>
              <div class="as-item"><strong>100%</strong><span>Zero-Demolition Focus</span></div>
              <div class="as-item"><strong>Pan-India</strong><span>Online & Site Visits</span></div>
            </div>
          </div>
        </div>

        <!-- 6 Core Sections -->
        <div class="about-pillars-grid mt-5">
          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="compass"></i></div>
            <h3>Our Philosophy</h3>
            <p>We believe every structure is a living energy organism. By balancing the Pancha Bhootas (Five Elements) and 16 directional zones, we remove invisible energetic bottlenecks and foster continuous abundance.</p>
          </div>

          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="layers"></i></div>
            <h3>Our Scientific Approach</h3>
            <p>No superstition. No blind rituals. We utilize precise compass degrees, 16-zone energy grids, elemental color resonance, metallic energy neutralizers, and Vedic Astro-Vastu mapping.</p>
          </div>

          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="home"></i></div>
            <h3>Vastu Shastra Expertise</h3>
            <p>Decades of collective mastery spanning residential bungalows, corporate towers, hospitals, shopping malls, hotel resorts, educational institutions, and heavy manufacturing factories.</p>
          </div>

          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="sparkles"></i></div>
            <h3>Astrology Expertise</h3>
            <p>Comprehensive Vedic Kundli analysis (Lagna & Navamsha charts), Dasha timing, planetary transits, gemstone prescriptions, and tailored business & marital guidance.</p>
          </div>

          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="award"></i></div>
            <h3>Why Choose Us</h3>
            <p>Transparent communication, customized zero-demolition remedies, rapid turnaround reports, and dedicated post-consultation support for seamless execution.</p>
          </div>

          <div class="pillar-card">
            <div class="pc-icon"><i data-lucide="refresh-cw"></i></div>
            <h3>Our Consultation Process</h3>
            <p>1. Floor Plan & Kundli Intake → 2. 16-Zone Grid Analysis → 3. In-Depth 1-on-1 Strategy Session → 4. Actionable PDF Blueprint → 5. Follow-Up Review.</p>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="message-square"></i> Talk to a Vastu Expert</a>
          <a href="https://wa.me/918269646419" target="_blank" class="btn btn-whatsapp btn-lg ml-2"><i data-lucide="message-circle"></i> WhatsApp Us Directly</a>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 3. SERVICES MASTER PAGE
function renderServicesMasterPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Services</span></div>
        <h1 class="page-title">Vastu & Spiritual Services</h1>
        <p class="page-subtitle">Holistic spatial optimization, directional planning, Vedic astrology & energetic healing.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- VASTU SERVICES SECTION -->
        <div class="service-category-header">
          <div class="section-tag"><i data-lucide="compass"></i> SPATIAL INTELLIGENCE</div>
          <h2 class="section-title">Professional Vastu Consultancy Services</h2>
          <p class="text-muted">Every service includes detailed 16-zone analysis, directional score breakdown, non-demolition remedies, and step-by-step guidance.</p>
        </div>

        <div class="services-grid mb-5">
          ${allServicesData.vastu.map(s => `
            <div class="service-card">
              <div class="sc-icon-box"><i data-lucide="${s.icon}"></i></div>
              <h3 class="sc-title">${s.title}</h3>
              <p class="sc-desc">${s.desc}</p>
              <div class="sc-flow-mini">
                <span>Benefits</span> → <span>Analysis</span> → <span>Process</span>
              </div>
              <a href="${s.link}" class="sc-link">View Service Details <i data-lucide="arrow-right"></i></a>
            </div>
          `).join('')}
        </div>

        <!-- ASTROLOGY & SPIRITUAL SERVICES SECTION -->
        <div class="service-category-header mt-5">
          <div class="section-tag"><i data-lucide="sparkles"></i> DIVINE GUIDANCE</div>
          <h2 class="section-title">Astrology & Spiritual Consultation Services</h2>
          <p class="text-muted">Personalized natal horoscope readings, numerological name corrections, relationship harmony, and ritual pujas.</p>
        </div>

        <div class="services-grid">
          ${allServicesData.astrology.map(s => `
            <div class="service-card">
              <div class="sc-icon-box"><i data-lucide="${s.icon}"></i></div>
              <h3 class="sc-title">${s.title}</h3>
              <p class="sc-desc">${s.desc}</p>
              <div class="sc-flow-mini">
                <span>Benefits</span> → <span>Readings</span> → <span>Remedies</span>
              </div>
              <a href="${s.link}" class="sc-link">Explore Consultation <i data-lucide="arrow-right"></i></a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 4. BOOK CONSULTATION PAGE
function renderBookConsultationPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Book Consultation</span></div>
        <h1 class="page-title">Book Your Personal Consultation</h1>
        <p class="page-subtitle">Take the first step towards energizing your space and aligning your life with ancient Vedic precision.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="booking-layout-grid">
          <!-- Form Column -->
          <div class="booking-form-card">
            <div class="form-header">
              <h3><i data-lucide="calendar"></i> Consultation Booking Form</h3>
              <p class="text-muted">Fill out the details below and our expert team will contact you within 2 hours.</p>
            </div>

            <form id="consultationBookingForm" onsubmit="event.preventDefault(); window.handleBookingSubmit(this);">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Rahul Sharma" class="form-input" />
                </div>
                <div class="form-group">
                  <label>Phone Number (WhatsApp) *</label>
                  <input type="tel" name="phone" required placeholder="e.g. +91 98765 43210" class="form-input" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="e.g. rahul@example.com" class="form-input" />
                </div>
                <div class="form-group">
                  <label>City & State *</label>
                  <input type="text" name="city" required placeholder="e.g. Indore / Khategaon, MP" class="form-input" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Consultation Type *</label>
                  <select name="consultationType" required class="form-input" onchange="window.togglePropertyFields(this.value);">
                    <option value="Vastu Consultation">Vastu Consultation (Property / Space)</option>
                    <option value="Astrology Consultation">Astrology Consultation (Kundli & Life)</option>
                    <option value="Numerology Consultation">Numerology & Name Correction</option>
                    <option value="Marriage Compatibility">Marriage & Kundli Matching</option>
                    <option value="Both Vastu & Astro Synergy">Both Vastu & Astro Synergy</option>
                  </select>
                </div>
                <div class="form-group" id="propertyTypeGroup">
                  <label>Property Type</label>
                  <select name="propertyType" class="form-input">
                    <option value="Residential Apartment / Flat">Residential Apartment / Flat</option>
                    <option value="Independent House / Villa / Bungalow">Independent House / Villa / Bungalow</option>
                    <option value="Office / Commercial Workspace">Office / Commercial Workspace</option>
                    <option value="Shop / Showroom / Retail Store">Shop / Showroom / Retail Store</option>
                    <option value="Factory / Industrial Manufacturing">Factory / Industrial Manufacturing</option>
                    <option value="Open Plot / Land Selection">Open Plot / Land Selection</option>
                    <option value="Hospital / Hotel / School">Hospital / Hotel / School</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Preferred Consultation Date</label>
                  <input type="date" name="prefDate" class="form-input" />
                </div>
                <div class="form-group">
                  <label>Preferred Time Slot</label>
                  <select name="prefTime" class="form-input">
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Upload Floor Plan or Kundli (Optional, JPG/PNG/PDF)</label>
                <input type="file" name="floorPlan" accept=".jpg,.jpeg,.png,.pdf" class="form-input-file" />
                <small class="text-muted">Attach architectural drawing, sketch, or birth details.</small>
              </div>

              <div class="form-group">
                <label>Specific Questions or Areas of Concern</label>
                <textarea name="message" rows="3" placeholder="e.g. Facing financial hurdles, poor sleep in master bedroom, planning kitchen remodel..." class="form-input"></textarea>
              </div>

              <button type="submit" class="btn btn-gold btn-lg btn-block"><i data-lucide="check-circle"></i> Book Consultation Now</button>
            </form>
          </div>

          <!-- Contact & Options Column -->
          <div class="booking-sidebar">
            <div class="consultation-info-box">
              <div class="c-badge">2 CONVENIENT MODES</div>
              <h3>Consultation Options</h3>
              
              <div class="c-option-item">
                <div class="coi-icon"><i data-lucide="home"></i></div>
                <div>
                  <strong>Vastu Consultation</strong>
                  <p>For homes, offices, shops, factories, plots and commercial complexes. Available via Online Map Analysis or On-Site Visits.</p>
                </div>
              </div>

              <div class="c-option-item">
                <div class="coi-icon"><i data-lucide="sparkles"></i></div>
                <div>
                  <strong>Astrology Consultation</strong>
                  <p>For career, marriage, finance, health, relationships and major life decisions with precise birth chart calculation.</p>
                </div>
              </div>
            </div>

            <!-- Direct Contact Box -->
            <div class="direct-contact-card">
              <h4>Direct Consultation Hotline</h4>
              <p class="dc-phone"><i data-lucide="phone"></i> <a href="tel:+918269646419">+91 82696 46419</a></p>
              <p class="dc-location"><i data-lucide="map-pin"></i> Khategaon, near Indore, Madhya Pradesh</p>
              
              <div class="mt-3">
                <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu%20Architect,%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" class="btn btn-whatsapp btn-block">
                  <i data-lucide="message-circle"></i> Quick Chat on WhatsApp
                </a>
              </div>
            </div>

            <!-- Guarantee Box -->
            <div class="guarantee-box">
              <i data-lucide="shield-check" class="text-gold"></i>
              <div>
                <strong>100% Confidential & Authentic</strong>
                <p>Every consultation is strictly confidential with genuine Vedic remedies and zero structural demolition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. PRICING PAGE
function renderPricingPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Pricing</span></div>
        <h1 class="page-title">Transparent & Value-Driven Pricing</h1>
        <p class="page-subtitle">Invest in lifelong harmony, prosperity, and peace of mind with tailored consultation packages.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="pricing-cards-grid">
          ${pricingPlans.map(p => `
            <div class="pricing-card ${p.popular ? 'popular-card' : ''}">
              ${p.popular ? '<div class="popular-ribbon">Most Popular</div>' : ''}
              <div class="pc-cat">${p.category}</div>
              <h3 class="pc-title">${p.title}</h3>
              <div class="pc-amount">${p.price}</div>
              <p class="pc-desc">${p.desc}</p>
              
              <ul class="pc-features">
                ${p.features.map(f => `<li><i data-lucide="check"></i> ${f}</li>`).join('')}
              </ul>

              <a href="#/book-consultation" class="btn ${p.popular ? 'btn-gold' : 'btn-outline-gold'} btn-block">
                ${p.cta} <i data-lucide="arrow-right"></i>
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Custom Commercial Quote Box -->
        <div class="enterprise-quote-box mt-5">
          <div class="eq-content">
            <h3>Need Large Industrial, Hospital or Hotel Vastu?</h3>
            <p>For multi-acre land layouts, manufacturing plants, high-rise residential townships, and institutional campuses, we provide customized on-site audits and architectural blueprint reviews.</p>
          </div>
          <div class="eq-action">
            <a href="tel:+918269646419" class="btn btn-gold btn-lg"><i data-lucide="phone"></i> Call for Commercial Quote</a>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 6. COURSES PAGE
function renderProjectsPage() {
  const projectsList = [
    {
      title: "Commercial High-Rise Mega Project",
      tag: "Commercial Architecture",
      image: "/assets/project_1.jpg",
      spec: "16-Zone Aligned • 250,000 Sq Ft",
      desc: "Advanced architectural design integrating structural engineering with Vastu spatial energetics for maximized commercial tenancy and long-term asset value."
    },
    {
      title: "Ultra-Luxury Hilltop Villa",
      tag: "Residential Sanctuary",
      image: "/assets/vastu_villa.jpg",
      spec: "Brahmasthan Courtyard • 8,500 Sq Ft",
      desc: "Exquisite contemporary residence featuring panoramic glass facades, infinity pool orientation in East, and supreme master suite alignment in South-West."
    },
    {
      title: "Corporate Tech Park & Headquarters",
      tag: "Enterprise Hub",
      image: "/assets/project_3.png",
      spec: "Glass Facade • 120,000 Sq Ft",
      desc: "Modern corporate campus with leadership suites aligned for strategic vision and customer-facing entrance calibrated to North (Kuber)."
    },
    {
      title: "Smart Industrial Manufacturing Facility",
      tag: "Industrial Vastu",
      image: "/assets/vastu_factory.jpg",
      spec: "Solar Plant • Heavy Machinery Grid",
      desc: "Comprehensive plant layout with heavy equipment grounded in South-West, furnace in Agni zone, and dispatch logistics optimized in North-West."
    },
    {
      title: "16-Zone Master Land Plot Development",
      tag: "Land & Plot Planning",
      image: "/assets/vastu_plot.jpg",
      spec: "True Cardinal North • 50 Acres",
      desc: "Pre-construction geometric layout, slope analysis, and Veedhi Shula road remediation ensuring supreme harmony prior to structural foundation."
    },
    {
      title: "Sacred Marble Mandir & Pooja Sanctuary",
      tag: "Spiritual Space",
      image: "/assets/vastu_pooja.jpg",
      spec: "Italian Marble • Pure North-East",
      desc: "Handcrafted brass jali screen, energized deity altar, and sacred geometric proportions designed for deep spiritual tranquility."
    }
  ];

  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Projects</span></div>
        <h1 class="page-title">Architectural & Vastu Projects Gallery</h1>
        <p class="page-subtitle">A showcase of our luxury residential, commercial, industrial, and sacred space projects across India.</p>
      </div>
    </div>

    <section class="section" style="background: var(--bg-primary);">
      <div class="container">
        <div class="gallery-grid-enhanced">
          ${projectsList.map(p => `
            <div class="gallery-card-modern">
              <div class="gallery-card-img-wrap">
                <img src="${p.image}" alt="${p.title}" loading="lazy" />
                <span class="gallery-tag-badge">${p.tag}</span>
              </div>
              <div class="gallery-card-body">
                <h3 class="gallery-card-title">${p.title}</h3>
                <p class="gallery-card-desc">${p.desc}</p>
                <div class="gallery-card-footer">
                  <div class="gallery-card-spec"><i data-lucide="layers"></i> ${p.spec}</div>
                  <a href="#/book-consultation" class="btn btn-sm btn-outline-gold">Consult On Project <i data-lucide="arrow-right"></i></a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

function renderCoursesPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Courses</span></div>
        <h1 class="page-title">Professional Vastu & Astrology Training</h1>
        <p class="page-subtitle">Learn ancient Vedic sciences directly from experienced practitioners. Turn knowledge into a professional career.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="courses-full-stack">
          <!-- COURSE 1: VASTU CONSULTANT -->
          <div class="course-detail-card featured">
            <div class="course-card-visual">
              <img src="/assets/vastu_blueprint.jpg" alt="Vastu Consultant Certification" loading="lazy" />
            </div>
            <div class="cd-header">
              <div class="cd-badge">COURSE 1 • PROFESSIONAL CERTIFICATION</div>
              <div class="cd-title-row">
                <div>
                  <h2 class="cd-title">VASTU CONSULTANT</h2>
                  <p class="cd-subtitle">Become a Professional Certified Vastu Consultant</p>
                </div>
                <div class="cd-price-tag">
                  <div class="price-val">₹21,000</div>
                  <span class="price-note">Full 12-Week Curriculum</span>
                </div>
              </div>
            </div>

            <div class="cd-body">
              <p class="cd-description">
                A definitive, comprehensive masterclass covering authentic Vastu Shastra principles, 16-zone spatial mapping, 32 entrance points, non-destructive elemental remedies, and client consultation methodology. Designed for architects, civil engineers, interior designers, homemakers, and professionals.
              </p>

              <h4 class="curriculum-heading"><i data-lucide="book-open"></i> Complete Course Syllabus Includes:</h4>
              <div class="curriculum-grid-2col">
                ${coursesData[0].includes.map((item, idx) => `
                  <div class="curr-item">
                    <span class="curr-num">${idx + 1}</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>

              <div class="course-enroll-bar">
                <div class="ceb-info">
                  <i data-lucide="award" class="text-gold"></i> Includes Lifetime Support, Case Study Blueprints & Certificate
                </div>
                <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="check-circle"></i> Enroll Now — ₹21,000</a>
              </div>
            </div>
          </div>

          <!-- COURSE 2: ASTRO CONSULTANT -->
          <div class="course-detail-card mt-5">
            <div class="course-card-visual">
              <img src="/assets/vastu_astrology.jpg" alt="Astro Consultant Foundation" loading="lazy" />
            </div>
            <div class="cd-header">
              <div class="cd-badge">COURSE 2 • ASTROLOGY FOUNDATIONS</div>
              <div class="cd-title-row">
                <div>
                  <h2 class="cd-title">ASTRO CONSULTANT</h2>
                  <p class="cd-subtitle">Learn the Fundamentals of Vedic Astrology</p>
                </div>
                <div class="cd-price-tag">
                  <div class="price-val">₹2,100</div>
                  <span class="price-note">4-Week Foundation</span>
                </div>
              </div>
            </div>

            <div class="cd-body">
              <p class="cd-description">
                Master the timeless principles of Vedic Jyotish. Learn how to decode the 12 Bhavas (houses), 9 Navagrahas (planets), 12 Rashis (zodiacs), and 27 Nakshatras to evaluate career, marriage, health, and personal growth.
              </p>

              <h4 class="curriculum-heading"><i data-lucide="sparkles"></i> Course Syllabus Includes:</h4>
              <div class="curriculum-grid-2col">
                ${coursesData[1].includes.map((item, idx) => `
                  <div class="curr-item">
                    <span class="curr-num">${idx + 1}</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>

              <div class="course-enroll-bar">
                <div class="ceb-info">
                  <i data-lucide="book" class="text-gold"></i> Includes PDF Study Handouts & Kundli Reading Practice
                </div>
                <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="check-circle"></i> Enroll Now — ₹2,100</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 7. ELITE / PROFESSIONAL PROGRAM PAGE
function renderElitePage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Professional Program</span></div>
        <h1 class="page-title">Anant Vastu Professional Program</h1>
        <p class="page-subtitle">Advanced Professional Mentorship for Aspiring Vastu & Astrology Practitioners.</p>
        <div class="subpage-hero-visual">
          <img src="/assets/elite_program_new.jpg" alt="Expert Astrologer Pinki Panwar Mentorship Studio" />
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="elite-hero-card">
          <div class="elite-badge"><i data-lucide="crown"></i> ADVANCED PRACTITIONER PROGRAM</div>
          <h2>Elevate Your Practice with Real-World Case Studies & Architectural Methodologies</h2>
          <p class="lead-text">
            The <strong>Anant Vastu Professional Program</strong> is an intensive, high-level accelerator designed for practitioners, interior architects, and serious learners who wish to build a thriving, credible consultancy practice.
          </p>
        </div>

        <div class="elite-features-grid mt-5">
          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="book-marked"></i></div>
            <h3>Advanced Learning Modules</h3>
            <p>Go beyond elementary rules into 16-zone Shakti Chakra calculations, 32 entrance effects, geopathic stress detection, and astro-vastu spatial degrees.</p>
          </div>

          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="folder-kanban"></i></div>
            <h3>Live Real-World Case Studies</h3>
            <p>Analyse authentic industrial layouts, failed business turns converted into profit, high-rise luxury apartments, and complex plot shapes.</p>
          </div>

          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="briefcase"></i></div>
            <h3>Consultant Methodology & Pricing</h3>
            <p>Learn how to conduct client consultations, prepare premium audit reports, quote professional fees, and deliver non-demolition remedies.</p>
          </div>

          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="users"></i></div>
            <h3>Direct Professional Guidance</h3>
            <p>One-on-one mentorship sessions with senior consultants from Anant Vastu Architect to review your initial client floor plans.</p>
          </div>

          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="wrench"></i></div>
            <h3>Exclusive Tools & Resources</h3>
            <p>Access high-resolution CAD overlay grids, 16-zone calculation templates, client intake questionnaires, and remedy cheat sheets.</p>
          </div>

          <div class="elite-card">
            <div class="ec-icon"><i data-lucide="award"></i></div>
            <h3>Certification of Completion</h3>
            <p>Upon successfully presenting two verified case studies, receive the verified Certificate of Completion from Anant Vastu Architect.</p>
          </div>
        </div>

        <div class="elite-cta-box mt-5 text-center">
          <h3>Ready to Step Into the Professional Tier?</h3>
          <p class="text-muted">Admissions are evaluated on a rolling basis. Contact our mentorship coordinator today.</p>
          <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="file-text"></i> Apply for Professional Program</a>
          <a href="tel:+918269646419" class="btn btn-outline-light btn-lg ml-2"><i data-lucide="phone"></i> Call +91 82696 46419</a>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 8. VASTU SUBPAGES (DEDICATED INDUSTRY CONTENT)
function renderVastuSubpage(type) {
  const pagesConfig = {
    'home': {
      title: "Vastu for Home & Apartment",
      breadcrumb: "Home Vastu",
      subtitle: "Align your living space with the 16 directional zones for health, harmony, prosperity, and restful sleep.",
      topics: [
        { title: "Main Entrance (Maha Dwar)", desc: "North (Kuber) and North-East (Ishanya) bring continuous prosperity, while East (Surya) fosters social standing. Avoid SW entrance without metallic remediation." },
        { title: "Living Room & Social Area", desc: "Best positioned in East, North, or North-East to foster warm family conversations and positive guest prana." },
        { title: "Master Bedroom & Stability", desc: "Supreme placement in South-West (Nairitya) with head placed towards South for physical rejuvenation and authoritative grounding." },
        { title: "Kitchen & Fire Element (Agni)", desc: "Must be located in South-East (Agni Kona) or North-West (Vayu Kona). Never locate kitchen in North-East to prevent health and wealth drain." },
        { title: "Bathroom & Toilet Remediation", desc: "Best placed in SSW, WNW, or ESE disposal zones. Never in North-East or South-West without zinc/copper non-demolition strips." },
        { title: "Pooja Room & Sacred Space", desc: "Located in the pure Ishanya (North-East) corner. Face East or North while meditating or offering prayers." }
      ],
      ctaText: "Book Home Vastu Consultation"
    },
    'office-shop': {
      title: "Vastu for Office & Shop",
      breadcrumb: "Office & Shop Vastu",
      subtitle: "Optimize workspace energy, employee productivity, customer footfall, and financial cash flow.",
      topics: [
        { title: "Entrance & Reception", desc: "Inviting entrance in North or East to channel incoming opportunities and customer footfall." },
        { title: "Owner / Director Cabin", desc: "Placed in South-West facing North or East to command authority, decisive leadership, and long-term vision." },
        { title: "Employee Seating Dynamics", desc: "Marketing & sales in North-West (Vayu); Accounts & finance in North (Kuber); Operations in East." },
        { title: "Cash Counter & Billing Desk", desc: "Cash drawer opening towards North brings uninterrupted financial liquidity." },
        { title: "Meeting & Conference Rooms", desc: "North-West or East zones promote consensus and successful client negotiation closures." },
        { title: "Inventory & Storage Placement", desc: "Heavy inventory in South-West; Fast-moving goods in North-West for rapid turnover." }
      ],
      ctaText: "Book Office & Shop Vastu"
    },
    'factory': {
      title: "Industrial & Factory Vastu",
      breadcrumb: "Industrial Vastu",
      subtitle: "Enhance manufacturing output, eliminate machine breakdowns, and ensure seamless labor harmony.",
      topics: [
        { title: "Factory Entrance & Gates", desc: "Auspicious directional entry for staff, transport trucks, and visitor reception." },
        { title: "Heavy Machinery Placement", desc: "Located in South and South-West zones to ensure grounded vibration and minimal breakdowns." },
        { title: "Raw Material Storage", desc: "South-West or South zones provide stability for raw inventory before processing." },
        { title: "Finished Goods & Dispatch", desc: "North-West (Vayu) ensures fast inventory movement and prompt payments." },
        { title: "Electrical Transformer & Boiler", desc: "Strictly in South-East (Agni) zone to prevent electrical fires and power surges." },
        { title: "Administrative Office & QC Lab", desc: "North or East for strategic quality control and efficient dispatch management." }
      ],
      ctaText: "Book Factory Vastu Audit"
    },
    'plot-selection': {
      title: "Vastu Plot Selection & Land Evaluation",
      breadcrumb: "Plot Selection",
      subtitle: "Make confident real estate investments by assessing cardinal direction, soil vitality, and road hits.",
      topics: [
        { title: "Plot Direction & Orientation", desc: "True cardinal North, East, South, or West alignments; evaluating tilted angular plots." },
        { title: "Plot Shapes & Geometry", desc: "Square (Chatushkona) and Rectangular (Gaumukhi for homes, Shermukhi for business) considerations." },
        { title: "Road Hits (Veedhi Shula)", desc: "Identifying positive road approaches vs destructive T-junction hits and their remedies." },
        { title: "Land Slope & Water Drainage", desc: "Slope descending towards North and East brings natural prosperity and pranic accumulation." },
        { title: "Surrounding Environmental Factors", desc: "Evaluating nearby water bodies, temples, tall high-rises, and transmission towers." },
        { title: "Soil Testing & Energy Quality", desc: "Traditional Vedic soil fertility, fragrance, and energetic resonance checks." }
      ],
      ctaText: "Get Plot Selection Advice"
    },
    'business': {
      title: "Business Vastu Consultation",
      breadcrumb: "Business Vastu",
      subtitle: "Corporate prosperity, brand equity, partnership synergy, and sustained market leadership.",
      topics: [
        { title: "Commercial Buildings & Malls", desc: "Harmonizing atrium air flow, customer movement paths, and anchor store placements." },
        { title: "Startups & Tech Workspaces", desc: "Fostering creative innovation in North-East and rapid investor closure in North-West." },
        { title: "Restaurants & Food Hubs", desc: "Agni zone kitchen alignment, welcoming North-East entrance, and soothing ambient lighting." },
        { title: "Retail Chains & Showrooms", desc: "Display lighting in North & East; cash lockers in North; customer lounge in West." },
        { title: "Corporate Boardrooms", desc: "Strategic seating positions for Chairman, MD, and board directors to drive unified growth." },
        { title: "Partnership Compatibility", desc: "Evaluating Astro-Vastu alignment of co-founders for long-term commercial harmony." }
      ],
      ctaText: "Book Business Vastu Session"
    },
    'hospitals': {
      title: "Hospital & Healthcare Vastu",
      breadcrumb: "Hospital Vastu",
      subtitle: "Enhance patient recovery rates, diagnostic precision, and healthcare operational excellence.",
      topics: [
        { title: "Emergency & Casualty Entry", desc: "Positioned in North-West or East for swift admission and prompt medical intervention." },
        { title: "Operation Theatres (OT)", desc: "Located in South-East or North-North-East with surgeon facing North during procedures." },
        { title: "ICU & Recovery Wards", desc: "North-North-East (Immunity & Health zone) and East for fast cellular rejuvenation." },
        { title: "Diagnostic Equipment & MRI", desc: "Heavy X-Ray, CT Scan, and MRI machinery anchored in South-East or South." },
        { title: "Pharmacy & Medicine Dispensary", desc: "North-North-East zone ensures maximum potency and healing effectiveness." },
        { title: "Doctor Consultation Chambers", desc: "Doctor seated in South-West looking East/North for diagnostic clarity." }
      ],
      ctaText: "Consult for Hospital Vastu"
    },
    'hotels': {
      title: "Hotel & Restaurant Vastu",
      breadcrumb: "Hotel Vastu",
      subtitle: "Maximize guest occupancy, culinary acclaim, banquet bookings, and five-star hospitality prestige.",
      topics: [
        { title: "Main Lobby & Reception", desc: "Grand North or East entrance creating an uplifting, luxurious first impression." },
        { title: "Main Kitchen & Tandoor Oven", desc: "South-East (Agni) zone ensures tantalizing food flavors and high kitchen efficiency." },
        { title: "Dining Hall & Tables", desc: "West and North-West dining areas encourage guest appetite, enjoyment, and repeat visits." },
        { title: "Guest Rooms & Suites", desc: "South and South-West rooms provide deep, restful sleep and high guest review scores." },
        { title: "Bar & Lounge Area", desc: "North-West and West zones are perfect for social recreation and cocktail lounges." },
        { title: "Banquets & Conference Halls", desc: "East or North-East orientations for high-profile weddings and corporate events." }
      ],
      ctaText: "Consult for Hotel Vastu"
    },
    'it-offices': {
      title: "IT & Technology Office Vastu",
      breadcrumb: "IT Office Vastu",
      subtitle: "Drive cutting-edge software development, server uptime, agile collaboration, and global contracts.",
      topics: [
        { title: "Data Centers & Server Rooms", desc: "South-East or South zones to ensure uninterrupted power flow and hardware stability." },
        { title: "Software Engineers & Dev Pods", desc: "East and North-East seating to stimulate algorithmic innovation and intense focus." },
        { title: "Sprint & Agile Scrum Rooms", desc: "North-West (Air) encourages rapid ideation, cross-functional collaboration, and agility." },
        { title: "CEO / CTO Executive Cabins", desc: "South-West (Earth) zone provides visionary leadership and rock-solid decision-making." },
        { title: "Sales & Client Demo Rooms", desc: "North and North-West zones optimize international deal conversions and pitching." },
        { title: "Cafeteria & Game Lounges", desc: "East-North-East (Fun/Recreation) or South-East for employee recharge." }
      ],
      ctaText: "Consult for IT Office Vastu"
    },
    'schools': {
      title: "School & Educational Institution Vastu",
      breadcrumb: "School Vastu",
      subtitle: "Foster student academic excellence, teacher dedication, sports achievements, and institutional reputation.",
      topics: [
        { title: "Main Institutional Gate", desc: "North or East entrance channels Saraswati (Wisdom) and Surya (Knowledge) energies." },
        { title: "Classrooms & Learning Zones", desc: "Students facing East or North during lectures for enhanced memory retention." },
        { title: "Principal & Management Office", desc: "South-West corner commands student discipline and administrative excellence." },
        { title: "Science Labs & Computer Centers", desc: "Physics and Chemistry labs in South-East (Fire); Computer labs in East or North." },
        { title: "Library & Study Rooms", desc: "West-South-West (Knowledge zone) and North-East for quiet contemplation." },
        { title: "Playground & Sports Grounds", desc: "North-West or East for vigorous physical exercise and team vitality." }
      ],
      ctaText: "Consult for Educational Vastu"
    }
  };

  const page = pagesConfig[type] || pagesConfig['home'];

  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <a href="#/services">Services</a> / <span>${page.breadcrumb}</span></div>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-subtitle">${page.subtitle}</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="vastu-subpage-grid">
          <div class="vsg-main">
            <div class="section-tag"><i data-lucide="compass"></i> DIRECTIONAL ARCHITECTURE</div>
            <h2 class="section-title">Key Architectural Areas We Analyse</h2>
            <p class="text-muted">Our structured assessment examines directional degrees, elemental balance, and spatial movement patterns:</p>

            <div class="subpage-topics-grid mt-4">
              ${page.topics.map((t, idx) => `
                <div class="subtopic-card">
                  <div class="st-num">${idx + 1}</div>
                  <div class="st-content">
                    <h4>${t.title}</h4>
                    <p>${t.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Process & Benefits -->
            <div class="subpage-workflow-box mt-5">
              <h3><i data-lucide="git-commit"></i> Our 4-Stage Consultation Process</h3>
              <div class="workflow-steps-row">
                <div class="wf-step">
                  <span class="wf-badge">Step 1</span>
                  <strong>Blueprint Intake</strong>
                  <p>Floor plan & compass degrees review</p>
                </div>
                <div class="wf-step">
                  <span class="wf-badge">Step 2</span>
                  <strong>16-Zone Grid</strong>
                  <p>Shakti Chakra energy mapping</p>
                </div>
                <div class="wf-step">
                  <span class="wf-badge">Step 3</span>
                  <strong>Expert Review</strong>
                  <p>1-on-1 strategy & recommendations</p>
                </div>
                <div class="wf-step">
                  <span class="wf-badge">Step 4</span>
                  <strong>Zero-Demolition</strong>
                  <p>Actionable PDF remedy roadmap</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="vsg-sidebar">
            <div class="sidebar-action-card">
              <div class="sac-badge">NEED EXPERT ADVICE?</div>
              <h3>${page.title}</h3>
              <p class="text-muted">Get customized 16-zone recommendations for your specific property.</p>
              
              <a href="#/book-consultation" class="btn btn-gold btn-block btn-lg"><i data-lucide="calendar"></i> ${page.ctaText}</a>
              <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu,%20I%20need%20guidance%20on%20${encodeURIComponent(page.title)}" target="_blank" class="btn btn-whatsapp btn-block mt-2">
                <i data-lucide="message-circle"></i> WhatsApp +91 82696 46419
              </a>

              <hr class="my-4" />

              <h4>Related Vastu Services</h4>
              <ul class="sidebar-links-list">
                <li><a href="#/vastu/home"><i data-lucide="home"></i> Home & Villa Vastu</a></li>
                <li><a href="#/vastu/office-shop"><i data-lucide="briefcase"></i> Office & Shop Vastu</a></li>
                <li><a href="#/vastu/factory"><i data-lucide="factory"></i> Industrial & Factory Vastu</a></li>
                <li><a href="#/vastu/plot-selection"><i data-lucide="map-pin"></i> Plot & Land Selection</a></li>
                <li><a href="#/vastu/ai-report-generator"><i data-lucide="cpu"></i> AI Vastu Report Generator</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 9. AI VASTU REPORT GENERATOR PAGE
function renderAiReportGeneratorPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <a href="#/services">Vastu</a> / <span>AI Vastu Report</span></div>
        <h1 class="page-title">AI-Powered Vastu Report Generator</h1>
        <p class="page-subtitle">Upload your floor plan, enter orientation details, and receive a structured instant Vastu energy analysis.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- 5-Step Process Bar -->
        <div class="ai-process-bar">
          <div class="ap-item active"><span class="ap-dot">1</span> Upload Plan</div>
          <div class="ap-item"><span class="ap-dot">2</span> Property Details</div>
          <div class="ap-item"><span class="ap-dot">3</span> AI Analysis</div>
          <div class="ap-item"><span class="ap-dot">4</span> Expert Review</div>
          <div class="ap-item"><span class="ap-dot">5</span> Receive Report</div>
        </div>

        <div class="ai-report-grid mt-5">
          <!-- Form Section -->
          <div class="ai-form-card">
            <h3><i data-lucide="cpu"></i> Generate My Vastu Report</h3>
            <p class="text-muted">Enter property parameters to simulate instant 16-zone elemental calculations.</p>

            <form id="aiVastuForm" onsubmit="event.preventDefault(); window.handleAiReportSubmit(this);">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Ananya Patel" class="form-input" />
                </div>
                <div class="form-group">
                  <label>WhatsApp Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="e.g. +91 98765 43210" class="form-input" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Property Type *</label>
                  <select name="propertyType" required class="form-input">
                    <option value="Residential Apartment / Flat">Residential Apartment / Flat</option>
                    <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                    <option value="Commercial Office / Store">Commercial Office / Store</option>
                    <option value="Industrial Factory">Industrial Factory</option>
                    <option value="Open Plot / Land">Open Plot / Land</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Property Location / City *</label>
                  <input type="text" name="location" required placeholder="e.g. Indore, MP" class="form-input" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Main Entrance Facing Direction *</label>
                  <select name="facingDirection" required class="form-input">
                    <option value="North (0° - 350°)">North (0° - 350°)</option>
                    <option value="North-East (45°)">North-East (Ishanya, 45°)</option>
                    <option value="East (90°)">East (Surya, 90°)</option>
                    <option value="South-East (135°)">South-East (Agni, 135°)</option>
                    <option value="South (180°)">South (Yama, 180°)</option>
                    <option value="South-West (225°)">South-West (Nairitya, 225°)</option>
                    <option value="West (270°)">West (Varuna, 270°)</option>
                    <option value="North-West (315°)">North-West (Vayu, 315°)</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Number of Floors / Levels</label>
                  <select name="floors" class="form-input">
                    <option value="Single Floor / Flat">Single Floor / Flat</option>
                    <option value="Ground + 1 Floor (G+1)">Ground + 1 Floor (G+1)</option>
                    <option value="Ground + 2 Floors (G+2)">Ground + 2 Floors (G+2)</option>
                    <option value="Multi-Story Commercial">Multi-Story Commercial</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Upload Floor Plan Drawing / Sketch (PNG, JPG, PDF)</label>
                <input type="file" name="floorPlan" accept=".png,.jpg,.jpeg,.pdf" class="form-input-file" />
                <small class="text-muted">You can upload CAD layout, architect drawing, or even a hand-drawn sketch.</small>
              </div>

              <div class="form-group">
                <label>Specific Concerns (e.g. Health, Cash Flow, Sleep, Relationship)</label>
                <textarea name="concerns" rows="2" placeholder="e.g. Cash flow feels blocked, toilet located in North-East..." class="form-input"></textarea>
              </div>

              <button type="submit" class="btn btn-gold btn-lg btn-block"><i data-lucide="zap"></i> Generate My Vastu Report</button>
            </form>
          </div>

          <!-- Live AI Output Simulation Card -->
          <div class="ai-output-card" id="aiReportOutput">
            <div class="ai-empty-state">
              <div class="ae-icon"><i data-lucide="file-spreadsheet"></i></div>
              <h4>Instant Analysis Preview</h4>
              <p class="text-muted">Fill out the form on the left to simulate automated 16-zone elemental calculation and download the summary.</p>
              <div class="sample-badges">
                <span class="badge-gold">✓ 16-Zone Grid</span>
                <span class="badge-gold">✓ Elemental Radar</span>
                <span class="badge-gold">✓ Zero Demolition Tips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 10. ASTROLOGY PAGE
function renderAstrologyPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Astrology</span></div>
        <h1 class="page-title">Vedic Astrology Consultation</h1>
        <p class="page-subtitle">By Expert Astrologer <strong>Pinki Panwar</strong> — Unlock celestial insights with authentic Kundli analysis, planetary transits, and Vedic remedies.</p>
        <div class="subpage-hero-visual">
          <img src="/assets/vastu_astrology.jpg" alt="Vedic Astrology Kundli Chart" />
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="astro-overview-grid">
          <div class="astro-intro-text">
            <div class="section-tag"><i data-lucide="sparkles"></i> TIMING & DESTINY</div>
            <h2 class="section-title">Personalized Kundli-Based Life Guidance</h2>
            <p class="lead-text">
              Vedic Astrology (Jyotish) is the science of light that illuminates the karmic blueprint of your soul. By calculating the exact planetary positions at your time of birth, we provide actionable clarity for life's most pivotal choices.
            </p>
            <p class="text-muted">
              Our consultations integrate birth chart analysis (Lagna Kundli, Navamsha D9, Dashamsha D10), active Mahadasha/Antardasha timelines, Gochara (transits), and authentic remedies including mantras, gemstones, and charitable alignments.
            </p>
          </div>
          <div class="astro-badge-card">
            <div class="abc-icon"><i data-lucide="sun"></i></div>
            <h3>1-on-1 Confidential Reading</h3>
            <p>Direct live consultation with Expert Astrologer Pinki Panwar to answer your exact personal and professional questions.</p>
            <a href="#/book-consultation" class="btn btn-gold btn-block"><i data-lucide="calendar"></i> Book Astrology Session</a>
          </div>
        </div>

        <!-- 10 Life Areas Grid -->
        <h3 class="mt-5 mb-4 text-center">Consultation Domains We Cover</h3>
        <div class="astro-domains-grid">
          <div class="ad-card"><div class="ad-icon"><i data-lucide="briefcase"></i></div><h4>Career & Profession</h4><p>Promotions, job transitions, executive leadership, and favorable career timing.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="trending-up"></i></div><h4>Business & Startups</h4><p>Auspicious business launches, partnership synergy, and expansion periods.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="heart"></i></div><h4>Marriage & Relationships</h4><p>Timing of marriage, partner compatibility, resolving misunderstandings.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="dollar-sign"></i></div><h4>Finance & Wealth</h4><p>Investment timing, real estate purchases, debt resolution, and savings growth.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="book-open"></i></div><h4>Education & Higher Studies</h4><p>Competitive exams, field selection, studying abroad prospects.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="users"></i></div><h4>Family & Children</h4><p>Progeny prospects, child welfare, family peace, and ancestral blessings.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="help-circle"></i></div><h4>Major Life Decisions</h4><p>Relocation, property disputes, legal settlements, and crucial crossroads.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="pie-chart"></i></div><h4>Kundli & Dasha Analysis</h4><p>Complete 12-house deep dive with Vimshottari Mahadasha timeline mapping.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="clock"></i></div><h4>Shubh Muhurat</h4><p>Auspicious planetary timings for Griha Pravesh, weddings, and investments.</p></div>
          <div class="ad-card"><div class="ad-icon"><i data-lucide="shield"></i></div><h4>Vedic Remedies</h4><p>Pacification of Sade Sati, Mangal Dosha, Kaal Sarp, and Rahu-Ketu nodes.</p></div>
        </div>

        <div class="text-center mt-5">
          <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="calendar"></i> Book Astrology Consultation — ₹2,100</a>
          <a href="#/horoscope" class="btn btn-outline-gold btn-lg ml-2"><i data-lucide="compass"></i> View Daily Horoscope</a>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 11. NUMEROLOGY PAGE
function renderNumerologyPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Numerology</span></div>
        <h1 class="page-title">Numerology Consultation</h1>
        <p class="page-subtitle">Discover the vibrational resonance of your name, birth date, and commercial brand.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="about-overview-grid">
          <div>
            <div class="section-tag"><i data-lucide="hash"></i> NUMERICAL FREQUENCIES</div>
            <h2 class="section-title">Align Your Name & Business with Cosmic Numbers</h2>
            <p class="lead-text">
              Numbers are the mathematical language of the universe. When the letters in your name or business brand align with your foundational birth date, resistance vanishes and opportunities accelerate.
            </p>
            <p class="text-muted">
              We practice both <strong>Chaldean</strong> and <strong>Pythagorean</strong> systems to calculate your Life Path Number, Destiny Number, Soul Urge, and Personality vibration, providing subtle spelling corrections that harmonize without changing your official legal documents.
            </p>
          </div>
          <div class="numerology-calc-preview">
            <div class="ncp-box">
              <h4><i data-lucide="calculator"></i> Try Live Numerology Calculator</h4>
              <p class="text-muted">Calculate your Life Path & Destiny Number instantly:</p>
              <div class="form-group">
                <input type="text" id="numCalcName" placeholder="Enter Full Name" class="form-input" />
              </div>
              <div class="form-group">
                <input type="date" id="numCalcDob" class="form-input" />
              </div>
              <button onclick="window.runQuickNumerology()" class="btn btn-gold btn-block"><i data-lucide="zap"></i> Calculate Numbers</button>
              <div id="numCalcResult" class="mt-3"></div>
            </div>
          </div>
        </div>

        <h3 class="mt-5 mb-4 text-center">Core Numerology Services</h3>
        <div class="numerology-services-grid">
          <div class="ns-card"><div class="ns-icon">1</div><h4>Personal Name Analysis</h4><p>Decoding the vibrational blueprint of your given name and life potential.</p></div>
          <div class="ns-card"><div class="ns-icon">2</div><h4>Business & Brand Name</h4><p>Creating high-frequency brand names for startups, products, and commercial ventures.</p></div>
          <div class="ns-card"><div class="ns-icon">3</div><h4>Life Path & Destiny Number</h4><p>Understanding your core life mission, karmic challenges, and inherent gifts.</p></div>
          <div class="ns-card"><div class="ns-icon">4</div><h4>Name Spelling Correction</h4><p>Optimizing letter additions to create positive compound number resonance.</p></div>
          <div class="ns-card"><div class="ns-icon">5</div><h4>Lucky Numbers & Colors</h4><p>Identifying favorable days, mobile numbers, vehicle registration numbers, and colors.</p></div>
          <div class="ns-card"><div class="ns-icon">6</div><h4>Important Dates & Timing</h4><p>Selecting lucky dates for contract signings, product launches, and major milestones.</p></div>
        </div>

        <div class="text-center mt-5">
          <a href="#/book-consultation" class="btn btn-gold btn-lg"><i data-lucide="calendar"></i> Book Numerology Consultation</a>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 12. DEDICATED OTHER SERVICES
function renderDedicatedServicePage(slug) {
  const serviceMap = {
    'marriage-compatibility': {
      title: "Marriage Compatibility & Kundli Matching",
      breadcrumb: "Marriage Compatibility",
      subtitle: "36-Guna Ashtakoot Milan, Nadi Dosha, Bhakoot, and Manglik evaluation for marital bliss.",
      desc: "Marriage is the sacred union of two souls and two family karmas. Our in-depth Kundli matching evaluates physical, psychological, financial, and spiritual compatibility using authentic Vedic Ashtakoot principles.",
      benefits: ["Identifies mutual emotional & mental temperament", "Prevents severe Nadi & Bhakoot complications", "Evaluates Manglik Dosha cancellations", "Provides customized pre-marital Vedic remedies"],
      whatWeAnalyse: ["Varna (Ego & Work)", "Vashya (Mutual Attraction)", "Tara (Longevity & Luck)", "Yoni (Intimacy)", "Graha Maitri (Friendship)", "Gana (Temperament)", "Bhakoot (Family Wealth)", "Nadi (Progeny Health)"],
      process: ["1. Collect birth details of Bride & Groom", "2. Compute 36 Guna Ashtakoot score", "3. Evaluate Navamsha (D9) & 7th House Lords", "4. Provide compatibility report with remedial advice"],
      faqs: [
        { q: "What is a safe Guna score for marriage?", a: "A score above 18 is acceptable, 24+ is considered very good (Madhyam), and 30+ is excellent (Uttam)." },
        { q: "Can Nadi Dosha or Mangal Dosha be cancelled?", a: "Yes, classical Vedic texts contain multiple natural cancellation rules based on sign lords, Nakshatra padas, and Jupiter aspects." }
      ]
    },
    'palmistry': {
      title: "Palmistry Consultation (Hasta Samudrika)",
      breadcrumb: "Palmistry",
      subtitle: "Discover your destiny etched in the lines, mounts, and sacred signs of your hands.",
      desc: "Hasta Samudrika Shastra is the ancient Vedic science of hand analysis. Your palms reflect your subconscious neurological pathways and karmic potentials across career, love, health, and wealth.",
      benefits: ["Validates birth chart timings without exact birth minute", "Reveals hidden creative and executive talents", "Identifies health vulnerabilities and vitality indicators", "Guides career shifts and major life turning points"],
      whatWeAnalyse: ["Life Line (Jeevan Rekha) & Vitality", "Heart Line (Hridaya Rekha) & Relationships", "Head Line (Mastishk Rekha) & Intellect", "Fate Line (Bhagya Rekha) & Wealth", "Mounts of Jupiter, Sun, Saturn, Venus & Mars", "Signs like Fish, Temple, Lotus, and Trident"],
      process: ["1. Submit clear high-res photos of both palms", "2. Analyse major lines, minor lines & mounts", "3. 1-on-1 consultation discussing life milestones", "4. Recommended gemstone/mantra remedies"],
      faqs: [
        { q: "Which hand is analysed in Palmistry?", a: "Both hands are evaluated: the non-dominant hand shows inherited karmic blueprint, while the dominant hand shows your actively manifested reality." }
      ]
    },
    'tarot-reading': {
      title: "Tarot Reading & Intuitive Guidance",
      breadcrumb: "Tarot Reading",
      subtitle: "Gain immediate clarity and perspective on pressing relationship, career, and personal choices.",
      desc: "Tarot acts as a sacred energetic mirror. Through intuitive archetypal symbolism, Tarot reading unlocks clarity for immediate decisions, crossroads, and hidden influences surrounding your life situation.",
      benefits: ["Immediate clarity for urgent dilemmas", "Reveals hidden intentions of people around you", "Provides actionable steps for love and career breakthroughs", "Unlocks emotional peace and empowering perspective"],
      whatWeAnalyse: ["Current energetic mindset & subconscious blocks", "External influences and environment", "Immediate future probabilities and outcomes", "Empowering advice and spiritual action steps"],
      process: ["1. Focus on your specific question", "2. Multi-card sacred spread reading", "3. Detailed interpretation of Major & Minor Arcana", "4. Direct practical guidance"],
      faqs: [
        { q: "Can Tarot answer specific questions?", a: "Yes, Tarot excels at providing deep insight into specific questions regarding career moves, relationship dynamics, and decision timing." }
      ]
    },
    'online-puja': {
      title: "Online Puja & Vedic Havan",
      breadcrumb: "Online Puja",
      subtitle: "Authentic Vedic rituals performed by learned priests for dosha nivaran, peace, and prosperity.",
      desc: "Connect with divine grace through authentic Vedic rituals. Our online pujas are performed by learned Vedic Brahmins in sacred sanctums with full Sankalpa taken in your and your family’s name.",
      benefits: ["Pacifies malefic planetary doshas (Rahu, Ketu, Shani, Mangal)", "Cleanses negative environmental and ancestral energy", "Invokes blessings of Lakshmi, Ganesha, Shiva & Navagrahas", "Livestreamed with energized Prasad dispatched to your address"],
      whatWeAnalyse: ["Individual Kundli for appropriate ritual selection", "Auspicious Tithi and Nakshatra timing (Muhurat)", "Gotra, birth Nakshatra, and specific Sankalpa prayers"],
      process: ["1. Select required Puja (e.g. Navagraha, Mahamrityunjaya, Vastu Shanti)", "2. Provide birth details and Gotra for Sankalpa", "3. Watch live online ritual participation", "4. Receive energized Yantra / Prasad at your doorstep"],
      faqs: [
        { q: "Is an online puja as effective as in-person?", a: "Yes! In Vedic Shastra, Sankalpa (conscious intention) is non-local and operates beyond physical distance." }
      ]
    },
    'feng-shui': {
      title: "Feng Shui Consultation",
      breadcrumb: "Feng Shui",
      subtitle: "Harness the natural flow of Chi (vital life force) with ancient Eastern spatial harmonization.",
      desc: "Feng Shui (Wind & Water) harmonizes human existence with surrounding spatial environments. By balancing Yin and Yang and the Five Taoist Elements (Wood, Fire, Earth, Metal, Water), abundance and peace enter your life.",
      benefits: ["Unblocks stagnant chi in hallways and rooms", "Enhances wealth corner with auspicious water features", "Attracts love and harmony with paired symbols", "Complements Vedic Vastu for modern interiors"],
      whatWeAnalyse: ["Bagua 9-Sector Energy Grid", "Front door Chi flow & poison arrows (Sha Chi)", "Five-element balance in interior decor & colors", "Placement of mirrors, plants, crystals & water features"],
      process: ["1. Floor plan and entrance orientation review", "2. Bagua overlay and element diagnosis", "3. Non-invasive placement recommendations", "4. Follow-up energetic assessment"],
      faqs: [
        { q: "Can Feng Shui be combined with Vastu Shastra?", a: "Yes, both sciences share profound elemental roots and can be harmoniously integrated for maximum energetic resonance." }
      ]
    },
    'reiki': {
      title: "Reiki Healing & Pranic Alignment",
      breadcrumb: "Reiki Healing",
      subtitle: "Channel universal life force energy for emotional release, chakra balancing, and deep rejuvenation.",
      desc: "Reiki is a Japanese hands-on and distance energy healing modality. It works directly on the human subtle body (chakras and nadis) to dissolve stress, clear emotional trauma, and restore natural vitality.",
      benefits: ["Alleviates chronic stress and anxiety", "Balances the 7 primary chakras", "Accelerates physical recovery and sound sleep", "Works effectively across distances via remote healing"],
      whatWeAnalyse: ["Chakra energy flow & blockages", "Aura field vibrancy and leaks", "Emotional and physical stress accumulation points"],
      process: ["1. Initial energetic consultation", "2. Distance or in-person 45-minute healing session", "3. Chakra balancing and grounding ritual", "4. Post-session self-care guidance"],
      faqs: [
        { q: "How does distance Reiki work?", a: "Energy transcends space and time. Practitioners connect with the recipient's energetic signature to transmit healing vibration." }
      ]
    },
    'gemstone-rudraksha': {
      title: "Gemstone & Rudraksha Guidance",
      breadcrumb: "Gemstone & Rudraksha",
      subtitle: "Certified natural Jyotish gemstones and authentic Mukhi Rudrakshas tailored to your birth chart.",
      desc: "Natural untreated gemstones act as optical prisms for celestial cosmic rays, while sacred Mukhi Rudraksha beads emit bio-magnetic frequencies that stabilize the nervous system and calm malefic planetary energies.",
      benefits: ["Revitalizes weak benefic planets (Lagna lord, Yogakaraka)", "Authentic 100% lab-certified natural unheated gemstones", "Correct metal, finger, day, and energization mantras", "Shields against negative vibes and boosts confidence"],
      whatWeAnalyse: ["Ascendant (Lagna) & Moon Sign (Rashi)", "Current Mahadasha & Antardasha planetary lords", "Dosha pacification requirements (Shani, Rahu, Ketu)", "Compatibility check to avoid wearing conflicting stones"],
      process: ["1. Birth chart analysis for auspicious stone selection", "2. Selection of Jyotish-quality natural gem / Rudraksha", "3. Vedic consecration and Pran Pratishtha ritual", "4. Step-by-step wearing muhurat instructions"],
      faqs: [
        { q: "How do I know if a gemstone suits me?", a: "Gemstones should only be prescribed based on your functional benefic planets in your birth chart, never solely by sun sign." }
      ]
    }
  };

  const s = serviceMap[slug] || serviceMap['marriage-compatibility'];

  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <a href="#/services">Services</a> / <span>${s.breadcrumb}</span></div>
        <h1 class="page-title">${s.title}</h1>
        <p class="page-subtitle">${s.subtitle}</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="dedicated-service-layout">
          <div class="dsl-content">
            <div class="section-tag"><i data-lucide="sparkles"></i> ABOUT THIS SERVICE</div>
            <h2 class="section-title">Deep Wisdom, Lasting Transformation</h2>
            <p class="lead-text">${s.desc}</p>

            <h3 class="mt-5 mb-3"><i data-lucide="check-circle" class="text-gold"></i> Key Benefits</h3>
            <div class="benefits-grid">
              ${s.benefits.map(b => `
                <div class="benefit-item"><i data-lucide="check" class="text-gold"></i> <span>${b}</span></div>
              `).join('')}
            </div>

            <h3 class="mt-5 mb-3"><i data-lucide="search" class="text-gold"></i> What We Analyse</h3>
            <div class="analyse-grid">
              ${s.whatWeAnalyse.map(a => `
                <div class="analyse-item"><i data-lucide="compass" class="text-gold"></i> <span>${a}</span></div>
              `).join('')}
            </div>

            <h3 class="mt-5 mb-3"><i data-lucide="git-commit" class="text-gold"></i> Consultation Process</h3>
            <div class="process-steps-list">
              ${s.process.map(p => `
                <div class="ps-item"><i data-lucide="arrow-right-circle" class="text-gold"></i> <span>${p}</span></div>
              `).join('')}
            </div>

            ${s.faqs ? `
              <h3 class="mt-5 mb-3"><i data-lucide="help-circle" class="text-gold"></i> Frequently Asked Questions</h3>
              <div class="faq-list">
                ${s.faqs.map(f => `
                  <div class="faq-card">
                    <h4>${f.q}</h4>
                    <p class="text-muted">${f.a}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="dsl-sidebar">
            <div class="sidebar-action-card">
              <div class="sac-badge">BOOK CONSULTATION</div>
              <h3>${s.title}</h3>
              <p class="text-muted">Schedule your 1-on-1 session with our certified Vedic practitioners.</p>
              <a href="#/book-consultation" class="btn btn-gold btn-block btn-lg"><i data-lucide="calendar"></i> Book This Service</a>
              <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu,%20I%20am%20interested%20in%20${encodeURIComponent(s.title)}" target="_blank" class="btn btn-whatsapp btn-block mt-2">
                <i data-lucide="message-circle"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 13. TOOLS HUB & CALCULATORS PAGE
function renderToolsHubPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Tools</span></div>
        <h1 class="page-title">Interactive Vastu & Astrology Tools</h1>
        <p class="page-subtitle">Free professional calculators branded for Anant Vastu Architect.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Tools Navigation Tabs -->
        <div class="tools-tab-bar" id="toolsTabBar">
          <button class="tool-tab-btn active" data-tool="compass"><i data-lucide="compass"></i> Vastu Compass</button>
          <button class="tool-tab-btn" data-tool="numerology"><i data-lucide="hash"></i> Numerology Calculator</button>
          <button class="tool-tab-btn" data-tool="muhurat"><i data-lucide="clock"></i> Muhurat Finder</button>
          <button class="tool-tab-btn" data-tool="kundli-match"><i data-lucide="heart"></i> Kundli Matching</button>
          <button class="tool-tab-btn" data-tool="gemstone"><i data-lucide="shield"></i> Gemstone Finder</button>
          <button class="tool-tab-btn" data-tool="baby-name"><i data-lucide="sparkles"></i> Baby Names</button>
          <button class="tool-tab-btn" data-tool="dream"><i data-lucide="book"></i> Dream Dictionary</button>
        </div>

        <div class="tool-content-container mt-4" id="toolContentContainer">
          <!-- Default: Vastu Compass -->
          ${renderVastuCompassTool()}
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// Sub-Tool 1: Vastu Compass
export function renderVastuCompassTool() {
  return `
    <div class="interactive-tool-box">
      <div class="it-header">
        <div class="section-tag"><i data-lucide="compass"></i> 16-DIRECTION COMPASS & REMEDIES</div>
        <h3>Anant Vastu Interactive Direction Tester</h3>
        <p class="text-muted">Select any cardinal or intermediate direction to view its governing deity, elemental attributes, and non-demolition remedies.</p>
      </div>

      <div class="compass-interactive-grid">
        <div class="compass-wheel-col">
          <div class="compass-wheel-ui" id="compassWheelUi">
            <div class="compass-needle" id="compassNeedle"></div>
            <div class="compass-dial-center">
              <span id="centerDirCode">N</span>
              <small id="centerDegrees">0°</small>
            </div>
            <div class="compass-direction-markers">
              ${Object.keys(vastuDirectionsData).map(k => `
                <button class="dir-marker-btn ${k === 'N' ? 'active' : ''}" data-dir="${k}" onclick="window.selectCompassDirection('${k}')">
                  ${k}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="compass-details-col" id="compassDetailsCol">
          ${renderCompassDetailCard('N')}
        </div>
      </div>
    </div>
  `;
}

export function renderCompassDetailCard(dirKey) {
  const d = vastuDirectionsData[dirKey] || vastuDirectionsData['N'];
  return `
    <div class="dir-result-card">
      <div class="drc-top">
        <span class="drc-badge">${d.name} (${d.angle}°)</span>
        <span class="drc-status status-${d.status.toLowerCase().replace(/ /g, '-')}">${d.status}</span>
      </div>
      <h4>Governing Deity: <span class="text-gold">${d.deity}</span></h4>
      <p><strong>Primary Element:</strong> ${d.element}</p>
      <p><strong>Core Life Quality:</strong> ${d.quality}</p>
      <div class="drc-remedy-box">
        <strong><i data-lucide="shield-check" class="text-gold"></i> Non-Demolition Remedy:</strong>
        <p>${d.remedy}</p>
      </div>
      <div class="mt-3">
        <a href="#/book-consultation" class="btn btn-gold btn-block"><i data-lucide="calendar"></i> Book Vastu Consultation for ${dirKey} Zone</a>
      </div>
    </div>
  `;
}

// 14. BLOG MASTER PAGE
function renderBlogPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Blog</span></div>
        <h1 class="page-title">Anant Vastu Architect Blog</h1>
        <p class="page-subtitle">Authoritative research, guides, and Vedic wisdom for modern living.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Category Filters -->
        <div class="blog-filter-bar">
          <button class="blog-cat-btn active" onclick="window.filterBlogCategory('all', this)">All Categories</button>
          <button class="blog-cat-btn" onclick="window.filterBlogCategory('Home Vastu', this)">Home Vastu</button>
          <button class="blog-cat-btn" onclick="window.filterBlogCategory('Astrology', this)">Astrology</button>
          <button class="blog-cat-btn" onclick="window.filterBlogCategory('Numerology', this)">Numerology</button>
          <button class="blog-cat-btn" onclick="window.filterBlogCategory('Remedies', this)">Remedies</button>
        </div>

        <div class="blog-articles-grid mt-4" id="blogArticlesGrid">
          ${blogArticles.map(article => `
            <div class="blog-card" data-cat="${article.category}">
              <div class="blog-card-thumb-wrap">
                <img src="${article.image || '/assets/vastu_villa.jpg'}" alt="${article.title}" loading="lazy" />
              </div>
              <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
                <div class="bc-cat-tag">${article.category}</div>
                <h3 class="bc-title"><a href="#/blog/${article.slug}">${article.title}</a></h3>
                <div class="bc-meta"><i data-lucide="user"></i> ${article.author} • <i data-lucide="calendar"></i> ${article.date} • ${article.readTime}</div>
                <p class="bc-summary">${article.summary}</p>
                <a href="#/blog/${article.slug}" class="bc-readmore">Read Full Article <i data-lucide="arrow-right"></i></a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 15. BLOG ARTICLE DETAIL PAGE
function renderBlogDetailPage(slug) {
  const article = blogArticles.find(a => a.slug === slug) || blogArticles[0];

  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <a href="#/blog">Blog</a> / <span>${article.title}</span></div>
        <div class="article-cat-badge">${article.category}</div>
        <h1 class="page-title">${article.title}</h1>
        <div class="article-meta-hero">By <strong>${article.author}</strong> | Published ${article.date} | ${article.readTime}</div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="article-layout-grid">
          <div class="article-main-content">
            <div class="article-body typography">
              ${article.content}
            </div>

            <hr class="my-5" />

            <div class="author-bio-card">
              <img src="/assets/consultant_headshot.jpg" alt="Anant Vastu Consultant" class="author-avatar" />
              <div>
                <h4>About Anant Vastu Architect</h4>
                <p class="text-muted">Anant Vastu Architect is a leading Vastu Shastra and Vedic Astrology consultancy located in Khategaon, near Indore, Madhya Pradesh, specializing in scientific zero-demolition spatial balance and Astro-Vastu alignment.</p>
                <a href="#/book-consultation" class="btn btn-gold btn-sm"><i data-lucide="calendar"></i> Book Consultation with Author</a>
              </div>
            </div>
          </div>

          <div class="article-sidebar">
            <div class="sidebar-action-card">
              <h4>Related Articles</h4>
              <ul class="sidebar-articles-list">
                ${blogArticles.filter(a => a.slug !== article.slug).map(a => `
                  <li>
                    <a href="#/blog/${a.slug}">
                      <strong>${a.title}</strong>
                      <span class="text-muted">${a.category} • ${a.date}</span>
                    </a>
                  </li>
                `).join('')}
              </ul>

              <div class="mt-4">
                <a href="#/book-consultation" class="btn btn-gold btn-block"><i data-lucide="phone"></i> Talk to a Vastu Expert</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 16. HOROSCOPE PAGE (ALL 12 ZODIACS)
function renderHoroscopePage(selectedSign) {
  const currentSign = selectedSign ? (horoscopesData.find(h => h.sign.toLowerCase() === selectedSign.toLowerCase()) || horoscopesData[0]) : null;

  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <a href="#/astrology">Astrology</a> / <span>Daily Horoscope</span></div>
        <h1 class="page-title">Daily Horoscope — Anant Vastu Architect</h1>
        <p class="page-subtitle">Accurate Vedic astrological forecasts for all 12 Rashis based on planetary transits.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- 12 Signs Navigation Bar -->
        <div class="zodiac-scroll-row">
          ${horoscopesData.map(h => `
            <a href="#/horoscope/${h.sign.toLowerCase()}" class="zodiac-pill ${(currentSign && currentSign.sign === h.sign) ? 'active' : ''}">
              <strong>${h.sign}</strong>
              <small>(${h.sanskrit})</small>
            </a>
          `).join('')}
        </div>

        ${currentSign ? `
          <!-- Single Sign Detail Card -->
          <div class="horoscope-detail-card mt-5">
            <div class="hdc-header">
              <div>
                <span class="badge-gold">ZODIAC FORECAST</span>
                <h2>${currentSign.sign} (${currentSign.sanskrit})</h2>
              </div>
              <div class="hdc-attributes">
                <span><strong>Element:</strong> ${currentSign.element}</span>
                <span><strong>Ruling Planet:</strong> ${currentSign.planet}</span>
                <span><strong>Lucky Number:</strong> ${currentSign.luckNum}</span>
                <span><strong>Lucky Color:</strong> ${currentSign.color}</span>
              </div>
            </div>

            <div class="hdc-body">
              <h3>Today's Vedic Transit Forecast</h3>
              <p class="lead-text">${currentSign.forecast}</p>
            </div>

            <div class="hdc-footer">
              <a href="#/book-consultation" class="btn btn-gold"><i data-lucide="calendar"></i> Book Personalized Kundli Analysis for ${currentSign.sign}</a>
              <a href="#/horoscope" class="btn btn-outline-light ml-2">View All 12 Signs</a>
            </div>
          </div>
        ` : `
          <!-- 12 Signs Full Grid -->
          <div class="horoscopes-12-grid mt-5">
            ${horoscopesData.map(h => `
              <div class="horoscope-card">
                <div class="hc-top">
                  <h3>${h.sign} <small>(${h.sanskrit})</small></h3>
                  <span class="hc-element">${h.element}</span>
                </div>
                <div class="hc-meta">Ruler: <strong>${h.planet}</strong> | Luck: <strong>#${h.luckNum}</strong> | Color: <strong>${h.color}</strong></div>
                <p class="hc-text">${h.forecast}</p>
                <a href="#/horoscope/${h.sign.toLowerCase()}" class="hc-link">Read Full Forecast <i data-lucide="arrow-right"></i></a>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 17. CONTACT PAGE
function renderContactPage() {
  return `
    <div class="page-hero">
      <div class="container">
        <div class="page-breadcrumb"><a href="#/">Home</a> / <span>Contact</span></div>
        <h1 class="page-title">Contact Anant Vastu Architect</h1>
        <p class="page-subtitle">We are here to assist with your residential, commercial, and personal astrological queries.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="contact-page-grid">
          <!-- Info Col -->
          <div class="contact-info-card">
            <div class="section-tag"><i data-lucide="map-pin"></i> HEADQUARTERS</div>
            <h2>Anant Vastu Architect</h2>
            <p class="text-muted">Serving clients in Khategaon, Indore, Madhya Pradesh, and across India via on-site visits and seamless online consultations.</p>

            <div class="contact-details-list mt-4">
              <div class="cdl-item">
                <i data-lucide="phone-call" class="text-gold"></i>
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p><a href="tel:+918269646419">+91 82696 46419</a></p>
                </div>
              </div>

              <div class="cdl-item">
                <i data-lucide="map-pin" class="text-gold"></i>
                <div>
                  <strong>Office Location:</strong>
                  <p>Khategaon, near Indore, Madhya Pradesh, India - 455336</p>
                </div>
              </div>

              <div class="cdl-item">
                <i data-lucide="mail" class="text-gold"></i>
                <div>
                  <strong>Email Inquiries:</strong>
                  <p><a href="mailto:aanantvastu@gmail.com">aanantvastu@gmail.com</a> / <a href="mailto:Pradeepanwar94@gmail.com">Pradeepanwar94@gmail.com</a></p>
                </div>
              </div>

              <div class="cdl-item">
                <i data-lucide="clock" class="text-gold"></i>
                <div>
                  <strong>Consultation Hours:</strong>
                  <p>Monday – Sunday: 09:00 AM – 08:30 PM (IST)</p>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu%20Architect,%20I%20have%20an%20inquiry" target="_blank" class="btn btn-whatsapp btn-block btn-lg">
                <i data-lucide="message-circle"></i> Chat on WhatsApp (+91 82696 46419)
              </a>
            </div>
          </div>

          <!-- Quick Message Form -->
          <div class="contact-form-card">
            <h3><i data-lucide="mail"></i> Send Us an Inquiry</h3>
            <form onsubmit="event.preventDefault(); window.handleBookingSubmit(this);">
              <div class="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" required placeholder="e.g. Vikram Sharma" class="form-input" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>WhatsApp Number *</label>
                  <input type="tel" name="phone" required placeholder="e.g. +91 98765 43210" class="form-input" />
                </div>
                <div class="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required placeholder="e.g. Khategaon / Indore" class="form-input" />
                </div>
              </div>
              <div class="form-group">
                <label>Service of Interest</label>
                <select name="consultationType" class="form-input">
                  <option value="Home Vastu Consultation">Home Vastu Consultation</option>
                  <option value="Business & Office Vastu">Business & Office Vastu</option>
                  <option value="Factory & Industrial Vastu">Factory & Industrial Vastu</option>
                  <option value="Astrology / Kundli Reading">Astrology / Kundli Reading</option>
                  <option value="Vastu Consultant Course (₹21,000)">Vastu Consultant Course (₹21,000)</option>
                  <option value="Astro Consultant Course (₹2,100)">Astro Consultant Course (₹2,100)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="How can we assist you today?" class="form-input"></textarea>
              </div>
              <button type="submit" class="btn btn-gold btn-block btn-lg"><i data-lucide="send"></i> Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    ${renderGlobalCtaBanner()}
  `;
}

// 18. 404 PAGE
function render404Page() {
  return `
    <div class="page-hero text-center">
      <div class="container">
        <h1 class="page-title">404 - Page Not Found</h1>
        <p class="page-subtitle">The requested direction could not be located on our compass.</p>
        <div class="mt-4">
          <a href="#/" class="btn btn-gold"><i data-lucide="home"></i> Return to Homepage</a>
        </div>
      </div>
    </div>
  `;
}

// 19. GLOBAL CTA BANNER
export function renderGlobalCtaBanner() {
  return `
    <section class="global-cta-banner">
      <div class="container">
        <div class="gcb-box">
          <div class="gcb-logo-wrap">
            <img src="/assets/anant_vastu_logo_transparent.png" alt="Anant Vastu Architect" class="gcb-brand-logo" />
          </div>
          <div class="gcb-text">
            <div class="section-tag"><i data-lucide="compass"></i> NEED VASTU GUIDANCE?</div>
            <h2>Get Personalised Guidance For Your Home, Office, Business or Property</h2>
            <p>Connect directly with Anant Vastu Architect for authentic zero-demolition solutions and Astro-Vastu alignment.</p>
          </div>
          <div class="gcb-actions">
            <a href="tel:+918269646419" class="btn btn-call-large"><i data-lucide="phone"></i> Call +91 82696 46419</a>
            <a href="#/book-consultation" class="btn btn-gold-large"><i data-lucide="calendar"></i> Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
