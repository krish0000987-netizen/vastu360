import { createIcons, icons } from 'lucide';
import { renderRoute, renderCompassDetailCard, renderVastuCompassTool } from './router.js';
import {
  vastuDirectionsData,
  calculateNumerology,
  calculateKundliMilan,
  muhuratData,
  gemstonesData,
  babyNamesData,
  dreamDictionary
} from './data/toolsData.js';

// Global state
let heroInterval = null;
let currentSlideIndex = 0;

// Initialize Lucide Icons
export function refreshIcons() {
  createIcons({ icons });
}

// 1. HERO SLIDESHOW CONTROLLER
function setupHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.indicator-dot');
  const prevBtn = document.getElementById('slidePrevBtn');
  const nextBtn = document.getElementById('slideNextBtn');
  const wrapper = document.getElementById('heroSlidesWrapper');

  if (!slides.length) return;

  clearInterval(heroInterval);
  currentSlideIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;

    slides.forEach((s, idx) => {
      if (idx === currentSlideIndex) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    dots.forEach((d, idx) => {
      if (idx === currentSlideIndex) {
        d.classList.add('active');
      } else {
        d.classList.remove('active');
      }
    });

    refreshIcons();
  }

  function nextSlide() {
    showSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    showSlide(currentSlideIndex - 1);
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      resetTimer();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      resetTimer();
    };
  }

  dots.forEach(dot => {
    dot.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = parseInt(dot.getAttribute('data-to-slide') || '0', 10);
      showSlide(target);
      resetTimer();
    };
  });

  function startTimer() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextSlide, 3000);
  }

  function resetTimer() {
    clearInterval(heroInterval);
    startTimer();
  }

  startTimer();

  // Pause on hover
  if (wrapper) {
    wrapper.onmouseenter = () => clearInterval(heroInterval);
    wrapper.onmouseleave = () => startTimer();

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(heroInterval);
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
      startTimer();
    }, { passive: true });
  }
}

// 2. TOOLS TAB SWITCHING & ENGINE
function setupToolsTabListeners() {
  const tabBtns = document.querySelectorAll('.tool-tab-btn');
  const container = document.getElementById('toolContentContainer');
  if (!tabBtns.length || !container) return;

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const toolType = btn.getAttribute('data-tool');
      renderSelectedTool(toolType, container);
    };
  });
}

