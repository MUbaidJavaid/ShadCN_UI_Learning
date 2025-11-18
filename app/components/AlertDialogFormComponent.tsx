"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";

// 🧩 Define form data type
interface FormData {
  name: string;
  reason: string;
}

export function AlertDialogFormComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    reason: "",
  });
  const [responseMessage, setResponseMessage] = useState<string>("");

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      // ⚡ Replace this with your actual API endpoint
      const res = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("✅ Request submitted successfully!");
        setFormData({ name: "", reason: "" });
      } else {
        setResponseMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("⚠️ Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-accent text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
        Delete Account
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-background/60 backdrop-blur-2xl border border-accent/20 shadow-2xl rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <AlertDialogHeader className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-red-500 to-orange-400 mb-4 shadow-md">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold mb-2 text-foreground">
              Confirm Account Deletion
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed max-w-md mb-4">
              Please fill the form below before deleting your account.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* 🧾 Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-400/30 bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Reason for Deletion
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-400/30 bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Why do you want to delete your account?"
              />
            </div>

            {responseMessage && (
              <p className="text-center text-sm mt-2">{responseMessage}</p>
            )}

            <AlertDialogFooter className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <AlertDialogCancel className="px-5 py-2.5 rounded-lg border border-gray-400/30 hover:bg-gray-100/20 dark:hover:bg-gray-800/40 transition-all">
                Cancel
              </AlertDialogCancel>

              <AlertDialogAction
                type="submit"
                disabled={loading}
                className={`px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-red-400/30 transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Yes, Delete It"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </motion.div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
