'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Company</h3>
            <p className="text-gray-400 leading-relaxed">
              Building innovative web and mobile applications that empower businesses and transform digital experiences
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@devstudio.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@devstudio.com
            </a>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.devstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500">
          <p>© 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
