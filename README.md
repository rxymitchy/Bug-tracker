**Week 6: Testing and Debugging in MERN Applications**

**Objective:**

- Develop a systematic approach to testing and debugging MERN applications.
- Implement unit, integration, and component tests for both backend and frontend.
- Identify and resolve issues using debugging tools and techniques.

**Project Suggestion:** Build a "Bug Tracker" application where users can create, update, and track issues in a project. The goal is to integrate testing and debugging best practices to ensure application reliability.

**Instructions:**

1. **Project Setup:**
   - Create a new project folder called `mern-bug-tracker`.
   - Set up both backend and frontend environments.
   - Install necessary dependencies, including testing libraries (Jest, Supertest, React Testing Library).

2. **Application Features:**
   - Users should be able to:
     - Report new bugs by filling out a form.
     - View a list of all reported bugs.
     - Update bug statuses (e.g., open, in-progress, resolved).
     - Delete bugs.

3. **Testing Requirements:**
   - **Backend:**
     - Write unit tests for individual helper functions (e.g., validation logic).
     - Perform integration tests for API routes (e.g., create, update, delete bug endpoints).
     - Mock database calls using libraries like `jest-mock`.
   
   - **Frontend:**
     - Write unit tests for components (e.g., form validation, button clicks).
     - Implement integration tests to verify API calls and UI updates.
     - Ensure proper rendering of UI elements under different states (e.g., empty list, error message).

4. **Debugging Tasks:**
   - Introduce intentional bugs in the code and utilize:
     - Console logs for tracking values.
     - Chrome DevTools for inspecting network requests and component state.
     - Node.js inspector for debugging server-side code.
     - Error boundary implementation for React components.

5. **Error Handling Implementation:**
   - Implement error handling in the backend using Express middleware.
   - Add client-side error boundaries to capture and gracefully handle crashes.

6. **Documentation:**
   - Write a `README.md` file that includes:
     - How to install and run the project.
     - Steps to run tests and debugging techniques used.
     - Explanation of the testing approach and coverage.

7. **Submission:**
   - Push your code to your GitHub repository.

**Evaluation Criteria:**

- Comprehensive unit and integration tests.
- Proper test coverage and documentation.
- Effective use of debugging techniques.
- Well-structured and maintainable code.
- Clear and concise error handling implementation.

