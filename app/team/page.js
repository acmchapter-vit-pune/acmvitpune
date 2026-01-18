// "use client";
//
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Mail, Github, Linkedin } from "lucide-react";
//
// import man from "@/public/assets/team/man.jpg";
// import faculty1 from "@/public/assets/team/disha_mam.png";
// import faculty2 from "@/public/assets/team/prashant_sir.png";
//
// const FacultyCard = ({ name, position, image }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center w-full max-w-87.5 py-4"
//         >
//             <div className="group relative flex flex-col items-center w-full p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] hover:border-white/50 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]">
//                 <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-linear-to-t from-emerald-500/20 via-transparent to-transparent blur-xl transition-opacity duration-500" />
//                 <div className="relative w-full aspect-3/4 mb-4 overflow-hidden rounded-lg border border-white/10">
//                     <Image
//                         src={image}
//                         alt={name}
//                         fill
//                         sizes="(max-width: 350px) 100vw, 300px"
//                         className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-1"
//                     />
//                 </div>
//                 <h3 className="text-[20px] font-semibold mb-1 text-balance text-white transition-all duration-500 group-hover:text-emerald-300 group-hover:tracking-wide">
//                     {name}
//                 </h3>
//                 <p className="text-[16px] font-medium text-white/60 transition-all duration-500 group-hover:text-white/80 group-hover:translate-y-0.5">
//                     {position}
//                 </p>
//                 <span className="mt-3 h-0.5 w-10 rounded-full bg-emerald-400/60 origin-center transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-300" />
//             </div>
//         </motion.div>
//     );
// };
//
// const TeamMemberCard = ({
//                             name,
//                             position,
//                             linkedin = "",
//                             github = "",
//                             email = "",
//                             imageSrc,
//                             priority = false,
//                         }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-900/30 via-black/70 to-black p-6 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300/70 hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]"
//         >
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/70 to-transparent opacity-60" />
//             <div className="relative flex flex-row items-center gap-6">
//                 <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border border-emerald-200/40 bg-emerald-400/5 shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(16,185,129,0.7)]">
//                     <div className="pointer-events-none absolute -inset-px rounded-[0.9rem] border border-emerald-400/40 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-[spin_12s_linear_infinite]" />
//                     <Image
//                         src={imageSrc}
//                         alt={name}
//                         fill
//                         sizes="128px"
//                         priority={priority}
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                 </div>
//                 <div className="relative flex flex-1 flex-col items-start justify-center ml-3">
//                     <div className="mb-3">
//                         <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-200">
//                             {name}
//                         </h3>
//                         <p className="text-sm font-medium text-emerald-100/70 transition-colors duration-300 group-hover:text-emerald-100">
//                             {position}
//                         </p>
//                     </div>
//                     <div className="mt-1 flex gap-3 opacity-60 transition-all duration-500 group-hover:opacity-100">
//                         {linkedin && (
//                             <a
//                                 href={linkedin}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-lg text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/25 hover:text-white"
//                             >
//                                 <Linkedin className="transition-transform duration-500 hover:rotate-360" />
//                             </a>
//                         )}
//                         {github && (
//                             <a
//                                 href={github}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/35 bg-black/60 text-lg text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/15 hover:text-white"
//                             >
//                                 <Github className="transition-transform duration-500 hover:rotate-360" />
//                             </a>
//                         )}
//                         {email && (
//                             <a
//                                 href={`mailto:${email}`}
//                                 className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15 text-lg text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/30 hover:text-white"
//                             >
//                                 <Mail className="transition-transform duration-500 hover:rotate-360" />
//                                 <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-300/40 opacity-0 group-hover:opacity-100 animate-[ping_1.8s_ease-out_infinite]" />
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };
//
// const Page = () => {
//     const members = [
//         // Core Team
//         {
//             name: "Anvay Kulkarni",
//             position: "President",
//             group: "Core Team",
//             email: "anvay.k@example.com",
//             github: "https://github.com/anvay-kulkarni",
//             linkedin: "https://www.linkedin.com/in/anvay-kulkarni",
//             imageSrc: man,
//         },
//         {
//             name: "Swanandi Kamat",
//             position: "Secretary",
//             group: "Core Team",
//             email: "swanandi.kamat@example.com",
//             github: "https://github.com/swanandi-kamat",
//             linkedin: "https://www.linkedin.com/in/swanandi-kamat",
//             imageSrc: man,
//         },
//         {
//             name: "Tejas Dherange",
//             position: "Treasurer",
//             group: "Core Team",
//             email: "tejas.dherange@example.com",
//             github: "https://github.com/tejas-dherange",
//             linkedin: "https://www.linkedin.com/in/tejas-dherange",
//             imageSrc: man,
//         },
//         {
//             name: "Shatavali Bahadure",
//             position: "Event Coordinator",
//             group: "Core Team",
//             email: "shatavali.bahadure@example.com",
//             github: "https://github.com/shatavali-bahadure",
//             linkedin: "https://www.linkedin.com/in/shatavali-bahadure",
//             imageSrc: man,
//         },
//         {
//             name: "Palak Gudgila",
//             position: "Public Relations Officer",
//             group: "Core Team",
//             email: "palak.gudgila@example.com",
//             github: "https://github.com/palak-gudgila",
//             linkedin: "https://www.linkedin.com/in/palak-gudgila",
//             imageSrc: man,
//         },
//
//         // Technical & Web
//         {
//             name: "Vedant Shendge",
//             position: "Co-Tech Head",
//             group: "Technical & Web",
//             email: "vedant.22310585@viit.ac.in",
//             phone: "7249105995",
//             github: "https://github.com/vedant-shendge",
//             linkedin: "https://www.linkedin.com/in/vedant-shendge",
//             imageSrc: man,
//         },
//         {
//             name: "Vedant Shingote",
//             position: "Co-Tech Head",
//             group: "Technical & Web",
//             email: "vedant.22310590@viit.ac.in",
//             phone: "9307091897",
//             github: "https://github.com/vedant-shingote",
//             linkedin: "https://www.linkedin.com/in/vedant-shingote",
//             imageSrc: man,
//         },
//         {
//             name: "Gajanan Tongale",
//             position: "Jt-Tech Head",
//             group: "Technical & Web",
//             email: "rajendra.22311256@viit.ac.in",
//             phone: "8295976607",
//             github: "https://github.com/gajanan-tongale",
//             linkedin: "https://www.linkedin.com/in/gajanan-tongale",
//             imageSrc: man,
//         },
//         {
//             name: "Prithviraj Patil",
//             position: "Jt-Tech Head",
//             group: "Technical & Web",
//             email: "prithvirajpatil495@gmail.com",
//             phone: "9970907885",
//             github: "https://github.com/prithviraj-patil",
//             linkedin: "https://www.linkedin.com/in/prithviraj-patil",
//             imageSrc: man,
//         },
//         {
//             name: "Abhishek Kadu",
//             position: "Web Master",
//             group: "Technical & Web",
//             email: "abhishek.22311167@viit.ac.in",
//             phone: "8530283963",
//             github: "https://github.com/abhishek-kadu",
//             linkedin: "https://www.linkedin.com/in/abhishek-kadu",
//             imageSrc: man,
//         },
//         {
//             name: "Atharva Belavanki",
//             position: "Jt-Web Master",
//             group: "Technical & Web",
//             email: "atharva.22311353@viit.ac.in",
//             phone: "7620424588",
//             github: "https://github.com/atharva-belavanki",
//             linkedin: "https://www.linkedin.com/in/atharva-belavanki",
//             imageSrc: man,
//         },
//
//         // Design, Content & Documentation
//         {
//             name: "Akshay Nazare",
//             position: "Design Head",
//             group: "Design, Content & Documentation",
//             email: "akshay.1252030015@vit.edu",
//             phone: "9130589174",
//             github: "https://github.com/akshay-nazare",
//             linkedin: "https://www.linkedin.com/in/akshay-nazare",
//             imageSrc: man,
//         },
//         {
//             name: "Shivam Shinde",
//             position: "Jt-Design Head",
//             group: "Design, Content & Documentation",
//             email: "shivam.22310019@viit.ac.in",
//             phone: "9011967964",
//             github: "https://github.com/shivam-shinde",
//             linkedin: "https://www.linkedin.com/in/shivam-shinde",
//             imageSrc: man,
//         },
//         {
//             name: "Soham Zinjurke",
//             position: "Content Head",
//             group: "Design, Content & Documentation",
//             email: "soham.22311620@viit.ac.in",
//             phone: "9356761788",
//             github: "https://github.com/soham-zinjurke",
//             linkedin: "https://www.linkedin.com/in/soham-zinjurke",
//             imageSrc: man,
//         },
//         {
//             name: "Vedant Mulmule",
//             position: "Documentation Head",
//             group: "Design, Content & Documentation",
//             email: "vedant.mulmule23@vit.edu",
//             phone: "7020539966",
//             github: "https://github.com/vedant-mulmule",
//             linkedin: "https://www.linkedin.com/in/vedant-mulmule",
//             imageSrc: man,
//         },
//         {
//             name: "Karad Dhanashri",
//             position: "Jt-Documentation Head",
//             group: "Design, Content & Documentation",
//             email: "dhanashrikarad19@gmail.com",
//             phone: "9284492928",
//             github: "https://github.com/karad-dhanashri",
//             linkedin: "https://www.linkedin.com/in/karad-dhanashri",
//             imageSrc: man,
//         },
//
//         // Event & Publicity
//         {
//             name: "Sudiksha Pardeshi",
//             position: "Co-Event Head",
//             group: "Event & Publicity",
//             email: "sudiksha.22310260@viit.ac.in",
//             phone: "7057927681",
//             github: "https://github.com/sudiksha-pardeshi",
//             linkedin: "https://www.linkedin.com/in/sudiksha-pardeshi",
//             imageSrc: man,
//         },
//         {
//             name: "Achala Patil",
//             position: "Co-Event Head",
//             group: "Event & Publicity",
//             email: "achala.patil24@vit.edu",
//             phone: "9699878610",
//             github: "https://github.com/achala-patil",
//             linkedin: "https://www.linkedin.com/in/achala-patil",
//             imageSrc: man,
//         },
//         {
//             name: "Atharva Bhajan",
//             position: "Jt-Event Head",
//             group: "Event & Publicity",
//             email: "atharvabhajan0574@gmail.com",
//             phone: "9322246114",
//             github: "https://github.com/atharva-bhajan",
//             linkedin: "https://www.linkedin.com/in/atharva-bhajan",
//             imageSrc: man,
//         },
//         {
//             name: "Shreyas Khanore",
//             position: "Jt-Event Head",
//             group: "Event & Publicity",
//             email: "shreyas.khanore24@vit.edu",
//             phone: "8626041033",
//             github: "https://github.com/shreyas-khanore",
//             linkedin: "https://www.linkedin.com/in/shreyas-khanore",
//             imageSrc: man,
//         },
//         {
//             name: "Namrata Devare",
//             position: "Publicity Head",
//             group: "Event & Publicity",
//             email: "namratadevare5@gmail.com",
//             phone: "7715884693",
//             github: "https://github.com/namrata-devare",
//             linkedin: "https://www.linkedin.com/in/namrata-devare",
//             imageSrc: man,
//         },
//         {
//             name: "Rohan Wani",
//             position: "Jt-Publicity Head",
//             group: "Event & Publicity",
//             email: "rohan.wani25@vit.edu",
//             phone: "8421170651",
//             github: "https://github.com/rohan-wani",
//             linkedin: "https://www.linkedin.com/in/rohan-wani",
//             imageSrc: man,
//         },
//         {
//             name: "Bomble Snehal",
//             position: "Jt-Publicity Head",
//             group: "Event & Publicity",
//             email: "snehal.1252030031@vit.edu",
//             phone: "7448121625",
//             github: "https://github.com/bomble-snehal",
//             linkedin: "https://www.linkedin.com/in/bomble-snehal",
//             imageSrc: man,
//         },
//         {
//             name: "Siddhant Ukarde",
//             position: "Jt-Publicity Head",
//             group: "Event & Publicity",
//             email: "siddhant.ukarde24@vit.edu",
//             phone: "9359982918",
//             github: "https://github.com/siddhant-ukarde",
//             linkedin: "https://www.linkedin.com/in/siddhant-ukarde",
//             imageSrc: man,
//         },
//     ];
//
//     const ROLE_PRIORITY = [
//         "President",
//         "Secretary",
//         "Treasurer",
//         "Event Coordinator",
//         "Public Relations Officer",
//
//         "Co-Tech Head",
//         "Design Head",
//         "Content Head",
//         "Documentation Head",
//         "Co-Event Head",
//         "Publicity Head",
//         "Web Master",
//
//         "Jt-Design Head",
//         "Jt-Tech Head",
//         "Jt-Web Master",
//         "Jt-Event Head",
//         "Jt-Documentation Head",
//         "Jt-Publicity Head",
//     ];
//
//     const getRoleRank = (position) => {
//         const idx = ROLE_PRIORITY.indexOf(position);
//         return idx === -1 ? ROLE_PRIORITY.length : idx;
//     };
//
//
//     // Group members by their group
//     const groupedMembers = members.reduce((acc, member) => {
//         if (!acc[member.group]) acc[member.group] = [];
//         acc[member.group].push(member);
//         return acc;
//     }, {});
//
//
//     const groupOrder = [
//         "Core Team",
//         "Technical & Web",
//         "Design, Content & Documentation",
//         "Event & Publicity",
//     ];
//
//
//     return (
//         <div className="min-h-screen py-16 bg-[#0a0f1d] text-white font-sans selection:bg-emerald-500/30">
//             <div className="fixed inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full" />
//             </div>
//
//             <div className="relative z-10 flex flex-col gap-20 px-4 py-20 max-w-7xl mx-auto">
//                 {/* Faculty Section */}
//                 <section className="text-center">
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-[38px] md:text-5xl font-bold mb-12 text-white tracking-tight"
//                     >
//                         Our Faculty <span className="text-emerald-400">Coordinators</span>
//                     </motion.h1>
//
//                     <div className="flex flex-wrap justify-center gap-10">
//                         <FacultyCard
//                             name="Disha Wankhede"
//                             position="Faculty Coordinator"
//                             image={faculty1}
//                         />
//                         <FacultyCard
//                             name="Prashant Mahale"
//                             position="Faculty Coordinator"
//                             image={faculty2}
//                         />
//                     </div>
//                 </section>
//
//                 {/* Main Team Section */}
//                 <section className="text-center">
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="mb-16"
//                     >
//                         <h1 className="text-[38px] md:text-5xl font-bold mb-4 text-white tracking-tight">
//                             Meet Our <span className="text-emerald-400">Team</span>
//                         </h1>
//                         <p className="text-emerald-100/60 max-w-2xl mx-auto">
//                             The brilliant minds behind VIIT ACM working together to shape the
//                             future of computing.
//                         </p>
//                     </motion.div>
//
//                     {/* Group Sections as big cards */}
//                     <div className="space-y-12">
//                         {groupOrder.map(
//                             (group) =>
//                                 groupedMembers[group] &&
//                                 groupedMembers[group].length > 0 && (
//                                     <motion.div
//                                         key={group}
//                                         initial={{ opacity: 0, y: 30 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 0.6 }}
//                                         className="relative w-full overflow-hidden rounded-3xl border border-emerald-400/30 bg-linear-to-br from-emerald-900/40 via-black/80 to-black p-8 shadow-[0_0_60px_rgba(16,185,129,0.35)]"
//                                     >
//                                         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)] opacity-40 blur-2xl" />
//
//                                         <div className="relative flex flex-col gap-8">
//                                             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-emerald-500/20 pb-4">
//                                                 <div className="text-left">
//                                                     <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
//                                                         {group}
//                                                     </h2>
//                                                     <p className="mt-1 text-sm text-emerald-100/70">
//                                                         {group === "Core Team" &&
//                                                             "The core leadership driving VIIT ACM."}
//                                                         {group === "Technical & Web" &&
//                                                             "Developers and tech leads powering our chapter."}
//                                                         {group === "Design, Content & Documentation" &&
//                                                             "Creative, content, and documentation team."}
//                                                         {group === "Event & Publicity" &&
//                                                             "Event managers and publicity coordinators."}
//                                                     </p>
//                                                 </div>
//                                                 <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
//                           {groupedMembers[group].length} Members
//                         </span>
//                                             </div>
//
//                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//                                                 {groupedMembers[group]
//                                                     .slice() // avoid mutating original
//                                                     .sort((a, b) => getRoleRank(a.position) - getRoleRank(b.position))
//                                                     .map((member, index) => (
//                                                         <TeamMemberCard
//                                                             key={`${group}-${member.name}`}
//                                                             {...member}
//                                                             priority={index < 2}
//                                                         />
//                                                     ))}
//                                             </div>
//
//                                         </div>
//                                     </motion.div>
//                                 )
//                         )}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };
//
// export default Page;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

