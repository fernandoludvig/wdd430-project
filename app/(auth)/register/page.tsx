"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";

import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (name && email && password) {
      router.push("/dashboard");
    } else {
      setError("Please fill in all fields");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">Join StudyHub and start collaborating</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <Input
              label="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1 rounded border-gray-300" />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}