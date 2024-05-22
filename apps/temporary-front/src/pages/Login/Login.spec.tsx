import Login from './Login';

import { render } from '@testing-library/react';
// import { mocked } from 'jest-mock';
import '@testing-library/jest-dom';
import useLoginVm from './Login.viewmodel';

jest.mock('./Login.viewmodel');
describe('Login component tests', () => {
  beforeAll(() => {
    jest.mocked(useLoginVm).mockReturnValue({ testFunction: jest.fn() });
  });
  it('should render the main div', () => {
    render(<Login realPath="Test" />);
    const maindiv = document.querySelector('[data-test="testdiv"]');
    expect(maindiv).toBeDefined();
    const { testFunction } = useLoginVm();
    expect(testFunction).toHaveBeenCalled();
  });
});
