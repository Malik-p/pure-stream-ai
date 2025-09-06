import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Droplets, Upload, Map, History, Info, AlertTriangle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Droplets },
    { href: "/upload", label: "Upload Data", icon: Upload },
    { href: "/map", label: "Risk Map", icon: Map },
    { href: "/history", label: "History", icon: History },
    { href: "/alerts", label: "Alerts", icon: AlertTriangle },
    { href: "/about", label: "About", icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
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
              >
                <Link to={href} className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Button
                      key={href}
                      variant={isActive(href) ? "default" : "ghost"}
                      asChild
                      className="justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={href} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
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