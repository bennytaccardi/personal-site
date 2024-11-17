export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  languages: string[];
  created_at: string;
  stargazers_url: string;
  languages_url: string;
  visible: boolean;
  owner: {
    login: string;
  };
}
