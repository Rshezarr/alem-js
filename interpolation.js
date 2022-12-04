export const interpolation = async (opt) => {
  const interval = opt.duration / opt.step;
  let times = 0;
  let f = setInterval(() => {
    opt.callback([
      opt.start + (times * (opt.end - opt.start)) / opt.step,
      (times + 1) * interval,
    ]);
    times++;
    if (times >= opt.step) clearInterval(f);
  }, interval);
};