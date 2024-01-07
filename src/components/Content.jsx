import React from 'react'
import { motion } from 'framer-motion'

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <>
        <div className="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="text-left mt-2 lg:mr-6">
            <img src="./Heading2.png" className="w-96" alt="Heading" />
            <h3 className="text-cyan-400 text-lg font-semibold tracking-tight ml-0s">
              <a
                href="https://drive.google.com/file/d/1x0_IBT1UpyaDrWv546VgPFY7thx50J8_/view?usp=sharing"
                target="_blank"
                className="underline hover:no-underline"
              >
                syllabus.
              </a>
            </h3>
            <h3 className="text-gray-100 text-md font-semibold tracking-tight ml-0s">
              don't be afraid. be brave.
            </h3>
            <h3 className="text-cyan-400 text-lg font-semibold tracking-tight mt-4 ml-0s">
              <a
                href="https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj?usp=sharing"
                target="_blank"
                className="underline hover:no-underline"
              >
                pyqs.
              </a>
            </h3>
            <h3 className="text-gray-100 text-md font-semibold tracking-tight ml-0">
              there u go.
            </h3>
            <h3 className="text-cyan-400 text-lg font-semibold tracking-tight mt-4 ml-0s">
              <a
                href="https://leetcode.com/contest/"
                target="_blank"
                className="underline hover:no-underline"
              >
                lc contests.
              </a>
            </h3>
            <h3 className="text-gray-100 text-md font-semibold tracking-tight ml-0">
              leetcode schedule.
            </h3>
            <h3 className="text-cyan-400 text-lg font-semibold tracking-tight mt-4 ml-0s">
              <a
                href="https://www.codechef.com/contests"
                target="_blank"
                className="underline hover:no-underline"
              >
                cc contests.
              </a>
            </h3>
            <h3 className="text-gray-100 text-md font-semibold tracking-tight ml-0">
              codechef schedule.
            </h3>
            <h3 className="text-cyan-400 text-lg font-semibold tracking-tight mt-4 ml-0s">
              <a
                href="https://codeforces.com/contests"
                target="_blank"
                className="underline hover:no-underline"
              >
                cf contests.
              </a>
            </h3>
            <h3 className="text-gray-100 text-md font-semibold tracking-tight ml-0">
              codeforces schedule.
            </h3>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default Content;
