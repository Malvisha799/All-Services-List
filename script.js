// Service data structure
class Service {
  constructor(id, name, category, type) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.type = type; // 'individual', 'company', or 'both'
  }
}

// Sample services data
const services = [
  // Consult an Expert
  new Service(1, "Talk to a Lawyer", "CONSULT AN EXPERT", "both"),
  new Service(2, "Talk to a CA", "CONSULT AN EXPERT", "both"),
  new Service(3, "Talk to a CS", "CONSULT AN EXPERT", "both"),
  new Service(4, "Talk to a IP/Trademark Lawyer", "CONSULT AN EXPERT", "both"),

  // Business Setup
  new Service(5, "Private Limited Company", "BUSINESS SETUP", "company"),
  new Service(6, "Limited Liability Partnership", "BUSINESS SETUP", "company"),
  new Service(7, "One Person Company", "BUSINESS SETUP", "individual"),
  new Service(8, "Sole Proprietorship", "BUSINESS SETUP", "individual"),
  new Service(9, "Nidhi Company", "BUSINESS SETUP", "company"),
  new Service(10, "Producer Company", "BUSINESS SETUP", "company"),
  new Service(11, "Partnership Firm", "BUSINESS SETUP", "company"),
  new Service(12, "Startup India Registration", "BUSINESS SETUP", "both"),
  new Service(13, "US Incorporation", "BUSINESS SETUP", "both"),
  new Service(14, "Singapore Incorporation", "BUSINESS SETUP", "company"),
  new Service(15, "UK Incorporation", "BUSINESS SETUP", "company"),
  new Service(16, "Netherlands Incorporation", "BUSINESS SETUP", "company"),
  new Service(17, "Hong Kong Incorporation", "BUSINESS SETUP", "company"),
  new Service(18, "Dubai Incorporation", "BUSINESS SETUP", "company"),

  // Trademark & IP
  new Service(19, "Trademark Registration", "TRADEMARK & IP", "both"),
  new Service(20, "Search for Trademark", "TRADEMARK & IP", "both"),
  new Service(21, "Respond to TM Objection", "TRADEMARK & IP", "both"),
  new Service(22, "Well Known Trademark", "TRADEMARK & IP", "company"),
  new Service(23, "Trademark Watch", "TRADEMARK & IP", "both"),
  new Service(24, "Trademark Renewal", "TRADEMARK & IP", "both"),
  new Service(25, "Trademark Assignment", "TRADEMARK & IP", "both"),
  new Service(26, "USA Trademark", "TRADEMARK & IP", "both"),
  new Service(27, "International Trademark", "TRADEMARK & IP", "both"),
  new Service(28, "Logo Design", "TRADEMARK & IP", "both"),
  new Service(29, "Copyright Registration", "TRADEMARK & IP", "both"),
  new Service(30, "Indian Patent Search", "TRADEMARK & IP", "both"),
  new Service(31, "Provisional Application", "TRADEMARK & IP", "both"),
  new Service(32, "Permanent Patent", "TRADEMARK & IP", "both"),
  new Service(33, "Copyright Infringement", "TRADEMARK & IP", "both"),
  new Service(34, "Patent Infringement", "TRADEMARK & IP", "both"),
  new Service(35, "Trademark Infringement", "TRADEMARK & IP", "both"),
  new Service(36, "Design Registration", "TRADEMARK & IP", "both"),

  // NGO
  new Service(37, "NGO", "NGO", "company"),
  new Service(38, "Section 8", "NGO", "company"),
  new Service(39, "Trust Registration", "NGO", "company"),
  new Service(40, "Society Registration", "NGO", "company"),
  new Service(41, "NGO Compliance", "NGO", "company"),
  new Service(42, "Section 8 Compliance", "NGO", "company"),
  new Service(43, "CSR 1 Filing", "NGO", "company"),
  new Service(44, "Sec 80G & Sec 12A", "NGO", "company"),
  new Service(45, "Darpan Registration", "NGO", "company"),

  // Property & Personal
  new Service(46, "Property Title Verification", "PROPERTY & PERSONAL", "both"),
  new Service(47, "Property Registration", "PROPERTY & PERSONAL", "both"),
  new Service(48, "Name Change", "PROPERTY & PERSONAL", "individual"),
  new Service(49, "Religion Change", "PROPERTY & PERSONAL", "individual"),
  new Service(50, "Gender Change", "PROPERTY & PERSONAL", "individual"),
  new Service(51, "Online Police Complaint", "PROPERTY & PERSONAL", "both"),
  new Service(52, "Marriage Registration", "PROPERTY & PERSONAL", "individual"),
  new Service(53, "Court Marriage", "PROPERTY & PERSONAL", "individual"),
  new Service(54, "Corporate Immigration", "PROPERTY & PERSONAL", "company"),

  // Documentation
  new Service(55, "Documentation Services", "DOCUMENTATION", "both"),
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const tabButtons = document.querySelectorAll(".tab-button");
const servicesContainer = document.getElementById("servicesContainer");

// State
let activeTab = "all";
let searchTerm = "";

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderServices();
  });

  // Search button
  searchButton.addEventListener("click", () => {
    renderServices();
  });

  // Tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active tab
      activeTab = button.dataset.tab;

      // Update UI
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Re-render services
      renderServices();
    });
  });
}

