"use client";

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

export function AlertDialogComponent() {
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
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed max-w-md">
              This action cannot be undone. This will permanently delete your
              account and remove all of your data from our servers. Please
              confirm that you understand the consequences.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <AlertDialogCancel className="px-5 py-2.5 rounded-lg border border-gray-400/30 hover:bg-gray-100/20 dark:hover:bg-gray-800/40 transition-all">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-red-400/30 transition-all">
              Yes, Delete It
            </AlertDialogAction>
          </AlertDialogFooter>
        </motion.div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
