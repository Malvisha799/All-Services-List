// Service data structure (same as in script.js)
class Service {
    constructor(id, name, category, type, description, price, timeline, requirements) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.type = type; // 'individual', 'company', or 'both'
      this.description = description || 'Detailed description will be available soon.';
      this.price = price || { from: 999, to: 9999 };
      this.timeline = timeline || '7-15 working days';
      this.requirements = requirements || [
        'Identity proof',
        'Address proof',
        'Relevant documents based on service type'
      ];
    }
  }
  
  // Sample services data with additional details
  const services = [
    // Consult an Expert
    new Service(1, 'Talk to a Lawyer', 'CONSULT AN EXPERT', 'both', 
      'Get expert legal advice from experienced lawyers on various matters including business, property, family, and more. Our lawyers can help you understand legal implications, draft documents, and provide guidance on legal proceedings.',
      { from: 999, to: 2999 },
      '24-48 hours',
      ['Brief description of your legal issue', 'Any relevant documents']
    ),
    new Service(2, 'Talk to a CA', 'CONSULT AN EXPERT', 'both',
      'Consult with a Chartered Accountant for expert financial advice, tax planning, audit assistance, and accounting guidance. Our CAs can help with both personal and business financial matters.',
      { from: 999, to: 2999 },
      '24-48 hours',
      ['Financial statements (if applicable)', 'Previous tax returns (if applicable)']
    ),
    new Service(3, 'Talk to a CS', 'CONSULT AN EXPERT', 'both',
      'Speak with a Company Secretary for guidance on corporate compliance, company law matters, board procedures, and regulatory requirements. Our CS professionals ensure your business stays compliant with all legal requirements.',
      { from: 999, to: 2999 },
      '24-48 hours',
      ['Company registration details', 'Specific compliance questions']
    ),
    new Service(4, 'Talk to a IP/Trademark Lawyer', 'CONSULT AN EXPERT', 'both',
      'Get specialized advice from Intellectual Property lawyers on trademarks, patents, copyrights, and design protection. Our IP lawyers can help protect your creative and business assets.',
      { from: 1499, to: 3999 },
      '24-48 hours',
      ['Details of your intellectual property', 'Any existing registrations']
    ),
    
    // Business Setup (adding just a few detailed examples)
    new Service(5, 'Private Limited Company', 'BUSINESS SETUP', 'company',
      'Register a Private Limited Company with limited liability protection, separate legal entity status, and enhanced credibility. Ideal for medium to large businesses with growth plans and multiple shareholders.',
      { from: 7999, to: 12999 },
      '15-20 working days',
      ['Director IDs and proofs', 'Proposed company name options', 'Address proof for registered office']
    ),
    
    // Adding basic entries for the rest of the services
    new Service(6, 'Limited Liability Partnership', 'BUSINESS SETUP', 'company'),
    new Service(7, 'One Person Company', 'BUSINESS SETUP', 'individual'),
    new Service(8, 'Sole Proprietorship', 'BUSINESS SETUP', 'individual'),
    new Service(9, 'Nidhi Company', 'BUSINESS SETUP', 'company'),
    new Service(10, 'Producer Company', 'BUSINESS SETUP', 'company'),
    new Service(11, 'Partnership Firm', 'BUSINESS SETUP', 'company'),
    new Service(12, 'Startup India Registration', 'BUSINESS SETUP', 'both'),
    new Service(13, 'US Incorporation', 'BUSINESS SETUP', 'both'),
    new Service(14, 'Singapore Incorporation', 'BUSINESS SETUP', 'company'),
    new Service(15, 'UK Incorporation', 'BUSINESS SETUP', 'company'),
    new Service(16, 'Netherlands Incorporation', 'BUSINESS SETUP', 'company'),
    new Service(17, 'Hong Kong Incorporation', 'BUSINESS SETUP', 'company'),
    new Service(18, 'Dubai Incorporation', 'BUSINESS SETUP', 'company'),
    
    // Trademark & IP (adding one detailed example)
    new Service(19, 'Trademark Registration', 'TRADEMARK & IP', 'both',
      'Protect your brand identity with trademark registration. This service includes comprehensive trademark search, application preparation, filing with the trademark registry, and follow-up until registration is complete.',
      { from: 6999, to: 9999 },
      '12-18 months',
      ['Logo/wordmark to be registered', 'List of goods/services', 'Business details']
    ),
    
    // Basic entries for remaining services
    new Service(20, 'Search for Trademark', 'TRADEMARK & IP', 'both'),
    new Service(21, 'Respond to TM Objection', 'TRADEMARK & IP', 'both'),
    new Service(22, 'Well Known Trademark', 'TRADEMARK & IP', 'company'),
    new Service(23, 'Trademark Watch', 'TRADEMARK & IP', 'both'),
    new Service(24, 'Trademark Renewal', 'TRADEMARK & IP', 'both'),
    new Service(25, 'Trademark Assignment', 'TRADEMARK & IP', 'both'),
    new Service(26, 'USA Trademark', 'TRADEMARK & IP', 'both'),
    new Service(27, 'International Trademark', 'TRADEMARK & IP', 'both'),
    new Service(28, 'Logo Design', 'TRADEMARK & IP', 'both'),
    new Service(29, 'Copyright Registration', 'TRADEMARK & IP', 'both'),
    new Service(30, 'Indian Patent Search', 'TRADEMARK & IP', 'both'),
    new Service(31, 'Provisional Application', 'TRADEMARK & IP', 'both'),
    new Service(32, 'Permanent Patent', 'TRADEMARK & IP', 'both'),
    new Service(33, 'Copyright Infringement', 'TRADEMARK & IP', 'both'),
    new Service(34, 'Patent Infringement', 'TRADEMARK & IP', 'both'),
    new Service(35, 'Trademark Infringement', 'TRADEMARK & IP', 'both'),
    new Service(36, 'Design Registration', 'TRADEMARK & IP', 'both'),
    
    // NGO (adding one detailed example)
    new Service(37, 'NGO', 'NGO', 'company',
      'Complete NGO registration service including documentation, filing with appropriate authorities, and guidance on compliance requirements. We help you establish your non-profit organization legally.',
      { from: 8999, to: 14999 },
      '30-45 days',
      ['NGO objectives and activities', 'Founding member details', 'Proposed name options']
    ),
    
    // Basic entries for remaining services
    new Service(38, 'Section 8', 'NGO', 'company'),
    new Service(39, 'Trust Registration', 'NGO', 'company'),
    new Service(40, 'Society Registration', 'NGO', 'company'),
    new Service(41, 'NGO Compliance', 'NGO', 'company'),
    new Service(42, 'Section 8 Compliance', 'NGO', 'company'),
    new Service(43, 'CSR 1 Filing', 'NGO', 'company'),
    new Service(44, 'Sec 80G & Sec 12A', 'NGO', 'company'),
    new Service(45, 'Darpan Registration', 'NGO', 'company'),
    
    // Property & Personal (adding one detailed example)
    new Service(46, 'Property Title Verification', 'PROPERTY & PERSONAL', 'both',
      "Comprehensive property title verification service to ensure the property you are purchasing has a clear title. Our experts check all legal documents, encumbrances, and ownership history.",
      { from: 4999, to: 9999 },
      '7-10 working days',
      ['Property documents', 'Sale deed', 'Previous ownership records']
    ),
    
    // Basic entries for remaining services
    new Service(47, 'Property Registration', 'PROPERTY & PERSONAL', 'both'),
    new Service(48, 'Name Change', 'PROPERTY & PERSONAL', 'individual'),
    new Service(49, 'Religion Change', 'PROPERTY & PERSONAL', 'individual'),
    new Service(50, 'Gender Change', 'PROPERTY & PERSONAL', 'individual'),
    new Service(51, 'Online Police Complaint', 'PROPERTY & PERSONAL', 'both'),
    new Service(52, 'Marriage Registration', 'PROPERTY & PERSONAL', 'individual'),
    new Service(53, 'Court Marriage', 'PROPERTY & PERSONAL', 'individual'),
    new Service(54, 'Corporate Immigration', 'PROPERTY & PERSONAL', 'company'),
    
    // Documentation
    new Service(55, 'Documentation Services', 'DOCUMENTATION', 'both',
      'Professional documentation services for various legal, business, and personal needs. Our experts prepare, review, and finalize documents ensuring they meet all legal requirements.',
      { from: 1999, to: 4999 },
      '3-7 working days',
      ['Purpose of documentation', 'Relevant personal/business details', 'Any specific requirements']
    ),
  ];
  
  // DOM Elements
  const serviceHeader = document.getElementById('serviceHeader');
  const serviceDescription = document.getElementById('serviceDescription');
  const serviceSidebar = document.getElementById('serviceSidebar');
  const relatedServices = document.getElementById('relatedServices');
  const backButton = document.getElementById('backButton');
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    // Get the selected service ID from localStorage
    const selectedServiceId = localStorage.getItem('selectedServiceId');
    
    if (!selectedServiceId) {
      // If no service ID is found, redirect back to the services list
      window.location.href = 'http://127.0.0.1:5500/All%20services%20list/all-services.html';
      return;
    }
    
    // Find the selected service
    const service = services.find(s => s.id === parseInt(selectedServiceId));
    
    if (!service) {
      // If service not found, redirect back to the services list
      window.location.href = 'http://127.0.0.1:5500/All%20services%20list/all-services.html';
      return;
    }
    
    // Update page title
    document.title = `${service.name} - Service Details`;
    
    // Render service details
    renderServiceDetails(service);
    
    // Set up back button
    backButton.addEventListener('click', () => {
      window.location.href = 'http://127.0.0.1:5500/All%20services%20list/all-services.html';
    });
  });
  
  // Render service details
  function renderServiceDetails(service) {
    // Render service header
    serviceHeader.innerHTML = `
      <div>
        <h1 class="service-title">${service.name}</h1>
      </div>
      <div>
        <span class="service-category">${service.category}</span>
        <span class="service-type">${getTypeLabel(service.type)}</span>
      </div>
    `;
    
    // Render service description
    serviceDescription.innerHTML = `
      <h2>Service Overview</h2>
      <p>${service.description}</p>
      
      <h2>Requirements</h2>
      <ul>
        ${service.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>
      
      <h2>Process</h2>
      <p>Our streamlined process ensures efficient service delivery:</p>
      <ol>
        <li>Submit your application with required documents</li>
        <li>Our experts review your submission</li>
        <li>We prepare and file necessary paperwork</li>
        <li>Regular updates on application status</li>
        <li>Successful completion and delivery of service</li>
      </ol>
    `;
    
    // Render service sidebar
    serviceSidebar.innerHTML = `
      <h3>Service Details</h3>
      
      <div class="price-info">
        <div class="price-label">Starting Price</div>
        <div class="price-value">₹${service.price.from.toLocaleString()}</div>
      </div>
      
      <div class="timeline-info">
        <div class="timeline-label">Estimated Timeline</div>
        <div class="timeline-value">${service.timeline}</div>
      </div>
      
      <button class="cta-button">Get Started</button>
    `;
    
    // Render related services
    const relatedServicesList = getRelatedServices(service);
    
    relatedServices.innerHTML = `
      <h2>Related Services</h2>
      <div class="related-services-list">
        ${relatedServicesList.map(s => `
          <div class="related-service-card" data-id="${s.id}">
            <div class="related-service-name">${s.name}</div>
            <div class="related-service-category">${s.category}</div>
          </div>
        `).join('')}
      </div>
    `;
    
    // Add click event listeners to related service cards
    document.querySelectorAll('.related-service-card').forEach(card => {
      card.addEventListener('click', () => {
        const serviceId = card.dataset.id;
        // Save the selected service ID to localStorage
        localStorage.setItem('selectedServiceId', serviceId);
        // Reload the page to show the new service details
        window.location.reload();
      });
    });
  }
  
  // Get related services (same category or type)
  function getRelatedServices(currentService) {
    return services
      .filter(service => 
        service.id !== currentService.id && 
        (service.category === currentService.category || service.type === currentService.type)
      )
      .slice(0, 3); // Limit to 3 related services
  }
  
  // Get human-readable label for service type
  function getTypeLabel(type) {
    switch (type) {
      case 'individual':
        return 'For Individuals';
      case 'company':
        return 'For Companies';
      case 'both':
        return 'For All';
      default:
        return '';
    }
  }