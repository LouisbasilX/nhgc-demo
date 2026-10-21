"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type ToastType = "success" | "info" | "warning";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3200);
    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-24 md:bottom-8 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`animate-slide-up pointer-events-auto rounded-lg px-4 py-3 shadow-lg border text-sm font-medium flex items-start gap-3 ${
              t.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : t.type === "warning"
                ? "bg-amber-50 border-amber-200 text-amber-900"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <span className="mt-0.5">
              {t.type === "success" ? "✓" : t.type === "warning" ? "!" : "i"}
            </span>
            <span className="flex-1">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
