const findCommonChars = (str1: string, str2: string) => {
  const nonRepeatedElement = [...new Set(str1.split(""))];

  const result = nonRepeatedElement.map((item) => {
    const firstString = str1
      .split("")
      .filter((repaeted) => repaeted === item).length;

    const secondString = str2
      .split("")
      .filter((repaeted) => repaeted === item).length;

    return { [item]: firstString < secondString ? firstString : secondString };
  });
  console.log(result);

  return result.filter((item) => {
    //@ts-ignore
    return Object.values(item) > 0;
  });
};

export default findCommonChars;