// Filter services based on active tab and search term
function filterServices() {
  let filtered = [...services];

  // Filter by tab
  if (activeTab === "individual") {
    filtered = filtered.filter(
      (service) => service.type === "individual" || service.type === "both"
    );
  } else if (activeTab === "company") {
    filtered = filtered.filter(
      (service) => service.type === "company" || service.type === "both"
    );
  }

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(
      (service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
}

// Group services by category
function groupServicesByCategory(services) {
  const grouped = {};

  services.forEach((service) => {
    if (!grouped[service.category]) {
      grouped[service.category] = [];
    }
    grouped[service.category].push(service);
  });

  return grouped;
}

// Navigate to service details page
function navigateToServiceDetails(serviceId) {
  // Save the selected service ID to localStorage so we can retrieve it on the details page
  localStorage.setItem("selectedServiceId", serviceId);

  // Redirect to the service details page
  window.location.href = `service-details.html`;
}

// Render services to the DOM
function renderServices() {
  // Clear the container
  servicesContainer.innerHTML = "";

  // Filter and group services
  const filteredServices = filterServices();
  const groupedServices = groupServicesByCategory(filteredServices);

  // If no services found
  if (Object.keys(groupedServices).length === 0) {
    servicesContainer.innerHTML = `
      <div class="no-results">
        <p>No services found matching your criteria.</p>
      </div>
    `;
    return;
  }

  // Create HTML for each category
  for (const [category, services] of Object.entries(groupedServices)) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "category-card";

    // Category header
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";
    categoryHeader.innerHTML = `<h2>${category}</h2>`;

    // Service list
    const serviceList = document.createElement("ul");
    serviceList.className = "service-list";

    // Add each service
    services.forEach((service) => {
      const serviceItem = document.createElement("li");
      serviceItem.className = "service-item";

      serviceItem.innerHTML = `
        <button class="service-button" data-id="${service.id}">
          <span class="service-name">${service.name}</span>
          <span class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      `;

      serviceList.appendChild(serviceItem);
    });

    // Assemble the category card
    categoryCard.appendChild(categoryHeader);
    categoryCard.appendChild(serviceList);

    // Add to the container
    servicesContainer.appendChild(categoryCard);
  }

  // Add click event listeners to service buttons
  document.querySelectorAll(".service-button").forEach((button) => {
    button.addEventListener("click", () => {
      const serviceId = button.dataset.id;
      navigateToServiceDetails(serviceId);
    });
  });
}
