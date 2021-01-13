//text-truncate
const text_truncate = (str, length) => {
  if (length == null) {
    length = 100;
  }

  const ending = "...";

  if (str.length > length) {
    return str.substring(0, length) + ending;
  } else {
    return str;
  }
};

document.write(text_truncate("A-tisket a-tasket A green and yellow basket", 8));
document.write("<br>");
document.write(
  text_truncate(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
document.write("<br>");
document.write(text_truncate("A-", 1));
document.write("<br>");
document.write(text_truncate("Absolutely Longer", 2));

//comment
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
//comment

//chunkarrayingroup
const arr = ["a", "b", "c", "d", "e"];
const chunkArraInGroups = (arr, size) => {
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }

  return results;
};

console.log(chunkArraInGroups(arr, 2));
