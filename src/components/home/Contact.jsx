import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <Container>

        <SectionTitle
          title="Let's Work Together"
          subtitle="Have an opportunity or project? Feel free to contact me."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
            />

            <button
              className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </motion.form>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-slate-400">
                  sahilraza9931@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-slate-400">
                  +91 6295101795
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-slate-400">
                  Bihar, India
                </p>
              </div>

            </div>

            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/Sahil91029"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 hover:bg-violet-600 flex items-center justify-center text-2xl transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/md-sahil-raza-khan-1a544b3a9"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 hover:bg-violet-600 flex items-center justify-center text-2xl transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;