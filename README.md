# React_Practice

1. Question1- Explain in brief what is node js?

 Node.js is an open-source, server-side JavaScript runtime environment that allows executing JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

2. Question2-How is node js non-blocking?

 Node.js is non-blocking due to its event-driven architecture. It uses an event loop to handle incoming requests asynchronously, allowing it to continue processing other requests while waiting for I/O operations to complete. This allows for better resource utilization and the ability to handle a large number of concurrent connections without blocking the execution.

3. Question3-What is throughput?

Throughput refers to the rate at which a system can process and handle incoming requests or transactions. It measures the capacity and efficiency of a system to handle a high volume of work.

4. Question4-How is Node js having high IO throughput?

 Node.js achieves high I/O throughput by using non-blocking I/O operations and an event-driven architecture. It can handle a large number of concurrent connections efficiently by delegating I/O operations to the operating system's kernel, which is optimized for handling I/O tasks asynchronously. This allows Node.js to scale and handle high traffic loads without getting blocked by I/O operations.

5. Question5-What are CPU intensive tasks?

CPU intensive tasks are tasks that require a significant amount of processing power and utilize the CPU extensively. These tasks involve complex calculations, data manipulation, or resource-intensive computations that can consume a lot of CPU resources and potentially slow down other operations.

6. Question6-How can you end up blocking your main thread in node.js?

You can end up blocking your main thread in Node.js by performing long-running, CPU-intensive tasks synchronously, without utilizing asynchronous or non-blocking techniques. This can cause the entire application to become unresponsive and unable to handle other incoming requests until the blocking task completes.

7. Question7-What is the event loop?

The event loop is a crucial component of Node.js that handles and manages asynchronous operations. It continuously monitors the event queue and dispatches events to be processed by callbacks or event handlers. It ensures that I/O operations and other asynchronous tasks are executed in a non-blocking manner and allows Node.js to handle multiple requests concurrently.

8. Question8-What are different phases in event loop?

The event loop in Node.js consists of different phases: timers, pending callbacks, idle, prepare, poll, check, and close. Each phase has a specific purpose and handles different types of events or operations. The event loop iterates through these phases in a specific order to process events and execute callbacks or handlers.

9. Question9-What is process.tick?

`process.tick` is not a built-in feature of Node.js. It might be a typo or a custom function implemented in a specific codebase.

10. Question10-When can process.tick starve your event loop?

If a task in the event loop keeps running for a long time without yielding control back to the event loop, it can starve the event loop and prevent other tasks from being processed. This can happen if a task is executing long-running synchronous operations or blocking the event loop intentionally.

11. Question11-What is the difference between setTimeout and setInterval?

The `setTimeout` function is used to schedule the execution of a callback function after a specified delay in milliseconds. It executes the callback once after the delay.

    The `setInterval` function is used to repeatedly execute a callback function at a specified interval, with a delay between each execution.

12. Question12-How can you make a network request with http module from the backend?

 To make a network request from the backend using the `http` module in Node.js, you can use the `http.request()` method. This method allows you to send HTTP requests to a specified URL and handle the response asynchronously by registering event handlers for the `response` and `error` events.

13. Question13-How can you create your own events?

 You can create your own events in Node.js by using the built-in `EventEmitter` class. You can create an instance of `EventEmitter` and emit events using the `emit()` method. Other parts of your application can listen for these events and respond to them by registering event listeners with the `on()` or `once()` methods.

14. Question14-What are clusters?

 Clusters in Node.js allow you to create multiple instances of your application to utilize multiple CPU cores effectively. Each cluster is a separate Node.js process that can handle incoming requests independently. Clusters help in achieving better performance and scalability by distributing the workload across multiple processes.

15. Question15-How does your Node.js application handle scale? Elaborate


Node.js applications can handle scale by utilizing techniques such as clustering, load balancing, and horizontal scaling. Clustering allows multiple instances of the application to run on different CPU cores. Load balancing distributes incoming requests across these instances. Horizontal scaling involves adding more servers or instances to handle increased traffic. Additionally, using caching mechanisms, optimizing database queries, and implementing asynchronous and non-blocking code can also enhance scalability.

16. Question17-What is the difference between readFile and readFileSync?

The `readFile` function in Node.js is used to read the contents of a file asynchronously. It takes a file path and a callback function as arguments. The file is read in the background, and the callback function is invoked with the error (if any) and the file contents.

   The `readFileSync` function, on the other hand, reads the file synchronously and blocks the execution until the file is read completely. It returns the file contents directly.

17. Question 17-What are CORS? How do you configure them? Why do you need them?

CORS (Cross-Origin Resource Sharing) is a security mechanism enforced by web browsers that restricts cross-origin HTTP requests. It prevents web pages from making requests to different domains unless those domains explicitly allow it. CORS can be configured on the server-side by setting appropriate response headers, such as `Access-Control-Allow-Origin` to specify which domains are allowed to access the server's resources.

18. Question18-What is rate limiting?

