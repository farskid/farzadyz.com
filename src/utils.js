export function separateByAt(str) {
  return str.split("@");
}

export function pick(source, ...props) {
  return Object.entries(source)
    .filter((entry) => props.includes(entry[0]))
    .reduce((result, curr) => ({ ...result, [curr[0]]: curr[1] }), {});
}
