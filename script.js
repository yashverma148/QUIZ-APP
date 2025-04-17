function generateQuestions(subject) {
    const questions = [];
    for (let i = 1; i <= 40; i++) {
      questions.push({
        q: `What is the answer to question  in ${subject}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A"
      });
    }
    return questions;
  }

  // const questionsData = {
  //   python: generateQuestions("Python"),
  //   cpp: generateQuestions("C++"),
  //   javascript: generateQuestions("JavaScript"),
  //   oops: generateQuestions("OOPs")
  // };

  const questionsData = {
      
      python: [
          {
          q: "What does 'len()' function do in Python?",
          options: ["Counts items", "Deletes items", "Adds items", "Sorts items"],
          answer: "Counts items"
          },
          {
          q: "Which keyword is used to define a function in Python?",
          options: ["func", "define", "def", "function"],
          answer: "def"
          },
          {
          q: "What is the output of print(2 ** 3)?",
          options: ["6", "8", "9", "Error"],
          answer: "8"
          },
          {
          q: "Which keyword is used for function in Python?",
          options: ["func", "define", "def", "function"],
          answer: "def"
          },
          {
          q: "What data type is the object below? \n x = [1, 2, 3]",
          options: ["Tuple", "List", "Dictionary", "Set"],
          answer: "List"
          },
          {
          q: "Which of the following is used to define a block of code in Python?",
          options: ["Brackets", "Indentation", "Parentheses", "Colon"],
          answer: "Indentation"
          },
          {
          q: "What will be the output of print(bool(0))?",
          options: ["True", "False", "None", "0"],
          answer: "False"
          },
          {
          q: "Which operator is used for floor division in Python?",
          options: ["/", "//", "%", "**"],
          answer: "//"
          },
          {
          q: "Which of the following is a valid variable name in Python?",
          options: ["2variable", "my-variable", "my_variable", "my variable"],
          answer: "my_variable"
          },
          {
          q: "Which of these is not a core data type in Python?",
          options: ["Lists", "Tuples", "Class", "Dictionary"],
          answer: "Class"
          },
          {
          q: "What is the correct file extension for Python files?",
          options: [".pyth", ".pt", ".py", ".pyt"],
          answer: ".py"
          },
          {
          q: "Which function is used to get the length of a list in Python?",
          options: ["count()", "size()", "len()", "length()"],
          answer: "len()"
          },
          {
          q: "What is the output of print(3 == 3.0)?",
          options: ["True", "False", "Error", "None"],
          answer: "True"
          },
          {
          q: "What is the purpose of the 'self' keyword in Python?",
          options: ["Defines a class", "Represents an instance of the class", "Refers to the function", "None of the above"],
          answer: "Represents an instance of the class"
          },
          {
          q: "Which of the following statements is used to check if a key exists in a dictionary?",
          options: ["if key in dictionary", "if key exists in dictionary", "if key not in dictionary", "if dictionary.has_key(key)"],
          answer: "if key in dictionary"
          },
          {
          q: "What will be the output of print(type('Hello'))?",
          options: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'object'>"],
          answer: "<class 'str'>"
          },
          {
          q: "Which of these functions can be used to read a file in Python?",
          options: ["open()", "read()", "file.read()", "readfile()"],
          answer: "open()"
          },
          {
          q: "What is the purpose of the 'continue' statement in Python?",
          options: ["Exit the loop", "Skip the current iteration and continue with the next", "Terminate the function", "Stop the program"],
          answer: "Skip the current iteration and continue with the next"
          },
          {
          q: "Which of the following methods can be used to convert a string to lowercase?",
          options: [".lower()", ".toLowerCase()", ".convertLower()", ".upcase()"],
          answer: ".lower()"
          },
          {
          q: "How do you add an item to a list in Python?",
          options: [".append()", ".add()", ".insert()", ".push()"],
          answer: ".append()"
          },
          {
          q: "What is the purpose of the 'break' statement in Python?",
          options: ["Exit the loop", "Skip the current iteration", "End the program", "Terminate the function"],
          answer: "Exit the loop"
          },
          {
          q: "How can you handle exceptions in Python?",
          options: ["try-except", "try-catch", "try-finally", "catch-except"],
          answer: "try-except"
          },
          {
          q: "What will be the output of print(0 or 2)?",
          options: ["0", "2", "Error", "None"],
          answer: "2"
          },
          {
          q: "What will be the output of print(len('Python'))?",
          options: ["5", "6", "7", "8"],
          answer: "6"
          },
          {
          q: "How do you define a tuple in Python?",
          options: ["[]", "{}", "()", "<>"],
          answer: "()"
          },
          {
          q: "Which function is used to sort a list in Python?",
          options: [".sort()", ".sorted()", ".order()", ".arrange()"],
          answer: ".sort()"
          },
          {
          q: "Which of the following is not a valid way to create a set in Python?",
          options: ["set([1, 2, 3])", "{1, 2, 3}", "set(1, 2, 3)", "set()"],
          answer: "set(1, 2, 3)"
          },
          {
          q: "What does the 'map()' function do in Python?",
          options: ["Applies a function to all items in an iterable", "Maps a function to a dictionary", "Converts a map to a list", "None of the above"],
          answer: "Applies a function to all items in an iterable"
          },
          {
          q: "What is the correct syntax to create a class in Python?",
          options: ["class MyClass:", "class MyClass()", "MyClass class:", "class MyClass {}"],
          answer: "class MyClass:"
          },
          {
          q: "What is the result of the expression 4 // 2?",
          options: ["2", "1", "4", "0"],
          answer: "2"
          },
          {
          q: "Which of these is not a built-in data type in Python?",
          options: ["String", "Dictionary", "Array", "Set"],
          answer: "Array"
          },
          {
          q: "How do you create a dictionary in Python?",
          options: ["{}", "[]", "()", "<>"],
          answer: "{}"
          },
          {
          q: "What will be the output of the expression 5 + 3 * 2?",
          options: ["16", "11", "13", "10"],
          answer: "11"
          },
          {
          q: "Which of these is used for defining the data type of a variable in Python?",
          options: ["Data types are not defined in Python", "type()", "def", "var"],
          answer: "type()"
          },
          {
          q: "Which of the following functions is used to reverse a list?",
          options: [".reverse()", ".flip()", ".invert()", ".reverseList()"],
          answer: ".reverse()"
          },
          {
          q: "Which of the following is a correct syntax for a Python lambda function?",
          options: ["lambda x: x * 2", "def lambda(x): x * 2", "function lambda(x): x * 2", "lambda function(x): x * 2"],
          answer: "lambda x: x * 2"
          },
          {
          q: "What will be the output of print(2 == '2')?",
          options: ["True", "False", "Error", "None"],
          answer: "False"
          }
      ],
      cpp: [
          {
          q: "What is the default access specifier in C++ class?",
          options: ["private", "public", "protected", "internal"],
          answer: "private"
          },
          {
          q: "Which of the following is the correct syntax to declare a pointer in C++?",
          options: ["int* ptr;", "int ptr*;", "int ptr;", "ptr* int;"],
          answer: "int* ptr;"
          },
          {
          q: "Which header file is needed for input/output operations in C++?",
          options: ["iostream", "stdio", "conio.h", "fstream"],
          answer: "iostream"
          },
          {
          q: "What is the size of 'int' in C++?",
          options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
          answer: "4 bytes"
          },
          {
          q: "Which of the following is the correct syntax to declare a function in C++?",
          options: ["function void func()", "void func();", "void function func()", "void func()"],
          answer: "void func();"
          },
          {
          q: "Which operator is used to access members of a class in C++?",
          options: [".", "->", "&", "::"],
          answer: "."
          },
          {
          q: "In C++, which keyword is used for dynamic memory allocation?",
          options: ["malloc", "calloc", "new", "allocate"],
          answer: "new"
          },
          {
          q: "Which of the following is not an access modifier in C++?",
          options: ["public", "private", "protected", "static"],
          answer: "static"
          },
          {
          q: "What is the purpose of the 'this' pointer in C++?",
          options: ["Access a static variable", "Access instance variable", "Point to the current object", "None of the above"],
          answer: "Point to the current object"
          },
          {
          q: "Which of the following is used for exception handling in C++?",
          options: ["try-except", "try-catch", "throw-catch", "error-catch"],
          answer: "try-catch"
          },
          {
          q: "What does 'endl' do in C++?",
          options: ["Prints a newline", "Ends the program", "Flushes the output buffer", "Both a and c"],
          answer: "Both a and c"
          },
          {
          q: "Which of the following is the correct syntax to declare a constant in C++?",
          options: ["constant int x = 5;", "int const x = 5;", "const int x = 5;", "x = 5; const int"],
          answer: "const int x = 5;"
          },
          {
          q: "What is the default value of a static variable in C++?",
          options: ["1", "0", "Undefined", "None"],
          answer: "0"
          },
          {
          q: "Which operator is used for accessing a member of a class through a pointer?",
          options: ["->", ".", "&", "::"],
          answer: "->"
          },
          {
          q: "Which of the following is the base class for all classes in C++?",
          options: ["Base", "Object", "ObjectClass", "None of the above"],
          answer: "Object"
          },
          {
          q: "Which function is used to return the size of an object in C++?",
          options: ["sizeof()", "length()", "size()", "capacity()"],
          answer: "sizeof()"
          },
          {
          q: "Which of these is used to define a destructor in C++?",
          options: ["~ClassName()", "ClassName~()", "destroyClass()", "delClass()"],
          answer: "~ClassName()"
          },
          {
          q: "Which of the following is used for polymorphism in C++?",
          options: ["Function Overloading", "Operator Overloading", "Virtual functions", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "Which of these is not a valid C++ loop?",
          options: ["for", "while", "repeat", "do-while"],
          answer: "repeat"
          },
          {
          q: "Which C++ library is required to use strings?",
          options: ["<string.h>", "<cstring>", "<string>", "<text>"],
          answer: "<string>"
          },
          {
          q: "Which of the following is correct about the 'new' keyword in C++?",
          options: ["It is used for deallocating memory", "It initializes pointers", "It allocates memory dynamically", "It has no effect on memory"],
          answer: "It allocates memory dynamically"
          },
          {
          q: "Which method is used to convert an object to a string in C++?",
          options: ["toString()", "string()", "String()", "None of the above"],
          answer: "None of the above"
          },
          {
          q: "What is the purpose of the 'virtual' keyword in C++?",
          options: ["To create a virtual function", "To create a static variable", "To create a pointer", "None of the above"],
          answer: "To create a virtual function"
          },
          {
          q: "Which of these is used to handle file operations in C++?",
          options: ["fstream", "fileio", "fstream.h", "ofstream"],
          answer: "fstream"
          },
          {
          q: "Which of the following is not an OOP principle in C++?",
          options: ["Encapsulation", "Abstraction", "Overloading", "Inheritance"],
          answer: "Overloading"
          },
          {
          q: "Which of these is used to delete an array allocated with 'new' in C++?",
          options: ["delete[]", "delete", "free[]", "clear[]"],
          answer: "delete[]"
          },
          {
          q: "Which of these operators is used for class inheritance in C++?",
          options: ["::", ".", "#", ":"],
          answer: ":"
          },
          {
          q: "Which of these is used to create a reference variable in C++?",
          options: ["&", "*", "#", "@"],
          answer: "&"
          },
          {
          q: "Which of the following is used to create an anonymous function in C++?",
          options: ["function()", "lambda", "anon()", "callback"],
          answer: "lambda"
          },
          {
          q: "Which function is used to remove a string from the standard output stream?",
          options: ["cout.clear()", "cout.delete()", "cout.flush()", "cout.flush()"],
          answer: "cout.flush()"
          }


      ],
      javascript: [
          {
          q: "Which symbol is used for single-line comment in JavaScript?",
          options: ["//", "/*", "#", "<!--"],
          answer: "//"
          },
          {
          q: "Which company developed JavaScript?",
          options: ["Netscape", "Oracle", "Microsoft", "Sun Microsystems"],
          answer: "Netscape"
          },
          {
          q: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: ["<script src='script.js'></script>", "<script ref='script.js'></script>", "<script name='script.js'></script>", "<script href='script.js'></script>"],
          answer: "<script src='script.js'></script>"
          },
          {
          q: "Which of the following is correct about JavaScript?",
          options: ["JavaScript is a server-side language", "JavaScript can be used for front-end development only", "JavaScript can be used for both front-end and back-end", "None of the above"],
          answer: "JavaScript can be used for both front-end and back-end"
          },
          {
          q: "Which of the following is a data type in JavaScript?",
          options: ["int", "float", "boolean", "double"],
          answer: "boolean"
          },
          {
          q: "Which of the following is correct about 'null' in JavaScript?",
          options: ["It is a data type", "It represents an empty value", "It is a number", "It is an object"],
          answer: "It represents an empty value"
          },
          {
          q: "How can we create an array in JavaScript?",
          options: ["[]", "{}", "()", "<>"],
          answer: "[]"
          },
          {
          q: "Which of the following is the correct way to add a comment in JavaScript?",
          options: ["// Comment", "# Comment", "/* Comment */", "/ Comment /"],
          answer: "// Comment"
          },
          {
          q: "What is the purpose of the 'this' keyword in JavaScript?",
          options: ["Refers to the global object", "Refers to the current object", "Refers to the current class", "Refers to the current function"],
          answer: "Refers to the current object"
          },
          {
          q: "Which of the following methods can be used to loop through an array in JavaScript?",
          options: ["for", "forEach", "while", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "Which of the following is used for JSON parsing in JavaScript?",
          options: ["JSON.stringify()", "JSON.parse()", "parse()", "parseJSON()"],
          answer: "JSON.parse()"
          },
          {
          q: "Which of the following is used to define a function in JavaScript?",
          options: ["function myFunction()", "function = myFunction()", "def myFunction()", "func myFunction()"],
          answer: "function myFunction()"
          },
          {
          q: "What will be the result of 3 + 2 + '7' in JavaScript?",
          options: ["12", "32", "327", "37"],
          answer: "37"
          },
          {
          q: "What is the correct way to declare a variable in JavaScript?",
          options: ["var x;", "let x;", "const x;", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "What is the correct way to define a promise in JavaScript?",
          options: ["new Promise()", "new promise()", "Promise()", "new NewPromise()"],
          answer: "new Promise()"
          },
          {
          q: "Which of the following is used to terminate a loop in JavaScript?",
          options: ["break", "continue", "exit", "stop"],
          answer: "break"
          },
          {
          q: "Which of the following is a valid string method in JavaScript?",
          options: [".join()", ".charAt()", ".toString()", ".toLowerCase()"],
          answer: ".toLowerCase()"
          },
          {
          q: "Which function is used to remove the last element from an array in JavaScript?",
          options: [".pop()", ".shift()", ".delete()", ".remove()"],
          answer: ".pop()"
          },
          {
          q: "Which of these is a method to add an element to the end of an array in JavaScript?",
          options: [".push()", ".append()", ".insert()", ".add()"],
          answer: ".push()"
          },
          {
          q: "Which keyword is used to create a constant variable in JavaScript?",
          options: ["const", "var", "let", "define"],
          answer: "const"
          },
          {
          q: "What is the correct syntax for creating an object in JavaScript?",
          options: ["{}","[]","()","<>"],
          answer: "{}"
          },
          {
          q: "Which of the following is used to throw an error in JavaScript?",
          options: ["throw", "newError", "raise", "error"],
          answer: "throw"
          },
          {
          q: "What is the correct syntax to add an event listener in JavaScript?",
          options: ["addEventListener('click', function)", "addListener('click', function)", "addClickListener(function)", "None of the above"],
          answer: "addEventListener('click', function)"
          },
          {
          q: "Which of the following is a way to define a variable in JavaScript?",
          options: ["var", "let", "const", "All of the above"],
          answer: "All of the above"
      },
      {
          q: "What is the result of typeof NaN in JavaScript?",
          options: ["'undefined'", "'object'", "'number'", "'NaN'"],
          answer: "'number'"
      },
      {
          q: "Which operator is used to concatenate strings in JavaScript?",
          options: ["+", "*", "&", "="],
          answer: "+"
      },
      {
          q: "What is the default value of a variable declared with 'let' in JavaScript?",
          options: ["undefined", "null", "false", "0"],
          answer: "undefined"
      },
      {
          q: "What does 'JSON' stand for in JavaScript?",
          options: ["JavaScript Optional Notation", "JavaScript Object Notation", "Java Static Object Notation", "None of the above"],
          answer: "JavaScript Object Notation"
      },
      {
          q: "Which of the following is true about JavaScript closures?",
          options: ["They are only available inside functions", "They are accessible from outside their parent function", "They allow access to variables from outer functions", "None of the above"],
          answer: "They allow access to variables from outer functions"
      },
      {
          q: "How do you create a copy of an array in JavaScript?",
          options: ["array.copy()", "array.clone()", "array.slice()", "array.duplicate()"],
          answer: "array.slice()"
      },
      {
          q: "Which of these methods is used to combine two or more arrays in JavaScript?",
          options: ["concat()", "combine()", "merge()", "join()"],
          answer: "concat()"
      },
      {
          q: "Which method is used to get the current time in JavaScript?",
          options: ["Date.now()", "new Date()", "getTime()", "All of the above"],
          answer: "All of the above"
      },
      {
          q: "What does the 'delete' operator do in JavaScript?",
          options: ["Deletes an element from an array", "Deletes a property from an object", "Deletes a variable", "All of the above"],
          answer: "Deletes a property from an object"
      },
      {
          q: "Which method is used to remove an item from the beginning of an array in JavaScript?",
          options: ["shift()", "pop()", "remove()", "unshift()"],
          answer: "shift()"
      },
      {
          q: "Which of the following is a correct way to define a class in JavaScript?",
          options: ["class MyClass {}", "function MyClass {}", "MyClass class {}", "None of the above"],
          answer: "class MyClass {}"
      },
      {
          q: "What is a 'Promise' in JavaScript?",
          options: ["An object that represents the eventual completion or failure of an asynchronous operation", "A method for handling errors", "A type of object", "None of the above"],
          answer: "An object that represents the eventual completion or failure of an asynchronous operation"
      },
      {
          q: "Which method is used to add a new element at the beginning of an array in JavaScript?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: "unshift()"
      },
      {
          q: "What is the purpose of the 'bind()' method in JavaScript?",
          options: ["To create a new function with a specified 'this' value", "To define a function", "To call a function", "None of the above"],
          answer: "To create a new function with a specified 'this' value"
      },
      {
          q: "Which of the following methods can be used to check if a string contains a specific character?",
          options: ["includes()", "contains()", "has()", "find()"],
          answer: "includes()"
      },
      {
          q: "What is the 'setTimeout()' function used for in JavaScript?",
          options: ["To delay the execution of a function", "To set a timer", "To stop a function", "None of the above"],
          answer: "To delay the execution of a function"
      },
      {
          q: "Which of the following is true about the 'null' value in JavaScript?",
          options: ["null is equivalent to undefined", "null is an object", "null is a type of number", "null is a string"],
          answer: "null is an object"
      },
      {
          q: "What is the result of '5' + 1 in JavaScript?",
          options: ["6", "51", "Error", "None of the above"],
          answer: "51"
      },
      {
          q: "How do you convert a string into a number in JavaScript?",
          options: ["parseInt()", "toNumber()", "Number()", "All of the above"],
          answer: "All of the above"
      },
      {
          q: "Which of the following is NOT a valid JavaScript data type?",
          options: ["string", "number", "boolean", "character"],
          answer: "character"
      }
      ],
      oops: [
          {
          q: "What is encapsulation?",
          options: [
              "Hiding data",
              "Showing implementation",
              "Inheritance",
              "None of the above"
          ],
          answer: "Hiding data"
          },
          {
          q: "What is an object in OOPs?",
          options: ["A function", "An instance of a class", "A data structure", "A data type"],
          answer: "An instance of a class"
          },
          {
          q: "What is inheritance in OOP?",
          options: ["A way to hide data", "A way to share behavior among classes", "A way to extend functionality", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "What is polymorphism in OOP?",
          options: ["Same method name, different implementation", "Same class, different objects", "Same object, different state", "None of the above"],
          answer: "Same method name, different implementation"
          },
          {
          q: "What is encapsulation in OOP?",
          options: ["Hiding the internal state and behavior", "Inheritance", "Object creation", "None of the above"],
          answer: "Hiding the internal state and behavior"
          },
          {
          q: "What does the 'this' keyword refer to in OOP?",
          options: ["The current instance of the class", "The parent class", "The static variable", "None of the above"],
          answer: "The current instance of the class"
          },
          {
          q: "What is an abstract class in OOP?",
          options: ["A class that cannot be instantiated", "A class that can be instantiated", "A class that is already implemented", "None of the above"],
          answer: "A class that cannot be instantiated"
          },
          {
          q: "Which of the following is an OOP concept?",
          options: ["Classes", "Objects", "Inheritance", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "What is the use of a constructor in OOP?",
          options: ["To create a new instance of a class", "To initialize the object", "To initialize variables", "All of the above"],
          answer: "All of the above"
          },
          {
          q: "What is the main purpose of the 'super' keyword in OOP?",
          options: ["To call the parent class's methods", "To create a constructor", "To access private data", "None of the above"],
          answer: "To call the parent class's methods"
          },
          {
          q: "What is the main difference between '==' and '===' in OOP?",
          options: ["'==' checks value, '===' checks value and type", "'==' checks type, '===' checks value", "There is no difference", "'===' is used for objects only"],
          answer: "'==' checks value, '===' checks value and type"
          },
          {
          q: "What is the main principle of OOPs?",
          options: ["Encapsulation", "Inheritance", "Polymorphism", "All of the above"],
          answer: "All of the above"
      },
      {
          q: "Which of the following is used to create a class in Java?",
          options: ["function", "class", "struct", "module"],
          answer: "class"
      },
      {
          q: "Which feature of OOP allows objects to inherit properties and methods from other objects?",
          options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
          answer: "Inheritance"
      },
      {
          q: "What is the difference between method overloading and method overriding?",
          options: [
          "Overloading changes the method signature, overriding changes the method body",
          "Overloading is for instance methods, overriding is for static methods",
          "Overloading and overriding are the same",
          "Overloading occurs in different classes, overriding in the same class"
          ],
          answer: "Overloading changes the method signature, overriding changes the method body"
      },
      {
          q: "What is the main benefit of encapsulation in OOP?",
          options: [
          "It hides the implementation details and only exposes the necessary functionality",
          "It allows multiple objects to share data",
          "It improves code readability",
          "None of the above"
          ],
          answer: "It hides the implementation details and only exposes the necessary functionality"
      },
      {
          q: "Which of the following keywords is used to create an object in Java?",
          options: ["new", "object", "create", "this"],
          answer: "new"
      },
      {
          q: "What is polymorphism in OOP?",
          options: [
          "The ability to create multiple objects",
          "The ability to inherit from multiple classes",
          "The ability to perform different actions based on the object type",
          "The ability to hide details and show only essential features"
          ],
          answer: "The ability to perform different actions based on the object type"
      },
      {
          q: "Which OOP concept ensures that each object is independent and has its own state?",
          options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
          answer: "Encapsulation"
      },
      {
          q: "Which of the following is true about a constructor in OOP?",
          options: [
          "It is called automatically when an object is created",
          "It is used to define the properties of a class",
          "It can return a value",
          "It must be manually called every time"
          ],
          answer: "It is called automatically when an object is created"
      },
      {
          q: "Which concept of OOP allows a class to inherit properties from another class?",
          options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
          answer: "Inheritance"
      },
      {
          q: "In OOP, which of the following represents a real-world entity?",
          options: ["Object", "Class", "Method", "None of the above"],
          answer: "Object"
      },
      {
          q: "What does abstraction refer to in OOP?",
          options: [
          "Hiding unnecessary details from the user and showing only relevant data",
          "Combining methods and properties into a single unit",
          "The ability to inherit methods and properties",
          "None of the above"
          ],
          answer: "Hiding unnecessary details from the user and showing only relevant data"
      },
      {
          q: "What is the result of a call to 'super()' in a subclass constructor?",
          options: ["It calls the parent class constructor", "It creates a new object", "It calls a private method in the parent class", "None of the above"],
          answer: "It calls the parent class constructor"
      },
      {
          q: "Which of the following is true about an interface in OOP?",
          options: [
          "It defines method signatures but does not implement them",
          "It can have method implementations",
          "It is used to create concrete objects",
          "It is the same as an abstract class"
          ],
          answer: "It defines method signatures but does not implement them"
      },
      {
          q: "What does 'this' keyword refer to in a class method?",
          options: [
          "The current object of the class",
          "The class itself",
          "The parent class",
          "The global object"
          ],
          answer: "The current object of the class"
      },
      {
          q: "In OOP, what is a subclass?",
          options: [
          "A class that is derived from another class",
          "A class that does not inherit any properties",
          "A class that cannot be instantiated",
          "None of the above"
          ],
          answer: "A class that is derived from another class"
      },
      {
          q: "What is an abstract class in OOP?",
          options: [
          "A class that cannot be instantiated and contains abstract methods",
          "A class that can be instantiated but has no methods",
          "A class that inherits from another class",
          "None of the above"
          ],
          answer: "A class that cannot be instantiated and contains abstract methods"
      },
      {
          q: "Which of the following is NOT a feature of OOP?",
          options: ["Encapsulation", "Inheritance", "Polymorphism", "Randomization"],
          answer: "Randomization"
      },
      {
          q: "What is method overriding in OOP?",
          options: [
          "Changing the method's return type",
          "Providing a new implementation of a method inherited from a superclass",
          "Overloading a method with different signatures",
          "None of the above"
          ],
          answer: "Providing a new implementation of a method inherited from a superclass"
      },
      {
          q: "What is the purpose of the 'instanceof' operator in JavaScript?",
          options: [
          "To check if an object is an instance of a class",
          "To create an instance of a class",
          "To find the class of an object",
          "None of the above"
          ],
          answer: "To check if an object is an instance of a class"
      }
      ]
      };


  let currentQuestionIndex = 0, score = 0, selectedAnswers = [], questions = [], autoSubmitted = [], timer;
  const quizArea = document.getElementById("quiz-area");
  const timerDisplay = document.getElementById("timer");
  const resultScreen = document.getElementById("result-screen");
  let timeLeft = 30;
  let startTime;

  function startQuiz() {
    resultScreen.style.display = 'none';
    clearInterval(timer);
    const subject = document.getElementById("quiz-subject").value;
    let count = parseInt(document.getElementById("quiz-count").value);
    const availableQuestions = [...questionsData[subject]];
    const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
    questions = shuffled.slice(0, count);
    currentQuestionIndex = 0;
    selectedAnswers = new Array(count).fill(null);
    autoSubmitted = new Array(count).fill(false);
    score = 0;
    startTime = new Date();
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();

    const question = questions[currentQuestionIndex];
    const selected = selectedAnswers[currentQuestionIndex];

    quizArea.innerHTML = `
      <div class="question">Q${currentQuestionIndex + 1}. ${question.q}</div>
      <div class="options">
        ${question.options.map(opt => `
          <button class="option-btn ${selected === opt ? 'selected' : ''}" onclick="selectOption('${opt}')">${opt}</button>
        `).join('')}
      </div>
      <div class="navigation-buttons">
        <button onclick="prevQuestion()">Previous</button>
        <button onclick="submitAnswer()">Submit</button>
        <button onclick="resetAnswer()">Reset</button>
        <button onclick="nextQuestion()">Next</button>
      </div>
      <div class="status">${autoSubmitted[currentQuestionIndex] ? 'Answer Submitted' : 'Not Submitted'}</div>
    `;

    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timer);
        if (!autoSubmitted[currentQuestionIndex]) submitAnswer(true);
      }
    }, 1000);
  }

  function updateTimer() {
    timerDisplay.textContent = `⏱️ ${timeLeft}s`;
  }

  function selectOption(opt) {
    if (!autoSubmitted[currentQuestionIndex]) {
      selectedAnswers[currentQuestionIndex] = opt;
      renderQuestion();
    }
  }

  function submitAnswer(auto = false) {
    const selected = selectedAnswers[currentQuestionIndex];
    if (!selected) return;
    if (autoSubmitted[currentQuestionIndex]) return;
    autoSubmitted[currentQuestionIndex] = true;
    if (selected === questions[currentQuestionIndex].answer) score++;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      if (btn.textContent === questions[currentQuestionIndex].answer) {
        btn.classList.add('correct');
      }
      if (btn.textContent === selected && selected !== questions[currentQuestionIndex].answer) {
        btn.classList.add('wrong');
      }
      btn.disabled = true;
    });

    document.querySelector('.status').textContent = 'Answer Submitted';

    if (currentQuestionIndex === questions.length - 1) {
      clearInterval(timer);
      setTimeout(showResult, 1500);
    }
  }

  function resetAnswer() {
    if (autoSubmitted[currentQuestionIndex]) return;
    selectedAnswers[currentQuestionIndex] = null;
    renderQuestion();
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }

  function nextQuestion() {
    if (!autoSubmitted[currentQuestionIndex]) submitAnswer(true);
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  }

  function showResult() {
    clearInterval(timer);
    timerDisplay.textContent = '';
    quizArea.innerHTML = '';
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000);
    resultScreen.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>
                              <p>You completed the quiz in <strong>${duration} seconds</strong>.</p>
                              <button class="review-btn" onclick="reviewAnswers()">Review Answers</button>`;
    resultScreen.style.display = 'block';
  }

  function reviewAnswers() {
    clearInterval(timer);
    timerDisplay.textContent = '';
    let reviewContent = '';
    questions.forEach((question, index) => {
      const selected = selectedAnswers[index];
      reviewContent += `
        <div class="question">Q${index + 1}. ${question.q}</div>
        <div>Your Answer: <b>${selected ? selected : 'Not Answered'}</b></div>
        <div>Correct Answer: <b>${question.answer}</b></div><hr>
      `;
    });
    resultScreen.innerHTML = reviewContent;
  }
