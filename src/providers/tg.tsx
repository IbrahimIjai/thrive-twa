"use client";
import { useBaseStore } from "@/store/tg";
import Script from "next/script";
import { useEffect } from "react";
import { useStore } from "zustand";

export default function TelegramProvider() {
  const setTg = useBaseStore((state) => state.setTg);
  useEffect(() => {
    console.log("useTelegram");
    function initTg() {
      if (
        typeof window !== "undefined" &&
        window?.Telegram &&
        window?.Telegram.WebApp
      ) {
        console.log("Telegram WebApp is set");
        const tgData = window.Telegram.WebApp;
        setTg(tgData);
      } else {
        console.log("Telegram WebApp is undefined, retrying…");
        setTimeout(initTg, 500);
      }
    }
    initTg();
  }, []);
  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" defer />
    </>
  );
}
