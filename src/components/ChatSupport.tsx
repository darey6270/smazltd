import { MessageCircle, X, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! Welcome to Smaz quantum horizon limited (SQH Limited). How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const quickResponses = [
    'Get a quote',
    'View services',
    'Schedule Meeting with us',
    'Contact information'
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: 'Thank you for your message! One of our team members will respond shortly. In the meantime, you can call us at +2348074580690.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickResponse = (response: string) => {
    setMessage(response);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '++2348189613430';
    const message = encodeURIComponent('Hi, I\'m interested in Smaz quantum horizon limited (SQH Limited)\'s construction services. Can you provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center gap-2 px-5 group"
            title="Chat on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.227l-.356.214-3.71-.974.992 3.802-.235.374a9.861 9.861 0 001.516 5.394c.375.552.823 1.053 1.342 1.494.52.441 1.044.799 1.554 1.087 2.663 1.495 5.067 1.39 5.909 1.226 1.75-.289 3.285-.944 4.411-1.996 1.126-1.053 1.846-2.267 2.111-3.661.264-1.425.2-2.894-.191-4.286-.392-1.39-1.019-2.61-1.708-3.568-.69-.958-1.56-1.711-2.491-2.273-.93-.56-2.009-.905-3.122-.958zm8.48-1.122c1.396.064 2.78.189 4.15.389 1.37.2 2.169.523 2.727 1.627.558 1.104.558 2.926.28 5.369-.278 2.443-1.173 4.763-2.397 6.769-1.223 2.007-2.7 3.645-4.304 4.872-1.604 1.227-3.454 1.954-5.338 2.158-1.884.204-3.78.115-5.574-.267-1.795-.382-3.427-1.124-4.701-2.235-1.274-1.111-2.132-2.546-2.558-4.237-.426-1.691-.426-3.464 0-5.155.425-1.691 1.284-3.126 2.558-4.237 1.274-1.111 2.906-1.853 4.701-2.235 1.794-.382 3.69-.471 5.574-.267z"/>
            </svg>
            <span className="text-sm font-medium hidden group-hover:inline">WhatsApp</span>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all hover:scale-110"
            title="Chat with us"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-white font-bold">Smaz quantum horizon limited (SQH Limited) Support</h3>
                <p className="text-amber-100 text-xs">We typically reply in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-amber-800 p-1 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-amber-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-gray-200 space-y-3">
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickResponse(response)}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-amber-100 hover:text-amber-700 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.227l-.356.214-3.71-.974.992 3.802-.235.374a9.861 9.861 0 001.516 5.394c.375.552.823 1.053 1.342 1.494.52.441 1.044.799 1.554 1.087 2.663 1.495 5.067 1.39 5.909 1.226 1.75-.289 3.285-.944 4.411-1.996 1.126-1.053 1.846-2.267 2.111-3.661.264-1.425.2-2.894-.191-4.286-.392-1.39-1.019-2.61-1.708-3.568-.69-.958-1.56-1.711-2.491-2.273-.93-.56-2.009-.905-3.122-.958zm8.48-1.122c1.396.064 2.78.189 4.15.389 1.37.2 2.169.523 2.727 1.627.558 1.104.558 2.926.28 5.369-.278 2.443-1.173 4.763-2.397 6.769-1.223 2.007-2.7 3.645-4.304 4.872-1.604 1.227-3.454 1.954-5.338 2.158-1.884.204-3.78.115-5.574-.267-1.795-.382-3.427-1.124-4.701-2.235-1.274-1.111-2.132-2.546-2.558-4.237-.426-1.691-.426-3.464 0-5.155.425-1.691 1.284-3.126 2.558-4.237 1.274-1.111 2.906-1.853 4.701-2.235 1.794-.382 3.69-.471 5.574-.267z"/>
              </svg>
              <span>Contact via WhatsApp</span>
            </button>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
