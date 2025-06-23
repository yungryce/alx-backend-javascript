# 📋 Project Manifest - Node.js Basics

## 🎯 Project Identity
- **Project Name**: 0x05-Node_JS_basic
- **Type**: Educational Module
- **Level**: Beginner to Intermediate
- **Domain**: Backend JavaScript Development
- **Focus**: Server-Side Programming & Web APIs

## 📚 Learning Objectives
Upon completion of this project, students will be able to:

### Core Objectives
- [ ] **Node.js Runtime**: Understand and utilize the Node.js environment
- [ ] **File System Operations**: Perform sync/async file operations
- [ ] **HTTP Server Development**: Build servers using core Node.js modules
- [ ] **Express.js Framework**: Create web applications with Express
- [ ] **API Development**: Build RESTful endpoints and handle requests

### Advanced Objectives
- [ ] **Asynchronous Programming**: Master callbacks, promises, and async patterns
- [ ] **MVC Architecture**: Structure applications using design patterns
- [ ] **Data Processing**: Handle CSV files and data transformation
- [ ] **Error Handling**: Implement robust error management
- [ ] **Production Setup**: Configure build tools and deployment pipeline

## 🔧 Technical Requirements

### Environment Setup
- **Node.js**: Version 12.11.x or higher
- **npm**: Package manager for dependencies
- **Express.js**: Web application framework
- **Babel**: ES6+ transpilation support
- **ESLint**: Code quality and style enforcement

### Dependencies
```json
{
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "nodemon": "^1.19.1"
  }
}
```

## 📁 Project Structure
```
0x05-Node_JS_basic/
├── 📄 README.md                    # Project documentation
├── 📄 ARCHITECTURE.md              # Technical architecture
├── 📄 PROJECT-MANIFEST.md          # This file
├── 🔗 .repo-context.json           # Repository metadata
├── ⚙️ package.json                 # Project configuration
├── ⚙️ babel.config.js              # Babel configuration
├── ⚙️ .eslintrc.js                 # ESLint configuration
├── 📄 .gitignore                   # Version control exclusions
│
├── 📚 Core Learning Files
│   ├── 0-console.js                # Console output basics
│   ├── 1-stdin.js                  # Standard input handling
│   ├── 2-read_file.js              # Synchronous file reading
│   ├── 3-read_file_async.js        # Asynchronous file operations
│   ├── 4-http.js                   # Basic HTTP server
│   ├── 5-http.js                   # HTTP server with routing
│   ├── 6-http_express.js           # Express.js introduction
│   └── 7-http_express.js           # Express.js with routing
│
├── 🧪 Testing Files
│   ├── 0-main.js                   # Console testing
│   ├── 1-main.js                   # stdin testing
│   ├── 2-main_0.js                 # Sync file reading test
│   ├── 2-main_1.js                 # File reading validation
│   ├── 3-main_0.js                 # Async file reading test
│   └── 3-main_1.js                 # Async error handling test
│
├── 🗄️ Data Files
│   └── database.csv                # Sample student database
│
├── 🏗️ Full Server Application
│   └── full_server/                # Complete MVC application
│       ├── controllers/            # Request handlers
│       │   ├── AppController.js    # Application controller
│       │   └── StudentsController.js # Student data controller
│       ├── routes/                 # URL routing
│       │   └── index.js           # Route definitions
│       ├── utils.js                # Helper functions
│       └── server.js               # Main application entry
│
└── 📦 Build & Dependencies
    ├── node_modules/               # Installed packages
    └── package-lock.json           # Dependency lock file
```

## 🎯 Task Breakdown

### Phase 1: Node.js Fundamentals (Tasks 0-3)

#### Task 0: Console Output
**Objective**: Basic Node.js execution
- [ ] Create function that prints to console
- [ ] Understand Node.js execution model
- [ ] Learn about process and modules

**Key Learning Points**:
- Node.js runtime environment
- Module.exports pattern
- Basic function creation and export

#### Task 1: Standard Input Handling
**Objective**: Interactive command-line programs
- [ ] Read from standard input (stdin)
- [ ] Handle user interaction
- [ ] Process readline interface

**Key Learning Points**:
- Process.stdin interface
- Event-driven programming
- User input validation

#### Task 2: Synchronous File Reading
**Objective**: File system operations (blocking)
- [ ] Read CSV file synchronously
- [ ] Parse and process data
- [ ] Handle file reading errors

**Key Learning Points**:
- fs.readFileSync usage
- Synchronous vs asynchronous operations
- Error handling with try-catch

#### Task 3: Asynchronous File Reading
**Objective**: Non-blocking file operations
- [ ] Read files asynchronously
- [ ] Use callbacks for async operations
- [ ] Handle async errors properly

**Key Learning Points**:
- fs.readFile with callbacks
- Async error handling
- Non-blocking I/O benefits

### Phase 2: HTTP Server Development (Tasks 4-7)

#### Task 4: Basic HTTP Server
**Objective**: Core Node.js HTTP server
- [ ] Create HTTP server using http module
- [ ] Handle basic requests and responses
- [ ] Set up server listening on specific port

