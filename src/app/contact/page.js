"use client";
import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch("/api");
    const data = await res.json();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>ContactPage</div>;
};

export default ContactPage;
