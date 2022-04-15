let output_file = "./runtime/weights.rs";

let result = cargo hoi jij -- daar;

let comment = "";
if result.is_ok() {
  // Hopefully it's possible to offer both options at the same time
  //pr.push(output_file, "Updated yet again");
  //pr.push(&[output_file, "./another_file"], "Another commit");
  //comment += "Sucks to be you, this is what happened:";
  return "jeej";
} else {
  let bla = "jammer: ";
  bla += result.output;
  return bla;
  //comment += "This is your lucky day 🍀"
}

return "gaat goed!";