function renderSelectedTool(type, container) {
  if (type === 'compass') {
    container.innerHTML = renderVastuCompassTool();
  } else if (type === 'numerology') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="hash"></i> CHALDEAN & PYTHAGOREAN NUMEROLOGY</div>
          <h3>Numerology Life Path & Destiny Calculator</h3>
          <p class="text-muted">Enter your complete name and date of birth to reveal your cosmic vibrations, lucky days, and remedial colors.</p>
        </div>

        <div class="tool-form-grid">
          <div class="tfg-inputs">
            <div class="form-group">
              <label>Full Name (as pronounced) *</label>
              <input type="text" id="toolNumName" placeholder="e.g. Acharya Pankaj Sharma" class="form-input" value="Anant Vastu" />
            </div>
            <div class="form-group">
              <label>Date of Birth *</label>
              <input type="date" id="toolNumDob" class="form-input" value="1990-08-15" />
            </div>
            <button onclick="window.runFullNumerology()" class="btn btn-gold btn-block btn-lg"><i data-lucide="zap"></i> Calculate Numerology</button>
          </div>
          <div class="tfg-output" id="toolNumOutput">
            ${renderNumerologyResultHTML(calculateNumerology('Anant Vastu', '1990-08-15'))}
          </div>
        </div>
      </div>
    `;
  } else if (type === 'muhurat') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="clock"></i> VEDIC SHUBH MUHURAT 2026</div>
          <h3>Auspicious Muhurat Finder</h3>
          <p class="text-muted">Verified planetary timings and Choghadiya calculations for upcoming milestones.</p>
        </div>

        <div class="muhurat-table-wrapper">
          <table class="muhurat-table">
            <thead>
              <tr>
                <th>Event / Occasion</th>
                <th>Upcoming Auspicious Date</th>
                <th>Tithi & Nakshatra</th>
                <th>Favorable Time Window</th>
                <th>Vedic Orientation</th>
                <th>Auspicious Score</th>
              </tr>
            </thead>
            <tbody>
              ${muhuratData.map(m => `
                <tr>
                  <td><strong>${m.event}</strong></td>
                  <td class="text-gold"><strong>${m.nextDate}</strong></td>
                  <td>${m.tithi} (${m.nakshatra})</td>
                  <td><span class="badge-time"><i data-lucide="clock"></i> ${m.favorableTime}</span></td>
                  <td>${m.direction}</td>
                  <td><span class="badge-gold">${m.auspiciousScore}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="mt-4 text-center">
          <a href="#/book-consultation" class="btn btn-gold"><i data-lucide="calendar"></i> Request Custom Personalized Muhurat</a>
        </div>
      </div>
    `;
  } else if (type === 'kundli-match') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="heart"></i> ASHTAKOOT GUNA MILAN (36 POINTS)</div>
          <h3>Vedic Kundli Marriage Compatibility Tester</h3>
          <p class="text-muted">Select the Moon Signs (Rashis) of the prospective bride and groom to calculate Ashtakoot Guna score.</p>
        </div>

        <div class="kundli-match-ui">
          <div class="km-selectors-row">
            <div class="form-group">
              <label>Groom Moon Sign (Boy Rashi)</label>
              <select id="boySignSelect" class="form-input">
                ${["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map(s => `
                  <option value="${s}" ${s === 'Leo' ? 'selected' : ''}>${s}</option>
                `).join('')}
              </select>
            </div>
            <div class="km-vs-badge"><i data-lucide="heart-handshake"></i></div>
            <div class="form-group">
              <label>Bride Moon Sign (Girl Rashi)</label>
              <select id="girlSignSelect" class="form-input">
                ${["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map(s => `
                  <option value="${s}" ${s === 'Sagittarius' ? 'selected' : ''}>${s}</option>
                `).join('')}
              </select>
            </div>
          </div>
          <div class="text-center mt-3">
            <button onclick="window.runKundliMatching()" class="btn btn-gold btn-lg"><i data-lucide="sparkles"></i> Calculate Compatibility Score</button>
          </div>

          <div id="kundliMatchResult" class="mt-4">
            ${renderKundliMilanResultHTML(calculateKundliMilan('Leo', 'Sagittarius'))}
          </div>
        </div>
      </div>
    `;
  } else if (type === 'gemstone') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="shield"></i> RATNA SHASTRA</div>
          <h3>Lucky Gemstone & Rudraksha Finder</h3>
          <p class="text-muted">Select your Moon Sign or Ascendant to discover your life-enriching Jyotish gemstone and energization rules.</p>
        </div>

        <div class="gemstone-tool-ui">
          <div class="form-group max-w-md mx-auto">
            <label>Select Your Zodiac / Lagna Sign</label>
            <select id="gemstoneSignSelect" class="form-input" onchange="window.updateGemstoneResult(this.value)">
              ${Object.keys(gemstonesData).map(sign => `
                <option value="${sign}">${sign}</option>
              `).join('')}
            </select>
          </div>

          <div id="gemstoneResultBox" class="mt-4">
            ${renderGemstoneResultHTML('Aries')}
          </div>
        </div>
      </div>
    `;
  } else if (type === 'baby-name') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="sparkles"></i> NAMA KARANA</div>
          <h3>Vedic Baby Name & Syllable Generator</h3>
          <p class="text-muted">Select your child's birth Rashi / Nakshatra to find auspicious starting syllables and meaningful Sanskrit names.</p>
        </div>

        <div class="baby-name-tool-ui">
          <div class="form-group max-w-md mx-auto">
            <label>Select Zodiac Sign (Rashi)</label>
            <select id="babyNameSignSelect" class="form-input" onchange="window.updateBabyNamesResult(this.value)">
              ${Object.keys(babyNamesData).map(sign => `
                <option value="${sign}">${sign}</option>
              `).join('')}
            </select>
          </div>

          <div id="babyNamesResultBox" class="mt-4">
            ${renderBabyNamesResultHTML('Aries')}
          </div>
        </div>
      </div>
    `;
  } else if (type === 'dream') {
    container.innerHTML = `
      <div class="interactive-tool-box">
        <div class="it-header">
          <div class="section-tag"><i data-lucide="book"></i> SVAPNA SHASTRA</div>
          <h3>Vedic Dream Dictionary</h3>
          <p class="text-muted">Search classical interpretations of symbols, animals, and omens seen in your dreams.</p>
        </div>

        <div class="dream-search-bar">
          <input type="text" id="dreamSearchInput" placeholder="Search dream symbol (e.g. Elephant, Snake, Water, Gold, Temple, Fire)..." class="form-input" oninput="window.filterDreamDictionary(this.value)" />
        </div>

        <div class="dream-results-grid mt-4" id="dreamResultsGrid">
          ${dreamDictionary.map(d => `
            <div class="dream-card">
              <div class="dc-top">
                <h4>${d.symbol}</h4>
                <span class="dc-badge badge-gold">${d.score}</span>
              </div>
              <p class="dc-cat"><i data-lucide="tag"></i> Category: ${d.category}</p>
              <p class="dc-meaning">${d.meaning}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  refreshIcons();
}

