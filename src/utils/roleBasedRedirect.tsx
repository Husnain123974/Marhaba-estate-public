'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use from 'next/navigation' in Next.js 13+ App Router

interface RoleBasedRedirectProps {
  token: string;
  role: string;
}

export default function RoleBasedRedirect({ token, role }: RoleBasedRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (!token || !role) {
      router.push("/login");
    } else {
      switch (role) {
        case "ADMIN":
          router.push("/admin/new-property");
          break;
        case "AGENT":
          router.push("/agent");
          break;
        case "USER":
          router.push("/dashboard");
          break;
        default:
          router.push("/404");
      }
    }
  }, [token, role, router]);

  return null;
}
