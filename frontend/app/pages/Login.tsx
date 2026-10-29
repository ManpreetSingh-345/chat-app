import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <main className="flex min-h-[calc(100vh-7rem)] w-full items-center justify-center px-5 py-10 text-white">
        <section className="w-full max-w-md rounded-2xl border border-[#38bdf8]/50 bg-black/75 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-md sm:p-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#38bdf8]">
              Welcome to Chatlify
            </p>
            <h1 className="text-3xl font-bold">Log in to your account</h1>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username/Email
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Username or Email Address"
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
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg border border-[#38bdf8] bg-[#38bdf8] px-4 py-3 font-semibold text-slate-950 transition hover:bg-transparent hover:text-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-300">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#38bdf8] no-underline hover:underline"
            >
              Sign up
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
