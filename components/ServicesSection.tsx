"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSoundContext } from "@/contexts/SoundContext";
import {
  ChevronDown,
  MessageCircle,
  Zap,
  Globe,
  CreditCard,
  RefreshCw,
  Shield,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Globe className="w-7 h-7" />,
    title: "Landing Page Website",
    subtitle: "Foundation, Personal Branding & Company Profile",
    description:
      "Precision-engineered landing pages built for conversion. Clean architecture, responsive-first, deployed to production on Vercel with optimized performance out of the box.",
    packages: [
      {
        name: "Basic",
        price: "Rp 2.500.000",
        priceWithDomain: "Rp 2.700.000",
        color: "border-gray-500 text-gray-300",
        badge: "bg-gray-700",
        features: [
          "1–3 halaman",
          "Responsive mobile",
          "Desain modern & clean",
          "Deploy ke Vercel",
          "Domain .com +Rp 200.000/tahun",
        ],
      },
      {
        name: "Standard",
        price: "Rp 4.000.000",
        priceWithDomain: "Rp 4.200.000",
        color: "border-primary text-primary",
        badge: "bg-primary/20",
        features: [
          "4–6 halaman",
          "Animasi interaktif (Framer Motion)",
          "Form kontak WhatsApp/Email",
          "SEO basic",
          "Domain .com +Rp 200.000/tahun",
        ],
      },
      {
        name: "Premium",
        price: "Rp 6.000.000+",
        priceWithDomain: "Rp 6.200.000+",
        color: "border-accent text-accent",
        badge: "bg-accent/20",
        features: [
          "Unlimited section",
          "UI kompleks + smooth animation",
          "Dashboard admin (opsional)",
          "Optimasi performa & SEO",
          "Domain .com +Rp 200.000/tahun",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: <Zap className="w-7 h-7" />,
    title: "Fullstack Web Application",
    subtitle: "Login System, Database, CRUD & Admin Panel",
    description:
      "End-to-end web systems engineered with scalable architecture. Multi-role auth, RESTful API, database integration, and admin dashboard — production-ready from day one.",
    packages: [
      {
        name: "Fullstack Standard",
        price: "Rp 7.000.000",
        priceWithDomain: "Rp 7.500.000",
        color: "border-primary text-primary",
        badge: "bg-primary/20",
        features: [
          "Frontend + Backend",
          "Database integration",
          "Admin panel basic",
          "REST API",
          "Domain + VPS setup +Rp 500.000",
        ],
      },
      {
        name: "Fullstack Advanced",
        price: "Rp 10.000.000 – 14.000.000",
        priceWithDomain: "Rp 10.500.000+",
        color: "border-accent text-accent",
        badge: "bg-accent/20",
        features: [
          "Multi-role login (Admin/User)",
          "Dashboard lengkap",
          "Sistem notifikasi/email",
          "API kompleks & scalable",
          "Domain + VPS setup +Rp 500.000",
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <CreditCard className="w-7 h-7" />,
    title: "Payment Gateway Integration",
    subtitle: "Midtrans & Xendit — Sandbox to Production",
    description:
      "Seamless payment infrastructure setup. From sandbox configuration to live production deployment — SNAP API, webhook callbacks, and full transaction flow handled end-to-end.",
    packages: [
      {
        name: "Midtrans Integration",
        price: "Rp 2.000.000 – 2.500.000",
        priceWithDomain: "–",
        color: "border-primary text-primary",
        badge: "bg-primary/20",
        features: [
          "Setup SNAP Payment",
          "Backend API transaksi",
          "Redirect + status pembayaran",
          "Sandbox & production testing",
        ],
      },
      {
        name: "Xendit Integration",
        price: "Rp 3.500.000",
        priceWithDomain: "–",
        color: "border-accent text-accent",
        badge: "bg-accent/20",
        features: [
          "Setup invoice system",
          "Webhook callback otomatis",
          "Penyesuaian backend + frontend",
          "Testing & deployment",
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Payment Gateway Migration",
    subtitle: "Midtrans ↔ Xendit — Full System Rebuild",
    description:
      "Zero-downtime payment system migration. Rebuild payment flow, update backend endpoints, and validate the entire transaction lifecycle before go-live.",
    packages: [
      {
        name: "Migration Package",
        price: "Rp 4.000.000 – 5.000.000",
        priceWithDomain: "–",
        color: "border-secondary text-secondary",
        badge: "bg-secondary/20",
        features: [
          "Rebuild flow pembayaran",
          "Update backend endpoint",
          "Update halaman checkout",
          "Testing ulang full sistem",
        ],
      },
    ],
  },
  {
    id: 5,
    icon: <Shield className="w-7 h-7" />,
    title: "Maintenance & Support",
    subtitle: "Ongoing System Health & Priority Response",
    description:
      "Proactive maintenance with fast-response SLA. Bug fixes, content updates, security checks, and feature iterations — your system stays healthy and up-to-date.",
    packages: [
      {
        name: "Maintenance Bulanan",
        price: "Rp 750.000 / bulan",
        priceWithDomain: "–",
        color: "border-primary text-primary",
        badge: "bg-primary/20",
        features: [
          "Bug fixing minor",
          "Update konten ringan",
          "Monitoring website",
        ],
      },
      {
        name: "Support Full Priority",
        price: "Rp 1.500.000 / bulan",
        priceWithDomain: "–",
        color: "border-accent text-accent",
        badge: "bg-accent/20",
        features: [
          "Perubahan fitur kecil",
          "Fast response SLA",
          "Backup & security check",
        ],
      },
    ],
  },
];

const addons = [
  { label: "Custom UI/UX Design", price: "Rp 500.000 – 1.500.000" },
  { label: "Admin Dashboard", price: "Rp 1.000.000+" },
  { label: "Deploy ke VPS + Domain Setup", price: "Rp 700.000" },
  { label: "Sistem Upload Bukti Transfer", price: "Rp 800.000" },
  { label: "WhatsApp API Integration", price: "Rp 1.000.000+" },
];

const ServicesSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const { playSound } = useSoundContext();

  const toggle = (id: number) => {
    playSound("click");
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-slow" />
              <img
                src="/images/rf-dev-logo.jpeg"
                alt="rf dev logo"
                className="relative w-24 h-24 rounded-full object-cover border-2 border-primary/50"
              />
            </div>
          </motion.div>

          <p className="text-primary font-cyber text-sm tracking-widest mb-2 uppercase">
            rf dev — Web Development Studio
          </p>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4">
            Jasa <span className="text-primary glow-text">Web Development</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full-stack engineering from concept to deployment. Every system is
            architected for scalability, security, and real-world production use
            — not just demos.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="game-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Accordion Header */}
              <button
                className="w-full p-6 flex items-center justify-between gap-4 text-left group"
                onClick={() => toggle(service.id)}
                onMouseEnter={() => playSound("hover")}
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">
                        Service 0{service.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-primary/10 pt-4">
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Package Cards */}
                      <div
                        className={`grid gap-4 ${service.packages.length === 3 ? "md:grid-cols-3" : service.packages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-sm"}`}
                      >
                        {service.packages.map((pkg, i) => (
                          <motion.div
                            key={pkg.name}
                            className={`rounded-xl p-5 border bg-dark/60 ${pkg.color}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                          >
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${pkg.badge}`}
                            >
                              {pkg.name}
                            </div>
                            <div className="text-xl font-bold mb-1">
                              {pkg.price}
                            </div>
                            {pkg.priceWithDomain &&
                              pkg.priceWithDomain !== "–" && (
                                <div className="text-xs text-gray-400 mb-3">
                                  Dengan domain:{" "}
                                  <span className="text-primary font-semibold">
                                    {pkg.priceWithDomain}
                                  </span>
                                </div>
                              )}
                            <ul className="space-y-2 mt-3">
                              {pkg.features.map((f) => (
                                <li
                                  key={f}
                                  className="flex items-start gap-2 text-gray-300 text-sm"
                                >
                                  <span className="text-primary mt-0.5 flex-shrink-0">
                                    ▹
                                  </span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="game-card p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h4 className="text-white font-bold">Add-On Services</h4>
              <span className="text-xs text-gray-400 font-mono">
                (Opsional)
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {addons.map((addon, i) => (
                <motion.div
                  key={addon.label}
                  className="flex items-center justify-between bg-dark/60 border border-primary/20 rounded-lg px-4 py-3 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => playSound("hover")}
                >
                  <span className="text-gray-300 text-sm">{addon.label}</span>
                  <span className="text-primary text-xs font-semibold ml-2 whitespace-nowrap">
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 text-sm">
            Konsultasi gratis · Estimasi harga transparan · Delivery tepat waktu
          </p>
          <motion.a
            href="https://wa.me/6285770290754?text=Halo%20Ahdan%2C%20saya%20tertarik%20dengan%20jasa%20web%20development%20rf%20dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 game-button px-8 py-4 rounded-xl font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => playSound("click")}
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi via WhatsApp
          </motion.a>
          <p className="text-gray-500 text-xs mt-4 font-mono">
            +62 857-7029-0754 · @Ahdn_14 · rafifmaulana1412@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
