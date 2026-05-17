// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaXTwitter,
//   FaLocationDot,
//   FaShieldHeart,
// } from "react-icons/fa6";

// import { MdEmail } from "react-icons/md";
// import { IoArrowForward } from "react-icons/io5";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container mx-auto px-4 md:px-8 relative z-10">
//         {/* Top Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
//           {/* Brand */}
//           <div className="lg:col-span-2 flex flex-col space-y-6">
//             <div>
//               <h2 className="text-3xl font-black text-white tracking-tight">
//                 Drive<span className="text-blue-500">Fleet</span>
//               </h2>
//             </div>

//             <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
//               Premium car rental service with luxury, sports, and everyday
//               vehicles for all your driving needs. Experience smooth and secure
//               booking with DriveFleet.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center gap-3">
//               {[
//                 {
//                   icon: <FaFacebookF />,
//                   link: "#",
//                 },
//                 {
//                   icon: <FaInstagram />,
//                   link: "#",
//                 },
//                 {
//                   icon: <FaXTwitter />,
//                   link: "#",
//                 },
//                 {
//                   icon: <MdEmail />,
//                   link: "#",
//                 },
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.link}
//                   className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col space-y-4">
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest">
//               Quick Links
//             </h4>

//             <ul className="space-y-3 text-sm">
//               {[
//                 "Home",
//                 "Explore Cars",
//                 "Add Car",
//                 "My Bookings",
//                 "About Us",
//               ].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                   >
//                     <span className="w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />

//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="flex flex-col space-y-4">
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest">
//               Resources
//             </h4>

//             <ul className="space-y-3 text-sm">
//               {[
//                 "Help Center",
//                 "Privacy Policy",
//                 "Terms & Conditions",
//                 "FAQs",
//                 "Support",
//               ].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                   >
//                     <span className="w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />

//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="flex flex-col space-y-4">
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest">
//               Stay Updated
//             </h4>

//             <p className="text-xs text-slate-400 leading-relaxed">
//               Subscribe to get special offers, rental discounts, and latest
//               updates from DriveFleet.
//             </p>

//             <div className="relative flex items-center mt-2">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
//               />

//               <button className="absolute right-1.5 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white transition-colors">
//                 <IoArrowForward className="text-sm" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
//           <div>
//             © {currentYear}{" "}
//             <span className="text-slate-300 font-semibold">DriveFleet</span>.
//             All rights reserved.
//           </div>

//           <div className="flex items-center gap-6 flex-wrap justify-center">
//             <div className="flex items-center gap-1.5 text-slate-400">
//               <FaLocationDot className="text-blue-500" />
//               <span>Dhaka, Bangladesh</span>
//             </div>

//             <div className="flex items-center gap-1.5 text-slate-400">
//               <FaShieldHeart className="text-emerald-500" />
//               <span>Secure Booking Guarantee</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaShieldHeart,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] text-slate-600 pt-20 pb-10 border-t border-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Drive<span className="text-blue-600">Fleet</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              Premium car rental service with luxury, sports, and everyday
              vehicles for all your driving needs. Experience smooth and secure
              booking with DriveFleet.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "#",
                },
                {
                  icon: <FaInstagram />,
                  link: "#",
                },
                {
                  icon: <FaXTwitter />,
                  link: "#",
                },
                {
                  icon: <MdEmail />,
                  link: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "Explore Cars",
                "Add Car",
                "My Bookings",
                "About Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Resources
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms & Conditions",
                "FAQs",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Stay Updated
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Subscribe to get special offers, rental discounts, and latest
              updates from DriveFleet.
            </p>

            <div className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12 shadow-sm"
              />

              <button className="absolute right-1.5 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white transition-colors">
                <IoArrowForward className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <div>
            © {currentYear}{" "}
            <span className="text-slate-800 font-semibold">DriveFleet</span>.
            All rights reserved.
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 text-slate-600">
              <FaLocationDot className="text-blue-500" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-600">
              <FaShieldHeart className="text-emerald-500" />
              <span>Secure Booking Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
