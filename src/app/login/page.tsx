'use client';
import { logInWithEmailAndPassword } from '@/services/auth';
import { IconBrandGmail, IconBrandGoogle } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {}, []);

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(user);
    console.log(formJson);
    logInWithEmailAndPassword(user.email, user.password);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:max-w-3xl py-8 md:py-12 lg:py-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center mb-8">
            Sign in to your account
          </h2>
          <div className="form-control">
            <button className="btn btn-outline btn-block">
              <IconBrandGmail /> Continue with Gmail
            </button>
          </div>
          <div className="divider">OR</div>
          <form id="auth-sign-in" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label className="label">
                <a
                  href="#auth-forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot your password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-sm">
              Don&apos;t have an account?{' '}
              <a href="#auth-sign-up" className="link link-hover">
                Sign up for free
              </a>
            </span>
          </div>
          <div className="text-center text-xs mt-6">
            <span>
              By proceeding, you agree to My Quotes&apos;s
              <a href="/legal/terms" className="link link-hover">
                {' '}
                Terms of Service
              </a>{' '}
              and
              <a href="/legal/privacy-policy" className="link link-hover">
                {' '}
                Privacy Policy
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
