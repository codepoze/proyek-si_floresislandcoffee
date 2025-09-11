import { useState } from 'react';
import SEOHead from './components/SEOHead';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import coffeeHarvest from './assets/coffee-farm.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'General Inquiries',
      details: ['admin@flores.coffee'],
      description: 'For general questions and information'
    },
    {
      icon: EnvelopeIcon,
      title: 'Indonesian Inquiries',
      details: ['contact@flores.coffee'],
      description: 'For local partnerships and Indonesian market'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Wholesale & B2B',
      details: ['wholesale@flores.coffee', '+62 123 456 7890'],
      description: 'For bulk orders and business partnerships'
    },
    {
      icon: MapPinIcon,
      title: 'Our Location',
      details: ['Maumere, Flores Island', 'East Nusa Tenggara, Indonesia'],
      description: 'Visit our coffee processing facility'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      description: 'Indonesian Western Time (WITA)'
    },
    {
      icon: GlobeAltIcon,
      title: 'Export Inquiries',
      details: ['export@flores.coffee', '+62 987 654 3210'],
      description: 'International shipping and distribution'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Flores Island Coffee - Indonesian Coffee Export & Wholesale Inquiries"
        description="Contact Flores Island Coffee for premium Indonesian coffee export, wholesale partnerships, and business inquiries. Located in Maumere, Flores Island. Get in touch for specialty coffee bean orders and international shipping."
        keywords="contact flores island coffee, indonesian coffee export contact, coffee wholesale inquiries, coffee bean supplier contact, flores coffee export, indonesian coffee business contact, coffee trading company contact, wholesale coffee indonesia, coffee export inquiries, specialty coffee supplier contact"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${coffeeHarvest})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            Contact Flores Island Coffee Export
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-body opacity-90">
            Connect with us for Indonesian coffee export partnerships, wholesale inquiries, and premium specialty coffee orders. 
            Based in Maumere, Flores Island - serving coffee businesses worldwide.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-flores-primary mb-4 font-heading">
                  Send us a Message
                </h2>
                <p className="text-gray-600 font-body">
                  Have a question or want to start a conversation? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flores-primary focus:border-transparent transition-colors"
                    required
                  >
                    <option value="general">General Information</option>
                    <option value="wholesale">Wholesale & B2B</option>
                    <option value="export">Export Inquiries</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flores-primary focus:border-transparent transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flores-primary focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flores-primary focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flores-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-lg font-semibold transition-colors duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-flores-primary text-white hover:bg-flores-primary/90'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-flores-primary mb-4 font-heading">
                  Contact Information
                </h2>
                <p className="text-gray-600 font-body text-lg">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-flores-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-flores-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-flores-primary font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm font-body">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-flores-primary mb-4 font-heading">
              Find Us in Flores Island
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Located in the heart of Flores Island, our processing facility is where the magic happens. 
              Visit us to see our coffee journey from bean to cup.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-flores-primary/20 to-flores-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-flores-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Flores Island Coffee Processing Center
                </h3>
                <p className="text-gray-600">
                  Maumere, East Nusa Tenggara, Indonesia
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive map integration available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-flores-primary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Quick answers to common questions about Flores Island Coffee
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the minimum order quantity for wholesale?",
                answer: "Our minimum wholesale order is 50kg for domestic orders and 100kg for international orders. We offer flexible packaging options to suit your business needs."
              },
              {
                question: "Do you offer custom roasting profiles?",
                answer: "Yes! We work closely with our B2B partners to develop custom roasting profiles that match your specific requirements and target market preferences."
              },
              {
                question: "How long does international shipping take?",
                answer: "International shipping typically takes 7-14 business days depending on the destination. We use reliable logistics partners to ensure your coffee arrives fresh and on time."
              },
              {
                question: "Can I visit your processing facility?",
                answer: "Absolutely! We welcome visitors to our Maumere facility. Please contact us in advance to schedule a tour and learn about our coffee processing methods firsthand."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  {faq.question}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Contact;