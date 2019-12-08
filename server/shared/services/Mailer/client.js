import axios from 'axios';

const { SENDGRID_API_KEY } = process.env;

export default axios.create({
  baseURL: 'https://api.sendgrid.com/v3/',
  headers: {
    Authorization: `Bearer ${SENDGRID_API_KEY}`,
    'content-type': 'application/json',
  },
});
