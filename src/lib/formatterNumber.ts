const f = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
export default function formatterNumber(number: number) {
  return f.format(number);
}
