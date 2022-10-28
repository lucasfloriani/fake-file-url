export type FakeUrl = string;
export type Base64FileContent = string;

export const createBlob = (fileContent: Base64FileContent, fileType: string): FakeUrl => {
  const byteCharacters = atob(fileContent);
  const byteNumbers = new Array<number>(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i += 1) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: fileType });
  return URL.createObjectURL(blob);
};

export default createBlob;
