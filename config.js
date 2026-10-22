window.JARDIN={
titreSite:"Notre jardin secret",
couleurs:{creme:"#f7f5ed",foret:"#294a3c",sauge:"#dde4d5",rose:"#efdfd7"},
ordre:["accueil","souvenirs","lettre","raisons","surprise","portrait","fin"],
accueil:{titre:"[ÉCRIS ICI TON TITRE]",texte:"[ÉCRIS ICI TON MESSAGE]",bouton:"[TEXTE DU BOUTON]",photo:"photos/photo-couple-1.jpg",alt:"[DESCRIPTION DE VOTRE PHOTO]",placeholder:"[AJOUTER PHOTO 1]",legende:"[VOTRE LÉGENDE]"},
souvenirs:{titre:"Nos souvenirs",texte:"[INTRODUCTION À VOS SOUVENIRS]",items:Array.from({length:6},(_,i)=>({titre:"[TON TITRE]",date:"[DATE DU SOUVENIR]",texte:"[TON TEXTE PERSONNEL]",photo:"photos/souvenir-"+(i+1)+".jpg",alt:"[DESCRIPTION DU SOUVENIR "+(i+1)+"]",placeholder:"[AJOUTER PHOTO SOUVENIR "+(i+1)+"]"}))},
lettre:{titre:"[TON TITRE]",texte:"[ÉCRIS ICI TA LETTRE]",signature:"[TA SIGNATURE]"},
raisons:{titre:"Ce que j’aime chez toi",items:["[RAISON 1]","[RAISON 2]","[RAISON 3]","[RAISON 4]","[RAISON 5]","[RAISON 6]"]},
surprise:{titre:"Une petite surprise",avant:"[MESSAGE AVANT LA SURPRISE]",secret:"[TON MESSAGE SECRET]",ouvrir:"Ouvrir l’enveloppe",fermer:"Refermer l’enveloppe"},
portrait:{titre:"[TON TITRE]",texte:"[TON TEXTE]",photo:"photos/photo-finale.jpg",alt:"[DESCRIPTION DE VOTRE PLUS BELLE PHOTO]",placeholder:"[AJOUTER NOTRE PLUS BELLE PHOTO]"},
fin:{titre:"[TON TITRE FINAL]",texte:"[TON DERNIER MESSAGE]",signature:"[TON PRÉNOM OU SURNOM]",bouton:"[TEXTE DU BOUTON FINAL]"},
navigation:[{id:"souvenirs",texte:"Les souvenirs"},{id:"lettre",texte:"Les mots"},{id:"surprise",texte:"La surprise"}],
etiquettes:{accueil:"UN JARDIN RIEN QUE POUR TOI",souvenirs:"01 / LES INSTANTS PRÉCIEUX",lettre:"02 / QUELQUES MOTS POUR TOI",raisons:"03 / LES PETITS DÉTAILS",surprise:"04 / ENTRE NOUS",portrait:"05 / NOTRE PLUS BELLE IMAGE",fin:"POUR TON ANNIVERSAIRE"},
retour:"Revenir au début ↑"};