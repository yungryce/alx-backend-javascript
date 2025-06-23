# 0x03. ES6 Data Manipulation

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/Data-Manipulation-4CAF50?style=for-the-badge" alt="Data Manipulation">
  <img src="https://img.shields.io/badge/Functional-Programming-FF9800?style=for-the-badge" alt="Functional Programming">
</p>

<div align="center">
  <h3>🔄 Master Advanced Data Processing & Functional Programming</h3>
  <p><em>Transform, analyze, and manipulate data like a professional developer</em></p>
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

This project focuses on **advanced data manipulation and functional programming** in JavaScript, essential skills for modern backend development. You'll master the art of transforming, filtering, and analyzing data using ES6+ features and functional programming paradigms.

**Why Data Manipulation Mastery Matters:**
- 📊 **API Development**: Process and transform data for client consumption
- 🗄️ **Database Operations**: Efficiently query and manipulate datasets
- 📈 **Analytics**: Extract insights from complex data structures
- 🔄 **Data Pipeline**: Build robust data processing workflows
- ⚡ **Performance**: Write efficient, optimized data operations

**Real-World Applications:**
- 🌐 **REST API Data Processing**: Transform database results for API responses
- 📊 **Business Intelligence**: Aggregate and analyze business metrics
- 🔍 **Search & Filtering**: Implement complex search functionality
- 🎯 **Data Validation**: Clean and validate incoming data
- 📋 **Report Generation**: Process data for dashboard and reports

**Career Impact:**
These skills are crucial for:
- Data Engineer roles
- Backend API development
- Full-stack engineering
- Data Science applications
- Performance optimization specialists

## 🎓 Learning Objectives

By completing this project, you will master:

### 🔧 **Functional Programming Fundamentals**
- **Higher-Order Functions**: Use `map()`, `filter()`, `reduce()` effectively
- **Immutability**: Write pure functions that don't mutate original data
- **Function Composition**: Chain operations for complex data transformations
- **Performance Optimization**: Choose the right method for each use case

### 📊 **Advanced Data Structures**
- **Sets & Maps**: Use modern ES6 collections for unique data and key-value pairs
- **Typed Arrays**: Handle binary data and performance-critical operations
- **WeakMap/WeakSet**: Manage memory-efficient, garbage-collected collections
- **Iterator Protocol**: Create custom iteration patterns

### 🎯 **Data Processing Patterns**
- **Filtering & Selection**: Extract specific data based on complex criteria
- **Transformation**: Convert data between different formats and structures
- **Aggregation**: Combine and summarize large datasets
- **Validation**: Ensure data integrity and type safety

### 🚀 **Real-World Applications**
- **API Data Processing**: Handle JSON, transform responses, paginate results
- **Business Logic**: Implement complex data rules and calculations
- **Performance Optimization**: Write efficient data processing algorithms
- **Error Handling**: Manage data processing errors gracefully

## 📚 Project Tasks

Each task demonstrates essential data manipulation patterns:

### **Foundation - Array Operations**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **0** | `0-get_list_students.js` | Data Creation | Creating and structuring data arrays |
| **1** | `1-get_list_student_ids.js` | Data Extraction | Using `map()` to extract specific fields |
| **2** | `2-get_students_by_loc.js` | Filtering | Using `filter()` for conditional selection |
| **3** | `3-get_ids_sum.js` | Aggregation | Using `reduce()` for data summation |

### **Intermediate - Complex Operations**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **4** | `4-update_grade_by_city.js` | Data Merging | Combining datasets with conditional updates |
| **5** | `5-typed_arrays.js` | Performance | Using typed arrays for efficient data storage |

### **Advanced - Modern Collections**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **6** | `6-set.js` | Unique Data | Working with ES6 Sets for unique collections |
| **7** | `7-has_array_values.js` | Set Operations | Checking existence in collections efficiently |
| **8** | `8-clean_set.js` | Data Cleaning | Transforming and cleaning Sets |

### **Expert - Specialized Collections**
| Task | File | Concept | Description |
|------|------|---------|-------------|
| **9** | `9-groceries_list.js` | Map Creation | Using Maps for key-value data management |
| **10** | `10-update_uniq_items.js` | Map Updates | Modifying Map collections safely |
| **100** | `100-weak.js` | Memory Management | Using WeakMap for memory-efficient storage |

