export const BASE_URL = `http://localhost:5454`

export const LOGIN_URL = `${BASE_URL}/auth/signin`;
export const REGISTER_URL = `${BASE_URL}/auth/signup`;
export const GET_USER = `${BASE_URL}/api/users/profile`;


// Restaurant USER API's
export const ADD_TO_FAVORITE_URL = `${BASE_URL}/api/restaurants/1/addtofavorites`
export const SEARCH_RESTAURANT_BY_KEYWORD_URL = `${BASE_URL}/api/restaurants/search`
export const FIND_ALL_RESTAURANT_URL = `${BASE_URL}/api/restaurants`

//Restaurant ADMIN API's
export const UPDATE_RESTAURANT_API = `${BASE_URL}/api/admin/`
export const DELETE_RESTAURANT_API = `${BASE_URL}/api/admin/`
export const CREATE_RESTAURANT_API = `${BASE_URL}/api/admin/create`


