import { Quote, QuoteItem, ActivityLog } from '../lib/types';
import { apiClient } from './client';

export async function getQuotes() {
    const { data } = await apiClient.get<Quote[]>('/quotes');
    return data;
}

export async function addQuote(quoteData: Omit<Quote, 'id' | 'created_at' | 'updated_at' | 'items'>, items: Omit<QuoteItem, 'id' | 'quote_id'>[]) {
    const { data } = await apiClient.post<Quote>('/quotes', { quoteData, items });
    return data;
}

export async function updateQuoteStatus(id: string, status: string) {
    await apiClient.put(`/quotes/${id}/status`, { status });
}

export async function deleteQuote(id: string) {
    await apiClient.delete(`/quotes/${id}`);
}

export async function getActivityLogs(from?: string, to?: string) {
    const { data } = await apiClient.get<ActivityLog[]>('/quotes/activity', {
        params: { from, to }
    });
    return data;
}

export async function addActivityLog(log: Omit<ActivityLog, 'id' | 'created_at'>) {
    await apiClient.post('/quotes/activity', log);
}
// clearActivityLogs removed as per requirements
