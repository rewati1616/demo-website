// Verified Business Information for Deluxe Solution
export const BUSINESS_INFO = {
  name: "Deluxe Solution",
  tagline: "Professional Computer, CCTV & Technology Repair Services",
  shortDescription: "Pune's trusted technical service center for laptops, desktop computers, CCTV surveillance systems, and currency counting machines.",
  phone: "+91 98900 17975",
  phoneRaw: "+919890017975",
  phoneDisplay: "+91 98900 17975",
  email: "delux.solution@gmail.com",
  whatsapp: "+91 98900 17975",
  whatsappRaw: "919890017975",
  address: {
    shop: "Shop No. 6, Sr. No. 18/3/1, Vithal Heights, Lane No. 4",
    landmark: "Opposite Santosh Hall, Vadgaon Budruk / Hingane Khurd",
    street: "Sinhgad Road",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411051",
    country: "India",
    full: "Shop No. 6, Vithal Heights, Lane No. 4, Opp. Santosh Hall, Vadgaon Budruk, Sinhgad Road, Pune, Maharashtra 411051"
  },
  hours: {
    weekdays: "10:00 AM – 7:00 PM",
    weekend: "10:00 AM – 7:00 PM",
    note: "Monday to Sunday (All 7 Days)",
    openHour: 10,
    closeHour: 19
  },
  mapUrl: "https://maps.google.com/?q=Deluxe+Solution+Sinhgad+Road+Pune+411051",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4428059885994!2d73.8216!3d18.4735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959999999999%3A0x0!2sSinhgad%20Road%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  servicesList: [
    {
      id: "laptop-computer-repair",
      title: "Computer & Laptop Repair",
      shortDesc: "Complete hardware diagnostics, screen and keyboard replacement, motherboard servicing, and performance optimization.",
      image: "/images/desktop-pc.png",
      popular: true,
      features: [
        "Motherboard chip-level diagnosis & repair",
        "Broken screen, hinge & keyboard replacement",
        "RAM & SSD high-speed upgrade",
        "Overheating, thermal paste & cooling fan service",
        "Power jack, battery & charging troubleshooting",
        "OS installation & data backup recovery"
      ]
    },
    {
      id: "cctv-camera-repair",
      title: "CCTV Camera & Security Repair",
      shortDesc: "Setup and troubleshooting for HD analog & IP cameras, DVR/NVR recording diagnosis, and remote mobile viewing.",
      image: "/images/cctv-setup.png",
      popular: true,
      features: [
        "No-signal, blank screen & video loss troubleshooting",
        "DVR / NVR hard drive recording fault diagnosis",
        "Power supply and BNC/RJ45 connector replacement",
        "Night vision infrared sensor diagnostics",
        "Remote viewing setup on smartphone & PC",
        "Hikvision, CP Plus, Dahua equipment support"
      ]
    },
    {
      id: "currency-machine-repair",
      title: "Currency Counting Machine Service",
      shortDesc: "Specialized servicing, sensor cleaning, note jamming fixes, and calibration for standard and mix value cash counters.",
      image: "/images/currency-mix-counter.png",
      popular: true,
      features: [
        "Mix value counter color sensor calibration",
        "Fake note detector (UV, MG, IR) troubleshooting",
        "Note jamming & feeding roller replacement",
        "Counting error & error code resolution",
        "Display & keypad button repair",
        "Preventative maintenance & optical cleaning"
      ]
    },
    {
      id: "printer-office-automation",
      title: "Printers & Office Automation",
      shortDesc: "Ink tank & laser printer repair, paper feed issue fixes, printhead unclogging, and paper shredder servicing.",
      image: "/images/brother-printer.png",
      popular: false,
      features: [
        "Refill ink tank & laser printer servicing",
        "Paper pickup roller and paper jam repairs",
        "Printhead cleaning & streak line fixing",
        "Cartridge toner refilling & reset",
        "Logic board & power supply troubleshooting",
        "Commercial paper shredder repair"
      ]
    }
  ]
};

// Check if store is currently open based on Indian Standard Time (UTC+5:30)
export const isStoreCurrentlyOpen = () => {
  try {
    const now = new Date();
    // Calculate IST time
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcTime + (3600000 * 5.5));
    const currentHour = istTime.getHours();
    return currentHour >= BUSINESS_INFO.hours.openHour && currentHour < BUSINESS_INFO.hours.closeHour;
  } catch (e) {
    return true; // Fallback
  }
};
