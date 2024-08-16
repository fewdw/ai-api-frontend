"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface DataType {
  id: number;
  path: string;
  prompt: string;
  format: string;
  visits: number;
  owner: string;
  key: string;
}

const Page: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/routes/${params.id}`,
          {
            credentials: "include",
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>id: {data.id}</p>
      <p>path: {data.path}</p>
      <p>prompt: {data.prompt}</p>
      <p>format: {data.format}</p>
      <p>visits: {data.visits}</p>
      <p>owner: {data.owner}</p>
      <p>key: {data.key}</p>
    </div>
  );
};

export default Page;
