export class RetellClient {
  private apiKey: string;
  private baseUrl = 'https://api.retellai.com';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetch(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Retell API error: ${response.statusText}`);
    }

    return response.json();
  }

  async getAgents() {
    return this.fetch('/v1/agents');
  }

  async getCalls(params?: { startDate?: string; endDate?: string; limit?: number }) {
    const queryParams = new URLSearchParams(params as any);
    return this.fetch(`/v1/calls?${queryParams}`);
  }

  async getCallById(callId: string) {
    return this.fetch(`/v1/calls/${callId}`);
  }

  async getAnalytics(startDate: string, endDate: string) {
    return this.fetch(`/v1/analytics?start_date=${startDate}&end_date=${endDate}`);
  }
}

export const retellClient = new RetellClient(process.env.RETELL_API_KEY || '');
