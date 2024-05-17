import Profile from "@/components/global/Profile";
import Socials from "@/components/global/Socials";
import Timeline from "@/components/global/Timeline";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center z-1 p-10 lg:flex">
      <Profile/>
      <Separator className="my-4"/>
      <Timeline/>
    </main>
  );
}
