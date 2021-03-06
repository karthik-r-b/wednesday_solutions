import {
  homeContainerReducer,
  initialState,
  homeContainerTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('HomContainer reducer tests', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(homeContainerReducer(undefined, {})).toEqual(state);
  });

  it('should return the initial state when an action of type FETCH_USER is dispatched', () => {
    const artistName = 'rihanna';
    const expectedResult = state.set('artistName', artistName);
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.REQUEST_GET_ITUNES,
        artistName
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the user data is present and userLoading = false when FETCH_USER_SUCCESS is dispatched', () => {
    const data = { name: 'rihanna' };
    const expectedResult = state.set('itunesData', data);
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.SUCCESS_GET_ITUNES,
        data
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the userErrorMessage has some data and userLoading = false when FETCH_USER_FAILURE is dispatched', () => {
    const error = 'something_went_wrong';
    const expectedResult = state.set('reposError', error);
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.FAILURE_GET_ITUNES,
        error
      })
    ).toEqual(expectedResult);
  });
});
