"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import SectionContainer from "./ui/SectionContainer";
import AnimatedSection from "./ui/AnimatedSection";

interface SocialLink {
  platform: "twitter" | "linkedin" | "github" | "dribbble";
  url: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

interface TeamProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

export default function Team({ title, subtitle, members }: TeamProps) {
  return (
    <SectionContainer id="team">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
            data-testid="team-member"
          >
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid="team-photo"
              />
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  {member.socialLinks.map((link) => {
                    const Icon = socialIcons[link.platform];
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                        data-testid="social-link"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900" data-testid="team-name">
              {member.name}
            </h3>
            <p className="text-gray-600" data-testid="team-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
