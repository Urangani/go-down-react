import React, { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="wa" className="wa__widget_container">
      <div className="wa__btn_popup" onClick={toggleChat}>
        <div className="wa__btn_popup_icon"></div>
        <div className="wa__btn_popup_txt">Chat with us</div>
      </div>
      <div className={`wa__popup_chat_box ${isOpen ? '' : 'hidden'}`}>
        <div className="wa__popup_heading">
          <div className="wa__popup_title">Go Down Herbs</div>
          <div className="wa__popup_intro">Typically replies instantly</div>
        </div>
        <div className="wa__popup_content">
          <div className="wa__popup_notice">Hi! Click one of our team members below to chat on WhatsApp</div>
          <div className="wa__popup_content_item">
            <a href="https://wa.me/27715336706" target="_blank" rel="noopener noreferrer">
              <div className="wa__popup_avatar">
                <img src="/assets/images/godown(logo).png" alt="Team Member" />
              </div>
              <div>
                <div className="wa__member_name">Support Team</div>
                <div className="wa__member_duty">Available now</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
