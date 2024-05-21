"use client";
import { Client, Databases, ID } from "appwrite";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
export default function Home() {
  const client = new Client();
  const [blogs,setBlogs]= useState([])

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65d0d779355d542d7db6");
  const databases = new Databases(client);

  let promise = databases.listDocuments(
     "65d0dd81100c175b1c04",
    "65d0dd955e35452924fd",
    []
);

promise.then(function (response) {
    // console.log(response);
    setBlogs(response.documents)
}, function (error) {
    // console.log(error);
});

function truncateHtml(htmlString, maxLength = 100) {
  // Create a temporary div element to parse and manipulate the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;

  // Extract the text content from the div
  const textContent = tempDiv.textContent || tempDiv.innerText || '';

  // Trim the text content to the specified maximum length
  const truncatedText = textContent.trim().slice(0, maxLength);

  // Add "..." if the original text exceeds the maximum length
  const result = textContent.length > maxLength ? truncatedText + '...' : truncatedText;

  return result;
}

  return (
    <>
      <Navbar/>
      <div className="m-8">
      <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
      {blogs.length===0 && "Loading..."}
      {blogs.map((blog) => ( 
        <BlogCard key={blog.slug} blog={blog} metaDesc={truncateHtml(blog.content)}/>
      ))}
    </div>
    </>
  );
}
