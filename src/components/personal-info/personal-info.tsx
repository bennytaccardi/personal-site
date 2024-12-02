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
              Short personal description of what I do in my daily job
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
            Hey folks! My name is Benny (Benito) Taccardi and I&apos;m a backend
            and full-stack software engineer with a passion in learning new tech
            stuff. Currently, I&apos;m involved in backend software engineering
            at Unobravo, where I use NodeJS. My main role is to develop complex
            cloud backend architectures using various AWS services. Over the
            past few years, I worked on full-stack systems using Java
            (SpringBoot), Python (FastAPI), Angular, React and Docker as part of
            my technological stack.
          </h2>
        </div>
      </div>
    </div>
  );
}
