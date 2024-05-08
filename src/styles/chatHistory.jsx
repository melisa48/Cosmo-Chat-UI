const ChatHistoryStyles = {
     container: {
       backgroundColor: '#f5f5f5',
       padding: '16px',
       borderRadius: '8px',
       marginBottom: '16px',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     dateContainer: {
       flex: '0 0 auto',
       marginRight: '16px',
     },
     date: {
       fontSize: '14px',
       fontWeight: 'bold',
       color: '#666',
     },
     lastTextContainer: {
       flex: '1 1 auto',
       overflow: 'hidden',
       textOverflow: 'ellipsis',
       whiteSpace: 'nowrap',
     },
     lastText: {
       fontSize: '14px',
       color: '#333',
     },
     buttonContainer: {
       flex: '0 0 auto',
     },
     deleteButton: {
       backgroundColor: '#ff0000',
       color: '#fff',
       '&:hover': {
         backgroundColor: '#cc0000',
       },
     },
   };
   
   export default ChatHistoryStyles;