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
          companyName="Alien Planets"
          apiEndpoint={`${route}generateAlienPlanets`}
          codeLines={[
            "Generate alien planets",
            "with unique environments",
            "and species details.",
          ]}
        />
        <ExampleEndPointCard
          companyName="Startup Ideas"
          apiEndpoint={`${route}generateStartupIdeas`}
          codeLines={[
            "Get innovative startups",
            "with market focus",
            "and business ideas.",
          ]}
        />
        <ExampleEndPointCard
          companyName="Time Travel"
          apiEndpoint={`${route}generateTimeTravelScenarios`}
          codeLines={[
            "Create time travel scenarios",
            "with historical events",
            "and outcomes.",
          ]}
        />
      </div>
    </div>
  );
};

export default Examples;
