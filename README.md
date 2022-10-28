# Fake File URL

This package transforms your base64 content file in a fake url to use in frontend url tags.

```tsx
import { createBlob } from 'fake-file-url';

// Sometimes you will only have the base64 content of the file,
// from API or file in the frontend, so to make it possible to download it
// you can use fake-file-url to generate a downloadable url from it
const pdfFileContentInBase64 = '...';
// fakeUrl will have a temporary URL that you can put inside a <a> tag
// so the users can download the content of the file.
const fakeUrl = createBlob(pdfFileContentInBase64, 'application/pdf');

// ...

return <a href={fakeURL}>Download PDF file</a>;
```
