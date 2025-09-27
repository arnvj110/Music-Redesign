// src/api/spotifyClient.js
import axios from 'axios';

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

// const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const VITE_ACCESS_TOKEN = 'BQAOTczx7uGiCe-lef_nJ-_wq2ylax6LKgl4mmLi7J9QAx_3SCcQFjVBvo67UMtYNSerhKvBNHE1QaBDFnx-PR2E11i90yBkPOEqlKBhqNwBMY-Gj_LPsELee5HqUo-w3P652bqoT9SbAZ64nGxHt9crMpfrrEMB0d2MmaUXd67DD6kcZjYPjkqsVqPNZ08lHz8U4wSwkQXCAiXn0vuhYfrNLkTyd-m0kaZ7p1QpTjVZWhKTEJrZrWt4NqPo9tUTfBA6vrNLUr7q74HKvXPRdhXhgjhOempe1FsIEtncK_fiFDfGAsbRyWLC2DrB';

spotifyClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${VITE_ACCESS_TOKEN}`;
  return config;
});

export default spotifyClient;
