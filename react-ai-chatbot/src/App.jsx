import { useState } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import Controls from "./components/Controls/Controls";

function App() {
  const [messages, setMessages] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="chat bot" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  );
}

const MESSAGES = [
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis quo debitis illum commodi deserunt laboriosam nesciunt beatae eveniet voluptatum dicta aliquam, mollitia autem quae eos accusamus ab iste nihil?",
  },
];

export default App;
