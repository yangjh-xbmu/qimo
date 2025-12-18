import { useState, useCallback } from 'react';
import { personalInfo, works, experiences, scholars } from '../data';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 'welcome',
        text: `你好！我是${personalInfo.name}的AI助手。我们可以聊聊关于戏剧、电影创作，或者我的作品与经历。`,
        sender: 'ai',
        timestamp: new Date(),
      }
    ],
    isLoading: false,
    error: null,
  });

  const validateTopic = (text: string): boolean => {
    // 基础关键词验证
    const keywords = [
      personalInfo.name,
      '戏剧', '影视', '电影', '导演', '编剧', '作品', '经历', '联系', '理念', '艺术',
      'drama', 'film', 'movie', 'theatre', 'theater', 'art', 'director', 'writer',
      ...works.map(w => w.title),
      ...experiences.map(e => e.title),
      ...scholars.map(s => s.name),
    ];
    
    // 添加一些通用词汇，避免误判，但要保持在专业范围内
    const generalKeywords = ['你好', 'hello', 'hi', '是谁', '介绍', 'who', 'what'];
    
    const allKeywords = [...keywords, ...generalKeywords];
    
    const lowerText = text.toLowerCase();
    return allKeywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isLoading: true,
      error: null,
    }));

    // 前端话题验证
    if (!validateTopic(text)) {
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              id: (Date.now() + 1).toString(),
              text: "抱歉，作为林悦然的AI助手，我专注于回答关于她的作品、经历及戏剧影视专业相关的问题。我们可以聊聊她的《回声之间》或《镜面剧场》等作品。",
              sender: 'ai',
              timestamp: new Date(),
            }
          ],
          isLoading: false,
        }));
      }, 600);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            id: (Date.now() + 1).toString(),
            text: data.reply,
            sender: 'ai',
            timestamp: new Date(),
          }
        ],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Chat error:', error);
      setState(prev => ({
        ...prev,
        error: '抱歉，发送消息时出现了错误，请稍后重试。',
        isLoading: false,
      }));
    }
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
  };
};
