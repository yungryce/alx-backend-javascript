# 0x02. ES6 Classes

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/OOP-Classes-2196F3?style=for-the-badge" alt="OOP Classes">
  <img src="https://img.shields.io/badge/Inheritance-9C27B0?style=for-the-badge" alt="Inheritance">
</p>

<div align="center">
  <h3>🏗️ Master Object-Oriented Programming in JavaScript</h3>
  <p><em>Build scalable, maintainable applications with ES6 classes</em></p>
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

This project introduces you to **Object-Oriented Programming (OOP) in JavaScript** using ES6 classes, a fundamental paradigm for building scalable and maintainable backend applications. ES6 classes provide a cleaner, more intuitive syntax for creating objects and implementing inheritance.

**Why OOP with ES6 Classes Matters:**
- 🏗️ **Code Organization**: Structure complex applications with clear relationships
- 🔄 **Reusability**: Create reusable components and inherit functionality
- 🛡️ **Encapsulation**: Control access to data and methods
- 🎯 **Polymorphism**: Implement flexible, extensible systems
- 📈 **Scalability**: Build applications that grow with your needs

**Real-World Applications:**
- 🖥️ **Backend APIs**: Model business entities and services
- 🗄️ **Database Models**: Represent data structures and relationships
- 🔌 **Plugin Systems**: Create extensible application architectures
- 🎮 **Game Development**: Model entities, players, and game mechanics
- 🏢 **Enterprise Applications**: Implement complex business logic

**Career Impact:**
These OOP skills are essential for:
- Senior Developer roles
- System Architecture design
- Framework development
- Large-scale application development
- Technical leadership positions

## 🎓 Learning Objectives

By completing this project, you will master:

### 🏗️ **Class Fundamentals**
- **Class Definition**: Create classes with proper syntax and structure
- **Constructor Methods**: Initialize objects with custom parameters
- **Instance Methods**: Define behavior and functionality for objects
- **Static Methods**: Create utility functions attached to the class itself

### 🔗 **Inheritance & Composition**
- **Class Inheritance**: Extend existing classes with new functionality
- **Method Overriding**: Customize inherited behavior for specific needs
- **Super Keyword**: Access parent class methods and constructors
- **Composition Patterns**: Combine classes to create complex functionality

### 🛡️ **Encapsulation & Design**
- **Private Properties**: Control access to internal class data
- **Getter/Setter Methods**: Provide controlled access to properties
- **Abstract Patterns**: Design base classes for specialized implementations
- **Interface Design**: Create consistent APIs across class hierarchies

### 🎯 **Advanced Patterns**
- **Factory Patterns**: Create objects dynamically based on conditions
- **Singleton Patterns**: Ensure single instances of important classes
- **Observer Patterns**: Implement event-driven class interactions
- **Decorator Patterns**: Add functionality to existing classes

## 📚 Project Tasks

Each task demonstrates core OOP concepts and real-world applications:

### **Foundation - Basic Classes**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **0** | `0-classroom.js` | Class Definition | Basic class creation and instantiation |
| **1** | `1-make_classrooms.js` | Object Creation | Creating multiple instances efficiently |
| **2** | `2-hbtn_course.js` | Properties & Methods | Classes with properties and behavior |

### **Intermediate - Encapsulation & Methods**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **3** | `3-currency.js` | Encapsulation | Getters, setters, and data validation |
| **4** | `4-pricing.js` | Class Composition | Combining classes to model complex entities |
| **5** | `5-building.js` | Abstract Classes | Base classes and abstract method patterns |

### **Advanced - Inheritance & Polymorphism**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **6** | `6-sky_high.js` | Inheritance | Extending classes and method overriding |
| **7** | `7-airport.js` | Real-world Modeling | Practical class design for complex systems |
| **8** | `8-hbtn_class.js` | Advanced Features | Complex class interactions and patterns |

