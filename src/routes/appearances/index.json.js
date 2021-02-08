import talks from "../../../content/data/talks.json";

const contents = JSON.stringify(talks.reverse());

export function get(req, res) {
  console.log(contents);
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
