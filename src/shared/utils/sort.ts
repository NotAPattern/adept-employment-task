export function addAndSort<T>(arr: T[], val: T): T[] {
  arr.push(val);
  let i = arr.length - 1;
  const item = arr[i];
  while (i > 0 && item < arr[i-1]) {
    arr[i] = arr[i-1];
    i -= 1;
  }
  arr[i] = item;
  return arr;
}