**Key Learning Points**:
- http.createServer method
- Request/response objects
- Server lifecycle management

#### Task 5: HTTP Server with Routing
**Objective**: URL-based request routing
- [ ] Parse URL paths
- [ ] Implement different endpoints
- [ ] Return JSON responses

**Key Learning Points**:
- URL parsing and routing
- JSON response formatting
- HTTP status codes

#### Task 6: Express.js Introduction
**Objective**: Web framework basics
- [ ] Set up Express application
- [ ] Create basic routes
- [ ] Understand middleware concept

**Key Learning Points**:
- Express.js framework setup
- Route definition syntax
- Middleware pipeline

#### Task 7: Express.js with Advanced Routing
**Objective**: Complex routing and data handling
- [ ] Implement multiple endpoints
- [ ] Handle query parameters
- [ ] Process and return data

**Key Learning Points**:
- Advanced Express routing
- Query parameter handling
- Data processing and response

### Phase 3: Full Server Application (Advanced)

#### Full Server Implementation
**Objective**: Complete MVC web application
- [ ] Implement MVC architecture pattern
- [ ] Create controller classes
- [ ] Set up proper routing structure
- [ ] Handle complex data operations

**Key Learning Points**:
- MVC design pattern
- Controller-based architecture
- Professional code organization
- RESTful API design

## ✅ Completion Criteria

### Code Quality Standards
- [ ] All files pass ESLint validation
- [ ] Proper error handling implementation
- [ ] Clean, readable code structure
- [ ] Comprehensive documentation
- [ ] Following Node.js best practices

### Functional Requirements
- [ ] All tasks execute without errors
- [ ] HTTP servers respond correctly
- [ ] File operations handle edge cases
- [ ] Express applications work as expected
- [ ] Full server implements complete functionality

### Learning Validation
- [ ] Demonstrate understanding of async programming
- [ ] Explain difference between sync/async operations
- [ ] Show proficiency with Express.js framework
- [ ] Articulate HTTP protocol concepts
- [ ] Display knowledge of MVC architecture

## 🚀 Usage Instructions

### Development Setup
```bash
# Install dependencies
npm install

# Run individual tasks
node 0-console.js
node 1-stdin.js

# Test file operations
node 2-main_0.js
node 3-main_0.js

# Start HTTP servers
node 4-http.js    # Available on http://localhost:1245
node 5-http.js    # With routing
node 6-http_express.js    # Express basic
node 7-http_express.js    # Express with routing

# Run full server application
cd full_server
node server.js    # Available on http://localhost:1245
```

### Testing Endpoints
```bash
# Test basic server
curl http://localhost:1245/

# Test with data endpoint
curl http://localhost:1245/students

# Test with count endpoint
curl http://localhost:1245/students/count
```

### Development Tools
```bash
# Code linting
npm run lint

# Development with auto-restart
npx nodemon [filename].js

# Check Node.js version
node --version
```

## 📈 Learning Outcomes

### Technical Skills Acquired
- **Server Development**: HTTP server creation and management
- **Async Programming**: Callbacks, promises, and event-driven patterns
- **File System**: Reading, writing, and processing files
- **Web Frameworks**: Express.js for rapid development
- **API Design**: RESTful endpoint creation and data handling
- **Code Organization**: MVC patterns and modular structure

### Professional Development
- **Problem Solving**: Breaking down complex server requirements
- **Debugging**: Systematic approach to server-side issues
- **Architecture**: Understanding client-server interactions
- **Performance**: Async programming for scalability
- **Best Practices**: Following Node.js community standards

## 🔗 Integration & Progression

### Prerequisites
- JavaScript fundamentals (ES6+)
- Understanding of HTTP protocol basics
- Command-line interface familiarity
- Basic understanding of client-server architecture

### Next Steps
- **Database Integration**: MongoDB, PostgreSQL with Node.js
- **Authentication**: JWT, passport.js implementation
- **Testing**: Jest, Mocha for server testing
- **Deployment**: Cloud platforms (Heroku, AWS, Digital Ocean)
- **Real-time Features**: WebSockets and Socket.io

### Career Applications
- **Backend Developer**: Server-side application development
- **Full-Stack Engineer**: Complete web application development
- **API Developer**: Microservices and REST API specialist
- **DevOps Engineer**: Server deployment and management
- **System Architect**: Large-scale application design

## 📊 Assessment Metrics

### Code Quality (30%)
- ESLint compliance and clean code
- Proper error handling implementation
- Code organization and modularity
- Documentation and comments

### Functionality (40%)
- All tasks work as specified
- HTTP servers respond correctly
- File operations handle edge cases
- Express applications function properly

### Understanding (30%)
- Async programming comprehension
- HTTP protocol knowledge
- Express.js framework understanding
- MVC architecture grasp

---

**Success Criteria**: Complete all tasks with working implementations, demonstrate mastery of async programming concepts, show proficiency with Express.js framework, and display understanding of backend development principles.