### **Expert - Advanced Patterns**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **9** | `9-hoisting.js` | Class Hoisting | Understanding class declaration behavior |
| **10** | `10-car.js` | Cloning & Copying | Object cloning and instance management |
| **100** | `100-evcar.js` | Inheritance Mastery | Advanced inheritance with electric vehicle modeling |

## 📁 Directory Structure

```
0x02-ES6_classes/
├── 📝 Basic Class Tasks
│   ├── 0-classroom.js              # Basic class definition
│   ├── 1-make_classrooms.js        # Multiple instances
│   └── 2-hbtn_course.js           # Properties and methods
├── 🔧 Intermediate Concepts
│   ├── 3-currency.js               # Encapsulation patterns
│   ├── 4-pricing.js                # Class composition
│   └── 5-building.js              # Abstract base classes
├── 🚀 Advanced Patterns
│   ├── 6-sky_high.js              # Inheritance and overriding
│   ├── 7-airport.js               # Real-world modeling
│   ├── 8-hbtn_class.js            # Advanced class features
│   ├── 9-hoisting.js              # Class hoisting behavior
│   └── 10-car.js                  # Object cloning
├── 🎯 Expert Level
│   └── 100-evcar.js               # Advanced inheritance
├── 🧪 Test Files
│   ├── 0-main.js                   # Tests for basic classes
│   ├── 1-main.js                   # Tests for instances
│   └── ...                         # Tests for all tasks
├── ⚙️ Configuration
│   ├── babel.config.js             # Babel configuration
│   ├── package.json                # Dependencies and scripts
│   └── .eslintrc.js               # Code style rules
└── 📚 Documentation
    └── README.md                   # This file
```

## 🚀 Usage

### **Quick Start**
```bash
# Navigate to the project directory
cd 0x02-ES6_classes

# Install dependencies
npm install

# Run a specific task
node 0-classroom.js

# Run the corresponding test
node 0-main.js
```

### **Interactive Class Exploration**
```bash
# Test basic class creation
node -e "const Classroom = require('./0-classroom.js'); const room = new Classroom(30); console.log(room);"

# Test inheritance
node -e "const SkyHigh = require('./6-sky_high.js'); const building = new SkyHigh(140, 60); console.log(building.evacuationWarningMessage());"

# Test composition
node -e "const Pricing = require('./4-pricing.js'); const Currency = require('./3-currency.js'); const euro = new Currency('EUR', 'Euro'); const pricing = new Pricing(100, euro); console.log(pricing.displayFullPrice());"
```

### **Development Workflow**
```bash
# Test class definitions
node 0-main.js  # Classroom basics
node 2-main.js  # Course with properties
node 3-main.js  # Currency encapsulation

# Test inheritance
node 5-main.js  # Abstract building
node 6-main.js  # Sky high inheritance
node 100-main.js # Electric vehicle

# Lint code for OOP best practices
npm run lint

# Run all tests
npm test
```

## 💡 Core Competencies Developed

### 🔧 **Technical Skills**

#### **Object-Oriented Programming Mastery**
- **Class Design**: Creating well-structured, purposeful classes
- **Inheritance Hierarchies**: Building logical parent-child relationships
- **Encapsulation**: Protecting data integrity through controlled access
- **Polymorphism**: Implementing flexible, extensible object interactions

#### **Advanced JavaScript Concepts**
- **ES6 Class Syntax**: Modern class declaration and usage patterns
- **Constructor Patterns**: Proper object initialization and parameter handling
- **Method Design**: Creating efficient, reusable class methods
- **Static vs Instance**: Understanding when to use static vs instance members

#### **Software Architecture Skills**
- **Design Patterns**: Implementing common OOP patterns (Factory, Singleton, Observer)
- **Abstraction**: Creating base classes and interfaces for complex systems
- **Composition**: Combining objects to create sophisticated functionality
- **Code Reusability**: Writing classes that can be extended and modified

