import axios from "axios";

export const getAPI = () =>
  axios
    .get("https://localhost:3000/api/getsomedata", {
      withCredentials: true,
    })
    .then(({ data }: { data: { someData: string } }) => data.someData);
