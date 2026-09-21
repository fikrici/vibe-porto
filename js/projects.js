/**
 * Projects Data & Interactive Filtering / Modal Viewer
 */
const projectsData = [
  {
    id: "k8s-cloud-infra",
    title: "Cloud Kubernetes & Observability Engine",
    category: "devops",
    categoryLabel: "DevOps & Cloud",
    summary: "Automated multi-node Kubernetes cluster orchestration with Prometheus & Grafana observability, automated GitOps CI/CD pipelines, and high-availability architecture.",
    description: "Designed and deployed a resilient cloud infrastructure leveraging Kubernetes for container orchestration. Integrated automated CI/CD deployment pipelines with GitHub Actions, configured Prometheus and Grafana for real-time cluster telemetry, and provisioned infrastructure as code with Terraform. Ensured 99.95% uptime and seamless zero-downtime rolling updates.",
    image: "assets/images/devops_cloud.jpg",
    tags: ["Kubernetes", "Docker", "AWS", "Terraform", "Prometheus", "CI/CD", "Linux"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  },
  {
    id: "nexusflow-saas",
    title: "NexusFlow Analytics & Workflow Platform",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Modern real-time team workflow & analytics platform with interactive bento metrics, RESTful backend APIs, and responsive glassmorphism UI.",
    description: "Built a high-performance web dashboard featuring comprehensive data visualization, interactive productivity timelines, and state management. Focused on sub-second render speeds, responsive design across all devices, and clean modular component architecture.",
    image: "assets/images/saas_web.jpg",
    tags: ["React", "JavaScript", "REST API", "CSS Grid", "Node.js", "Performance"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  },
  {
    id: "kajovent-platform",
    title: "Kajovent: Event Discovery & Seat Booking",
    category: "design",
    categoryLabel: "UI/UX Design & Web",
    summary: "End-to-end event discovery, interactive seat booking engine, and ticketing platform designed with vibrant minimalist aesthetics.",
    description: "Crafted the entire design system and interactive frontend for Kajovent. Features include an interactive graphical venue seat map selector, digital ticket generator with dynamic QR codes, Apple Wallet integration preview, and frictionless checkout flow.",
    image: "assets/images/kajovent_ui.jpg",
    tags: ["UI/UX Design", "Figma", "Design Systems", "Interactive UI", "Prototyping"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  },
  {
    id: "cloud-server-migration",
    title: "Automated Cloud Migration & Server Hardening",
    category: "devops",
    categoryLabel: "DevOps & Cloud",
    summary: "High-availability Linux server orchestration, Nginx reverse proxy load balancing, automated SSL certificate renewal, and security auditing.",
    description: "Migrated legacy monolithic applications to secure Linux cloud droplets. Configured Nginx with HTTP/2 and Brotli compression, implemented automated Let's Encrypt SSL renewals, automated backup cron jobs, and hardened firewall rules via UFW and fail2ban.",
    image: "assets/images/devops_cloud.jpg",
    tags: ["Linux", "Nginx", "Bash Scripting", "SSL/TLS", "Security", "Uptime"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  },
  {
    id: "minimalist-design-system",
    title: "Editorial Minimalist Portfolio & Brand Identity",
    category: "design",
    categoryLabel: "UI/UX Design",
    summary: "Holistic design language, dark-mode color balance, bespoke micro-interactions, and accessible typography scale for digital portfolios.",
    description: "Developed a comprehensive UI kit and design tokens emphasizing clarity, whitespace, high-contrast dark aesthetics, and subtle haptic-like animations. Tested for WCAG AAA accessibility contrast scores and fluid responsiveness.",
    image: "assets/images/saas_web.jpg",
    tags: ["Figma", "Design Tokens", "Typography", "Accessibility", "Color Theory"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  },
  {
    id: "portfolio-web-core",
    title: "Ultra-Lightweight Modern Portfolio Architecture",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Zero-dependency, sub-second load time personal web portal with dynamic themes, scroll spy, and CSS variable styling.",
    description: "Engineered with semantic HTML5, pure CSS variables, and modern ES6+ vanilla JavaScript. Achieves 100% Lighthouse scores in Performance, Accessibility, Best Practices, and SEO while delivering an ultra-slick visual experience.",
    image: "assets/images/kajovent_ui.jpg",
    tags: ["HTML5", "Vanilla CSS", "ES6+ JS", "SEO", "Zero Dependency"],
    demoUrl: "https://kajoester.my.id",
    githubUrl: "https://github.com/fikrici"
  }
];

// Initialize and Render Projects
function initProjects() {
  const gridContainer = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!gridContainer) return;

  function render(category = "all") {
    gridContainer.innerHTML = "";
    
    const filtered = category === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === category);

    filtered.forEach((p, index) => {
      const card = document.createElement("article");
      card.className = "project-card reveal-on-scroll";
      card.style.transitionDelay = `${(index % 3) * 0.1}s`;
      card.id = `proj-${p.id}`;

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${p.image}" alt="${p.title}" class="project-thumbnail" loading="lazy" />
          <div class="project-overlay">
            <span class="project-category-badge">${p.categoryLabel}</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tech-list">
            ${p.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button class="project-link-btn" onclick="openProjectModal('${p.id}')">
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-github-btn" title="View Source">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Re-trigger scroll reveal for newly added cards
    if (window.triggerScrollReveal) {
      window.triggerScrollReveal();
    }
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      render(category);
    });
  });

  // Initial render
  render("all");
}

// Modal Functions
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modalBackdrop = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-project-content");
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-media">
      <img src="${project.image}" alt="${project.title}" />
    </div>
    <div class="modal-body">
      <span class="modal-tag">${project.categoryLabel}</span>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-description">${project.description}</p>
      
      <div class="modal-tech-stack">
        ${project.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join("")}
      </div>

      <div class="modal-buttons">
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <span>Live Project / Preview</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <span>GitHub Source</span>
        </a>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById("project-modal");
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// Attach event listeners for closing modal
document.addEventListener("DOMContentLoaded", () => {
  initProjects();

  const closeBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("project-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
});
