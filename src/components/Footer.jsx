import React from "react";

export default function Footer() {
  return (
    <footer className="bg-midnight text-lavender py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-lavender">Contact Us</h2>
          <p className="text-steelBlue">
            <span className="font-semibold text-white">
              Have questions or need assistance?
            </span>{" "}
            Our dedicated team is ready to provide you with the support you
            need. Whether you have inquiries about our loan products,
            application process, or anything else, feel free to reach out to us.
          </p>
          <div className="space-y-1 text-sm text-steelBlue">
            <p>
              <span className="font-semibold text-white">Address:</span> 123
              Loan Street, Finance City, FC 12345
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              +63-9707738218
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:ploansystem@gmail.com"
                className="text-lavender hover:underline"
              >
                ploansystem@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 space-y-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-midnight border border-lavender text-lavender placeholder-steelBlue focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-midnight border border-lavender text-lavender placeholder-steelBlue focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 rounded bg-midnight border border-lavender text-lavender placeholder-steelBlue focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded bg-midnight border border-lavender text-lavender placeholder-steelBlue focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lavender text-midnight font-semibold py-2 px-6 rounded hover:bg-steelBlue transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-steelBlue mt-10">
        &copy; {new Date().getFullYear()} PLoan System. All rights reserved.
      </div>
    </footer>
  );
}
