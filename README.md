# 🔍 Image Search Engine

A simple and responsive image search application that allows users to search for images using the **Unsplash API** and load additional results with pagination.

🔗 **GitHub Repository:** https://github.com/Mehar-Zain/image-search

---

## ✨ Features

* 🔎 Search for images using keywords
* 🖼️ Display image search results dynamically
* 📸 Fetch images from the Unsplash API
* 📄 Load more images with pagination
* 🔗 Open the original image page on Unsplash
* 📱 Responsive and user-friendly interface
* ⚡ Dynamic content rendering using JavaScript

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Unsplash API
* Fetch API

---

## 🚀 How It Works

1. Enter a keyword in the search box.
2. Submit the search form.
3. The application sends a request to the Unsplash API.
4. Search results are dynamically displayed on the page.
5. Click **More** to load additional results.
6. Click any image to open its original Unsplash page in a new tab.

---

## 📂 Project Structure

```text
image-search/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mehar-Zain/image-search.git
```

### 2. Navigate to the project directory

```bash
cd image-search
```

### 3. Open the project

This is a frontend application, so you can open `index.html` directly in your browser.

You can also use the **Live Server** extension in VS Code for local development.

---

## 🔑 API Configuration

This project uses the **Unsplash API** to retrieve image search results.

To use your own API credentials:

1. Create an application on Unsplash Developers.
2. Generate your Access Key.
3. Open `script.js`.
4. Replace the existing API key in the request URL with your own key.

Example:

```javascript
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=YOUR_ACCESS_KEY&per_page=12`;
```

> ⚠️ For public repositories, avoid exposing sensitive API credentials. If the API key is intended to remain private, use a backend server or environment variables rather than committing it directly to the repository.

---

## 📄 Pagination

The application initially loads **12 images per page**.

When the **More** button is clicked, the page number increases and the next set of results is requested from the Unsplash API.

---

## 🎯 Project Purpose

This project was built to practice:

* Working with third-party APIs
* Using JavaScript `fetch()` for API requests
* Handling asynchronous operations
* Dynamically creating and displaying HTML elements
* Implementing basic pagination
* Working with search forms and user input
* Opening external links dynamically

---

## 👨‍💻 About the Developer

I'm **Mehar Zain**, a Computer Science student and Frontend/MERN Stack Developer interested in building modern and user-friendly web applications.

This project is one of my hands-on projects created to strengthen my JavaScript and API integration skills.

---

## 📬 Connect With Me

🌐 **Portfolio:**
https://mehar-zain-portfolio.netlify.app/

💻 **GitHub:**
https://github.com/Mehar-Zain

💼 **LinkedIn:**
https://www.linkedin.com/in/mehar-zain-dev/

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

### 📄 License

This project is created for learning and educational purposes.