## 📁 Directory Structure

```
0x03-ES6_data_manipulation/
├── 📊 Array Processing
│   ├── 0-get_list_students.js      # Data structure creation
│   ├── 1-get_list_student_ids.js   # Map operations
│   ├── 2-get_students_by_loc.js    # Filter operations
│   └── 3-get_ids_sum.js           # Reduce operations
├── 🔄 Complex Transformations
│   ├── 4-update_grade_by_city.js   # Data merging and updates
│   └── 5-typed_arrays.js          # Performance optimization
├── 🗂️ Modern Collections
│   ├── 6-set.js                    # Set creation and management
│   ├── 7-has_array_values.js      # Set operations
│   ├── 8-clean_set.js             # Set transformations
│   ├── 9-groceries_list.js        # Map creation
│   └── 10-update_uniq_items.js    # Map updates
├── 🎯 Advanced Patterns
│   └── 100-weak.js                # WeakMap usage
├── 🧪 Test Files
│   ├── 0-main.js                   # Tests for data creation
│   ├── 1-main.js                   # Tests for map operations
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
cd 0x03-ES6_data_manipulation

# Install dependencies
npm install

# Run a specific task
node 0-get_list_students.js

# Run the corresponding test
node 0-main.js
```

### **Interactive Data Exploration**
```bash
# Test array operations
node -e "const students = require('./0-get_list_students.js')(); console.log('Students:', students);"

# Test filtering
node -e "const filter = require('./2-get_students_by_loc.js'); const students = require('./0-get_list_students.js')(); console.log('SF Students:', filter(students, 'San Francisco'));"

# Test aggregation
node -e "const sum = require('./3-get_ids_sum.js'); const students = require('./0-get_list_students.js')(); console.log('Sum of IDs:', sum(students));"

# Test Set operations
node -e "const createSet = require('./6-set.js'); console.log('Set from array:', createSet([1, 2, 2, 3, 3, 4]));"
```

### **Performance Testing**
```bash
# Test different approaches for large datasets
node -e "
const students = Array.from({length: 100000}, (_, i) => ({id: i, firstName: 'Student' + i, location: i % 2 ? 'SF' : 'NY'}));
console.time('Filter Performance');
const filtered = students.filter(s => s.location === 'SF');
console.timeEnd('Filter Performance');
console.log('Filtered count:', filtered.length);
"
```

### **Development Workflow**
```bash
# Test array operations
node 0-main.js  # Data creation
node 1-main.js  # Map operations
node 2-main.js  # Filter operations
node 3-main.js  # Reduce operations

# Test complex operations
node 4-main.js  # Data merging
node 5-main.js  # Typed arrays

# Test modern collections
node 6-main.js  # Sets
node 9-main.js  # Maps
node 100-main.js # WeakMap

# Lint for functional programming best practices
npm run lint

# Run performance benchmarks
npm run benchmark
```

## 💡 Core Competencies Developed

### 🔧 **Technical Skills**

#### **Functional Programming Mastery**
- **Pure Functions**: Writing functions without side effects
- **Immutability**: Avoiding data mutation for predictable code
- **Higher-Order Functions**: Using and creating functions that operate on other functions
- **Function Composition**: Chaining operations for complex transformations

#### **Data Structure Expertise**
- **Array Methods**: Mastering `map()`, `filter()`, `reduce()`, `find()`, `some()`, `every()`
- **ES6 Collections**: Proficient use of Set, Map, WeakSet, WeakMap
- **Typed Arrays**: Optimizing for performance with specialized array types
- **Iterator Protocol**: Creating and consuming custom iterators

#### **Performance Optimization**
- **Algorithm Selection**: Choosing the right approach for different data sizes
- **Memory Management**: Using appropriate data structures for memory efficiency
- **Time Complexity**: Understanding Big O notation for data operations
- **Benchmarking**: Measuring and comparing performance of different approaches

### 🎯 **Professional Skills**

#### **Data Engineering**
- **ETL Processes**: Extract, Transform, Load data pipelines
- **Data Validation**: Ensuring data integrity throughout processing
- **Error Handling**: Managing failures in data processing workflows
- **Scalability**: Writing code that handles growing datasets

