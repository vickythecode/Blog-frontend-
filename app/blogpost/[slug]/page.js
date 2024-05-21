"use client"
import { Client, Databases, ID, Query } from "appwrite";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import React from "react";


export default function Page({ params }) {
    const client = new Client();
  const [blog,setBlog]= useState([])

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65d0d779355d542d7db6");
  const databases = new Databases(client);

  let promise = databases.listDocuments(
     "65d0dd81100c175b1c04",
    "65d0dd955e35452924fd",
    [Query.equal("slug",params.slug)]
);

promise.then(function (response) {
    console.log(response);
    setBlog(response.documents[0])
}, function (error) {
    console.log(error);
});

    return (
        <>
        <Navbar/>
        <div className="m-8 shadow-xl p-4">
        <h1 className="text-2xl font-bold mb-4">{blog?.title}</h1>
        {!blog && "Loading..."}
        <div className="my-2" dangerouslySetInnerHTML={{__html:blog?.content}}></div>
        <div className="text-gray-700 italic">Author:{blog?.author}</div>
      </div>
      </>
    )
  }