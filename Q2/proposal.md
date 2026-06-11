# Question 2 – Sustainability Map for IIT Bombay

## 1. Frameworks / Tools / Platforms

I would use the following technologies:

* **React** for building the frontend interface.
* **Leaflet.js** for interactive map visualization.
* **OpenStreetMap** as the map data source.
* **Firebase Firestore** for storing sustainability location data.
* **Firebase Hosting** or **Vercel** for deployment.

**Reason:** Leaflet.js is lightweight, open-source, easy to customize, and well-suited for a campus-scale interactive map.

---

## 2. Platform Structure and Workflow

The platform would consist of an interactive IIT Bombay campus map highlighting sustainability-related facilities and initiatives.

### Examples of Locations

* E-waste collection points
* Biogas plants
* Solar panel installations
* Rainwater harvesting systems
* Composting units
* Recycling centers

### Workflow

1. Store location data and descriptions in Firebase.
2. Fetch data dynamically using React.
3. Display locations as categorized markers on the map.
4. Show detailed information through pop-ups when markers are clicked.
5. Allow users to filter locations based on categories.

---

## 3. Deployment Steps

### Phase 1 – Data Collection

* Identify sustainability-related facilities across campus.
* Gather location coordinates, descriptions, images, and relevant statistics.

### Phase 2 – UI Development

* Design a clean and intuitive user interface.
* Create map layout and navigation components.

### Phase 3 – Map Integration

* Integrate Leaflet.js with React.
* Add markers and interactive pop-ups.
* Implement search and filtering functionality.

### Phase 4 – Backend Integration

* Store and manage data using Firebase.
* Enable dynamic content updates without modifying frontend code.

### Phase 5 – Deployment

* Test responsiveness across devices.
* Deploy using Firebase Hosting or Vercel.
* Monitor and maintain the platform.

---

## 4. Additional Features

* Route guidance to selected sustainability locations.
* QR-code based check-ins for awareness campaigns.
* User contributions for suggesting new sustainability initiatives.
* Accessibility features such as color-blind friendly markers and mobile-friendly design.

This platform would increase awareness of sustainability initiatives across IIT Bombay while providing an engaging and interactive experience for students and visitors.
