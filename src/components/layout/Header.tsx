import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { 
    label: "How It Works", 
    href: "/content#how-it-works", 
    hasDropdown: true,
    dropdownItems: [
      { label: "For Merchants", href: "/content#merchants" },
      { label: "For Users", href: "/content#for-users" },
    ]
  },
  // { label: "Pricing", href: "/content#pricing", hasDropdown: false },
  { label: "Services", href: "/content#services", hasDropdown: false },
  { 
    label: "About Us", 
    href: "/content#about", 
    hasDropdown: true,
    dropdownItems: [
      { label: "About Qadampe", href: "/content#about" },
      { label: "QR Payments", href: "/content#qr-payments" },
      { label: "Rewards & Offers", href: "/content#rewards" },
      { label: "Compliance & Security", href: "/content#security" },
      { label: "Kyc AML & Security ", href: "/content#compliance-security" },
      { label: "Pricing", href: "/content#pricing", hasDropdown: false },
    ]
  },
  { label: "Blog", href: "/content#blog", hasDropdown: false },
  { 
    label: "Contact Us", 
    href: "/content#contact", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Privacy Policy", href: "/content#privacy" },
      { label: "Terms & Conditions", href: "/content#terms" },
    ]
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/qadampe-logo.png" 
              alt="QadamPe" 
              className="h-[130px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <DropdownMenu key={item.label} modal={false}>
                    <DropdownMenuTrigger asChild>
                      <button 
                        type="button"
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[180px] animate-fade-in-up">
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.label} asChild>
                          <Link 
                            to={dropdownItem.href} 
                            className="cursor-pointer w-full transition-all duration-300 hover:translate-x-1"
                          >
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link to="/content#download">
                <Download className="w-4 h-4" />
                Download App
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/content#faqs">
                Help & Support
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.hasDropdown && item.dropdownItems) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="outline" className="w-full gap-2" asChild>
                  <Link to="/content#download">
                    <Download className="w-4 h-4" />
                    Download App
                  </Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/content#faqs">
                    Help & Support
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
