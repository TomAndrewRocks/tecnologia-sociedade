export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Brasil | {currentYear}</p>
    </footer>
  );
};
