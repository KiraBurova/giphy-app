export const getColor = () => {
  const palette = ['#7180AC', '#2B4570', '#7EBDC2', '#E49273', '#A37A74'];

  return palette[Math.floor(Math.random() * palette.length + 1)];
};
