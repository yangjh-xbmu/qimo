import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChatInterface from '../ChatInterface';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock useChat hook
const mockSendMessage = vi.fn();
const mockMessages = [
  { id: '1', text: 'Hello', sender: 'ai' }
];

vi.mock('../../hooks/useChat', () => ({
  useChat: () => ({
    messages: mockMessages,
    isLoading: false,
    error: null,
    sendMessage: mockSendMessage,
  }),
}));

describe('ChatInterface', () => {
  it('renders toggle button initially', () => {
    render(<ChatInterface />);
    const toggleButton = screen.getByLabelText('打开AI助手');
    expect(toggleButton).toBeInTheDocument();
  });

  it('opens chat window when toggle button is clicked', () => {
    render(<ChatInterface />);
    const toggleButton = screen.getByLabelText('打开AI助手');
    
    fireEvent.click(toggleButton);
    
    const chatWindow = screen.getByRole('dialog');
    expect(chatWindow).toBeInTheDocument();
    expect(screen.getByText('AI 助手')).toBeInTheDocument();
  });

  it('closes chat window when close button is clicked', () => {
    render(<ChatInterface />);
    
    // Open first
    const toggleButton = screen.getByLabelText('打开AI助手');
    fireEvent.click(toggleButton);
    
    // Find close button
    const closeButton = screen.getByLabelText('关闭对话窗口');
    fireEvent.click(closeButton);
    
    // Chat window should be gone
    const chatWindow = screen.queryByRole('dialog');
    expect(chatWindow).not.toBeInTheDocument();
  });
});
