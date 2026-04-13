const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold-gradient font-heading font-bold text-lg">
          Young Muslims Piscataway
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          For the youth – By the youth · Est. 2001
        </p>
        <p className="text-muted-foreground text-xs mt-4">
          © {new Date().getFullYear()} Young Muslims Piscataway. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
