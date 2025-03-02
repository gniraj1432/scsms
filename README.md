🚀 Smart Cleanliness and Sanitation Management System (SCSMS)

**SCSMS** is a sanitation management platform designed to enable users to report unclean areas by submitting images and tracking locations via IP-based geolocation. The system streamlines municipal (**BMC**) response efficiency by providing **real-time status updates, role-based authentication, and a scalable waste management solution**.

## 🌟 Key Features
- 📷 **Image Submission** – Capture or upload images of unclean areas.
- 📍 **IP-Based Location Tracking** – Automatically logs report location.
- 📊 **Real-Time Status Updates** – Monitor progress dynamically.
- 👥 **Role-Based Access Control** – Separate portals for **Users, Admins, and BMC teams**.
- 🔒 **Secure REST APIs** – Built with **Spring Boot**.
- 🛡️ **Spam Detection** – Prevents false and duplicate reports.
- ⚡ **Optimized MySQL Database** – Stored procedures for fast queries.

## 🏗️ Tech Stack
✅ **Frontend**: React.js (Vite), Bootstrap, jQuery  
✅ **Backend**: Java, Spring Boot, Maven  
✅ **Database**: MySQL (Cloud-Based)  
✅ **Security**: Role-Based Access  
✅ **Real-Time Updates**: WebSockets & Polling Mechanism  

## 📌 Deployment Plan
- 🌐 **Frontend**: Vercel  
- ☁️ **Backend**: AWS EC2  
- 🛢️ **Database**: MySQL Cloud  

## 🎯 Future Enhancements
- 📡 **AI-Based Image Validation**
- 📊 **Admin Dashboard for Analytics**
- 🏙️ **City-Wide Waste Management Insights**
- 🔔 **Push Notifications for Status Updates**

---

### **🚀 Get Started**
```sh
# Clone the repository
git clone https://github.com/gniraj1432/scsms.git
cd scsms

# Setup Backend
mvn clean install
java -jar target/*.jar

# Setup Frontend
npm install
npm start
