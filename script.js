// ==========================================
// 1. DYNAMICALLY ADDING ELEMENTS & NOTIFICATIONS
// ==========================================
// ==========================================
// 1. DYNAMICALLY ADDING ELEMENTS & NOTIFICATIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // A. Append a new project paragraph to the "Projects" section
  const newProjectPara = document.createElement('p');
  newProjectPara.textContent = "Latest Addition: An automated reconnaissance script leveraging custom API wrappers and real-time telemetry analysis.";
  newProjectPara.className = "project-highlight text-sm text-blue-400 mt-2 p-3 bg-gray-800 rounded border border-blue-500/30";
  
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.appendChild(newProjectPara);
  }

  // B. Add a delayed welcome notification banner at the top of the page
  setTimeout(() => {
    const banner = document.createElement('div');
    banner.textContent = "Secure connection established. Welcome to RedTeamRecon's digital workspace.";
    banner.id = "notification-banner";
    
    // Style the banner
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#1e3a8a";
    banner.style.color = "#93c5fd";
    banner.style.padding = "10px";
    banner.style.textAlign = "center";
    banner.style.zIndex = "1000";
    banner.style.fontSize = "0.875rem";
    banner.style.fontWeight = "600";
    banner.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";

    document.body.prepend(banner);

    // Fade out and remove after 5 seconds
    setTimeout(() => {
      banner.style.transition = "opacity 0.5s ease-in-out";
      banner.style.opacity = "0";
      setTimeout(() => banner.remove(), 500);
    }, 5000);
  }, 1000);

  // --- C. DYNAMIC PROJECT OBJECTS & SESSION STORAGE RENDERING ---
  const portfolioProjects = [
      {
          title: "GitHub Archive Analytics",
          summary: "Python scripts for CRUD operations and analytical queries across relational and graph databases.",
          icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60",
          repoLink: "https://github.com/RedTeamRecon/RedTeamRecon.github.io"
      },
      {
          title: "SIEM Telemetry Pipeline",
          summary: "A security monitoring concept focused on host telemetry, automated monitoring workflows, and event analysis.",
          icon: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60",
          repoLink: "https://github.com/RedTeamRecon/RedTeamRecon.github.io"
      },
      {
          title: "CTF Challenge Endpoints",
          summary: "Interactive challenge endpoints and document obfuscation utilities for Capture The Flag competitions.",
          icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
          repoLink: "https://github.com/RedTeamRecon/RedTeamRecon.github.io"
      }
  ];

  const SESSION_STORAGE_KEY = "portfolio_projects_data";

  // Check sessionStorage; store if missing, parse if present
  let projectsToRender;
  const storedData = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!storedData) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(portfolioProjects));
      projectsToRender = portfolioProjects;
  } else {
      projectsToRender = JSON.parse(storedData);
  }

  // Select project container and dynamically create DOM elements
  const projectsContainer = document.querySelector("#projects-grid");
  if (projectsContainer) {
      projectsContainer.innerHTML = "";
      projectsToRender.forEach(project => {
          const projectCard = document.createElement("a");
          projectCard.href = project.repoLink;
          projectCard.target = "_blank";
          projectCard.rel = "noopener noreferrer";
          projectCard.className = "project-card";

          projectCard.innerHTML = `
              <img src="${project.icon}" alt="${project.title}" loading="lazy">
              <div class="project-info">
                  <h3>${project.title}</h3>
                  <p>${project.summary}</p>
              </div>
          `;

          projectsContainer.appendChild(projectCard);
      });
  }
});


// ==========================================
// 2. REFERENCING AND MODIFYING EXISTING ELEMENTS
// ==========================================

window.addEventListener('load', () => {
  // Select existing elements using getElementById and querySelector
  const aboutHeading = document.getElementById('about-heading');
  const heroSection = document.querySelector('.hero-section');
  const profileImage = document.querySelector('#profile-img');

  // Modify heading content
  if (aboutHeading) {
    aboutHeading.textContent = "RedTeamRecon — Security Researcher & Developer";
    aboutHeading.className = "text-3xl font-extrabold tracking-tight text-blue-500";
  }

  // Modify background style of hero section
  if (heroSection) {
    heroSection.style.borderBottom = "1px solid #374151";
  }

  // Add classes/borders to the profile image
  if (profileImage) {
    profileImage.classList.add('border-2', 'border-blue-500', 'shadow-lg');
  }
});


