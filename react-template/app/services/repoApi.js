import { generateApiClient } from '@utils/apiUtils';
const repoApi = generateApiClient('github');
const ituneApi = generateApiClient('itunes');

export const getRepos = repoName =>
  repoApi.get(`/search/repositories?q=${repoName}`);

export const getPlaylist = artistName =>
  ituneApi.get(`/search?term=${artistName}`);
