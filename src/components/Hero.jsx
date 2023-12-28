import { motion } from "framer-motion";
import profile from "../assets/Profile.png"
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaCode, FaStickyNote } from 'react-icons/fa';
// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#D972FF]'>Rahul</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//           It's not a bug,  <br className='sm:block hidden' />
//           it's an undocumented feature.
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-end items-center h-screen">
//       <img src={profile} alt="Your Image" className="max-w-full max-h-full pt-40" />
//     </div>

//       {/* <ComputersCanvas /> */}

//       {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div> */}
//         {/* </a>
//       </div> */}
//     </section>
//   );
// };




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start sm:items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#D972FF]'>Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Passionate Full Stack Developer <br className='sm:block hidden' />
          <div className="flex gap-8 mt-2">
              <a href="https://github.com/rahulrajamani31">
                <FaGithub size={24} color="white" />
              </a>
             
              <a href="https://www.linkedin.com/in/rahul-rajamani/">
                <FaLinkedin size={24} color="white" />
              </a>
              <a href="https://devfolio.co/@RahulRajamani">
              <FaCode size={24} color="white" />
              </a>
              <a href="https://www.notion.so/greatmage/DSA-aa5c71367933462fa8de51bdef590b67">
              <FaStickyNote size={24} color="white" />
              </a>
              
              
            </div>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start sm:justify-end sm:items-center h-screen pt-40 ">
        <img src={profile} alt="Your Image" className="max-w-full max-h-full" />
      </div>

       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
         <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>           
                  <motion.div   animate={{y: [0, 24, 0], }} transition={{duration: 1.5,
                 repeat: Infinity,
                 repeatType: "loop",
               }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
             />
           </div>
         </a>
      </div>
    </section>
  );
};
export default Hero;
