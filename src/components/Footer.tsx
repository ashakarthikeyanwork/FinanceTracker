import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 text-white py-16 px-8 border-t border-teal-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-teal-400 bg-clip-text text-transparent">
              FinanceTracker
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Simplify your finances with smart tracking tools designed for freelancers and small businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-teal-500 transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-teal-500 transition-all duration-200 hover:scale-110"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@financetracker.com"
                className="p-3 bg-dark-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-teal-500 transition-all duration-200 hover:scale-110"
                aria-label="Send us an email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-800/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FinanceTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};