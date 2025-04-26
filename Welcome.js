

function Welcome(language){

  let languages = {
    "English": "Welcome",
    "Arabic": "أهلاً وسهلاً",
    "French": "Bienvenue",
    "Spanish": "Bienvenido",
    "German": "Willkommen",
    "Italian": "Benvenuto",
    "Chinese": "欢迎",
    "Japanese": "ようこそ",
    "Korean": "환영합니다",
    "Russian": "Добро пожаловать",
    "Hindi": "स्वागत है",
    "Turkish": "Hoş geldiniz",
    "Portuguese": "Bem-vindo",
    "Greek": "Καλώς ήρθατε",
    "Swahili": "Karibu"
  }

  if(languages.hasOwnProperty(language)){
    return languages[language];
  }
  else{
    return languages[English];
  }

}


console.log(Welcome("German"));