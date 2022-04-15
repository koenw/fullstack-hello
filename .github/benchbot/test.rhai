let output_file = "./runtime/weights.rs";

let result = cargo run -- --help `--output=${output_file}`;

let comment = "";
if result.is_ok() {
  // Hopefully it's possible to offer both options at the same time
  //pr.push(output_file, "Updated yet again");
  //pr.push(&[output_file, "./another_file"], "Another commit");
  //comment += "Sucks to be you, this is what happened:";
  return "jeej"
} else {
  return "jammer"
  //comment += "This is your lucky day 🍀"
}

/*
comment += `Output for ${result.cmd}

${output}`

pr.comment(comment);
*/

return "gaat goed!";
