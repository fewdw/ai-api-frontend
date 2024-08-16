import Link from "next/link";
import React, { useState } from "react";

interface RouteCardProps {
  id: number;
  path: string;
  owner: string;
  keyProp: string;
  visits: number;
  apiKey: string;
}

const truncateKey = (key: string) => {
  return key.length > 10 ? `${key.slice(0, 5)}...` : key;
};

const RouteCard: React.FC<RouteCardProps> = ({
  id,
  path,
  owner,
  keyProp,
  visits,
  apiKey,
}) => {
  const [tooltip, setTooltip] = useState("Copy to clipboard");
  const [urlTooltip, setUrlTooltip] = useState("Copy URL");
  const [copied, setCopied] = useState(false);

  const handleKeyCopyClick = () => {
    navigator.clipboard
      .writeText(apiKey)
      .then(() => {
        setCopied(true);
        setTooltip("Copied to clipboard ✅");
        setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch(() => setTooltip("Failed to copy"));
  };

  const handleUrlCopyClick = () => {
    const url = `http://localhost:8080/r/${owner}/${apiKey}/${path}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setUrlTooltip("Copied URL ✅");
        setTimeout(() => setUrlTooltip("Copy URL"), 2000); // Hide message after 2 seconds
      })
      .catch(() => setUrlTooltip("Failed to copy URL"));
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Link href={`/api/${id}`}>{path}</Link>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{owner}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-2">
        <span>{truncateKey(apiKey)}</span>
        {apiKey.length > 10 && (
          <button
            onClick={handleKeyCopyClick}
            className="relative flex items-center justify-center text-gray-500 hover:text-gray-700"
            aria-label="Copy key to clipboard"
          >
            <span className="text-lg" role="img" aria-label="clipboard">
              📋
            </span>
            <span
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 transition-opacity duration-300 ${
                copied ? "opacity-100" : ""
              }`}
            >
              {tooltip}
            </span>
          </button>
        )}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <label
          htmlFor={`switch-${id}`}
          className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
        >
          <input type="checkbox" id={`switch-${id}`} className="peer sr-only" />
          <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-2 p-0">
        <div className="relative group">
          <Link
            href={`http://localhost:8080/r/${owner}/${apiKey}/${path}`}
            className="relative flex items-center justify-center text-gray-500 hover:text-gray-700"
            aria-label="Visit Endpoint"
            target="_blank"
          >
            <span className="text-lg" role="img" aria-label="house">
              🏠
            </span>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Visit Site
            </span>
          </Link>
        </div>

        <div className="relative group">
          <button
            onClick={handleUrlCopyClick}
            className="relative flex items-center justify-center text-gray-500 hover:text-gray-700"
            aria-label="Copy URL to clipboard"
          >
            <span className="text-lg" role="img" aria-label="copy-url">
              📋
            </span>
            <span
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 transition-opacity duration-300 ${
                urlTooltip === "Copied URL ✅" ? "opacity-100" : ""
              }`}
            >
              {urlTooltip}
            </span>
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="text-xs font-medium">{visits}</span>
        </div>
      </td>
    </tr>
  );
};

export default RouteCard;
