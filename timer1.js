let args = process.argv.slice(2);

const timer = args => {
  for (let i = 0; i < args.length; i++) {
    args[i] = Number(args[i]);
    if (!(typeof args[i] !== 'number' || args[i] < 0 || Number.isNaN(args[i]))) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (args[i] * 1000));
    }
  }
};

timer(args);