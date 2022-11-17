function caseUpper(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(val.toUpperCase())}, 4000); 
  });
}

async function msg(x) {
  try {
    const msg = await caseUpper(x);
    console.log(msg);
    console.log("Done all task");
  } catch(err) {
    console.log('Ohh no:', err.message);
  }
}

msg('Hello'); // HELLO
msg(34)