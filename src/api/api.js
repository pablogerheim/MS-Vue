import axios from 'axios';

const apiUser = axios.create({
  baseURL: 'http://localhost:3002/user',
});

const apiProduct = axios.create({
  baseURL: 'http://localhost:3002/product',
});

async function getUser() {
  const user = await apiUser.get('/');
  return user.data;
}

async function getProduct() {
  const data = await apiProduct.get('/');
  return data.data;
}

async function getbyid(id) {
  const data = await apiProduct.get(`/${id}`);
  return data.data;
}

async function createProduct(product) {
  const data = await apiProduct.post('/', product);
  return data.data;
}

async function updateProduct(product) {
  const data = await apiProduct.put('/', product);
  return data.data;
}

async function updateQuantity(product) {
  const data = await apiProduct.patch('/', product);
  return data.data;
}

async function deleteProduct(id) {
  const data = await apiProduct.delete(`/${id}`);
  return data.data;
}

async function clearTable() {
  const data = await apiProduct.delete('/clear');
  return data.data;
}

export {
  getUser,
  getProduct,
  getbyid,
  createProduct,
  updateProduct,
  updateQuantity,
  deleteProduct,
  clearTable
};