// ==========================================
// 3. TIMED CONFIRMATION FOR FORM SUBMISSIONS
// ==========================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', function(event) {
    // 1. Prevent default page reload behavior
    event.preventDefault();

    // 2. Display a dynamic loading message
    formStatus.innerHTML = `
      <div class="flex items-center space-x-2 text-yellow-400 font-medium">
        <span>[+] Encrypting and transmitting payload...</span>
      </div>
    `;

    // Disable submit button during transmission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.classList.add('opacity-50', 'cursor-not-allowed');

    // 3. Use setTimeout() to delay confirmation by 2.5 seconds
    setTimeout(() => {
      // 4. Replace loading message with confirmation
      formStatus.innerHTML = `
        <div class="text-green-400 font-semibold bg-green-950/50 p-3 rounded border border-green-800">
          [✓] Transmission successful! Message received and logged.
        </div>
      `;

      // Reset form inputs and re-enable button
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 2500);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // A. Append a new project paragraph to the "Projects" section
  const newProjectPara = document.createElement('p');
  newProjectPara.textContent = "Latest Addition: An automated reconnaissance script leveraging custom API wrappers and real-time telemetry analysis.";
  newProjectPara.className = "project-highlight text-sm text-blue-400 mt-2 p-3 bg-gray-800 rounded border border-blue-500/30";
  
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.appendChild(newProjectPara);
  }

  // B. Add a delayed welcome notification banner at the top of the page
  setTimeout(() => {
    const banner = document.createElement('div');
    banner.textContent = "Secure connection established. Welcome to RedTeamRecon's digital workspace.";
    banner.id = "notification-banner";
    
    // Style the banner
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#1e3a8a";
    banner.style.color = "#93c5fd";
    banner.style.padding = "10px";
    banner.style.textAlign = "center";
    banner.style.zIndex = "1000";
    banner.style.fontSize = "0.875rem";
    banner.style.fontWeight = "600";
    banner.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";

    document.body.prepend(banner);

    // Fade out and remove after 5 seconds
    setTimeout(() => {
      banner.style.transition = "opacity 0.5s ease-in-out";
      banner.style.opacity = "0";
      setTimeout(() => banner.remove(), 500);
    }, 5000);
  }, 1000);
});


// ==========================================
// 2. REFERENCING AND MODIFYING EXISTING ELEMENTS
// ==========================================

window.addEventListener('load', () => {
  // Select existing elements using getElementById and querySelector
  const aboutHeading = document.getElementById('about-heading');
  const heroSection = document.querySelector('.hero-section');
  const profileImage = document.querySelector('#profile-img');

  // Modify heading content
  if (aboutHeading) {
    aboutHeading.textContent = "RedTeamRecon — Security Researcher & Developer";
    aboutHeading.className = "text-3xl font-extrabold tracking-tight text-blue-500";
  }

  // Modify background style of hero section
  if (heroSection) {
    heroSection.style.borderBottom = "1px solid #374151";
  }

  // Add classes/borders to the profile image
  if (profileImage) {
    profileImage.classList.add('border-2', 'border-blue-500', 'shadow-lg');
  }
});


// ==========================================
// 3. TIMED CONFIRMATION FOR FORM SUBMISSIONS
// ==========================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', function(event) {
    // 1. Prevent default page reload behavior
    event.preventDefault();

    // 2. Display a dynamic loading message
    formStatus.innerHTML = `
      <div class="flex items-center space-x-2 text-yellow-400 font-medium">
        <span>[+] Encrypting and transmitting payload...</span>
      </div>
    `;

    // Disable submit button during transmission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.classList.add('opacity-50', 'cursor-not-allowed');

    // 3. Use setTimeout() to delay confirmation by 2.5 seconds
    setTimeout(() => {
      // 4. Replace loading message with confirmation
      formStatus.innerHTML = `
        <div class="text-green-400 font-semibold bg-green-950/50 p-3 rounded border border-green-800">
          [✓] Transmission successful! Message received and logged.
        </div>
      `;

      // Reset form inputs and re-enable button
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 2500);
  });
}
