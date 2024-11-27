# DevMobile

Desenvolvimento de dispositivos móveis

# Dependências Essenciais e de Infraestrutura

@expo/metro-runtime: Fornece o motor de bundling (Metro) que transforma seu código JavaScript em um formato executável para dispositivos móveis.

react e react-dom: Bibliotecas básicas do React para construir interfaces de usuário.

react-native: Essa biblioteca fornece os componentes e APIs essenciais para criar interfaces nativas em dispositivos iOS e Android usando React.

# Dependências do Expo

expo: Oferece ferramentas e APIs para desenvolver, testar e publicar seus aplicativos React Native de forma mais rápida e fácil.

expo-local-authentication: Permite que você implemente autenticação biométrica (Face ID, Touch ID) no seu aplicativo.

expo-status-bar: Controla a aparência da barra de status (a área superior da tela) em dispositivos iOS e Android.

# Navegação

@react-navigation/native: Ela oferece componentes como pilhas de navegação (stacks), abas (tabs) e gavetas (drawers).

@react-navigation/native-stack: Focada em implementar a navegação em pilhas, onde as telas são empilhadas uma sobre a outra.

@react-navigation/stack: Uma versão mais antiga da biblioteca de pilhas de navegação, que pode ser utilizada em projetos mais antigos ou com requisitos específicos.

# Armazenamento e Gestão de Dados

@react-native-async-storage/async-storage: Permite armazenar dados de forma simples e assíncrona no dispositivo, como configurações do usuário ou dados de login.

react-native-dotenv: Uma ferramenta útil para gerenciar variáveis de ambiente de forma segura, como chaves de API e outros segredos.

# Interface do Usuário e Estilo

react-native-vector-icons: Permite utilizar ícones vetoriais personalizados em seu aplicativo.

react-native-safe-area-context: Ajuda a lidar com as áreas seguras da tela.

react-native-screens: Otimiza as transições entre telas e melhora o desempenho em aplicativos maiores.

# Outras Dependências

@react-native-picker/picker: Um componente nativo para criar seletores (pickers) onde o usuário pode escolher uma opção de uma lista.

react-native-modal-datetime-picker: Um componente modal para selecionar datas e horários.

react-native-web: Permite executar seu aplicativo React Native em um navegador web, facilitando o desenvolvimento e os testes.

firebase: Uma biblioteca para integrar serviços do Firebase, como autenticação, banco de dados em tempo real e armazenamento em nuvem, ao seu aplicativo.

# Objetivo de cada arquivo

firebaseConfig.js (Nosso banco de dados firestore)

AuthContext.js (Gerenciamento das funções de autenticação)

CartoesEstudoContext.js (Gerenciamento do contexto dos cartões criados no app)

EdicaoCartaoSreen.js (Tela para criar ou editar cartões de estudo)

ListaCartaoScreen.js (Tela principal para exibição de cartões de estudo)

LoginScreen.js (Tela de login, para o usuário preencher email e senha)

RegistroScreen.js (Tela de registro, para que o usuário possa criar uma conta com email e senha)

TarefasVencimentoProximoScreen.js (Tela para exibir as tarefas próximas do vencimento)

App.js (Configura e gerencia as rotas do aplicativo)

##

**ReadMe com screenshots o aplicativo study-app**

Tela de Login

![telaLogin](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/01login.png)

![loginRealizado](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/02login-realizado.png)

![editarCartao](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/03editar-cartao.png)

![editarData](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/04editar-data.png)

![editarHora](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/05editar-hora.png)

![cartaoAdicionado](https://github.com/mharteux/DevMobile/blob/main/study-app/Img-readme/06cartao-adicionado.png)
