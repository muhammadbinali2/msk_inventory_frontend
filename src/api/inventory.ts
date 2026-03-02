import { Product, ConfigList } from '../lib/types';
import { apiClient } from './client';

export async function getProducts() {
    const { data } = await apiClient.get<Product[]>('/inventory/products');
    return data;
}

export async function addProduct(product: Omit<Product, 'id' | 'created_at'>) {
    const { data } = await apiClient.post<Product>('/inventory/products', product);
    return data;
}

export async function updateProduct(id: string, updates: Partial<Product>) {
    const { data } = await apiClient.put<Product>(`/inventory/products/${id}`, updates);
    return data;
}

export async function deleteProduct(id: string) {
    await apiClient.delete(`/inventory/products/${id}`);
}

export async function getConfigLists() {
    const { data } = await apiClient.get<ConfigList[]>('/inventory/config');
    return data;
}

export async function addConfigList(item: Omit<ConfigList, 'id' | 'created_at'>) {
    const { data } = await apiClient.post<ConfigList>('/inventory/config', item);
    return data;
}

export async function deleteConfigList(id: string) {
    await apiClient.delete(`/inventory/config/${id}`);
}
