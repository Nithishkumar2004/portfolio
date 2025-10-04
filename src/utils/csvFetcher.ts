import Papa from 'papaparse';

export interface GitHubConfig {
  owner: 'Nithishkumar2004',
  repo: 'portfolio-data', // your repo name
  branch: 'main',  
}

export async function fetchCSVFromGitHub<T = any>(
  config: GitHubConfig,
  filePath: string
): Promise<T[]> {
  const { owner, repo, branch = 'main' } = config;
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data as T[]);
        },
        error: (error: Error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error('Error fetching CSV:', error);
    return [];
  }
}

export async function fetchFileFromGitHub(
  config: GitHubConfig,
  filePath: string
): Promise<string> {
  const { owner, repo, branch = 'main' } = config;
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return url;
  } catch (error) {
    console.error('Error fetching file:', error);
    return '';
  }
}
