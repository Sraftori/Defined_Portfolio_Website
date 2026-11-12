/* ==========================================================================
   Sraf.dev — Interactive Portfolio Logic
   Connected to index.html via <script src="./script.js" defer></script>
   ========================================================================== */

(() => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Structured Portfolio Data
  // --------------------------------------------------------------------------
  const CONSOLE_VIEWS = {
    stack: `{
  "engineer": "Omar Mohamed Ahmed (Sraf)",
  "frontend": ["JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React"],
  "backend": ["Node.js", "Express.js", "REST APIs", "LLM Integration"],
  "databases": ["MongoDB", "PostgreSQL"],
  "vcs": ["Git", "GitHub"],
  "flagship": "Arabic AI PC Builder (Vercel · Private Preview)"
}`,
    sysadmin: `#!/usr/bin/env bash
# Windows & Linux Administration Profile
OS_LINUX="Fedora KDE Plasma | Arch Linux | Ubuntu Server"
OS_WINDOWS="Windows 11 Pro | Windows Server | PowerShell"
SECURITY="SSH Hardening | UFW/Firewalld | UEFI Secure Boot & dbx"
INFRA="Git/GitHub CI | Vercel Deployments | Hardware Diagnostics"

echo "[OK] Systems & Full-Stack Environment Operational"`
  };

  const ARABIC_AI_PRESETS = {
    gaming: `
      <div class="font-bold text-emerald-400">اقتراح الذكاء الاصطناعي — ألعاب 1080p بسلاسة عالية:</div>
      <ul class="mt-2 space-y-1 text-zinc-300">
        <li>• <strong>المعالج:</strong> AMD Ryzen 5 5600 (سوكيت AM4)</li>
        <li>• <strong>اللوحة الأم:</strong> B550M DDR4 (توافق كامل بدون تحديث BIOS معقد)</li>
        <li>• <strong>كرت الشاشة:</strong> RX 6600 / RTX 4060 — عنق زجاجة 0%</li>
        <li>• <strong>الباور سبلاي:</strong> 600W 80+ Bronze (هامش أمان 38%)</li>
      </ul>
    `,
    workstation: `
      <div class="font-bold text-cyan-400">اقتراح الذكاء الاصطناعي — برمجة ومونتاج وتعدد مهام:</div>
      <ul class="mt-2 space-y-1 text-zinc-300">
        <li>• <strong>المعالج:</strong> AMD Ryzen 7 5700X / Intel i5-13400</li>
        <li>• <strong>الذاكرة:</strong> 32GB DDR4 Dual-Channel لتشغيل الحاويات والمحاكيات</li>
        <li>• <strong>التخزين:</strong> 1TB NVMe Gen4 سرعة قراءة 5000MB/s</li>
        <li>• <strong>التبريد والطاقة:</strong> مشتت هوائي مزدوج + 650W 80+ Gold</li>
      </ul>
    `
  };

  const FEATURED_PROJECT = {
    id: 'partsync-arabic-ai',
    badge: 'Flagship Full-Stack & AI · Private Vercel Preview',
    title: 'PartSync — Arabic AI-Integrated PC Builder',
    summary:
      'An AI-powered PC component advisor and compatibility checker built natively in Arabic (RTL) for Arab users. Deployed on Vercel in private preview mode (not yet released for mass public traffic).',
    highlights: [
      'Full Arabic RTL interface designed with React and Tailwind CSS for intuitive hardware selection.',
      'Node.js & Express.js API layer translating natural-language Arabic budget/use-case prompts into structured hardware builds.',
      'Automated validation engine checking CPU socket compatibility, RAM generation (DDR4/DDR5), PSU wattage headroom, and bottleneck balance.',
      'Hosted on Vercel in closed preview while local pricing catalogs and rate-limiting rules are finalized prior to public launch.'
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'AI API', 'RTL Arabic', 'Vercel (Private)'],
    servicePrefill: 'AI Integration'
  };

  const PROJECTS = [
    {
      id: 'fullstack-commerce-api',
      category: 'fullstack',
      badge: 'Full-Stack Web Application',
      title: 'MERN & PostgreSQL Resource & Order Platform',
      summary:
        'Full-stack web dashboard with role-based authentication, RESTful Express APIs, relational PostgreSQL ledger tables, and MongoDB activity logs.',
      highlights: [
        'Modular React + Tailwind CSS frontend with responsive tables, instant search, and form validation.',
        'Node.js & Express.js backend implementing JWT authentication, input sanitization, and structured error handling.',
        'Hybrid persistence layer leveraging PostgreSQL for transactional integrity and MongoDB for flexible audit records.'
      ],
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
      servicePrefill: 'Node/Express + MongoDB/PostgreSQL'
    },
    {
      id: 'ai-hardware-assistant',
      category: 'ai',
      badge: 'AI & Backend APIs · Private Vercel Build',
      title: 'Arabic AI PC Compatibility & Bottleneck Engine',
      summary:
        'Backend inference pipeline and prompt-guardrail service powering the Arabic AI PC Builder on Vercel (currently restricted preview, not open to mass users).',
      highlights: [
        'Structured JSON schema enforcement so AI responses map cleanly to real motherboard, CPU, GPU, and PSU specs.',
        'Arabic hardware terminology normalization for regional buyers across Egypt and the MENA region.',
        'Environment-isolated Vercel deployment with protected API keys and controlled tester access.'
      ],
      tags: ['Node.js', 'Express.js', 'JavaScript', 'AI Prompt Engineering', 'Git & GitHub', 'Vercel'],
      servicePrefill: 'AI Integration'
    },
    {
      id: 'linux-windows-admin-suite',
      category: 'sysadmin',
      badge: 'Windows & Linux Systems Administration',
      title: 'Cross-Platform OS Provisioning & Security Hardening',
      summary:
        'Standardized administration workflows for Windows 11 and Linux (Fedora KDE Plasma, Arch, Ubuntu) workstations—covering Secure Boot, SSH, firewalls, and diagnostics.',
      highlights: [
        'Configured UEFI Secure Boot, Microsoft dbx revocation updates, and dual-boot/workstation storage layouts.',
        'Automated Linux package maintenance, systemd service audits, and firewall rules alongside Windows PowerShell cleanup scripts.',
        'Hardware stress-testing, thermal profiling, and BIOS flashing across desktop and enterprise laptop fleets.'
      ],
      tags: ['Linux Admin', 'Windows Admin', 'PowerShell', 'Bash', 'UEFI / Secure Boot', 'Git'],
      servicePrefill: 'Windows / Linux Admin'
    },
    {
      id: 'git-workflow-portfolio',
      category: 'fullstack',
      badge: 'Frontend Engineering & Git Architecture',
      title: 'Modular Developer Portfolio & Scope Builder',
      summary:
        'Dark-mode, zero-overflow engineering portfolio separated into semantic HTML5, custom CSS3, Tailwind utilities, and modular vanilla JavaScript.',
      highlights: [
        'Strict overflow-x-clip layout engineering ensuring zero horizontal scroll from 360px mobile screens to ultrawide displays.',
        'Interactive terminal console switcher, category-filtered project cards, and real-time Project Scope Builder.',
        'Version-controlled with clean Git branching and GitHub repository structure.'
      ],
      tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'],
      servicePrefill: 'React & Tailwind Frontend'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DOM References
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const consoleOutput = document.getElementById('console-output');
  const consoleTabBtns = document.querySelectorAll('.console-tab-btn');
  const arAiOutput = document.getElementById('ar-ai-output');
  const arPresetBtns = document.querySelectorAll('.ar-preset-btn');
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const openFeaturedModalBtn = document.getElementById('open-featured-modal');

  // Modal Elements
  const projectModal = document.getElementById('project-modal');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSummary = document.getElementById('modal-summary');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalTags = document.getElementById('modal-tags');
  const modalRequestBtn = document.getElementById('modal-request-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalDoneBtn = document.getElementById('modal-done-btn');

  // Scope Builder Elements
  const contactModeBtns = document.querySelectorAll('.contact-mode-btn');
  const serviceChipsWrapper = document.getElementById('service-chips-wrapper');
  const scopeChips = document.querySelectorAll('.scope-chip');
  const clientNameInput = document.getElementById('client-name');
  const clientEmailInput = document.getElementById('client-email');
  const clientNotesInput = document.getElementById('client-notes');
  const briefPreview = document.getElementById('brief-preview');
  const mailtoDispatch = document.getElementById('mailto-dispatch');
  const copyBriefBtn = document.getElementById('copy-brief-btn');
  const footerYear = document.getElementById('footer-year');

  // --------------------------------------------------------------------------
  // 3. Application State
  // --------------------------------------------------------------------------
  let activeFilter = 'all';
  let contactMode = 'project'; // 'project' | 'direct'
  let selectedServices = new Set(['React & Tailwind Frontend']);
  let currentModalProject = FEATURED_PROJECT;

  // --------------------------------------------------------------------------
  // 4. Mobile Navigation
  // --------------------------------------------------------------------------
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', String(!isHidden));
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Workstation Console Switcher (stack.json vs sysadmin.sh)
  // --------------------------------------------------------------------------
  function renderConsole(tabKey) {
    if (!consoleOutput) return;
    consoleOutput.textContent = CONSOLE_VIEWS[tabKey] || CONSOLE_VIEWS.stack;

    consoleTabBtns.forEach((btn) => {
      const isSelected = btn.dataset.consoleTab === tabKey;
      btn.classList.toggle('bg-zinc-800', isSelected);
      btn.classList.toggle('text-emerald-400', isSelected);
      btn.classList.toggle('text-zinc-400', !isSelected);
    });
  }

  consoleTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      renderConsole(btn.dataset.consoleTab);
    });
  });

  // --------------------------------------------------------------------------
  // 6. Arabic AI PC Builder Interactive Preview
  // --------------------------------------------------------------------------
  function renderArabicPreset(presetKey) {
    if (!arAiOutput) return;
    arAiOutput.innerHTML = ARABIC_AI_PRESETS[presetKey] || ARABIC_AI_PRESETS.gaming;

    arPresetBtns.forEach((btn) => {
      const active = btn.dataset.arPreset === presetKey;
      btn.classList.toggle('border-emerald-400/50', active);
      btn.classList.toggle('bg-emerald-400/15', active);
      btn.classList.toggle('text-emerald-300', active);
      btn.classList.toggle('font-semibold', active);

      btn.classList.toggle('border-zinc-700', !active);
      btn.classList.toggle('bg-zinc-800', !active);
      btn.classList.toggle('text-zinc-300', !active);
    });
  }

  arPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      renderArabicPreset(btn.dataset.arPreset);
    });
  });

  // --------------------------------------------------------------------------
  // 7. Render & Filter Selected Projects
  // --------------------------------------------------------------------------
  function renderProjects() {
    if (!projectsGrid) return;

    const visibleProjects =
      activeFilter === 'all'
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeFilter);

    projectsGrid.innerHTML = visibleProjects
      .map(
        (project) => `
        <article class="surface-card surface-card-interactive min-w-guard flex flex-col justify-between rounded-xl p-6">
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="font-mono-code text-xs text-emerald-400">${project.badge}</span>
            </div>
            <h3 class="mt-2 text-lg font-bold text-zinc-100">${project.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-zinc-400">${project.summary}</p>
          </div>

          <div class="mt-5">
            <div class="flex flex-wrap gap-1.5 font-mono-code text-[11px]">
              ${project.tags
                .map(
                  (tag) =>
                    `<span class="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-zinc-300">${tag}</span>`
                )
                .join('')}
            </div>

            <div class="mt-4 border-t border-zinc-800/80 pt-3.5">
              <button
                type="button"
                data-project-id="${project.id}"
                class="open-project-btn inline-flex items-center gap-1.5 font-mono-code text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                <span>Inspect Architecture</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    document.querySelectorAll('.open-project-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const found = PROJECTS.find((p) => p.id === btn.dataset.projectId);
        if (found) openModal(found);
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter || 'all';
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));
      renderProjects();
    });
  });

  // --------------------------------------------------------------------------
  // 8. Architecture Details Modal
  // --------------------------------------------------------------------------
  function openModal(project) {
    if (!projectModal) return;
    currentModalProject = project;

    modalBadge.textContent = project.badge;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalHighlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');
    modalTags.innerHTML = project.tags
      .map(
        (tag) =>
          `<span class="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-zinc-300">${tag}</span>`
      )
      .join('');

    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
  }

  if (openFeaturedModalBtn) {
    openFeaturedModalBtn.addEventListener('click', () => openModal(FEATURED_PROJECT));
  }
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);

  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  if (modalRequestBtn) {
    modalRequestBtn.addEventListener('click', () => {
      const targetService = currentModalProject?.servicePrefill;
      closeModal();
      setContactMode('project');
      if (targetService) {
        selectedServices.add(targetService);
        syncScopeChips();
      }
      updateBriefPreview();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Prefill links (e.g., from Featured Arabic AI PC Builder section)
  document.querySelectorAll('.prefill-link').forEach((link) => {
    link.addEventListener('click', () => {
      const service = link.dataset.prefillService;
      setContactMode('project');
      if (service) {
        selectedServices.add(service);
        syncScopeChips();
      }
      updateBriefPreview();
    });
  });

  // --------------------------------------------------------------------------
  // 9. Interactive Project Scope Builder
  // --------------------------------------------------------------------------
  function setContactMode(mode) {
    contactMode = mode;
    contactModeBtns.forEach((btn) => {
      const isSelected = btn.dataset.contactMode === mode;
      btn.classList.toggle('bg-emerald-400', isSelected);
      btn.classList.toggle('font-semibold', isSelected);
      btn.classList.toggle('text-zinc-950', isSelected);
      btn.classList.toggle('text-zinc-400', !isSelected);
    });

    if (serviceChipsWrapper) {
      serviceChipsWrapper.classList.toggle('hidden', mode !== 'project');
    }
    updateBriefPreview();
  }

  function syncScopeChips() {
    scopeChips.forEach((chip) => {
      const service = chip.dataset.service;
      chip.classList.toggle('selected', selectedServices.has(service));
    });
  }

  function buildBriefText() {
    const name = clientNameInput?.value.trim() || 'Prospective Client';
    const email = clientEmailInput?.value.trim() || 'Not specified';
    const notes =
      clientNotesInput?.value.trim() ||
      'Looking to discuss architecture, timeline, and deliverables.';

    if (contactMode === 'direct') {
      return [
        'TO: Omar Mohamed Ahmed (sraftori15@gmail.com)',
        `FROM: ${name} (${email})`,
        'TYPE: Direct Inquiry',
        '----------------------------------------',
        notes
      ].join('\n');
    }

    const servicesList =
      selectedServices.size > 0
        ? Array.from(selectedServices).join(', ')
        : 'Full-Stack Web / Systems Consulting';

    return [
      'TO: Omar Mohamed Ahmed (sraftori15@gmail.com)',
      `FROM: ${name} (${email})`,
      'TYPE: Custom Project / Admin Request',
      `SCOPE: ${servicesList}`,
      '----------------------------------------',
      notes
    ].join('\n');
  }

  function updateBriefPreview() {
    const brief = buildBriefText();
    if (briefPreview) briefPreview.textContent = brief;

    if (mailtoDispatch) {
      const subject =
        contactMode === 'direct'
          ? 'Direct Inquiry via Sraf.dev'
          : `Project Scope Request (${Array.from(selectedServices).join(', ') || 'General'})`;
      mailtoDispatch.href = `mailto:sraftori15@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(brief)}`;
    }
  }

  contactModeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setContactMode(btn.dataset.contactMode || 'project');
    });
  });

  scopeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const service = chip.dataset.service;
      if (!service) return;
      if (selectedServices.has(service)) {
        selectedServices.delete(service);
      } else {
        selectedServices.add(service);
      }
      syncScopeChips();
      updateBriefPreview();
    });
  });

  [clientNameInput, clientEmailInput, clientNotesInput].forEach((input) => {
    input?.addEventListener('input', updateBriefPreview);
  });

  if (copyBriefBtn) {
    copyBriefBtn.addEventListener('click', async () => {
      const text = buildBriefText();
      try {
        await navigator.clipboard.writeText(text);
        const original = copyBriefBtn.textContent;
        copyBriefBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBriefBtn.textContent = original;
        }, 1800);
      } catch {
        copyBriefBtn.textContent = 'Select & Copy Above';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. Initialize
  // --------------------------------------------------------------------------
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  renderConsole('stack');
  renderArabicPreset('gaming');
  renderProjects();
  syncScopeChips();
  updateBriefPreview();
})();