function renderNumerologyResultHTML(res) {
  return `
    <div class="num-result-box">
      <div class="num-numbers-row">
        <div class="num-stat-card">
          <span class="num-big text-gold">${res.destinyNumber}</span>
          <strong>Destiny / Name Number</strong>
          <small>Ruling: ${res.destinyInfo.ruler}</small>
        </div>
        <div class="num-stat-card">
          <span class="num-big text-gold">${res.lifePathNumber}</span>
          <strong>Life Path Number</strong>
          <small>Ruling: ${res.lifePathInfo.ruler}</small>
        </div>
      </div>

      <div class="num-traits-box mt-3">
        <h4>Core Personality & Vibrations:</h4>
        <p>${res.destinyInfo.traits}</p>
        
        <div class="num-meta-grid">
          <div><strong>Lucky Days:</strong> ${res.destinyInfo.luckyDays}</div>
          <div><strong>Lucky Colors:</strong> ${res.destinyInfo.luckyColors}</div>
        </div>

        <div class="remedy-callout mt-2">
          <strong><i data-lucide="sparkles" class="text-gold"></i> Vedic Recommendation:</strong>
          <p>${res.destinyInfo.remedies}</p>
        </div>
      </div>
    </div>
  `;
}

function renderKundliMilanResultHTML(res) {
  return `
    <div class="kundli-result-wrapper">
      <div class="kr-score-banner">
        <div class="kr-score-circle">
          <span class="score-num">${res.totalScore}</span>
          <span class="score-max">/ 36 Gunas</span>
        </div>
        <div class="kr-verdict-col">
          <div class="badge-verdict ${res.verdictClass}">${res.verdict}</div>
          <p>Minimum required for a prosperous Vedic match is 18 Gunas. Above 24 Gunas indicates high natural synergy.</p>
        </div>
      </div>

      <div class="kootas-grid mt-4">
        ${res.kootas.map(k => `
          <div class="koota-item">
            <div class="ki-header">
              <strong>${k.name}</strong>
              <span class="ki-score">${k.score} / ${k.max}</span>
            </div>
            <p class="ki-desc">${k.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="mt-4 remedy-callout">
        <h4><i data-lucide="shield-check" class="text-gold"></i> Remedial Recommendations:</h4>
        <ul>
          ${res.remedies.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <div class="mt-3 text-center">
          <a href="#/services/marriage-compatibility" class="btn btn-gold btn-sm"><i data-lucide="calendar"></i> Book Full Kundli Matching Session</a>
        </div>
      </div>
    </div>
  `;
}

function renderGemstoneResultHTML(sign) {
  const g = gemstonesData[sign] || gemstonesData['Aries'];
  return `
    <div class="gemstone-card">
      <div class="gc-header">
        <h3>Auspicious Gemstone for ${sign}</h3>
        <span class="badge-gold">Jyotish Recommendation</span>
      </div>

      <div class="gc-grid">
        <div class="gc-item">
          <strong>Primary Life Gemstone:</strong>
          <div class="gc-val text-gold">${g.primary}</div>
        </div>
        <div class="gc-item">
          <strong>Secondary / Wealth Stone:</strong>
          <div class="gc-val">${g.secondary}</div>
        </div>
        <div class="gc-item">
          <strong>Auspicious Metal:</strong>
          <div class="gc-val">${g.metal}</div>
        </div>
        <div class="gc-item">
          <strong>Wearing Finger:</strong>
          <div class="gc-val">${g.finger}</div>
        </div>
        <div class="gc-item">
          <strong>Auspicious Wearing Day & Time:</strong>
          <div class="gc-val">${g.day}</div>
        </div>
        <div class="gc-item">
          <strong>Energization Mantra (Pran Pratishtha):</strong>
          <div class="gc-val mantra-text">${g.mantra}</div>
        </div>
      </div>

      <div class="mt-4 text-center">
        <a href="#/services/gemstone-rudraksha" class="btn btn-gold"><i data-lucide="shield"></i> Order Certified Natural Gemstone</a>
      </div>
    </div>
  `;
}

function renderBabyNamesResultHTML(sign) {
  const b = babyNamesData[sign] || babyNamesData['Aries'];
  return `
    <div class="baby-names-card">
      <div class="bnc-header">
        <h3>Auspicious Syllables & Names for ${sign}</h3>
        <div class="syllables-row">
          Auspicious First Letters: 
          ${b.letters.map(l => `<span class="syllable-badge">${l}</span>`).join('')}
        </div>
      </div>

      <h4 class="mt-4">Suggested Vedic Names:</h4>
      <div class="baby-names-list mt-2">
        ${b.names.map(name => `
          <div class="name-chip"><i data-lucide="sparkles" class="text-gold"></i> ${name}</div>
        `).join('')}
      </div>

      <div class="mt-4 text-center">
        <a href="#/book-consultation" class="btn btn-gold btn-sm"><i data-lucide="calendar"></i> Book Personalized Nama-Karana Session</a>
      </div>
    </div>
  `;
}

// Window helper functions for inline event handlers
window.selectCompassDirection = function(dirKey) {
  const details = document.getElementById('compassDetailsCol');
  const needle = document.getElementById('compassNeedle');
  const codeElem = document.getElementById('centerDirCode');
  const degElem = document.getElementById('centerDegrees');
  const d = vastuDirectionsData[dirKey] || vastuDirectionsData['N'];

  if (details) details.innerHTML = renderCompassDetailCard(dirKey);
  if (codeElem) codeElem.textContent = dirKey;
  if (degElem) degElem.textContent = `${d.angle}°`;
  if (needle) needle.style.transform = `rotate(${d.angle}deg)`;

  document.querySelectorAll('.dir-marker-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-dir') === dirKey);
  });

  refreshIcons();
};

window.runFullNumerology = function() {
  const nameInput = document.getElementById('toolNumName');
  const dobInput = document.getElementById('toolNumDob');
  const output = document.getElementById('toolNumOutput');
  if (!nameInput || !dobInput || !output) return;

  const res = calculateNumerology(nameInput.value || 'Anant Vastu', dobInput.value || '1990-08-15');
  output.innerHTML = renderNumerologyResultHTML(res);
  refreshIcons();
};

window.runQuickNumerology = function() {
  const nameInput = document.getElementById('numCalcName');
  const dobInput = document.getElementById('numCalcDob');
  const result = document.getElementById('numCalcResult');
  if (!nameInput || !result) return;

  const res = calculateNumerology(nameInput.value || 'Client', dobInput ? dobInput.value : '');
  result.innerHTML = `
    <div class="alert alert-success">
      <strong>Destiny Number:</strong> <span class="badge-gold">#${res.destinyNumber}</span> (${res.destinyInfo.ruler})<br/>
      <strong>Life Path:</strong> <span class="badge-gold">#${res.lifePathNumber}</span><br/>
      <strong>Lucky Colors:</strong> ${res.destinyInfo.luckyColors}
    </div>
  `;
};

window.runKundliMatching = function() {
  const boySign = document.getElementById('boySignSelect')?.value || 'Leo';
  const girlSign = document.getElementById('girlSignSelect')?.value || 'Sagittarius';
  const result = document.getElementById('kundliMatchResult');
  if (!result) return;

  const res = calculateKundliMilan(boySign, girlSign);
  result.innerHTML = renderKundliMilanResultHTML(res);
  refreshIcons();
};

window.updateGemstoneResult = function(sign) {
  const box = document.getElementById('gemstoneResultBox');
  if (box) {
    box.innerHTML = renderGemstoneResultHTML(sign);
    refreshIcons();
  }
};

window.updateBabyNamesResult = function(sign) {
  const box = document.getElementById('babyNamesResultBox');
  if (box) {
    box.innerHTML = renderBabyNamesResultHTML(sign);
    refreshIcons();
  }
};

window.filterDreamDictionary = function(query) {
  const grid = document.getElementById('dreamResultsGrid');
  if (!grid) return;
  const q = query.toLowerCase().trim();

  const filtered = dreamDictionary.filter(d => 
    d.symbol.toLowerCase().includes(q) || 
    d.category.toLowerCase().includes(q) || 
    d.meaning.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center text-muted p-4">No matching dream symbols found. Please contact our astrology expert for custom dream analysis.</div>`;
  } else {
    grid.innerHTML = filtered.map(d => `
      <div class="dream-card">
        <div class="dc-top">
          <h4>${d.symbol}</h4>
          <span class="dc-badge badge-gold">${d.score}</span>
        </div>
        <p class="dc-cat"><i data-lucide="tag"></i> Category: ${d.category}</p>
        <p class="dc-meaning">${d.meaning}</p>
      </div>
    `).join('');
  }
  refreshIcons();
};

window.filterBlogCategory = function(category, btn) {
  document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

window.togglePropertyFields = function(consultType) {
  const grp = document.getElementById('propertyTypeGroup');
  if (grp) {
    if (consultType.includes('Astrology') || consultType.includes('Numerology') || consultType.includes('Marriage')) {
      grp.style.opacity = '0.5';
    } else {
      grp.style.opacity = '1';
    }
  }
};

// 3. BOOKING SUBMISSION HANDLER
window.handleBookingSubmit = function(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const modal = document.getElementById('bookingConfirmationModal');
  const modalContent = document.getElementById('bookingModalDetails');
  
  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div class="text-center">
        <div class="modal-logo-wrap mb-3">
          <img src="/assets/anant_vastu_logo_transparent.png" alt="Anant Vastu Architect" class="modal-brand-logo" />
        </div>
        <div class="modal-success-icon"><i data-lucide="check-circle-2"></i></div>
        <h3>Consultation Request Received!</h3>
        <p class="text-muted">Thank you, <strong>${data.name || 'Valued Client'}</strong>. Our senior consultant will contact you via WhatsApp / Phone shortly.</p>
        
        <div class="booking-receipt-box">
          <div><strong>Consultation Type:</strong> ${data.consultationType || 'Vastu Consultation'}</div>
          <div><strong>Contact Number:</strong> ${data.phone || '+91 82696 46419'}</div>
          <div><strong>City:</strong> ${data.city || 'Madhya Pradesh'}</div>
          ${data.prefDate ? `<div><strong>Preferred Date:</strong> ${data.prefDate} (${data.prefTime || 'Flexible'})</div>` : ''}
        </div>

        <div class="modal-actions-row mt-4">
          <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu%20Architect,%20I%20have%20submitted%20a%20booking%20request%20for%20${encodeURIComponent(data.name || '')}%20(${encodeURIComponent(data.consultationType || 'Vastu')})" target="_blank" class="btn btn-whatsapp btn-lg btn-block">
            <i data-lucide="message-circle"></i> Confirm Instantly on WhatsApp (+91 82696 46419)
          </a>
          <button onclick="window.closeModal()" class="btn btn-outline-light btn-block mt-2">Close</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
    refreshIcons();
  } else {
    alert(`Thank you ${data.name || ''}! Your consultation request has been registered. We will call you at ${data.phone || '+91 82696 46419'}.`);
  }
};

// 4. AI VASTU REPORT SIMULATOR
window.handleAiReportSubmit = function(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const output = document.getElementById('aiReportOutput');
  if (!output) return;

  // Show loading spinner simulation
  output.innerHTML = `
    <div class="ai-calculating-state">
      <div class="spinner-gold"></div>
      <h4>Calculating 16-Zone Energy Matrix...</h4>
      <p class="text-muted">Analyzing directional degrees for ${data.propertyType} in ${data.location}...</p>
    </div>
  `;

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-generated-report">
        <div class="agr-header">
          <div class="agr-logo-badge">
            <img src="/assets/anant_vastu_logo_transparent.png" alt="Anant Vastu" class="report-brand-logo" />
          </div>
          <div>
            <span class="badge-gold">AI VASTU ANALYSIS COMPLETE</span>
            <h3>Vastu Health Score: 84 / 100</h3>
            <p class="text-muted">Property: ${data.propertyType} • Facing: ${data.facingDirection}</p>
          </div>
        </div>

        <div class="agr-scores-grid">
          <div class="asg-card"><span class="asg-score good">92%</span> <strong>Ishanya (NE)</strong><small>Prana & Clarity</small></div>
          <div class="asg-card"><span class="asg-score warning">68%</span> <strong>Agni (SE)</strong><small>Fire & Cash Flow</small></div>
          <div class="asg-card"><span class="asg-score good">88%</span> <strong>Nairitya (SW)</strong><small>Stability & Sleep</small></div>
          <div class="asg-card"><span class="asg-score good">90%</span> <strong>Kuber (N)</strong><small>New Opportunities</small></div>
        </div>

        <div class="agr-remedies-list mt-3">
          <h4>Key AI Remedial Recommendations:</h4>
          <ul>
            <li><strong>Entrance Calibration:</strong> Main door facing ${data.facingDirection} is favorable. Place a brass threshold strip for stability.</li>
            <li><strong>Elemental Balance:</strong> Keep North-East clutter-free. Ensure kitchen stove in South-East faces East.</li>
            <li><strong>Zero Demolition:</strong> Install non-destructive copper energy pyramids in Nairitya zone.</li>
          </ul>
        </div>

        <div class="agr-actions mt-4">
          <a href="https://wa.me/918269646419?text=Hello%20Anant%20Vastu,%20I%20generated%20an%20AI%20Report%20for%20my%20property%20in%20${encodeURIComponent(data.location)}%20and%20want%20expert%20review" target="_blank" class="btn btn-whatsapp btn-block">
            <i data-lucide="message-circle"></i> Send Floor Plan to Expert (+91 82696 46419)
          </a>
          <button onclick="window.print()" class="btn btn-outline-gold btn-block mt-2">
            <i data-lucide="download"></i> Download / Print Vastu Summary
          </button>
        </div>
      </div>
    `;
    refreshIcons();
  }, 1200);
};

window.closeModal = function() {
  const modal = document.getElementById('bookingConfirmationModal');
  if (modal) modal.classList.remove('open');
};

// Theme Management
function setupTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  // Default to light (white) mode unless explicitly set to dark
  const savedTheme = localStorage.getItem('theme');
  const currentTheme = savedTheme ? savedTheme : 'light';
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.innerHTML = '<i data-lucide="sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) toggleBtn.innerHTML = '<i data-lucide="moon"></i>';
  }
  
  if (toggleBtn) {
    toggleBtn.onclick = function() {
      let theme = 'light';
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        toggleBtn.innerHTML = '<i data-lucide="moon"></i>';
        theme = 'light';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '<i data-lucide="sun"></i>';
        theme = 'dark';
      }
      localStorage.setItem('theme', theme);
      refreshIcons(); // Re-render Lucide icons
    };
  }
}

// Main Routing & App Initialization
function initApp() {
  setupTheme();
  function handleNavigation() {
    renderRoute(window.location.hash);
  }

  window.addEventListener('hashchange', handleNavigation);
  
  // Callback when a route finishes rendering
  window.onRouteRendered = function() {
    refreshIcons();
    setupHeroSlideshow();
    setupToolsTabListeners();
    setupMobileNav();
  };

  // Initial load
  handleNavigation();
}

function setupMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navDrawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navBackdrop');

  if (toggleBtn && navDrawer) {
    toggleBtn.onclick = () => {
      navDrawer.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('open');
    };
  }

  if (backdrop) {
    backdrop.onclick = () => {
      if (navDrawer) navDrawer.classList.remove('open');
      backdrop.classList.remove('open');
    };
  }

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.onclick = () => {
      if (navDrawer) navDrawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
    };
  });
}

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
