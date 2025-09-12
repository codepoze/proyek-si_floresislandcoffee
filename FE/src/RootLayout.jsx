import { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router";
import logo from './assets/logo/logoColor.png';
import logoFooter from './assets/logo/logo.png';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import ScrollToTopButton from './components/ScrollToTopButton';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import {
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// Animated Hamburger Icon Component
const AnimatedHamburger = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-flores-primary relative w-10 h-10"
  >
    <span className="sr-only">{isOpen ? 'Close menu' : 'Open main menu'}</span>
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span 
        className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
        }`}
      />
      <span 
        className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span 
        className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1 ${
          isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
        }`}
      />
    </div>
  </button>
);

function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for NavLink classes
  const getNavLinkClass = ({ isActive }) =>
    `text-base font-semibold leading-6 transition-colors duration-200 px-4 py-2 rounded-md font-body ${isActive
      ? 'bg-flores-primary text-white'
      : 'text-flores-primary hover:text-flores-primary/80 hover:bg-flores-light/20'
    }`;

  const mobileNavLinkClass = "block rounded-lg py-2 px-3 text-base font-semibold leading-7 font-body text-flores-primary hover:bg-flores-light/20";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg'
        : 'bg-white border-b border-gray-200'
        }`}>
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 lg:px-4">

          {/* Logo */}
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                src={logo}
                alt="Flores Island Coffee"
                className="h-13 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <AnimatedHamburger 
              isOpen={mobileMenuOpen} 
              onClick={() => setMobileMenuOpen(true)} 
            />
          </div>

          {/* Right side navigation - Desktop Navigation + Icons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
            {/* Navigation Links */}
            <div className="flex gap-x-6">
              <NavLink to="/about" className={getNavLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/products" className={getNavLinkClass}>
                Product
              </NavLink>
              <NavLink to="/news" className={getNavLinkClass}>
                News
              </NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* Icons */}
            {/* <div className="flex items-center gap-x-4 ml-4">
              <Link to="/profile" className="text-flores-primary hover:text-flores-primary/80">
                <span className="sr-only">Profile</span>
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
              <button type="button" className="text-flores-primary hover:text-flores-primary/80">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div> */}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Transition show={mobileMenuOpen} as={Dialog} onClose={setMobileMenuOpen} className="lg:hidden">
          <TransitionChild
            as="div"
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black/25" />
          </TransitionChild>
          <TransitionChild
            as={DialogPanel}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Flores Island Coffee</span>
                <img src={logo} alt="Flores Island Coffee" className="h-13 w-auto brightness-0 saturate-100" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-flores-primary"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-4">
                  <Link 
                    to="/about" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`${mobileNavLinkClass} transform transition-all duration-500 ease-out ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? '200ms' : '0ms' }}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/products" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`${mobileNavLinkClass} transform transition-all duration-500 ease-out ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
                  >
                    Product
                  </Link>
                  <Link 
                    to="/news" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`${mobileNavLinkClass} transform transition-all duration-500 ease-out ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
                  >
                    News
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`${mobileNavLinkClass} transform transition-all duration-500 ease-out ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? '500ms' : '0ms' }}
                  >
                    Contact
                  </Link>
                </div>
                {/* <div className="py-4">
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 font-body text-flores-primary hover:bg-flores-light/20">
                    <UserIcon className="h-6 w-6 text-flores-primary" />
                    Profile
                  </Link>
                </div> */}
              </div>
            </div>
          </TransitionChild>
        </Transition>
      </header>

      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Main Content Rendered by Child Routes */}
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <footer className="bg-[#143F58] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* center the 3-column group and top-align items */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-start md:gap-24">

            {/* Left Column - Logo and Contact */}
            <div className="md:w-96 space-y-20">
              <div>
                <img src={logoFooter} alt="Flores Island Coffee" className="h-26 w-auto" />
              </div>

              <div className="space-y-2 mb-6">
                {/* Email Contact */}
                <div className="flex items-center gap-3">
                  {/* Email Icon */}
                  <svg
                    className="w-5 h-5 text-white/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.25 4.5h19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75zm0 1.5v.38l9.75 6.37 9.75-6.37v-.38H2.25zm0 12h19.5V7.12l-9.14 5.97a.75.75 0 0 1-.82 0L2.25 7.12V18z" />
                  </svg>
                  <p className="text-white font-body text-lg">admin@flores.coffee</p>
                </div>

                {/* Indonesian Enquiry */}
                <div className="flex items-center gap-3">
                  {/* Email Icon */}
                  <svg
                    className="w-5 h-5 text-white/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.25 4.5h19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75zm0 1.5v.38l9.75 6.37 9.75-6.37v-.38H2.25zm0 12h19.5V7.12l-9.14 5.97a.75.75 0 0 1-.82 0L2.25 7.12V18z" />
                  </svg>
                  <div className="text-white font-body text-lg">
                    <span className="text-white/80 text-base block">Indonesian Enquiry:</span>
                    contact@flores.coffee
                  </div>
                </div>
              </div>
            </div>


            {/* Middle Column - Links */}
            <div className="md:w-64 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">
                Flores Island
                <br />
                Coffee
              </h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/80 hover:text-white transition-colors font-body text-lg">Home</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors font-body text-lg">About</Link></li>
                <li><Link to="/partnership" className="text-white/80 hover:text-white transition-colors font-body text-lg">Partnership</Link></li>
                <li><Link to="/origin" className="text-white/80 hover:text-white transition-colors font-body text-lg">Origin</Link></li>
                <li><Link to="/wholesale" className="text-white/80 hover:text-white transition-colors font-body text-lg">Wholesale Enquiries</Link></li>
              </ul>
            </div>

            {/* Right Column - Socials */}
            <div className="md:w-56">
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">
                We Are
                <br />
                Socials
              </h3>
              <ul className="space-y-2">
                <li><a href="https://facebook.com" className="text-white/80 hover:text-white transition-colors font-body text-lg">Facebook</a></li>
                <li><a href="https://instagram.com" className="text-white/80 hover:text-white transition-colors font-body text-lg">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <p className="text-white/60 text-base font-body">©2025 All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default RootLayout;