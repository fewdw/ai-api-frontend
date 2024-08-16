import React, { useState } from "react";

const AddNewRoute = () => {
  const [routeName, setRouteName] = useState("");
  const [publicOrGenerateKey, setPublicOrGenerateKey] = useState("");
  const [orderPrompt, setOrderPrompt] = useState("");
  const [format, setFormat] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: any = {};

    // Validate Route Name
    if (!/^[a-zA-Z]+$/.test(routeName)) {
      newErrors.routeName =
        "Route name must be a single word with letters only.";
    }

    // Validate Public or Generate Key
    if (!["public", "generate"].includes(publicOrGenerateKey)) {
      newErrors.publicOrGenerateKey = "Please select a valid option.";
    }

    // Validate Order Prompt
    if (orderPrompt.length > 500) {
      newErrors.orderPrompt = "Order prompt cannot exceed 500 characters.";
    }

    // Validate Format
    if (format.length > 500) {
      newErrors.format = "Format cannot exceed 500 characters.";
    }
    try {
      JSON.parse(format.replace(/'/g, '"'));
    } catch (e) {
      newErrors.format = "Format must be valid JSON.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8080/api/routes", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: routeName,
            prompt: orderPrompt,
            format: format.replace(/"/g, "'"),
            key: publicOrGenerateKey === "public" ? "public" : "key",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          window.location.href = `/api/${data.id}`;
        } else {
          setSubmissionError("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        setSubmissionError("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="RouteName"
            className="block text-sm font-medium text-gray-700"
          >
            Route Name
          </label>
          <input
            type="text"
            id="RouteName"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            placeholder="Enter the route name"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
          {errors.routeName && (
            <p className="text-red-600 text-sm">{errors.routeName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="PublicOrGenerateKey"
            className="block text-sm font-medium text-gray-700"
          >
            Public or Generate API Key
          </label>
          <select
            name="PublicOrGenerateKey"
            id="PublicOrGenerateKey"
            value={publicOrGenerateKey}
            onChange={(e) => setPublicOrGenerateKey(e.target.value)}
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="public">Public</option>
            <option value="generate">Generate key for me</option>
          </select>
          {errors.publicOrGenerateKey && (
            <p className="text-red-600 text-sm">{errors.publicOrGenerateKey}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="OrderPrompt"
            className="block text-sm font-medium text-gray-700"
          >
            Prompt
          </label>
          <textarea
            id="OrderPrompt"
            value={orderPrompt}
            onChange={(e) => setOrderPrompt(e.target.value)}
            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm resize-y"
            rows={4}
            placeholder="Give a better description of what you are trying to generate..."
          ></textarea>
          {errors.orderPrompt && (
            <p className="text-red-600 text-sm">{errors.orderPrompt}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="Format"
            className="block text-sm font-medium text-gray-700"
          >
            Format
          </label>
          <textarea
            id="Format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm resize-y"
            rows={4}
            placeholder="Enter data in the exact JSON format you want, we will generate it for you..."
          ></textarea>
          {errors.format && (
            <p className="text-red-600 text-sm">{errors.format}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 w-auto bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>
          {submissionError && (
            <p className="text-red-600 text-sm mt-2">{submissionError}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddNewRoute;
