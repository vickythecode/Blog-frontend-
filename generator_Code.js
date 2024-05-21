"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";
export default function Home() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65d0d779355d542d7db6");
  const databases = new Databases(client);
  let a =[
    {
      "title": "Mastering React: A Comprehensive Guide",
      "content": "<p>Explore the ins and outs of React, from basics to advanced concepts. Learn how to build interactive user interfaces with React components and understand the principles of state and props.</p><p>Topics covered include:</p><ul><li>Component Lifecycle</li><li>React Hooks</li><li>State Management</li><li>Routing in React</li><li>Testing React Applications</li></ul>",
      "slug": "mastering-react",
      "views": 8000,
      "author": "Jane Smith",
      "is_published": true
    },
    {
      "title": "Pythonic Patterns for Efficient Code",
      "content": "<p>Discover Python programming patterns for writing clean and efficient code. Learn about Pythonic idioms and best practices that make your code more readable and maintainable.</p><p>Topics covered include:</p><ul><li>List Comprehensions</li><li>Decorators</li><li>Generators</li><li>Error Handling</li></ul>",
      "slug": "pythonic-patterns",
      "views": 6500,
      "author": "Alex Johnson",
      "is_published": true
    },
    {
      "title": "Building Scalable APIs with Node.js",
      "content": "<p>Learn how to design and implement scalable APIs using Node.js and Express. Explore best practices for handling routes, middleware, and connecting to databases for a robust backend architecture.</p><p>Topics covered include:</p><ul><li>Express.js Basics</li><li>Middleware Usage</li><li>Database Integration</li><li>Error Handling in APIs</li></ul>",
      "slug": "scalable-apis-nodejs",
      "views": 7200,
      "author": "Chris Williams",
      "is_published": true
    },
    {
      "title": "Deep Dive into Machine Learning Algorithms",
      "content": "<p>Explore the inner workings of popular machine learning algorithms. Gain insights into supervised and unsupervised learning, and understand how algorithms make predictions and classifications.</p><p>Topics covered include:</p><ul><li>Linear Regression</li><li>Decision Trees</li><li>Clustering Algorithms</li><li>Neural Networks</li></ul>",
      "slug": "machine-learning-algorithms",
      "views": 9000,
      "author": "Michael Chen",
      "is_published": true
    },
    {
      "title": "The Art of UI/UX Design",
      "content": "<p>Discover the principles and practices of creating beautiful and user-friendly interfaces. Learn about color theory, typography, and user experience design to create engaging digital products.</p><p>Topics covered include:</p><ul><li>Color Psychology</li><li>Typography in Design</li><li>User Personas</li><li>Wireframing and Prototyping</li></ul>",
      "slug": "ui-ux-design",
      "views": 5500,
      "author": "Emily Davis",
      "is_published": true
    },
    {
      "title": "Cybersecurity: Protecting Your Digital Presence",
      "content": "<p>Learn essential cybersecurity practices to safeguard your online identity. Explore topics such as secure password management, two-factor authentication, and best practices for protecting personal and professional information.</p><p>Topics covered include:</p><ul><li>Password Security</li><li>Secure Communication</li><li>Network Security</li><li>Incident Response</li></ul>",
      "slug": "cybersecurity-best-practices",
      "views": 7800,
      "author": "Daniel Brown",
      "is_published": true
    },
    {
      "title": "Introduction to Data Science with Python",
      "content": "<p>Dive into the world of data science using Python and popular libraries. Learn about data cleaning, exploratory data analysis, and basic machine learning concepts to extract valuable insights from datasets.</p><p>Topics covered include:</p><ul><li>Data Cleaning Techniques</li><li>Exploratory Data Analysis</li><li>Introduction to Machine Learning</li><li>Visualization with Matplotlib and Seaborn</li></ul>",
      "slug": "data-science-intro",
      "views": 6000,
      "author": "Sophia Lee",
      "is_published": true
    },
    {
      "title": "DevOps: Bridging the Gap Between Development and Operations",
      "content": "<p>Explore the principles and tools of DevOps for efficient software development. Learn how to streamline collaboration between development and operations teams, automate deployment processes, and ensure continuous integration and delivery.</p><p>Topics covered include:</p><ul><li>Continuous Integration/Continuous Deployment (CI/CD)</li><li>Infrastructure as Code (IaC)</li><li>Containerization with Docker</li><li>Monitoring and Logging</li></ul>",
      "slug": "devops-principles",
      "views": 6700,
      "author": "Robert Turner",
      "is_published": true
    },
    {
      "title": "Getting Started with Kotlin: Modern Android Development",
      "content": "<p>Kickstart your Android development journey with the Kotlin programming language. Learn the basics of Kotlin syntax, and explore how it enhances Android app development compared to traditional Java.</p><p>Topics covered include:</p><ul><li>Kotlin Syntax Basics</li><li>Null Safety</li><li>Coroutines for Asynchronous Programming</li><li>Interoperability with Java</li></ul>",
      "slug": "kotlin-android-development",
      "views": 7200,
      "author": "Laura Miller",
      "is_published": true
    },
    {
      "title": "Effective Time Management for Developers",
      "content": "<p>Maximize productivity and achieve work-life balance with effective time management strategies. Learn about prioritization, goal setting, and tools to optimize your daily workflow as a software developer.</p><p>Topics covered include:</p><ul><li>Time Blocking</li><li>Task Prioritization</li><li>Effective Use of Productivity Tools</li><li>Balancing Work and Personal Life</li></ul>",
      "slug": "time-management-developers",
      "views": 5800,
      "author": "Ryan Carter",
      "is_published": true
    }
  ]
  
      
  
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
  

  const promise = databases.createDocument(
    "65d0dd81100c175b1c04",
    "65d0dd955e35452924fd",
    ID.unique(),
    element
    
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}
  return (
    <>
      <div>hello</div>
      <div>yello</div>
    </>
  );
}
