import Cookies from "js-cookie";

export const callBackendFromClient = async (
  path: string,
  options: RequestInit = {},
): Promise<Response> => {
  const token = Cookies.get("jwt");

  options = {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`http://localhost:5000/${path}`, options);

  return await response;
};
