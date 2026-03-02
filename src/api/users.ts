import { User } from '@/lib/types';
import { apiClient } from './client';

export const getUsers = async (): Promise<User[]> => {
    const { data } = await apiClient.get<User[]>('/users');
    return data;
};

export const createUser = async (user: Omit<User, 'id' | 'created_at'>): Promise<User> => {
    const { data } = await apiClient.post<User>('/users', user);
    return data;
};

export const updateUserPassword = async (id: string, password: string): Promise<void> => {
    await apiClient.put(`/users/${id}/password`, { password });
};

export const deleteUser = async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
};
