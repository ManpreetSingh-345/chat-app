import { Link } from "react-router";
import api from "../api/api";
import { useState } from "react";
import { type User } from "../interfaces/User";

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(userCredentials);

    if (userCredentials.password !== confirmPassword) {
      alert("Passwords don't match");
    }

    api
      .post("/users/new", userCredentials)
      .then(() => console.log("Request worked"));
  };

  return (
    <div>
      <main className="flex min-h-[calc(100vh-7rem)] w-full items-center justify-center px-5 py-10 text-white">
        <section className="w-full max-w-md rounded-2xl border border-[#38bdf8]/50 bg-black/75 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-md sm:p-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#38bdf8]">
              Welcome to Chatlify
            </p>
            <h1 className="text-3xl font-bold">Create your account</h1>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Choose a username"
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    username: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                placeholder="At least 8 characters"
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    password: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                placeholder="Re-enter your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/30"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-slate-300">
              <input
                name="terms"
                type="checkbox"
                required
                className="mt-1 accent-[#38bdf8]"
              />
              <span>
                I agree to the Chatlify terms of service and privacy policy.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg border border-[#38bdf8] bg-[#38bdf8] px-4 py-3 font-semibold text-slate-950 transition hover:bg-transparent hover:text-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#38bdf8] no-underline hover:underline"
            >
              Log in
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Signup;
