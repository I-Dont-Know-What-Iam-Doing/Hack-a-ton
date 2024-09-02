

// const translations = {
//     en: {
//         headerTitle: 'Community Support Platform',
//         chatTitle: 'Community Chat',
//         alertsTitle: 'Emergency Alerts',
//         messagePlaceholder: 'Type a message',
//         sendButton: 'Send',
//         alert1: 'Emergency Alert: Severe weather warning in your area.',
//         alert2: 'Emergency Alert: Road closures due to accident.'
//     },
//     es: {
//         headerTitle: 'Plataforma de Apoyo Comunitario',
//         chatTitle: 'Chat Comunitario',
//         alertsTitle: 'Alertas de Emergencia',
//         messagePlaceholder: 'Escribe un mensaje',
//         sendButton: 'Enviar',
//         alert1: 'Alerta de Emergencia: Advertencia de clima severo en tu área.',
//         alert2: 'Alerta de Emergencia: Cierres de carreteras debido a un accidente.'
//     },
//     fr: {
//         headerTitle: 'Plateforme de Soutien Communautaire',
//         chatTitle: 'Chat Communautaire',
//         alertsTitle: 'Alertes d\'urgence',
//         messagePlaceholder: 'Tapez un message',
//         sendButton: 'Envoyer',
//         alert1: 'Alerte d\'urgence : Alerte météorologique sévère dans votre région.',
//         alert2: 'Alerte d\'urgence : Fermetures de routes en raison d\'un accident.'
//     }
//     // Add more languages as needed
// };


// document.addEventListener('DOMContentLoaded', () => {
//     const languageSelector = document.getElementById('language-selector');
//     const messagesDiv = document.getElementById('messages');
//     const messageInput = document.getElementById('message-input');
//     const sendButton = document.getElementById('send-button');
//     const alertsDiv = document.getElementById('alerts');
    
    // // Function to handle language change
    // languageSelector.addEventListener('change', () => {
    //     const selectedLanguage = languageSelector.value;
    //     // In a real application, you might load language-specific content here
    //     alert(`Language changed to ${selectedLanguage}`);
    // });

    // // Function to handle sending messages
    // sendButton.addEventListener('click', () => {
    //     const message = messageInput.value;
    //     if (message.trim()) {
    //         const messageElement = document.createElement('p');
    //         messageElement.textContent = message;
    //         messagesDiv.appendChild(messageElement);
    //         messageInput.value = '';
    //         messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to bottom
    //     }
    // });

//     // Example: Adding emergency alerts
//     function addEmergencyAlert(message) {
//         const alertElement = document.createElement('p');
//         alertElement.textContent = message;
//         alertsDiv.appendChild(alertElement);
//     }

//     // Example alerts
//     addEmergencyAlert('Emergency Alert: Severe weather warning in your area.');
//     addEmergencyAlert('Emergency Alert: Road closures due to accident.');
// });


// function updateContent(language) {
//     const texts = translations[language];
    
//     // Update header title
//     document.querySelector('header h1').textContent = texts.headerTitle;
    
//     // Update section titles
//     document.getElementById('chat').querySelector('h2').textContent = texts.chatTitle;
//     document.getElementById('emergency-alerts').querySelector('h2').textContent = texts.alertsTitle;
    
//     // Update placeholders and button text
//     document.getElementById('message-input').placeholder = texts.messagePlaceholder;
//     document.getElementById('send-button').textContent = texts.sendButton;
    
//     // Update alerts
//     const alertsDiv = document.getElementById('alerts');
//     alertsDiv.innerHTML = ''; // Clear existing alerts
//     addEmergencyAlert(texts.alert1);
//     addEmergencyAlert(texts.alert2);
// }

// // Event listener for language change
// document.getElementById('language-selector').addEventListener('change', (event) => {
//     const selectedLanguage = event.target.value;
//     updateContent(selectedLanguage);
// });

// // Set default language on page load
// document.addEventListener('DOMContentLoaded', () => {
//     updateContent('en'); // Default language
// });


// scripts.js






const translations = {
    en: {
        headerTitle: 'Community Support Platform',
        chatTitle: 'Community Chat',
        alertsTitle: 'Emergency Alerts',
        messagePlaceholder: 'Type a message',
        sendButton: 'Send',
        alert1: 'Emergency Alert: Severe weather warning in your area.',
        alert2: 'Emergency Alert: Road closures due to accident.'
    },
    ch: {
        headerTitle: '社区支持平台',
        chatTitle: '社区聊天',
        alertsTitle: '紧急警报',
        messagePlaceholder: '输入信息',
        sendButton: '发送',
        alert1: '紧急警报：您所在地区的严重天气警告。',
        alert2: '紧急警报：由于事故，道路封闭。'
    },
    my: {
        headerTitle: 'Platform Sokongan Komuniti',
        chatTitle: 'Sembang Komuniti',
        alertsTitle: 'Amaran Kecemasan',
        messagePlaceholder: 'Tulis mesej',
        sendButton: 'Hantar',
        alert1: 'Amaran Kecemasan: Amaran cuaca buruk di kawasan anda.',
        alert2: 'Amaran Kecemasan: Penutupan jalan akibat kemalangan.'
    },
    tm: {
        headerTitle: 'சமூக ஆதரவு தளம்',
        chatTitle: 'சமூக உரையாடல்',
        alertsTitle: 'அவசர அறிவிப்புகள்',
        messagePlaceholder: 'ஒரு செய்தியை பதிவிடுங்கள்',
        sendButton: 'அனுப்பு',
        alert1: 'அவசர அறிவிப்பு: உங்கள் பகுதியில் கடும் வானிலை எச்சரிக்கை.',
        alert2: 'அவசர அறிவிப்பு: விபத்தின் காரணமாக சாலை மூடப்பட்டது.'
    }

    
    // Add more languages as needed
};
// scripts.js

function updateContent(language) {
    const texts = translations[language];
    
    // Update header title
    document.querySelector('header h1').textContent = texts.headerTitle;
    
    // Update section titles
    document.getElementById('chat').querySelector('h2').textContent = texts.chatTitle;
    document.getElementById('emergency-alerts').querySelector('h2').textContent = texts.alertsTitle;
    
    // Update placeholders and button text
    document.getElementById('message-input').placeholder = texts.messagePlaceholder;
    document.getElementById('send-button').textContent = texts.sendButton;
    
    // Update alerts
    const alertsDiv = document.getElementById('alerts');
    alertsDiv.innerHTML = ''; // Clear existing alerts
    addEmergencyAlert(texts.alert1);
    addEmergencyAlert(texts.alert2);
}

function addEmergencyAlert(message) {
    const alertElement = document.createElement('p');
    alertElement.textContent = message;
    document.getElementById('alerts').appendChild(alertElement);
}
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    
    // Set default language
    const defaultLanguage = 'en'; // Default language
    updateContent(defaultLanguage);
    
    // Event listener for language change
    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateContent(selectedLanguage);
    });
});

