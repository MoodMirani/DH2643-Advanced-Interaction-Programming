import axios from "axios";

// declare var process: {
//   env: {
//     MY_PORT: string;
//     MY_ADDRESS: string;
//   };
// };
export const getAPI = () => {
  const port = process.env.MY_PORT;
  const address = process.env.MY_ADDRESS;
  console.log(`Frontend. ADDRESS: ${address}, PORT: ${port}`);
  return axios
    .get(`${address}:${port}/api/getsomedata`, {
      withCredentials: true,
    })
    .then(({ data }: { data: { someData: string } }) => data.someData);
};
