const { generate } = require("generate-password");

const generateRandomPass = () => {
  let password = generate({
    length: Math.floor(Math.random() * 50),
    numbers: true,
    symbols: true,
  });
  return password;
};

//Generate Random Password With Random Length and AlphaNumeric
console.log("Generated Password:", generateRandomPass());
