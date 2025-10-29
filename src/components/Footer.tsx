// /F:/medHelp/src/components/Footer.tsx
import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  const goToAbout = () => {
    // simple, framework-agnostic redirect to the AboutMe page you will add at ./components/pages
    window.location.href = "/about-me";
  };

  return (
    <footer className="mt-auto bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Button
            variant="default"
            size="lg"
            className="font-semibold"
            onClick={goToAbout}
          >
            Know more about me
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
