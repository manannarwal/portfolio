import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeoggvpd");

  return (
    <div>
      <div className="mx-8 font-['Poppins'] tracking-wider">
        <div className="mt-10 flex items-center">
          <p className="text-2xl text-[#a6bbcc] font-extrabold">Contact Me</p>
          <div className="ml-4 h-0.5 flex-grow bg-[#a6bbcc]"></div>
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-center text-lg text-gray-300 mb-8">
            I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.
          </p>
          
          {state.succeeded ? (
            <div className="p-6 bg-green-900 bg-opacity-30 border border-green-500 rounded-md text-center">
              <p className="text-green-400 text-lg font-medium mb-2">Message sent successfully!</p>
              <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#221F1F] border border-[#354155] rounded-md focus:outline-none focus:border-[#a6bbcc] text-white"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-red-400 text-sm" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#221F1F] border border-[#354155] rounded-md focus:outline-none focus:border-[#a6bbcc] text-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-red-400 text-sm" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#221F1F] border border-[#354155] rounded-md focus:outline-none focus:border-[#a6bbcc] text-white resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-red-400 text-sm" />
              </div>
              
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-8 py-3 bg-[#a6bbcc] text-gray-900 font-semibold rounded-md hover:bg-[#8aa9c1] transition-colors duration-300 disabled:opacity-70 w-full sm:w-auto"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;