# 0x05. NodeJS Basics

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Backend-Engineering-0052CC?style=for-the-badge" alt="Backend Engineering">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
</p>

<div align="center">
  <h3>🖥️ Master Backend Development with Node.js</h3>
  <p><em>Build scalable server applications and APIs with JavaScript</em></p>
</div>

---

## 📋 Table of Contents
- [🎯 Overview](#-overview)
- [🎓 Learning Objectives](#-learning-objectives)
- [📚 Project Tasks](#-project-tasks)
- [📁 Directory Structure](#-directory-structure)
- [🚀 Usage](#-usage)
- [💡 Core Competencies Developed](#-core-competencies-developed)
- [🔧 Setup & Prerequisites](#-setup--prerequisites)
- [📖 Resources](#-resources)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

## 🎯 Overview

This project introduces you to **Node.js backend development**, marking your transition from frontend JavaScript to server-side programming. Node.js enables JavaScript to run on servers, making it possible to build full-stack applications with a single programming language.

**Why Node.js is Revolutionary:**
- 🌐 **JavaScript Everywhere**: Use the same language for frontend and backend
- ⚡ **Event-Driven Architecture**: Handle thousands of concurrent connections efficiently
- 📦 **Rich Ecosystem**: Access to over 1 million npm packages
- 🚀 **Performance**: V8 engine provides excellent JavaScript execution speed
- 🔄 **Non-blocking I/O**: Perfect for I/O-intensive applications like APIs

**Real-World Applications:**
- 🌐 **REST APIs**: Build scalable web services
- 🔄 **Real-time Applications**: Chat applications, live updates, gaming
- 🗄️ **Database Operations**: Connect to and manipulate databases
- 📊 **Data Processing**: Handle file uploads, data transformation
- 🌍 **Microservices**: Build distributed system architectures

**Career Impact:**
Node.js skills open doors to:
- Backend Developer positions
- Full-Stack Engineer roles
- API Development specialist
- Real-time application development
- Microservices architecture roles

## 🎓 Learning Objectives

By completing this project, you will master:

### 🖥️ **Node.js Runtime Fundamentals**
- **Runtime Environment**: Understand how Node.js executes JavaScript on servers
- **Event Loop**: Master asynchronous, non-blocking programming patterns
- **Global Objects**: Work with `process`, `global`, `require`, and Node.js globals
- **Module System**: Organize code using CommonJS and ES6 modules

### 📁 **File System Operations**
- **Synchronous I/O**: Read and write files with blocking operations
- **Asynchronous I/O**: Handle file operations without blocking the event loop
- **Stream Processing**: Work with large files using Node.js streams
- **Path Manipulation**: Navigate file systems across different operating systems

### 🌐 **HTTP Server Development**
- **Basic HTTP Server**: Create servers that handle HTTP requests and responses
- **Request Handling**: Parse URLs, headers, and request bodies
- **Response Generation**: Send appropriate HTTP responses with correct status codes
- **Routing**: Direct requests to appropriate handlers based on URL patterns

### 🚀 **Express.js Framework**
- **Web Application Framework**: Build robust web applications with Express.js
- **Middleware**: Implement request processing pipelines
- **Routing**: Create organized, maintainable route structures
- **Error Handling**: Implement comprehensive error management strategies

### 🗄️ **Data Management**
- **CSV File Processing**: Read, parse, and manipulate CSV data
- **JSON Handling**: Work with JSON data for API development
- **Database Integration**: Connect to databases and perform CRUD operations
- **Data Validation**: Ensure data integrity and handle edge cases

## 📚 Project Tasks

Each task builds essential backend development skills:

### **Foundation - Node.js Basics**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **0** | `0-console.js` | Basic Output | Console operations and process management |
| **1** | `1-stdin.js` | Input Handling | Reading from standard input streams |

### **File System Operations**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **2** | `2-read_file.js` | Sync File Reading | Synchronous file operations and error handling |
| **3** | `3-read_file_async.js` | Async File Reading | Asynchronous file operations with callbacks |

### **HTTP Server Development**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **4** | `4-http.js` | Basic HTTP Server | Creating simple HTTP servers |
| **5** | `5-http.js` | Advanced HTTP | Request routing and response handling |

### **Express.js Framework**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **6** | `6-http_express.js` | Express Basics | Introduction to Express.js framework |
| **7** | `7-http_express.js` | Advanced Express | Routing, middleware, and error handling |

### **Production Application**
| Task | Directory | Concept | Description |
|------|-----------|---------|-------------|
| **8+** | `full_server/` | Complete Application | Full-featured Node.js server with MVC architecture |

## 📁 Directory Structure

```
0x05-Node_JS_basic/
├── 🌟 Foundation Tasks
│   ├── 0-console.js                # Basic console operations
│   ├── 1-stdin.js                  # Standard input handling
│   └── babel.config.js             # Babel configuration
├── 📁 File System Operations
│   ├── 2-read_file.js              # Synchronous file reading
│   ├── 3-read_file_async.js        # Asynchronous file reading
│   └── database.csv                # Sample data file
├── 🌐 HTTP Server Development
│   ├── 4-http.js                   # Basic HTTP server
│   └── 5-http.js                   # Advanced HTTP handling
├── 🚀 Express.js Framework
│   ├── 6-http_express.js           # Express basics
│   └── 7-http_express.js           # Advanced Express features
├── 🏗️ Production Application
│   └── full_server/                # Complete server implementation
│       ├── controllers/            # Request handlers
│       │   ├── AppController.js    # Application controller
│       │   └── StudentsController.js # Student data controller
│       ├── routes/                 # Route definitions
│       │   └── index.js           # Route configuration
│       ├── utils/                  # Utility functions
│       │   └── utils.js           # Helper functions
│       ├── server.js              # Server entry point
│       └── package.json           # Dependencies and scripts
├── 🧪 Test Files
│   ├── 0-main.js                   # Console tests
│   ├── 2-main_0.js                # File reading tests
│   ├── 4-main_0.js                # HTTP server tests
│   └── ...                         # Additional test files
├── ⚙️ Configuration
│   ├── package.json                # Project dependencies
│   ├── babel.config.js             # Babel transpilation
│   └── .eslintrc.js               # Code quality rules
└── 📚 Documentation
    └── README.md                   # This file
```

## 🚀 Usage

### **Quick Start**
```bash
# Navigate to the project directory
cd 0x05-Node_JS_basic

# Install dependencies
npm install

# Run a basic task
node 0-console.js

# Test with provided test files
node 0-main.js
```

### **File System Operations**
```bash
# Test synchronous file reading
node 2-read_file.js database.csv

# Test asynchronous file reading
node 3-read_file_async.js database.csv

# Run with test files
node 2-main_0.js
node 3-main_0.js
```

### **HTTP Server Development**
```bash
# Start a basic HTTP server
node 4-http.js &

# Test the server
curl http://localhost:1245

# Start advanced HTTP server
node 5-http.js &

# Test different endpoints
curl http://localhost:1245/
curl http://localhost:1245/students

# Stop servers
pkill node
```

### **Express.js Development**
```bash
# Start Express server
node 6-http_express.js &

# Test Express endpoints
curl http://localhost:1245/
curl http://localhost:1245/students

# Start advanced Express server
node 7-http_express.js &

# Test with query parameters
curl "http://localhost:1245/students/CS"
curl "http://localhost:1245/students/SWE"
```

### **Production Application**
```bash
# Navigate to the full server
cd full_server

# Install dependencies
npm install

# Start the server
npm start

# Alternative: Start with nodemon for development
npm run dev

# Test the complete application
curl http://localhost:1245/
curl http://localhost:1245/students
curl http://localhost:1245/students/CS
```

### **Development Workflow**
```bash
# Lint code for Node.js best practices
npm run lint

# Run all tests
npm test

# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## 💡 Core Competencies Developed

### 🔧 **Technical Skills**

#### **Node.js Runtime Mastery**
- **Asynchronous Programming**: Understanding event loops, callbacks, and non-blocking I/O
- **Module System**: Creating, importing, and organizing code using CommonJS and ES6 modules
- **Process Management**: Working with environment variables, command-line arguments, and process lifecycle
- **Error Handling**: Implementing robust error management for server applications

#### **Backend Development Fundamentals**
- **HTTP Protocol**: Understanding requests, responses, status codes, and headers
- **Server Architecture**: Designing scalable server applications and API endpoints
- **File System Operations**: Efficiently reading, writing, and processing files
- **Data Processing**: Parsing CSV, JSON, and other data formats

#### **Express.js Framework Proficiency**
- **Web Application Development**: Building robust web applications with Express.js
- **Middleware**: Implementing request processing pipelines for authentication, logging, and validation
- **Routing**: Creating organized, maintainable route structures for complex applications
- **Template Engines**: Integrating view engines for server-side rendering

### 🎯 **Professional Skills**

#### **API Development**
- **RESTful Services**: Designing and implementing REST APIs following best practices
- **Request Validation**: Ensuring data integrity and handling malformed requests
- **Response Formatting**: Providing consistent, well-structured API responses
- **Documentation**: Creating clear API documentation for client developers

#### **Production Readiness**
- **Performance Optimization**: Writing efficient code that scales with load
- **Security**: Implementing basic security measures for web applications
- **Logging**: Adding comprehensive logging for debugging and monitoring
- **Testing**: Writing tests for server-side applications and APIs

#### **System Integration**
- **Database Connectivity**: Connecting to various database systems
- **External APIs**: Integrating with third-party services and APIs
- **File Handling**: Processing uploads, downloads, and file transformations
- **Environment Management**: Configuring applications for different environments

## 🔧 Setup & Prerequisites

### **System Requirements**
- **Node.js**: v14.0+ (recommended: v18+ for latest features)
- **npm**: v6.0+ (comes with Node.js) or **yarn**: v1.22+
- **Operating System**: Windows, macOS, or Linux
- **Text Editor**: VS Code with Node.js extensions recommended

### **Installation**
```bash
# Verify Node.js installation
node --version
npm --version

# Clone the repository
git clone <repository-url>
cd alx-backend-javascript/0x05-Node_JS_basic

# Install project dependencies
npm install

# Test Node.js basic functionality
node -e "console.log('Node.js is working!');"
```

### **Development Environment Setup**
```bash
# Install global development tools
npm install -g nodemon      # Auto-restart during development
npm install -g pm2          # Production process manager
npm install -g eslint       # Code quality checking

# Install project-specific dependencies
npm install --save express               # Web framework
npm install --save-dev @babel/core       # JavaScript transpiler
npm install --save-dev @babel/preset-env # Babel preset
npm install --save-dev jest              # Testing framework
npm install --save-dev supertest         # HTTP assertion library
```

### **VS Code Extensions (Recommended)**
- **Node.js Extension Pack**: Comprehensive Node.js tooling
- **ES6 String HTML**: Syntax highlighting for template strings
- **REST Client**: Test HTTP endpoints directly in VS Code
- **Thunder Client**: Alternative REST client for API testing
- **Node.js Modules Intellisense**: Better autocompletion for Node.js modules
- **npm Intellisense**: Autocomplete npm modules in import statements

### **Environment Configuration**
```bash
# Create environment variables file
touch .env

# Add common configuration
echo "PORT=3000" >> .env
echo "NODE_ENV=development" >> .env
echo "DEBUG=app:*" >> .env

# Install dotenv for environment management
npm install dotenv
```

## 📖 Resources

### **Official Documentation**
- [Node.js Official Docs](https://nodejs.org/en/docs/) - Comprehensive Node.js documentation
- [Express.js Guide](https://expressjs.com/en/guide/routing.html) - Complete Express.js framework guide
- [npm Documentation](https://docs.npmjs.com/) - Package manager documentation
- [Node.js API Reference](https://nodejs.org/api/) - Complete API reference

### **Learning Resources**
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Production-ready best practices
- [The Node Way](http://thenodeway.io/) - Philosophy and patterns for Node.js
- [NodeSchool](https://nodeschool.io/) - Interactive Node.js tutorials
- [You Don't Know Node](https://github.com/azat-co/you-dont-know-node) - Advanced Node.js concepts

### **Framework & Tools**
- [Express.js Examples](https://github.com/expressjs/express/tree/master/examples) - Official Express examples
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) - Curated list of Node.js resources
- [Node.js Design Patterns](https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition) - Advanced patterns
- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework alternative

### **Production & Deployment**
- [PM2 Process Manager](https://pm2.keymetrics.io/docs/) - Production process management
- [Node.js Production Best Practices](https://nodejs.org/en/docs/guides/simple-profiling/) - Performance and security
- [Helmet.js](https://helmetjs.github.io/) - Security middleware for Express
- [Docker with Node.js](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) - Containerization guide

### **Testing & Debugging**
- [Jest Testing Framework](https://jestjs.io/docs/getting-started) - JavaScript testing
- [Supertest](https://github.com/visionmedia/supertest) - HTTP assertion library
- [Node.js Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/) - Debugging techniques
- [Clinic.js](https://clinicjs.org/) - Performance profiling tools

### **Advanced Topics**
- [Node.js Streams](https://nodejs.org/api/stream.html) - Working with streaming data
- [Cluster Module](https://nodejs.org/api/cluster.html) - Multi-process Node.js applications
- [Child Processes](https://nodejs.org/api/child_process.html) - Spawning child processes
- [Worker Threads](https://nodejs.org/api/worker_threads.html) - Multi-threading in Node.js

### **Real-World Examples**
- [Node.js Examples](https://github.com/Microsoft/nodejs-guidelines) - Microsoft's Node.js guidelines
- [Express.js Production App](https://github.com/gothinkster/node-express-realworld-example-app) - Real-world application
- [API Design Guide](https://github.com/microsoft/api-guidelines) - Microsoft API guidelines
- [Node.js Security Checklist](https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices) - Security practices

### **Project Context**
- 📚 Previous project: [TypeScript](../0x04-TypeScript/README.md)
- 🏁 Course completion: Full-stack JavaScript mastery
- 🔄 Related concepts: Backend development, API design, server architecture, production deployment
- 🎯 Next steps: Framework specialization (NestJS, Koa), database integration, microservices

## 👨‍💻 Author

**ALX Backend JavaScript Track**  
*Mastering server-side JavaScript development with Node.js*

## 📄 License

This project is part of the **ALX Software Engineering curriculum**.  
Educational use only - please respect academic integrity policies.
