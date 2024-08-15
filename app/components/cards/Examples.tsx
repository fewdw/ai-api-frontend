import React from "react";
import ExampleEndPointCard from "./ExampleEndPointCard";

const Examples = () => {
  const route: string = "http://localhost:8080/r/fewdw/public/";

  return (
    <div className="my-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-blue-800 text-3xl font-bold sm:text-4xl text-center">
          Some Cool Examples...
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <ExampleEndPointCard
          companyName="User Profile"
          apiEndpoint={`${route}generateUserProfile`}
          codeLines={[
            "Create a dynamic API that",
            "crafts detailed user profiles",
            "tailored to your specific needs",
          ]}
        />
        <ExampleEndPointCard
          companyName="Book Details"
          apiEndpoint={`${route}generateBookDetails`}
          codeLines={[
            "Get instant book details",
            "with titles, authors, and",
            "publication years at your fingertips",
          ]}
        />
        <ExampleEndPointCard
          companyName="Random Quotes"
          apiEndpoint={`${route}generateRandomQuotes`}
          codeLines={[
            "Inject inspiration into your app",
            "with a selection of quotes",
            "served fresh with each call",
          ]}
        />
      </div>
    </div>
  );
};

export default Examples;
