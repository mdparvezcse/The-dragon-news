
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const form = e.target;

    const name = form.name.value.trim();
    const photoUrl = form.photoUrl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // 1. Name validation
    if (name.length < 2) {
      setError("Name must contain at least 2 characters.");
      return;
    }

    // 2. Photo URL validation
    try {
      const url = new URL(photoUrl);

      if (!["http:", "https:"].includes(url.protocol)) {
        setError("Photo URL must use HTTP or HTTPS.");
        return;
      }
    } catch {
      setError("Please enter a valid photo URL.");
      return;
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // 4. Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password needs 6+ characters, uppercase, lowercase, a number and a special character."
      );
      return;
    }

    // 5. Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 6. Firebase registration
    try {
      setLoading(true);

      const result = await createUser(email, password);

      // Update Firebase profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      // Update React user state
      setUser(result.user);

      setSuccess("Registration successful!");

      form.reset();
      setShowPassword(false);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please try again.");
      } else {
        setError(error.message || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl pt-3 text-center">
          Register Your Account
        </h2>

        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
                minLength={2}
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photoUrl"
                className="input w-full"
                placeholder="https://example.com/photo.jpg"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                autoComplete="email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full"
                placeholder="Password"
                autoComplete="new-password"
                required
              />

              {/* Show Password */}
              <label className="flex gap-2 items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={showPassword}
                  onChange={(e) =>
                    setShowPassword(e.target.checked)
                  }
                />
                Show password
              </label>

              {/* Confirm Password */}
              <label className="label">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                className="input w-full"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />

              {/* Error Message */}
              {error && (
                <p className="text-error text-sm mt-2" role="alert">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {success && (
                <p className="text-success text-sm mt-2" role="status">
                  {success}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-neutral mt-4"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <p className="pt-3">
                Already have an account? Please{" "}
                <span className="text-secondary underline font-bold">
                  <Link to="/auth/login">Login</Link>
                </span>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
