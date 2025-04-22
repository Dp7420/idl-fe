# 📦 DigiLocker - Secure Document Storage for Organizations

A secure digital locker system built using Java Spring Boot (Backend) and Angular (Frontend). This system is designed to store and manage various sensitive company-related documents such as bank details, income tax, EPF, ESI, GST, KMP, professional tax, TDS, director, and MCA-related documents. It follows enterprise-grade security using JWT authentication and role-based access control.

---

## 🚀 Features

- 🔐 JWT-based Authentication & Role-based Authorization
- 🏦 Secure Company Bank Details Storage
- 💰 Income Tax, TDS & GST Document Management
- 🏢 EPF, ESI, Professional Tax Tracking
- 👤 Director & KMP Information Management
- 🧾 MCA Integration Ready (Company Master Data)
- 📂 Encrypted Document Upload & Retrieval
- 🛡️ Configurable Encrypted Storage Practices
- 🌐 Angular Frontend Dashboard with Real-Time Updates

---

## 🛠️ Tech Stack

- **Frontend:** Angular 15+, TypeScript, RxJS, Angular Material, Bootstrap
- **Backend:** Java 17, Spring Boot, Spring Security, Spring Data JPA
- **Database:** MySQL
- **Build Tool:** Maven
- **Other:** Lombok, Swagger (OpenAPI), JWT, CORS Configuration

---

## 🧑‍💻 Getting Started

### Prerequisites

- Java 17+
- Maven
- MySQL
- Node.js & Angular CLI (for frontend)
- Postman (for testing APIs)

---

## 🗂️ Backend Setup

### Clone the backend repository

```bash
git clone https://github.com/Dp7420/idl-be.git
cd idl-be
```

### Configure Database (application.properties or application.yml)

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/digilocker_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Build & Run the backend

```bash
./mvnw clean install
./mvnw spring-boot:run
```

API Docs: `http://localhost:8080/swagger-ui/index.html`

---

## 💻 Frontend Setup

### Clone the frontend repository

```bash
git clone https://github.com/your-username/idl-fe.git
cd idl-fe
```

### Install dependencies and run

```bash
npm install
ng serve
```

Frontend will run on: `http://localhost:4200`

---

## 📂 Project Structure (Backend)

```
src/
├── main/
│   ├── java/com/digilocker/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   ├── dto/
│   │   └── config/
│   └── resources/
│       ├── application.properties
│       └── static/
```

---

## 🙋‍♂️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## ✉️ Contact

- **Developer:** Digambar Bulbule  
- **Email:** digambarbulbule123@gmail.com  
- **LinkedIn:** [https://www.linkedin.com/in/digambar-bulbule-617515251/](https://www.linkedin.com/in/digambar-bulbule-617515251/)