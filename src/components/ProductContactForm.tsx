"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import { AntigravityButton } from "@/components/ui/antigravity-button";

interface ProductContactFormProps {
  productSlug?: string;
  productName?: string;
}

const projectTypes = [
  { value: "", label: "Selectează tipul proiectului", disabled: true },
  { value: "rezidential", label: "Rezidențial" },
  { value: "investitie", label: "Investiție / închiriere" },
  { value: "business-resort", label: "PiCaps Business Resort (minimum 4 capsule)" },
  { value: "altele", label: "Altele" },
];

const countryPrefixes = [
  { value: "+40", label: "🇷🇴 +40", country: "Romania" },
  { value: "+49", label: "🇩🇪 +49", country: "Germania" },
  { value: "+43", label: "🇦🇹 +43", country: "Austria" },
  { value: "+36", label: "🇭🇺 +36", country: "Ungaria" },
  { value: "+359", label: "🇧🇬 +359", country: "Bulgaria" },
  { value: "+381", label: "🇷🇸 +381", country: "Serbia" },
  { value: "+380", label: "🇺🇦 +380", country: "Ucraina" },
  { value: "+373", label: "🇲🇩 +373", country: "Moldova" },
  { value: "+44", label: "🇬🇧 +44", country: "UK" },
  { value: "+33", label: "🇫🇷 +33", country: "Franța" },
  { value: "+39", label: "🇮🇹 +39", country: "Italia" },
  { value: "+34", label: "🇪🇸 +34", country: "Spania" },
  { value: "+1", label: "🇺🇸 +1", country: "SUA/Canada" },
];

const modelOptions = [
  { value: "alpha", label: "Alpha - 18m²" },
  { value: "beta", label: "Beta - 28m²" },
  { value: "gamma", label: "Gamma - 38m²" },
];

// Validation rules
const validators = {
  name: (value: string) => {
    if (!value.trim()) return "Numele este obligatoriu";
    if (value.trim().length < 3) return "Numele trebuie să aibă cel puțin 3 caractere";
    if (/\d/.test(value)) return "Numele nu poate conține cifre";
    return "";
  },
  email: (value: string) => {
    if (!value.trim()) return "Email-ul este obligatoriu";
    return "";
  },
  phone: (value: string) => {
    if (!value.trim()) return "Telefonul este obligatoriu";
    return "";
  },
  projectType: (value: string) => {
    if (!value) return "Selectează tipul proiectului";
    return "";
  },
  models: (value: string[]) => {
    if (value.length === 0) return "Selectează cel puțin un model";
    return "";
  },
};