#### **Problem-Solving**
- **Pattern Recognition**: Identifying common data manipulation patterns
- **Optimization**: Improving performance of data-intensive operations
- **Debugging**: Tracing issues through complex data transformations
- **Testing**: Validating data processing logic with comprehensive tests

#### **Software Architecture**
- **API Design**: Creating efficient data processing APIs
- **Microservices**: Building services focused on specific data operations
- **Caching Strategies**: Optimizing repeated data operations
- **Documentation**: Clearly documenting data processing requirements and outputs

## 🔧 Setup & Prerequisites

### **System Requirements**
- **Node.js**: v14.0+ (recommended: v18+) for full ES6+ support
- **npm**: v6.0+ (comes with Node.js)
- **Memory**: 4GB+ RAM for large dataset operations
- **Text Editor**: VS Code with JavaScript extensions recommended

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd alx-backend-javascript/0x03-ES6_data_manipulation

# Install project dependencies
npm install

# Verify array method support
node -e "console.log('Array methods available:', ['map', 'filter', 'reduce'].every(m => Array.prototype[m]));"

# Test Set/Map support
node -e "console.log('Modern collections:', typeof Set !== 'undefined' && typeof Map !== 'undefined');"
```

### **Development Environment Setup**
```bash
# Install performance monitoring tools
npm install --save-dev clinic
npm install --save-dev autocannon

# Install data validation libraries
npm install --save joi
npm install --save lodash

# Setup testing framework
npm install --save-dev jest
npm install --save-dev benchmark
```

### **Recommended Extensions (VS Code)**
- **Quokka.js**: Live JavaScript playground for testing data operations
- **JavaScript (ES6) code snippets**: Quick functional programming templates
- **Bracket Pair Colorizer**: Better visualization of nested operations
- **ESLint**: Enforce functional programming best practices
- **Git Graph**: Track data processing algorithm evolution

## 📖 Resources

### **Functional Programming Fundamentals**
- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - Comprehensive array method documentation
- [JavaScript.info Functional Programming](https://javascript.info/array-methods) - Interactive functional programming tutorials
- [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) - Practical functional programming guide
- [Professor Frisby's Mostly Adequate Guide](https://mostly-adequate.gitbook.io/mostly-adequate-guide/) - Deep functional programming concepts

### **ES6+ Collections**
- [MDN Set Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) - Complete Set API reference
- [MDN Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Complete Map API reference
- [WeakMap/WeakSet Guide](https://javascript.info/weakmap-weakset) - Memory-efficient collections
- [Typed Arrays Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) - Performance-optimized arrays

### **Performance & Optimization**
- [JavaScript Performance Tips](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution) - Google's performance guide
- [Big O Notation Guide](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/) - Algorithm complexity explained
- [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) - JavaScript memory concepts
- [Benchmarking JavaScript](https://github.com/bestiejs/benchmark.js/) - Performance measurement tools

### **Real-World Applications**
- [Lodash Documentation](https://lodash.com/docs/) - Production-ready utility functions
- [Ramda Documentation](https://ramdajs.com/docs/) - Functional programming utilities
- [RxJS Guide](https://rxjs.dev/guide/overview) - Reactive programming with observables
- [D3.js Data Manipulation](https://github.com/d3/d3/blob/main/API.md#arrays-d3-array) - Data visualization transformations

### **Advanced Topics**
- [Immutable.js](https://immutable-js.com/) - Immutable data structures
- [Lazy Evaluation](https://github.com/dtao/lazy.js/) - Performance optimization through lazy evaluation
- [Transducers](https://github.com/cognitect-labs/transducers-js) - Composable algorithmic transformations
- [Streaming Data Processing](https://nodejs.org/api/stream.html) - Node.js streams for large datasets

### **Project Context**
- 📚 Previous project: [ES6 Classes](../0x02-ES6_classes/README.md)
- 🔧 Next project: [TypeScript](../0x04-TypeScript/README.md)
- 🔄 Related concepts: Functional programming, algorithms, data structures, performance optimization

## 👨‍💻 Author

**ALX Backend JavaScript Track**  
*Transforming data processing skills for modern backend development*

## 📄 License

This project is part of the **ALX Software Engineering curriculum**.  
Educational use only - please respect academic integrity policies.

