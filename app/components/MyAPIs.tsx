import React, { useEffect, useState } from "react";
import RouteCard from "./RouteCard";

interface Route {
  id: number;
  path: string;
  owner: string;
  keyProp: string;
  key: string;
  visits: number;
}

const truncateKey = (key: string) => {
  return key.length > 10 ? `${key.slice(0, 5)}...` : key;
};

const MyAPIs: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/routes", {
          method: "GET",
          credentials: "include",
        });
        const data: Route[] = await response.json();
        if (Array.isArray(data)) {
          setRoutes(data);
        } else {
          console.error("Expected an array but got:", data);
          setRoutes([]); // Set to empty array if the data is not an array
        }
      } catch (error) {
        console.error("Failed to fetch routes:", error);
        setError("Failed to load routes.");
        setRoutes([]); // Set to empty array in case of error
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="m-4 p-4 border border-gray-200 rounded-lg max-w-3xl mx-auto">
      {error && <div className="text-red-500">{error}</div>}
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Path
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Owner
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 mr-10">
                Key
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Switch
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 mr-4">
                Link
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Visits
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-left">
            {routes.map((route) => (
              <RouteCard
                key={route.key}
                id={route.id}
                path={route.path}
                owner={route.owner}
                keyProp={route.keyProp}
                visits={route.visits}
                apiKey={route.key}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAPIs;
