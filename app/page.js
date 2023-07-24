import FacebookConfig from "@/components/FacebookConfig";
import MessengerChat from "@/components/custom-chat/MessengerChat";

export default function Home() {
  return (
    <div>
      <h1>Messenger Chat Implement</h1>
      {/* <MessengerChat /> */}
      <FacebookConfig />
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
