// api fetch functions

import axios from 'axios';
import { qsAllPage, qsLinksPage, qsMenuPage } from './queryStrings';

const url =
  process.env.NEXT_PUBLIC_RAILWAY_API ||
  'https://strapi-ts-blog-production.up.railway.app/api/aroma-restaurant';

export const getAllPageData = () =>
  axios
    .get(`${url}?${qsAllPage}`)
    .catch((error) => console.log('getAllPageData', error));

export const getMenuPageData = () =>
  axios
    .get(`${url}?${qsMenuPage}`)
    .catch((error) => console.log('getAllPageData', error));

export const getLinksPageData = () =>
  axios
    .get(`${url}?${qsLinksPage}`)
    .catch((error) => console.log('getAllPageData', error));
