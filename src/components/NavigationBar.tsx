"use client";

import * as React from "react";
import Link from "next/link";
import { House, Mail, MapPin, Palette, Menu, X } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BsPeople } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";

export function NavigationBar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <House className="w-6 h-6" />
            <span className="hidden sm:inline">SIT STOP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/">
                      <span className="flex items-center gap-2">
                        <House className="w-4 h-4" />
                        Home
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/locations">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Locations
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <a href="#about" className="flex items-center gap-2">
                      <BsPeople className="w-4 h-4" />
                      About Us
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <a href="#logo" className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      Logo
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <a href="#faqs" className="flex items-center gap-2">
                      <FaQuestion className="w-4 h-4" />
                      FAQs
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <a href="#contact" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t mt-2 pt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <House className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Locations</span>
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <BsPeople className="w-5 h-5" />
                  <span className="font-medium">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#logo"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Palette className="w-5 h-5" />
                  <span className="font-medium">Logo</span>
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaQuestion className="w-5 h-5" />
                  <span className="font-medium">FAQs</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