import man from "@/public/assets/team/man.jpg";
import woman from "@/public/assets/team/woman.png";
import faculty1 from "@/public/assets/team/disha_mam.png";
import faculty2 from "@/public/assets/team/prashant_sir.png";
import anvay from "@/public/assets/team/anvay.png";
import swanandi from "@/public/assets/team/swanandi.jpeg";
import tejas from "@/public/assets/team/tejas.png";
import palak from "@/public/assets/team/palak.jpeg";
import shatavali from "@/public/assets/team/shatavali.jpg";
import atharva from "@/public/assets/team/atharva.jpg";
import vedantshingote from "@/public/assets/team/vedantshingote.jpg";
import abhishek from "@/public/assets/team/abhishek.jpg";
import gajanan from "@/public/assets/team/gajanan.jpeg";
import prithviraj from "@/public/assets/team/prithviraj.png";
import soham from "@/public/assets/team/soham.jpg";
import amruta from "@/public/assets/team/amruta.png";
import dhanashri from "@/public/assets/team/dhanashri.jpg";
import vedantmulmule from "@/public/assets/team/vedantmulmule.png";
import yashchaware from "@/public/assets/team/yashchaware.jpg";
import shivam from "@/public/assets/team/shivam.jpg";
import achala from "@/public/assets/team/achala.jpg";
import sudiksha from "@/public/assets/team/sudiksha.jpg";
import atharvabhajan from "@/public/assets/team/atharvabhajan.jpeg";
import snehal from "@/public/assets/team/snehal.jpg";
import siddhant from "@/public/assets/team/siddhant.jpeg";
import atharvvaidya from "@/public/assets/team/atharvvaidya.jpg";
import tanushka from "@/public/assets/team/tanushka.png";
import mahi from "@/public/assets/team/mahi.jpg";
import harsh from "@/public/assets/team/harsh.jpg";
import vedantshendge from "@/public/assets/team/vedantshendge.png";
import namrata from "@/public/assets/team/namrata.jpg";
import shreyas from "@/public/assets/team/shreyas.jpeg";
import rohan from "@/public/assets/team/rohan.png";
import rajesh from "@/public/assets/team/rajesh.png";

