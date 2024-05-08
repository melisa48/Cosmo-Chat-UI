const ChatStyles = {
  textDisplayBackground: {
    backgroundColor: '#f5f5f5',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px',
    height: 'calc(100vh - 120px)',
    overflowY: 'auto',
  },
  textArea: {
    width: '100%',
    marginBottom: '16px',
  },
  endedChatContainer: {
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  endedChatDateContainer: {
    flex: '0 0 auto',
    marginRight: '16px',
  },
  endedChatDate: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666',
  },
  endedChatMessagesContainer: {
    flex: '1 1 auto',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  endedChatMessageContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: '16px',
  },
  endedChatMessage: {
    padding: '8px 12px',
    borderRadius: '8px',
    marginRight: '8px',
  },
  endedChatUserMessage: {
    backgroundColor: '#e0e0e0',
    color: '#333',
  },
  endedChatRexMessage: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  endedChatButtonContainer: {
    flex: '0 0 auto',
  },
  endedChatButton: {
    backgroundColor: '#ff0000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#cc0000',
    },
  },
  homeContainer: {
    padding: '40px',
    height: '100vh',
    overflowY: 'auto',
  },
  rexMessageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  rexMessageAvatarContainer: {
    marginRight: '16px',
  },
  rexMessageAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  rexMessageTextContainer: {
    backgroundColor: '#f0f0f0',
    padding: '8px 16px',
    borderRadius: '16px',
  },
  rexMessageText: {
    fontSize: '14px',
    lineHeight: '1.5',
  },
  userMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
  },
  userMessageTextContainer: {
    backgroundColor: '#007bff',
    padding: '8px 16px',
    borderRadius: '16px',
  },
  userMessageText: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#fff',
  },
};

export default ChatStyles;