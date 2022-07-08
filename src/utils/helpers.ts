export const preventScroll = (open: boolean) => {
  const root = document.getElementById('root')!;

  if (open) {
    root.classList.add('prevent-scroll');
  } else {
    root.classList.remove('prevent-scroll');
  }
};

export const formatPrice = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};