const FacultyCard = ({ name, position, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-[21.875rem] py-3 sm:py-4"
        >
            <div className="group relative flex flex-col items-center w-full p-4 sm:p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] hover:border-white/50 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]">
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-linear-to-t from-emerald-500/20 via-transparent to-transparent blur-xl transition-opacity duration-500" />
                <div className="relative w-full aspect-[3/4] mb-3 sm:mb-4 overflow-hidden rounded-lg border border-white/10">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        quality={95}
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 35vw, 300px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-1"
                    />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold mb-1 text-balance text-white transition-all duration-500 group-hover:text-emerald-300 group-hover:tracking-wide text-center">
                    {name}
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium text-white/60 transition-all duration-500 group-hover:text-white/80 group-hover:translate-y-0.5 text-center">
                    {position}
                </p>
                <span className="mt-3 h-0.5 w-8 sm:w-10 rounded-full bg-emerald-400/60 origin-center transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-300" />
            </div>
        </motion.div>
    );
};

const TeamMemberCard = ({
                            name,
                            position,
                            linkedin = "",
                            github = "",
                            email = "",
                            imageSrc,
                            priority = false,
                        }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-900/30 via-black/70 to-black p-4 sm:p-6 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300/70 hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/70 to-transparent opacity-60" />
            <div className="relative flex flex-row items-center gap-4 sm:gap-6">
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-xl border border-emerald-200/40 bg-emerald-400/5 shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(16,185,129,0.7)]">
                    <div className="pointer-events-none absolute -inset-px rounded-[0.9rem] border border-emerald-400/40 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-[spin_12s_linear_infinite]" />
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        quality={95}
                        sizes="96px"
                        priority={priority}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
                <div className="relative flex flex-1 flex-col items-start justify-center ml-1 sm:ml-3">
                    <div className="mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-200 text-left">
                            {name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-emerald-100/70 transition-colors duration-300 group-hover:text-emerald-100 text-left">
                            {position}
                        </p>
                    </div>
                    <div className="mt-1 flex gap-2 sm:gap-3 opacity-60 transition-all duration-500 group-hover:opacity-100">
                        {linkedin && (
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/25 hover:text-white"
                            >
                                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 hover:rotate-360" />
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-emerald-400/35 bg-black/60 text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/15 hover:text-white"
                            >
                                <Github className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 hover:rotate-360" />
                            </a>
                        )}
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15 text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/30 hover:text-white"
                            >
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 hover:rotate-360" />
                                <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-300/40 opacity-0 group-hover:opacity-100 animate-[ping_1.8s_ease-out_infinite]" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Page = () => {
    const members = [
        // Core Team
        {
            name: "Anvay Kulkarni",
            position: "President",
            group: "Core Team",
            email: "anvay.22311927@viit.ac.in",
            github: "https://github.com/Anvay14",
            linkedin: "https://www.linkedin.com/in/anvay-kulkarni-609662279/",
            imageSrc: anvay,
        },
        {
            name: "Swanandi Kamat",
            position: "Secretary",
            group: "Core Team",
            email: "swanandi.22310424@viit.ac.in",
            github: "https://github.com/swanandikamat",
            linkedin: "https://www.linkedin.com/in/swanandi-kamat-86aa152a6/",
            imageSrc: swanandi,
        },
        {
            name: "Tejas Dherange",
            position: "Treasurer",
            group: "Core Team",
            email: "tejas.22310593@viit.ac.in",
            github: "https://github.com/Tejas-Dherange",
            linkedin: "https://www.linkedin.com/in/tejas-dherange-54a6a627b",
            imageSrc: tejas,
        },
        {
            name: "Shatavali Bahadure",
            position: "Event Management",
            group: "Core Team",
            email: "shatavali.22310364@viit.ac.in",
            github: "https://github.com/Shatavali05",
            linkedin: "https://www.linkedin.com/in/shatavali-bahadure-172509291/",
            imageSrc: shatavali,
        },
        {
            name: "Palak Gudgila",
            position: "Public Relations Officer",
            group: "Core Team",
            email: "palak.22311889@viit.ac.in",
            github: "https://github.com/palak-gudgila",
            linkedin: "https://www.linkedin.com/in/palak-gudgila/",
            imageSrc: palak,
        },

        // Technical & Web
        {
            name: "Vedant Shendge",
            position: "Co-Tech Head",
            group: "Technical & Web",
            email: "vedant.22310585@viit.ac.in",
            phone: "7249105995",
            github: "https://github.com/vedant-shendge",
            linkedin: "https://www.linkedin.com/in/vedant-shendge-a1258b2b4/",
            imageSrc: vedantshendge,
        },
        {
            name: "Vedant Shingote",
            position: "Co-Tech Head",
            group: "Technical & Web",
            email: "vedant.22310590@viit.ac.in",
            phone: "9307091897",
            github: "https://github.com/Vedant-Shingote",
            linkedin: "https://www.linkedin.com/in/vedant-shingote-1827802a8/",
            imageSrc: vedantshingote,
        },
        {
            name: "Gajanan Tongale",
            position: "Jt-Tech Head",
            group: "Technical & Web",
            email: "rajendra.22311256@viit.ac.in",
            phone: "8295976607",
            github: "https://github.com/GajananTongale",
            linkedin: "https://www.linkedin.com/in/gajanan-tongale-828a2b33b/",
            imageSrc: gajanan,
        },
        {
            name: "Prithviraj Patil",
            position: "Jt-Tech Head",
            group: "Technical & Web",
            email: "prithvirajpatil495@gmail.com",
            phone: "9970907885",
            github: "https://github.com/Prithvi2321",
            linkedin: "https://www.linkedin.com/in/prithviraj-patil-3a1814330/",
            imageSrc: prithviraj,
        },
        {
            name: "Abhishek Kadu",
            position: "Web Master",
            group: "Technical & Web",
            email: "abhishek.22311167@viit.ac.in",
            phone: "8530283963",
            github: "https://github.com/abhishek-kadu",
            linkedin: "https://www.linkedin.com/in/abhishek-kadu1/",
            imageSrc: abhishek,
        },
        {
            name: "Atharva Belavanki",
            position: "Jt-Web Master",
            group: "Technical & Web",
            email: "atharva.22311353@viit.ac.in",
            phone: "7620424588",
            github: "https://github.com/atharvabelavanki",
            linkedin: "https://www.linkedin.com/in/atharva-belavanki-4565932b4",
            imageSrc: atharva,
        },

        // Design, Content & Documentation
        {
            name: "Akshay Nazare",
            position: "Design Head",
            group: "Design, Content & Documentation",
            email: "akshay.1252030015@vit.edu",
            phone: "9130589174",
            github: "https://github.com/akshay-nazare",
            linkedin: "https://www.linkedin.com/in/akshay-nazare",
            imageSrc: man,
        },
        {
            name: "Shivam Shinde",
            position: "Jt-Design Head",
            group: "Design, Content & Documentation",
            email: "shivam.22310019@viit.ac.in",
            phone: "9011967964",
            github: "https://github.com/Shivam-codex",
            linkedin: "https://www.linkedin.com/in/shivam-shinde-08a181289/",
            imageSrc: shivam,
        },
        {
            name: "Soham Zinjurke",
            position: "Content Head",
            group: "Design, Content & Documentation",
            email: "soham.22311620@viit.ac.in",
            phone: "9356761788",
            github: "https://github.com/soham-zinjurke",
            linkedin: "https://www.linkedin.com/in/sohamzinjurke/",
            imageSrc: soham,
        },
        
        {
            name: "Vedant Mulmule",
            position: "Documentation Head",
            group: "Design, Content & Documentation",
            email: "vedant.mulmule23@vit.edu",
            phone: "7020539966",
            github: "https://github.com/vedant-mulmule",
            linkedin: "https://www.linkedin.com/in/vedant-mulmule-6732642b8/",
            imageSrc: vedantmulmule,
        },
        {
            name: "Dhanashri Karad",
            position: "Jt-Documentation Head",
            group: "Design, Content & Documentation",
            email: "dhanashrikarad19@gmail.com",
            phone: "9284492928",
            github: "https://github.com/DhanashriKarad",
            linkedin: "https://www.linkedin.com/in/dhanashri-karad/",
            imageSrc: dhanashri,
        },
        {
            name: "Vedika Budhwat",
            position: "Design Team Member",
            group: "Design, Content & Documentation",
            email: "vedika.1251100127@vit.edu",
            phone: "9607165438",
            github: "https://github.com/vedikabudhwat07-eng",
            linkedin: "https://www.linkedin.com/in/vedika-budhwat-946b03385/",
            imageSrc: woman,
        },
        {
            name: "Yash Chaware",
            position: "Documentation Team Member",
            group: "Design, Content & Documentation",
            email: "yash.1251080031@vit.edu",
            phone: "7721977621",
            github: "https://www.linkedin.com/in/yash-chaware",
            linkedin: "https://www.linkedin.com/in/yash-chaware",
            imageSrc: yashchaware,
        },
        {
            name: "Amruta Gavade",
            position: "Documentation Team Member",
            group: "Design, Content & Documentation",
            email: "amrutagavade007@gmail.com",
            phone: "9561624799",
            github: "www.linkedin.com/in/amruta-gavade-",
            linkedin: "https://www.linkedin.com/in/amrutagavade007-oss",
            imageSrc: amruta,
        },
        // Event & Publicity
        {
            name: "Sudiksha Pardeshi",
            position: "Co-Event Head",
            group: "Event & Publicity",
            email: "sudiksha.22310260@viit.ac.in",
            phone: "7057927681",
            github: "https://github.com/sudiksha-pardeshi",
            linkedin: "https://www.linkedin.com/in/sudiksha-pardeshi-011b93386/",
            imageSrc: sudiksha,
        },
        {
            name: "Achala Patil",
            position: "Co-Event Head",
            group: "Event & Publicity",
            email: "achala.patil24@vit.edu",
            phone: "9699878610",
            github: "https://github.com/Achala-Patil",
            linkedin: "https://www.linkedin.com/in/achala-patil-718152283/",
            imageSrc: achala,
        },
        {
            name: "Atharva Bhajan",
            position: "Jt-Event Head",
            group: "Event & Publicity",
            email: "atharvabhajan0574@gmail.com",
            phone: "9322246114",
            github: "https://github.com/Atharvabhajan",
            linkedin: "https://www.linkedin.com/in/atharvabhajan/",
            imageSrc: atharvabhajan,
        },
        {
            name: "Shreyas Khanore",
            position: "Jt-Event Head",
            group: "Event & Publicity",
            email: "shreyas.khanore24@vit.edu",
            phone: "8626041033",
            github: "https://github.com/shreyas-khanore",
            linkedin: "https://www.linkedin.com/in/shreyas-khanore",
            imageSrc: shreyas,
        },
        {
            name: "Namrata Devare",
            position: "Publicity Head",
            group: "Event & Publicity",
            email: "namratadevare5@gmail.com",
            phone: "7715884693",
            github: "https://github.com/namrata-devare",
            linkedin: "https://www.linkedin.com/in/namrata-devare",
            imageSrc: namrata,
        },
        {
            name: "Rohan Wani",
            position: "Jt-Publicity Head",
            group: "Event & Publicity",
            email: "rohan.wani25@vit.edu",
            phone: "8421170651",
            github: "https://github.com/rohan-wani",
            linkedin: "https://www.linkedin.com/in/rohan-wani",
            imageSrc: rohan,
        },
        {
            name: "Snehal Bomble",
            position: "Jt-Publicity Head",
            group: "Event & Publicity",
            email: "snehal.1252030031@vit.edu",
            phone: "7448121625",
            github: "https://github.com/Snehalbomble27",
            linkedin: "https://www.linkedin.com/in/snehal-bomble-887b73329",
            imageSrc: snehal,
        },
        {
            name: "Siddhant Ukarde",
            position: "Jt-Publicity Head",
            group: "Event & Publicity",
            email: "siddhant.ukarde24@vit.edu",
            phone: "9359982918",
            github: "https://github.com/siddhant-ukarde",
            linkedin: "https://www.linkedin.com/in/siddhant-ukarde",
            imageSrc: siddhant,
        },
        {
            name: "Atharv Vaidya",
            position: "Event team member",
            group: "Event & Publicity",
            email: "atharvaidya007@gmail.com",
            phone: "8623048342",
            github: "https://github.com/AthvaCodes",
            linkedin: "https://www.linkedin.com/in/atharv-vaidya-094b69386/",
            imageSrc: atharvvaidya,
        },
        {
            name: "Tanushka Patil",
            position: "Event team member",
            group: "Event & Publicity",
            email: "tanushka.spatil1987@gmail.com",
            phone: "9359511080",
            github: "https://github.com/Tanushka-sp2007",
            linkedin: "https://www.linkedin.com/in/tanushka-sunil-patil-a87090389",
            imageSrc: tanushka,
        },
        {
            name: "Mahi Salode",
            position: "Event team member",
            group: "Event & Publicity",
            email: "mahi1962007.s@gmail.com",
            phone: "8767079226",
            github: "https://github.com/mahi.salode",
            linkedin: "https://www.linkedin.com/in/mahi-salode-314334391/",
            imageSrc: mahi,
        },
        {
            name: "Rajesh Anerao",
            position: "Publicity team member",
            group: "Event & Publicity",
            email: "rajesh.1251040090@vit.edu",
            phone: "8999322989",
            github: "https://github.com/rajeshanerao127",
            linkedin: "https://www.linkedin.com/in/rajesh-anerao-24a236386/",
            imageSrc: rajesh,
        },
         {
            name: "Harsh Bhamre ",
            position: "Publicity team member",
            group: "Event & Publicity",
            email: "harsh.bhamre27@gmail.com",
            phone: "9403970177",
            github: "https://github.com/Hershey57",
            linkedin: "https://www.linkedin.com/in/harsh-bhamre-240692318/",
            imageSrc: harsh,
        },
    ];

    const ROLE_PRIORITY = [
        "President",
        "Secretary",
        "Treasurer",
        "Event Coordinator",
        "Public Relations Officer",

        "Co-Tech Head",
        "Design Head",
        "Content Head",
        "Documentation Head",
        "Co-Event Head",
        "Publicity Head",
        "Web Master",

        "Jt-Design Head",
        "Jt-Tech Head",
        "Jt-Web Master",
        "Jt-Event Head",
        "Jt-Documentation Head",
        "Jt-Publicity Head",
    ];

    const getRoleRank = (position) => {
        const idx = ROLE_PRIORITY.indexOf(position);
        return idx === -1 ? ROLE_PRIORITY.length : idx;
    };

    const groupedMembers = members.reduce((acc, member) => {
        if (!acc[member.group]) acc[member.group] = [];
        acc[member.group].push(member);
        return acc;
    }, {});

    const groupOrder = [
        "Core Team",
        "Technical & Web",
        "Design, Content & Documentation",
        "Event & Publicity",
    ];

    return (
        <div className="min-h-screen py-10 sm:py-14 bg-[#0a0f1d] text-white font-sans selection:bg-emerald-500/30">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-600/10 blur-[100px] sm:blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-green-600/10 blur-[100px] sm:blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col gap-14 sm:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 py-14 sm:py-20 max-w-7xl mx-auto">
                {/* Faculty Section */}
                <section className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[30px] sm:text-[34px] md:text-5xl font-bold mb-8 sm:mb-12 text-white tracking-tight"
                    >
                        Our Faculty <span className="text-emerald-400">Coordinators</span>
                    </motion.h1>

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                        <FacultyCard
                            name="Disha Wankhede"
                            position="Faculty Coordinator"
                            image={faculty1}
                        />
                        <FacultyCard
                            name="Prashant Mahale"
                            position="Faculty Coordinator"
                            image={faculty2}
                        />
                    </div>
                </section>

                {/* Main Team Section */}
                <section className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-10 sm:mb-16 px-1"
                    >
                        <h1 className="text-[30px] sm:text-[34px] md:text-5xl font-bold mb-3 sm:mb-4 text-white tracking-tight">
                            Meet Our <span className="text-emerald-400">Team</span>
                        </h1>
                        <p className="text-sm sm:text-base text-emerald-100/60 max-w-xl sm:max-w-2xl mx-auto">
                            The brilliant minds behind VIIT ACM working together to shape the future of computing.
                        </p>
                    </motion.div>

                    <div className="space-y-8 sm:space-y-12">
                        {groupOrder.map(
                            (group) =>
                                groupedMembers[group] &&
                                groupedMembers[group].length > 0 && (
                                    <motion.div
                                        key={group}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-400/30 bg-linear-to-br from-emerald-900/40 via-black/80 to-black p-5 sm:p-8 shadow-[0_0_40px_rgba(16,185,129,0.35)]"
                                    >
                                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)] opacity-30 sm:opacity-40 blur-xl sm:blur-2xl" />

                                        <div className="relative flex flex-col gap-4 sm:gap-8">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 border-b border-emerald-500/20 pb-3 sm:pb-4 text-left">
                                                <div>
                                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                                                        {group}
                                                    </h2>
                                                    <p className="mt-1 text-xs sm:text-sm text-emerald-100/70">
                                                        {group === "Core Team" &&
                                                            "The core leadership driving VIIT ACM."}
                                                        {group === "Technical & Web" &&
                                                            "Developers and tech leads powering our chapter."}
                                                        {group === "Design, Content & Documentation" &&
                                                            "Creative, content, and documentation team."}
                                                        {group === "Event & Publicity" &&
                                                            "Event managers and publicity coordinators."}
                                                    </p>
                                                </div>
                                                <span className="self-start md:self-auto inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                          {groupedMembers[group].length} Members
                        </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-items-center">
                                                {groupedMembers[group]
                                                    .slice()
                                                    .sort(
                                                        (a, b) => getRoleRank(a.position) - getRoleRank(b.position)
                                                    )
                                                    .map((member, index) => (
                                                        <TeamMemberCard
                                                            key={`${group}-${member.name}`}
                                                            {...member}
                                                            priority={index < 2}
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
