export const combineTwoStrings = (data1: string, data2: string) => data1 + data2;

export const convertBigNumbers = (data: number) => {
  if (Math.abs(data) / 1000 >= 1) {
    return (Math.abs(data) / 1000).toFixed(1) + 'k';
  }

  return data;
};
