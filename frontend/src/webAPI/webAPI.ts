import axios from "axios";

export const getAPI = () => {
  const port = process.env.MY_PORT;
  const address = process.env.MY_ADDRESS;
  console.log(`Frontend. ADDRESS: ${address}, PORT: ${port}`);
  console.log(`Mode: ${process.env.NODE_ENV}`);
  return axios
    .get(`${address}:${port}/api/getsomedata`, {
      withCredentials: true,
    })
    .then(({ data }: { data: { someData: string } }) => data.someData);
};
