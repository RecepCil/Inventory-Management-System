import getRequest from '../../api';

export function fetchAllProducts(dispatch) {

  return getRequest("product").then(
    payload => {
      return payload.data.data;
    }
  )

};