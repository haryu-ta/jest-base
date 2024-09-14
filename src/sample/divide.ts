export class ZeroDivisorError extends Error {}

export const divide = (x1:number ,x2 :number) => {
    if(x2 === 0)throw new ZeroDivisorError("0で割るのは禁止");
    return x1 / x2;
}