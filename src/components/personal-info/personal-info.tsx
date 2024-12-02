import Image from "next/image";
import Contact from "../contact/contact";

export default function PersonalInfo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div
      className={`transition-all duration-400 flex-none p-4
        ${
          isScrolled
            ? "h-[12vh] sm:h-[14vh] md:h-[12vh]"
            : "h-auto sm:h-[30vh] md:h-[35vh]"
        }`}
    >
      <div
        className={`flex flex-col md:flex-row w-full h-full
        ${isScrolled ? "items-start" : ""}`}
      >
        {/* Avatar + Text Container */}
        <div
          className={`flex gap-4 items-center ${
            isScrolled ? "md:w-auto" : "md:w-1/2"
          }`}
        >
          {/* Avatar */}
          <div
            className={`relative transition-all duration-400 rounded-full overflow-hidden flex-shrink-0
            ${
              isScrolled
                ? "w-12 h-12 md:w-14 md:h-14"
                : "w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-0"
            }`}
          >
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              sizes={
                isScrolled
                  ? "(max-width: 768px) 48px, 56px"
                  : "(max-width: 768px) 64px, 96px"
              }
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div className="transition-all duration-400">
            <h1
              className={`transition-all duration-400 font-bold
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl
              ${
                isScrolled
                  ? "md:text-3xl lg:text-4xl md:mb-1 text-left"
                  : "mb-2 sm:mb-3 md:mb-4"
              }`}
            >
              Benny Taccardi
            </h1>
            <h2
              className={`transition-all duration-400 text-gray-300
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              ${
                isScrolled
                  ? "md:text-lg lg:text-xl text-left"
                  : "mb-3 sm:mb-4 md:mb-6"
              }`}
            >
              Backend Software Engineer
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-prose
              transition-all duration-400
              ${isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
            >
              Hi folks! I&apos;m an skilled backend software engineer with 4+
              professional years of experience in cloud architecture, API
              optimization, and high-performance system development using
              several top-notch technologies like AWS and Node.js.
            </p>
            {isScrolled ? (
              <Contact className="opacity-0 h-0 overflow-hidden" />
            ) : (
              <Contact />
            )}
          </div>
        </div>

        {/* Bio Section */}
        <div
          className={`w-full md:w-1/2 transition-all duration-400
          ${
            isScrolled ? "opacity-0 h-0 overflow-hidden p-0" : "opacity-100 p-4"
          }`}
        >
          <h2 className="text-sm sm:text-base md:text-lg">
            Hi, I&apos;m Benito Taccardi, a backend software engineer currently
            working at Unobravo, where I craft high-performance, scalable
            systems to enhance application functionality. With over four years
            of experience, I&apos;ve contributed to diverse projects, like
            optimizing APIs to cut response times by 90% and boosting therapist
            recruitment by 20% through targeted feature development. I&apos;ve
            also delivered innovative solutions for European research projects
            and implemented fraud detection algorithms for banking clients. My
            expertise spans AWS, Node.js, and TypeScript, and I thrive on
            creating multi-layered architectures and streamlining CI/CD
            pipelines. Whether it&apos;s improving uptime, reducing latency, or
            driving impactful results, I&apos;m passionate about building
            systems that make a difference. Let&apos;s connect and create
            something extraordinary!
          </h2>
        </div>
      </div>
    </div>
  );
}
