"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md pt-12 mx-auto stretch h-screen">
      <div className="w-full h-5/6 overflow-y-auto flex flex-col gap-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className="whitespace-pre-wrap"
          >
            <span className="font-bold">
              {m.role === "user"
                ? "User: "
                : "AI: "}
            </span>
            {m.content}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="h-1/6 w-full flex items-center justify-center gap-4"
      >
        <input
          className={`py-2 px-4 text-black w-full rounded 
          focus:outline-none focus:ring-2 focus:ring-zinc-400 
          focus:ring-offset-2 focus:zinc-offset-zinc-50`}
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button className={`inline-flex py-2 animate-shimmer items-center justify-center 
        rounded border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-6 font-medium text-zinc-400 transition-colors focus:outline-none 
        focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:zinc-offset-zinc-50`}>
          Send
        </button>
      </form>
    </div>
  );
}
