export const preventScroll = (open: boolean) => {
  const root = document.getElementById('root')!;

  if (open) {
    root.classList.add('prevent-scroll');
  } else {
    root.classList.remove('prevent-scroll');
  }
};
