import MockAdapter from 'axios-mock-adapter';
import { getApiClient } from '@utils/apiUtils';
import { getPlaylist } from '../repoApi';

describe('RepoApi tests', () => {
  const artistName = 'rihanna';
  it('should make the api call to "/search/repositories?q="', async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const data = [
      {
        totalCount: 1,
        items: [{ repositoryName }]
      }
    ];
    mock.onGet(`/search/repositories?q=${artistName}`).reply(200, data);
    const res = await getPlaylist(artistName);
    expect(res.data).toEqual(data);
  });
});
