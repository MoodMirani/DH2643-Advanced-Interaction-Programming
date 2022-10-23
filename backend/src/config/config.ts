/* Could store configuration here, and perhaps even load different config files, 
   depending on process.env.NODE_ENV. */
const config = {
  port: process.env.PORT || 8080,
  development: "development",
  production: "production",
  db_url: "mongodb://127.0.0.1",
  db_name: "iprog",
  address: process.env.ADDRESS || "https://localhost",
};

export default config;
//For example, we could plausibly modify process.env like this to set it to dev at first.
//process.env.NODE_ENV = process.env.NODE_ENV || config.development;
//Then we could set the 'env' prop to whatever it is.
//config.env = process.env.NODE_ENV;