export const ContactForm = ({ productSlug }: { productSlug?: string }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phonePrefix: "+40",
    phone: "",
    projectType: "",
    models: productSlug ? [productSlug] : [] as string[],
    message: "",
  });

  // Track which fields have been touched
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    projectType: false,
    models: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Get validation errors
  const errors = {
    name: validators.name(formState.name),
    email: validators.email(formState.email),
    phone: validators.phone(formState.phone),
    projectType: validators.projectType(formState.projectType),
    models: validators.models(formState.models),
  };

  // Check if field should show error (touched or attempted submit)
  const shouldShowError = (field: keyof typeof touched) => {
    return (touched[field] || attemptedSubmit) && errors[field];
  };

  // Check if field is valid (has value and no error)
  const isFieldValid = (field: keyof typeof errors) => {
    if (field === "models") {
      return formState.models.length > 0;
    }
    return formState[field] && !errors[field];
  };

  // Handle blur to mark field as touched
  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    // Check if form is valid
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      setError("Te rugăm să completezi toate câmpurile obligatorii corect.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://picaps.ro/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "A apărut o eroare. Te rugăm să încerci din nou.");
      }
    } catch {
      setError("Nu s-a putut trimite mesajul. Te rugăm să încerci din nou.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Name field handler - only allows letters, spaces, and diacritics (no numbers)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[0-9]/g, "");
    setFormState((prev) => ({ ...prev, name: value }));
  };

  // Phone field handler - only allows numbers
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormState((prev) => ({ ...prev, phone: value }));
  };

  // Phone prefix handler
  const handlePrefixChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, phonePrefix: e.target.value }));
  };

  // Dynamic input classes based on validation state
  const getInputClasses = (field: keyof typeof errors, baseClasses: string) => {
    const hasError = shouldShowError(field);
    const isValid = isFieldValid(field);

    if (hasError) {
      return `${baseClasses} border-red-400 focus:border-red-500 focus:ring-red-100`;
    }
    if (isValid) {
      return `${baseClasses} border-emerald-400 focus:border-emerald-500 focus:ring-emerald-100`;
    }
    return `${baseClasses} border-border focus:border-primary focus:ring-primary/10`;
  };

  // Validation indicator icon
  const ValidationIcon = ({ field }: { field: keyof typeof errors }) => {
    const hasError = shouldShowError(field);
    const isValid = isFieldValid(field);

    if (hasError) {
      return (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <AlertCircle className="w-4 h-4 text-red-500" />
        </div>
      );
    }
    if (isValid) {
      return (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Check className="w-4 h-4 text-emerald-500" />
        </div>
      );
    }
    return null;
  };

  // Error message component
  const ErrorMessage = ({ field }: { field: keyof typeof errors }) => {
    const errorMessage = shouldShowError(field);
    if (!errorMessage) return null;

    return (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
      >
        <AlertCircle className="w-3 h-3" />
        {errors[field]}
      </motion.p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      {isSubmitted ? (
        <div className="text-center py-12 bg-background rounded-2xl border border-border/50">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="font-pirulen text-xl text-foreground mb-2">Mulțumim!</h3>
          <p className="text-muted-foreground text-sm">
            Mesajul tău a fost trimis. Te vom contacta în curând.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </motion.div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nume complet *
              </label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${shouldShowError("name") ? "text-red-400" : isFieldValid("name") ? "text-emerald-500" : "text-muted-foreground"}`} />
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleNameChange}
                  onBlur={() => handleBlur("name")}
                  className={getInputClasses("name", "w-full pl-11 pr-10 py-3.5 bg-background rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all")}
                  placeholder="Ion Popescu"
                />
                <ValidationIcon field="name" />
              </div>
              <ErrorMessage field="name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${shouldShowError("email") ? "text-red-400" : isFieldValid("email") ? "text-emerald-500" : "text-muted-foreground"}`} />
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  className={getInputClasses("email", "w-full pl-11 pr-10 py-3.5 bg-background rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all")}
                  placeholder="ion@email.com"
                />
                <ValidationIcon field="email" />
              </div>
              <ErrorMessage field="email" />
            </div>
          </div>

          {/* Row 2: Phone & Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Telefon *
              </label>
              <div className="relative flex gap-2">
                {/* Country Code Prefix Selector */}
                <div className="relative flex-shrink-0">
                  <select
                    name="phonePrefix"
                    value={formState.phonePrefix}
                    onChange={handlePrefixChange}
                    className="h-full pl-3 pr-8 py-3.5 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer text-sm font-medium min-w-[90px]"
                  >
                    {countryPrefixes.map((prefix) => (
                      <option key={prefix.value} value={prefix.value}>
                        {prefix.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                {/* Phone Number Input */}
                <div className="relative flex-1">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${shouldShowError("phone") ? "text-red-400" : isFieldValid("phone") ? "text-emerald-500" : "text-muted-foreground"}`} />
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur("phone")}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className={getInputClasses("phone", "w-full pl-11 pr-10 py-3.5 bg-background rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all")}
                    placeholder="7XXXXXXXX"
                  />
                  <ValidationIcon field="phone" />
                </div>
              </div>
              <ErrorMessage field="phone" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tip proiect *
              </label>
              <div className="relative">
                <select
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  onBlur={() => handleBlur("projectType")}
                  className={getInputClasses("projectType", "w-full px-4 py-3.5 bg-background rounded-xl text-foreground focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer pr-16")}
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value} disabled={type.disabled}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {isFieldValid("projectType") ? (
                  <Check className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                ) : shouldShowError("projectType") ? (
                  <AlertCircle className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                ) : null}
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              <ErrorMessage field="projectType" />
            </div>
          </div>

          {/* Row 3: Model Selection - Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Model de interes * <span className="text-muted-foreground font-normal">(selectează unul sau mai multe)</span>
              {isFieldValid("models") && (
                <span className="ml-2 inline-flex items-center text-emerald-500 text-xs font-normal">
                  <Check className="w-3 h-3 mr-1" />
                  {formState.models.length} {formState.models.length === 1 ? "model selectat" : "modele selectate"}
                </span>
              )}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modelOptions.map((model) => (
                <label
                  key={model.value}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formState.models.includes(model.value)
                    ? "bg-primary/10 border-primary shadow-sm"
                    : shouldShowError("models")
                      ? "bg-red-50/50 border-red-200 hover:border-red-300"
                      : "bg-background border-border hover:border-primary/50"
                    }`}
                  onClick={() => setTouched((prev) => ({ ...prev, models: true }))}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${formState.models.includes(model.value)
                    ? "bg-primary border-primary"
                    : "border-border"
                    }`}>
                    {formState.models.includes(model.value) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <input
                    type="checkbox"
                    name="models"
                    value={model.value}
                    checked={formState.models.includes(model.value)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormState((prev) => ({
                        ...prev,
                        models: e.target.checked
                          ? [...prev.models, value]
                          : prev.models.filter((m) => m !== value),
                      }));
                    }}
                    className="sr-only"
                  />
                  <span className="text-foreground font-medium">{model.label}</span>
                </label>
              ))}
            </div>
            <ErrorMessage field="models" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Mesaj (opțional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={3}
                className="w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                placeholder="Spune-ne mai multe despre proiectul tău..."
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <AntigravityButton
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
              magnetic={true}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Se trimite...
                </>
              ) : (
                <>
                  Solicită ofertă personalizată
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </AntigravityButton>
            <span className="text-sm text-muted-foreground">
              sau sună direct la{" "}
              <a href="tel:+40727511563" className="text-primary font-medium hover:underline">
                +40 727 511 563
              </a>
            </span>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export const ProductContactForm = ({ productSlug, productName }: ProductContactFormProps) => {
  return (
    <section className="py-10 lg:py-16 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="font-pirulen text-2xl lg:text-4xl text-foreground mb-3">
              Începe proiectul tău PiCaps
            </h2>
            <p className="text-muted-foreground">
              Solicită o consultanță gratuită. Echipa PiCaps te va contacta pentru a discuta proiectul,
              opțiunile de configurare și pașii următori.
            </p>
          </motion.div>

          <ContactForm productSlug={productSlug} />
        </div>
      </div>
    </section>
  );
};

export default ProductContactForm;