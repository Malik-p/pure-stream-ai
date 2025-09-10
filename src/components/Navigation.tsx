import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Droplets, Upload, Map, History, Info } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Droplets },
    { href: "/upload", label: "Upload Data", icon: Upload },
    { href: "/map", label: "Risk Map", icon: Map },
    { href: "/history", label: "History", icon: History },
    { href: "/about", label: "About", icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 gentle-hover group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center subtle-glow">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">
              AquaScan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                variant={isActive(href) ? "default" : "ghost"}
                asChild
                size="sm"
                className={`gentle-hover transition-all duration-300 ${
                  isActive(href) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
              >
                <Link to={href} className="flex items-center space-x-2 group">
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
                  <span className="group-hover:gradient-text transition-all duration-300">{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="scale-on-hover">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-effect border-primary/20">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Button
                      key={href}
                      variant={isActive(href) ? "default" : "ghost"}
                      asChild
                      className={`justify-start scale-on-hover transition-all duration-300 ${
                        isActive(href) 
                          ? "pulse-glow" 
                          : "hover:shadow-card hover:bg-primary/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={href} className="flex items-center space-x-2 group">
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:gradient-text transition-all duration-300">{label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;