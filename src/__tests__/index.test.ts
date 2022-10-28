import fs from 'fs';
import { createBlob, FakeUrl } from '../index';

const getFileContentAsBase64 = (filePath: string): FakeUrl =>
  fs.readFileSync(filePath, { encoding: 'base64' });

const URL_MOCK = 'http://test-url-mock.com';

describe('createBlob', () => {
  it('should return an URL of the pdf file content', async () => {
    global.URL.createObjectURL = jest.fn(() => URL_MOCK);
    const fileContentAsBase64 = getFileContentAsBase64('src/__tests__/dummy.pdf');
    expect(createBlob(fileContentAsBase64, 'application/pdf')).toBe(URL_MOCK);
  });
});
