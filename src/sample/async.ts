export const delay = async(message: string, time: number):Promise<string> => {
  return new Promise((resolve, reject) => {
    if (time >= 0) {
        return setTimeout(() => resolve(message),time);
    } else {
        reject(new Error("timeは正の整数を指定してください"));
    }
  });
};
