import { useMemo, useState, useRef, useEffect } from "react";
import {
  Archive,
  Bell,
  Check,
  ChevronDown,
  FileText,
  Hash,
  Image,
  Menu,
  MoreHorizontal,
  Paperclip,
  Pencil,
  Phone,
  Plus,
  Search,
  Send,
  Settings,
  Smile,
  Sparkles,
  Star,
  Users,
  Video,
  X,
} from "lucide-react";

type Conversation = {
  id: number;
  name: string;
  initials: string;
  color: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
};

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Alex Morgan",
    initials: "AM",
    color: "bg-violet-500",
    preview: "That sounds like a plan!",
    time: "10:42 AM",
    online: true,
  },
];

const initialMessages = [
  {
    id: 1,
    from: "them",
    text: "Hey! Are we still on for the product sync this afternoon?",
    time: "10:35 AM",
  },
  {
    id: 2,
    from: "me",
    text: "Absolutely. I’ve put together a few ideas for the new onboarding flow.",
    time: "10:37 AM",
  },
  {
    id: 3,
    from: "them",
    text: "That sounds great! Could you walk me through them before the call?",
    time: "10:40 AM",
  },
  { id: 4, from: "me", text: "That sounds like a plan!", time: "10:42 AM" },
];

const Dashboard = () => {
  const [selectedId, setSelectedId] = useState(1); // Stores the selected conversation id
  const [query, setQuery] = useState(""); // Stores the query for individual searching
  const [message, setMessage] = useState(""); // Stores currently typed messaged
  const [messages, setMessages] = useState(initialMessages); // Stores message log
  const [showDetails, setShowDetails] = useState(true); // Toggles conversation details (right sidebar)
  const messagesEndRef = useRef<HTMLDivElement>(null); // Used for moving the conversation window down automatically

  // Determines which conversation log to display based on user input
  // Defaults to the first conversation log
  const selected =
    conversations.find((conversation) => conversation.id === selectedId) ??
    conversations[0];
  // Filters the conversations based on query
  const filteredConversations = useMemo(
    () =>
      conversations.filter((conversation) =>
        conversation.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  // Adds a new message to the 'messages' state
  const sendMessage = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    setMessages((current) => [
      ...current,
      { id: Date.now(), from: "me", text: trimmedMessage, time: "Just now" },
    ]);
    setMessage("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex min-h-screen bg-[#f7fafc] font-inter text-slate-900">
      <aside className="w-19 shrink-0 flex-col items-center justify-between bg-[#0b1725] py-6 text-slate-400 sm:flex">
        <div className="flex flex-col items-center gap-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#28b9e8] text-lg font-bold text-[#071521] shadow-lg shadow-cyan-500/20">
            C
          </div>
          <nav
            className="flex flex-col items-center gap-3"
            aria-label="Primary navigation"
          >
            <button
              className="rounded-xl bg-[#193348] p-3 text-[#48c9f1]"
              aria-label="Chats"
            >
              <Hash size={21} />
            </button>
            <button
              className="rounded-xl p-3 transition hover:bg-white/10 hover:text-white"
              aria-label="Activity"
            >
              <Bell size={21} />
            </button>
            <button
              className="rounded-xl p-3 transition hover:bg-white/10 hover:text-white"
              aria-label="People"
            >
              <Users size={21} />
            </button>
            <button
              className="rounded-xl p-3 transition hover:bg-white/10 hover:text-white"
              aria-label="Files"
            >
              <FileText size={21} />
            </button>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            className="rounded-xl p-3 transition hover:bg-white/10 hover:text-white"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#28b9e8] text-xs font-bold text-[#071521]">
            MS
          </div>
        </div>
      </aside>

      <section className="flex w-full min-w-0 flex-col border-r border-slate-200 bg-white sm:w-72.5">
        <header className="border-b border-slate-100 px-5 pb-5 pt-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1ba8d5]">
                Workspace
              </p>
              <h1 className="mt-1 text-xl font-bold tracking-tight">
                Messages
              </h1>
            </div>
            <button
              className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-[#28b9e8] hover:text-[#159bc8]"
              aria-label="New message"
            >
              <Pencil size={17} />
            </button>
          </div>
          <label className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-slate-400 focus-within:ring-2 focus-within:ring-cyan-200">
            <Search size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search conversations"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search">
                <X size={15} />
              </button>
            )}
          </label>
        </header>
        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Recent chats
          </p>
        </div>
        <div className="space-y-1 px-3">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedId(conversation.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-3 text-left transition ${selectedId === conversation.id ? "bg-[#eaf9fd]" : "hover:bg-slate-50"}`}
            >
              <div
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${conversation.color}`}
              >
                {conversation.initials}
                {conversation.online && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
                )}
              </div>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span
                    className={`truncate text-sm font-semibold ${selectedId === conversation.id ? "text-slate-900" : "text-slate-700"}`}
                  >
                    {conversation.name}
                  </span>
                  <span className="shrink-0 text-[10px] text-slate-400">
                    {conversation.time}
                  </span>
                </span>
                <span className="mt-1 flex items-center justify-between gap-2">
                  <span className="truncate text-xs text-slate-400">
                    {conversation.preview}
                  </span>
                  {conversation.unread && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#28b9e8] px-1 text-[10px] font-bold text-white">
                      {conversation.unread}
                    </span>
                  )}
                </span>
              </span>
            </button>
          ))}
          {filteredConversations.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-slate-400">
              No conversations found
            </p>
          )}
        </div>
        <button className="mx-5 mt-auto mb-6 flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-semibold text-slate-500 transition hover:border-[#28b9e8] hover:text-[#159bc8]">
          <Plus size={16} /> Start a conversation
        </button>
      </section>

      <main className="flex min-w-0 flex-1 flex-col bg-[#fafdfe]">
        <header className="flex min-h-19.5 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 sm:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${selected.color}`}
            >
              {selected.initials}
            </div>
            <div className="min-w-0">
              <h2 className="truncate font-bold">{selected.name}</h2>
              <p className="flex items-center gap-1 text-xs text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{" "}
                Active now
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <button
              className="hidden rounded-lg p-2.5 hover:bg-slate-100 hover:text-[#159bc8] sm:block"
              aria-label="Start video call"
            >
              <Video size={19} />
            </button>
            <button
              className="hidden rounded-lg p-2.5 hover:bg-slate-100 hover:text-[#159bc8] sm:block"
              aria-label="Start audio call"
            >
              <Phone size={18} />
            </button>
            <button
              onClick={() => setShowDetails((current) => !current)}
              className={`rounded-lg p-2.5 hover:bg-slate-100 hover:text-[#159bc8] ${showDetails ? "text-[#159bc8]" : ""}`}
              aria-label="Toggle conversation details"
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
        </header>

        <div className="flex flex-1">
          <section className="flex min-w-0 flex-1 flex-col">
            <div className="h-[calc(75vh-(--spacing(19.5)))] overflow-y-auto">
              <div className="flex flex-col justify-end flex-1 space-y-5 px-5 py-6 sm:px-10">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  <span className="h-px flex-1 bg-slate-200" />
                  Today
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                {messages.map((currentMessage) => (
                  <div
                    key={currentMessage.id}
                    className={`flex items-end gap-2 ${currentMessage.from === "me" ? "justify-end" : ""}`}
                  >
                    {currentMessage.from === "them" && (
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${selected.color}`}
                      >
                        {selected.initials}
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] ${currentMessage.from === "me" ? "items-end" : "items-start"} flex flex-col`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${currentMessage.from === "me" ? "rounded-br-sm bg-[#d9f5fc] text-slate-800" : "rounded-bl-sm bg-white text-slate-700 shadow-sm ring-1 ring-slate-100"}`}
                      >
                        {currentMessage.text}
                      </div>
                      <span className="mt-1 px-1 text-[10px] text-slate-400">
                        {currentMessage.time}{" "}
                        {currentMessage.from === "me" && (
                          <Check
                            className="ml-1 inline text-[#20accf]"
                            size={12}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>
            </div>
            <div className="border-t border-slate-200 bg-white p-4 sm:px-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-[#55c9e8] focus-within:ring-2 focus-within:ring-cyan-100">
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Write a message..."
                  rows={2}
                  className="w-full resize-none bg-transparent px-2 py-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-slate-400">
                    <button
                      className="rounded-lg p-1.5 hover:bg-white hover:text-[#159bc8]"
                      aria-label="Attach file"
                    >
                      <Paperclip size={17} />
                    </button>
                    <button
                      className="rounded-lg p-1.5 hover:bg-white hover:text-[#159bc8]"
                      aria-label="Add emoji"
                    >
                      <Smile size={17} />
                    </button>
                  </div>
                  <button
                    onClick={sendMessage}
                    className="flex items-center gap-2 rounded-xl bg-[#1bb3dc] px-4 py-2 text-xs font-bold text-white shadow-sm shadow-cyan-200 transition hover:bg-[#129fc7]"
                  >
                    Send <Send size={14} />
                  </button>
                </div>
              </div>
              <p className="mt-2 hidden text-center text-[10px] text-slate-400 sm:block">
                Press Enter to send · Shift + Enter for a new line
              </p>
            </div>
          </section>

          {showDetails && (
            <aside className="hidden w-62.5 shrink-0 border-l border-slate-200 bg-white px-5 py-7 lg:block">
              <div className="text-center">
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white ${selected.color}`}
                >
                  {selected.initials}
                </div>
                <h3 className="mt-3 font-bold">{selected.name}</h3>
                <p className="mt-1 text-xs text-slate-400">
                  @{selected.name.toLowerCase().replace(" ", "")}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <button
                    className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:text-[#159bc8]"
                    aria-label="Call"
                  >
                    <Phone size={16} />
                  </button>
                  <button
                    className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:text-[#159bc8]"
                    aria-label="Video call"
                  >
                    <Video size={16} />
                  </button>
                  <button
                    className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:text-[#159bc8]"
                    aria-label="Star conversation"
                  >
                    <Star size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Shared files
                  </p>
                  <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-2.5">
                    <div className="rounded-md bg-rose-100 p-2 text-rose-500">
                      <Image size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold">
                        Onboarding-flow.png
                      </p>
                      <p className="text-[10px] text-slate-400">2.4 MB</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Conversation
                  </p>
                  <button className="flex w-full items-center justify-between py-2 text-xs text-slate-500 hover:text-slate-900">
                    Mute notifications <Bell size={15} />
                  </button>
                  <button className="flex w-full items-center justify-between py-2 text-xs text-slate-500 hover:text-slate-900">
                    Search in chat <Search size={15} />
                  </button>
                  <button className="flex w-full items-center justify-between py-2 text-xs text-slate-500 hover:text-slate-900">
                    Archive chat <Archive size={15} />
                  </button>
                </div>
              </div>
              <div className="mt-8 rounded-xl bg-[#effbfe] p-3">
                <div className="flex items-center gap-2 text-[#159bc8]">
                  <Sparkles size={15} />
                  <span className="text-xs font-bold">Chatlify Pro</span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                  Unlock smarter conversations and unlimited history.
                </p>
                <button className="mt-3 text-[11px] font-bold text-[#159bc8]">
                  Learn more{" "}
                  <ChevronDown className="ml-1 inline -rotate-90" size={13} />
                </button>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