Rate limiting is a technique used to control the number of requests a client can make to a server within a specific time period. It helps prevent abuse, DoS attacks, and excessive resource consumption. Rate limiting can be implemented by setting limits on the number of requests per client IP or user account, enforcing rate limits per API endpoint, or using token-based systems.

19. Question19- How does middlewares work in express?

Middleware in Express is a function that sits between the incoming request and the final route handler. It can perform various tasks such as logging, request parsing, authentication, authorization, error handling, etc. Middleware functions have access to the request and response objects and can modify them or invoke the next middleware in the chain.

20. Question20-What is the difference between Encryption and Hashing?

 Encryption is the process of transforming data into a format that is not easily readable or understandable, usually for the purpose of secure transmission or storage. It involves using an encryption algorithm and a secret key to convert the data into ciphertext. Encryption is reversible, and the original data can be retrieved using the corresponding decryption algorithm and key.

   Hashing, on the other hand, is a one-way process of converting data into a fixed-size string of characters. It is primarily used for data integrity and password storage. Hash functions generate a unique hash value for each input, and the same input will always produce the same hash value. However, it is computationally infeasible to retrieve the original data from the hash value.

21. Question21-What is the difference between https and http?

HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting data over the internet. It operates over plain text and is not secure for transferring sensitive information. HTTPS (HTTP Secure) is an extension of HTTP that uses encryption mechanisms such as SSL/TLS to provide secure communication by encrypting the data transmitted between the client and the server.

22. Question22-What is TLS?

TLS (Transport Layer Security) is a cryptographic protocol that provides secure communication over a network. It ensures data integrity, privacy, and authentication between client-server applications. TLS is the successor to SSL (Secure Sockets Layer) and is widely used to establish secure connections over the internet, commonly seen as HTTPS.

23. Question23-What is AES?

AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used for encrypting and decrypting sensitive data. It is a widely accepted encryption standard due to its security, efficiency, and versatility.

24. Question24-What is JWT Token? Why do we need to use JWT? What are some pros and cons?

JWT (JSON Web Token) is a compact and self-contained token format used for securely transmitting information between parties as a JSON object. It consists of three parts: header, payload, and signature. JWTs are commonly used for authentication and authorization purposes in web applications. They are often used to authenticate users and grant them access to protected resources without the need for traditional session-based authentication.

   Some reasons for using JWT include:
   - Stateless: JWTs are self-contained and can store user information within the token itself, eliminating the need for server-side session storage.
   - Scalability: JWTs allow for distributed authentication and can be easily used in microservices architectures.
   - Interoperability: JWTs can be used across different platforms and technologies, making them versatile and widely adopted.

   Pros of JWT:
   - Stateless and scalable authentication mechanism.
   - Supports cross-domain and stateless communication.
   - Self-contained tokens reduce server-side storage and database lookups.
   - Enables single sign-on (SSO) and federation across multiple systems.

   Cons of JWT:
   - Token size can be larger compared to other authentication mechanisms.
   - Tokens are not revocable or invalidated until they expire.
   - Increased complexity in token verification and management compared to session-based authentication.

25. Question25-What is salting? Where do we store salt?

 Salting is the process of adding a random value (salt) to a password before hashing it. The salt is unique for each user and is combined with the password before applying a hashing algorithm. Salting enhances the security of hashed passwords by making it more difficult for attackers to crack passwords using precomputed tables or rainbow tables. The salt is typically stored alongside the hashed password in a secure manner, such as in a database.

26. Question26-What is the difference between authorisation and Authentication?

 Authentication is the process of verifying the identity of a user or entity. It involves validating credentials, such as username and password, to ensure that the user is who they claim to be. Authorization, on the other hand, is the process of granting or denying access to specific resources or functionalities based on the authenticated user's privileges or permissions. In simple terms, authentication is about proving identity, while authorization is about granting access rights.

27. Question27-What is the difference between JS on the browser and node?

JavaScript in the browser (client-side JavaScript) and Node.js (server-side JavaScript) are both implementations of the JavaScript programming language, but they have different environments and use cases.

   JavaScript in the browser runs within a web browser and primarily interacts with the Document Object Model (DOM) to manipulate web pages and provide interactivity. It is mainly used for front-end development, handling user interactions, and making HTTP requests to server APIs.

   Node.js, on the other hand, is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows executing JavaScript code on the server-side, outside of a browser. Node.js provides a runtime environment for building scalable, networked applications and is commonly used for server-side scripting, creating web servers, and developing back-end APIs.

28. Question28-What is V8?

  V8 is an open-source JavaScript engine developed by Google. It is the engine that powers JavaScript execution in Google Chrome and Node.js. V8 is known for its high performance and efficiency in executing JavaScript code. It uses just-in-time (JIT) compilation techniques to optimize JavaScript execution and provides a runtime environment for JavaScript applications. V8 plays a crucial role in enabling the execution of JavaScript both in the browser and on the server-side with Node.js.
