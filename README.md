# Assignment-1

This assignment provides hands-on experience in fundamental **DevOps practices**.

---

## Live URL
The web app can be accessed at:  
- [https://sukhman.co.in/](https://sukhman.co.in/)  
- [https://assignment-1-asdt.onrender.com/](https://assignment-1-asdt.onrender.com/)

---

## Brief
1. Web app developed in **Flask** to track workouts and their durations.  
2. Displays a list of workouts.  
3. Uses **HTML, CSS, JS, and Bootstrap** for the frontend UI.  
4. APIs are developed in Flask and consumed by the frontend using **fetch**.

---

## Version Control System (VCS) Implementation
- Different branches were created for **features** and **bug fixes**.  
- Branches were merged into `main` after completing the tasks.  

---

## Unit Testing Framework Integration
- **Pytest** framework is used to create unit test cases for the APIs.  

---

## Automated Testing Configuration
- **GitHub Actions** is used to build the app and run tests using Pytest on every push to `main` branch.  

---

## Containerization with Docker
- Docker image is created **after successful test execution** and pushed to Docker Hub.  

---

## CI/CD Pipeline with GitHub Actions
1. Triggered on every push to `main`.  
2. Automated testing is performed.  
3. Docker image is created with the bundled Flask application and pushed to Docker Hub.  
4. A webhook is called to deploy the latest image to the server.
5. Latest image is pulled from docker hub and deployed on the server. 

---

## File Structure
```
app.py                  # Entry point of the application
templates/index.html     # HTML templates
static/
  ├─ script.js          # Frontend JS
  └─ style.css          # Frontend CSS
tests/
  └─ test_api.py        # Pytest test cases
.github/workflows/
  └─ main.yml           # GitHub Actions workflow
Dockerfile               # Docker configuration to bundle and run the app
requirements.txt         # Python dependencies
```

---

## Steps to Run the App Locally
```bash
git clone https://github.com/2024tm93086/assignment-1.git
cd assignment-1
pip install -r requirements.txt
waitress-serve --host=127.0.0.1 --port=5000 app:app
```
- The app will run locally at: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## GitHub Actions Steps Explanation
1. **Set up Python 3.10** – Uses Python 3.10.  
2. **Install dependencies** – Upgrades pip and installs dependencies from `requirements.txt`.  
3. **Test with Pytest** – Runs unit test cases.  
4. **Log in to Docker Hub** – Uses credentials stored in GitHub Actions secrets to login to Docker.  
5. **Build and push Docker image** – Builds the image with the name `assignment-1` and tag `latest`, then pushes it to Docker Hub.  
6. **Deploy via webhook** – Calls a webhook to pull the latest Docker image from Docker Hub and deploy it on the server.
