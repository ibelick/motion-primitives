import fs from 'fs';

export const extractCodeFromFilePath = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  return fileContent;
};
