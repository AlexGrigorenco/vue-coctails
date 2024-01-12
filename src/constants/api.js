const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const INGREDIENTS_URL = `${BASE_URL}list.php?i=list`;
export const COCTAILS_BY_INGREGIENT_URL = `${BASE_URL}filter.php?i=`;
export const COCTAIL_BY_ID_URL = `${BASE_URL}lookup.php?i=`;
export const COCTAIL_RANDOM_URL = `${BASE_URL}random.php`;
export const CATEGORIES_URL = `${BASE_URL}list.php?c=list`;
export const COCTAILS_BY_CATEGORY_URL = `${BASE_URL}filter.php?c=`;
export const ALCOHOL_SORT_LIST_URL = `${BASE_URL}list.php?a=list`;
export const COCTAILS_SORT_BY_ALCOHOL_URL = `${BASE_URL}filter.php?a=`;