### 🎯 **Professional Skills**

#### **System Design**
- **Domain Modeling**: Representing real-world entities as classes
- **API Design**: Creating clean, intuitive class interfaces
- **Scalability Planning**: Designing classes that grow with application needs
- **Maintenance**: Writing code that's easy to modify and extend

#### **Problem-Solving**
- **Abstraction Thinking**: Identifying common patterns and behaviors
- **Hierarchy Design**: Organizing complex relationships logically
- **Testing Strategy**: Validating class behavior and interactions
- **Debugging**: Tracing issues through class hierarchies and method calls

#### **Code Quality**
- **SOLID Principles**: Single Responsibility, Open/Closed, Liskov Substitution
- **Documentation**: Writing clear class and method documentation
- **Error Handling**: Implementing robust error management in classes
- **Performance**: Optimizing class design for memory and execution efficiency

## 🔧 Setup & Prerequisites

### **System Requirements**
- **Node.js**: v14.0+ (recommended: v18+) for full ES6 class support
- **npm**: v6.0+ (comes with Node.js)
- **Text Editor**: VS Code with JavaScript/OOP extensions recommended

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd alx-backend-javascript/0x02-ES6_classes

# Install project dependencies
npm install

# Verify ES6 class support
node -e "class Test {}; console.log('ES6 classes supported:', typeof Test === 'function');"
```

### **Recommended Extensions (VS Code)**
- **JavaScript (ES6) Code Snippets**: For quick class templates
- **Auto Rename Tag**: For consistent refactoring
- **Bracket Pair Colorizer**: For better code visualization
- **GitLens**: For tracking class evolution
- **ESLint**: For OOP best practices enforcement

### **Development Tools Setup**
```bash
# Install global tools for better development experience
npm install -g eslint
npm install -g prettier

# Setup project-specific tools
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev jest  # for testing classes
```

## 📖 Resources

### **Essential OOP Concepts**
- [MDN Classes Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) - Comprehensive class documentation
- [JavaScript.info Classes](https://javascript.info/classes) - Interactive class tutorials
- [OOP Principles](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/) - Core OOP concepts explained
- [ES6 Classes vs Prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) - Understanding the differences

### **Design Patterns & Best Practices**
- [JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/) - Common OOP patterns
- [Clean Code: Classes](https://github.com/ryanmcdermott/clean-code-javascript#classes) - Writing clean, maintainable classes
- [SOLID Principles in JavaScript](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688) - Professional OOP practices
- [Refactoring Guru](https://refactoring.guru/design-patterns) - Visual design pattern explanations

### **Advanced Topics**
- [Composition vs Inheritance](https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205) - When to use each approach
- [Private Fields in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) - Modern encapsulation
- [Mixins in JavaScript](https://javascript.info/mixins) - Alternative to inheritance
- [Testing Classes](https://jestjs.io/docs/testing-class-based-apps) - Best practices for class testing

### **Real-World Examples**
- [Node.js Class Examples](https://nodejs.org/api/events.html#events_class_eventemitter) - EventEmitter as a class example
- [Express.js Architecture](https://expressjs.com/en/guide/writing-middleware.html) - Framework design with classes
- [Mongoose Models](https://mongoosejs.com/docs/models.html) - Database modeling with classes
- [React Class Components](https://reactjs.org/docs/react-component.html) - UI components as classes

### **Project Context**
- 📚 Previous project: [ES6 Promises](../0x01-ES6_promise/README.md)
- 🔄 Next project: [ES6 Data Manipulation](../0x03-ES6_data_manipulation/README.md)
- 🏗️ Related concepts: Prototypes, inheritance, design patterns, software architecture

## 👨‍💻 Author

**ALX Backend JavaScript Track**  
*Building robust, scalable applications through object-oriented design*

## 📄 License

This project is part of the **ALX Software Engineering curriculum**.  
Educational use only - please respect academic integrity policies.
