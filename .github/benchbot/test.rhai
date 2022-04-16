let output_file = "./runtime/weights.rs";

let result = cargo `hoi jij -- daar --output=${output_file}`;

let comment = "";
if result.is_ok() {
  // Hopefully it's possible to offer both options at the same time
  //pr.push(output_file, "Updated yet again");
  //pr.push(&[output_file, "./another_file"], "Another commit");
  //comment += "Sucks to be you, this is what happened:";
  let res = "jeej: ";
  res += result.stdout;
  return res;
} else {
  let res = "jammer: ";
  res += result.stderr;
  return bla;
}
