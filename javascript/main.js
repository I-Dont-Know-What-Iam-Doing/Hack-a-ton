

const translations = {
    en: {
        headerTitle: 'Community Support Platform',
        chatTitle: 'Community Chat',
        alertsTitle: 'Emergency Alerts',
        messagePlaceholder: 'Type a message',
        sendButton: 'Send',
        dangerAlert: 'Emergency Alert: Severe weather warning in your area.'
    },
    ch: {
        headerTitle: '社区支持平台',
        chatTitle: '社区聊天',
        alertsTitle: '紧急警报',
        messagePlaceholder: '输入信息',
        sendButton: '发送',
        dangerAlert: '紧急警报：您所在地区的严重天气警告。'
    },
    my: {
        headerTitle: 'Platform Sokongan Komuniti',
        chatTitle: 'Sembang Komuniti',
        alertsTitle: 'Amaran Kecemasan',
        messagePlaceholder: 'Tulis mesej',
        sendButton: 'Hantar',
        dangerAlert: 'Amaran Kecemasan: Amaran cuaca buruk di kawasan anda.'
    },
    tm: {
        headerTitle: 'சமூக ஆதரவு தளம்',
        chatTitle: 'சமூக உரையாடல்',
        alertsTitle: 'அவசர அறிவிப்புகள்',
        messagePlaceholder: 'ஒரு செய்தியை பதிவிடுங்கள்',
        sendButton: 'அனுப்பு',
        dangerAlert: 'அவசர அறிவிப்பு: உங்கள் பகுதியில் கடும் வானிலை எச்சரிக்கை.'
    }
    // Add more languages as needed
};

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

    // Add the Danger alert
    addDangerAlert(texts.dangerAlert);
}

function addEmergencyAlert(message) {
    const alertElement = document.createElement('p');
    alertElement.textContent = message;
    document.getElementById('alerts').appendChild(alertElement);
}

function addDangerAlert(message) {
    const dangerAlertDiv = document.createElement('div');
    dangerAlertDiv.className = 'alert';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'closebtn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function () {
        this.parentElement.style.display = 'none';
    };

    const strongText = document.createElement('strong');
    strongText.textContent = 'Danger! ';

    dangerAlertDiv.appendChild(closeBtn);
    dangerAlertDiv.appendChild(strongText);
    dangerAlertDiv.appendChild(document.createTextNode(message.replace('Danger! ', '')));

    document.getElementById('alerts').appendChild(dangerAlertDiv);
}

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

