🚀 **Smart Cleanliness and Sanitation Management System (SCSMS)**

**SCSMS** is a sanitation management platform designed to enable users to report unclean areas by submitting images and tracking locations via IP-based geolocation. The system streamlines municipal (**BMC**) response efficiency by providing **real-time status updates, role-based authentication, and a scalable waste management solution**.

---

## 🌟 **Key Features**

- 📷 **Image Submission** – Capture or upload images of unclean areas.
- 📍 **IP-Based Location Tracking** – Automatically logs report location.
- 📊 **Real-Time Status Updates** – Monitor progress dynamically.
- 👥 **Role-Based Access Control** – Separate portals for **Users and BMC teams**.
- 🔒 **Secure REST APIs** – Built with **Spring Boot**.
- 🛡️ **Spam Detection** – Prevents false and duplicate reports.
- ⚡ **Optimized MySQL Database** – Stored procedures for fast queries.

---

## 🏗️ **Tech Stack**

✅ **Frontend**: React.js (Vite), Bootstrap, jQuery\
✅ **Backend**: Java, Spring Boot, Maven\
✅ **Database**: MySQL (Cloud-Based)\
✅ **Security**: Role-Based Access\
✅ **Real-Time Updates**: WebSockets & Polling Mechanism

---

## 🌍 **Live Demo**

🔗 **View Frontend:** [SCSMS on Vercel](https://scsms.vercel.app/)

---

## 📌 **Deployment Plan**

- 🌐 **Frontend**: Vercel
- ☁️ **Backend**: AWS EC2
- 🛢️ **Database**: MySQL Cloud

---

## 🎯 **Future Enhancements**

- 📡 **AI-Based Image Validation**
- 📊 **Admin Dashboard for Analytics**
- 🏙️ **City-Wide Waste Management Insights**
- 🔔 **Push Notifications for Status Updates**

---

## **🚀 Get Started**

### **Clone the Repository**

```sh
# Clone the repository
git clone https://github.com/gniraj1432/scsms.git
cd scsms
```

---

## **To Run the Application on localhost**

### **Check Port 8082**

Make sure nothing is running on **port 8082** in the background. If something is using it, either stop the process or update the port in both the Java backend and React frontend.

### **Run Java Application**

```sh
# Navigate to the Java application directory
cd scsms/src/main/java/com/springboot/application

# Run the Spring Boot application
mvn clean install
java -jar target/*.jar
```

**Alternatively, you can run the Java application from your IDE:**
1. Open your project in **Eclipse/IntelliJ IDEA**.
2. Navigate to `ScsmsApplication.java` in `src/main/java/com/springboot/application/`.
3. Right-click on the file and select **Run As > Java Application**.

### **Run React Application**

```sh
# Fetch all branches
git fetch  

# Switch to the 'react' branch
git checkout react  

# Pull the latest changes from the 'react' branch
git pull origin react  

# Install dependencies and start the frontend
npm install
npm start
```

### **Possible Issues & Solutions After `npm install`**

- **Deprecation Warnings:** These can be ignored as they don't affect app functionality.
- **Missing Babel Plugin Warning:** If this appears, it doesn’t impact the app.
- **Vulnerabilities:** Some vulnerabilities may be detected. The app runs fine, but it’s recommended to fix them later.

---

## **To Deploy on a Server**

### **Backend Deployment**

```sh
mvn clean install
java -jar target/*.jar
```

### **Frontend Deployment**

```sh
npm install
npm start
```

---

🚀 **SCSMS is now fully optimized and ready for deployment!**

