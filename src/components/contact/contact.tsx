import { Mail, Linkedin, Github } from "lucide-react";

interface ContactProps {
  className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
  const contactLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/benito-taccardi/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/bennytaccardi",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:benny.taccardi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className={`w-full px-4 py-4 md:px-8 ${className}`}>
      <div className="flex justify-center space-x-6 md:space-x-8">
        {contactLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 
                       transition-colors duration-300 
                       flex flex-col items-center 
                       group"
          >
            <Icon
              size={24}
              className="mb-1 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs opacity-70 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
