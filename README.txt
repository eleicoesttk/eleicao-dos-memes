ELEIÇÃO DOS MEMES — PROJETO NOVO

O QUE JÁ TEM
- Interface responsiva com visual neon vermelho/azul.
- Cronômetro de 2 minutos: iniciar, pausar e reiniciar.
- Contadores de votos de demonstração.
- Exportação do resultado para TXT.
- Servidor Node/Express e Socket.IO inicial para preparar placar compartilhado.

IMPORTANTE
A versão inicial da página é um protótipo visual. Os botões de teste funcionam no navegador, mas ainda não sincronizam com o servidor público.
A integração com presentes reais do TikTok NÃO está ativada neste pacote. Ela precisa ser feita e testada separadamente no backend, porque o site do navegador não recebe diretamente eventos de presentes e bibliotecas não oficiais podem parar de funcionar. Não coloque cookies, senhas ou tokens da sua conta no site público.
Este projeto não processa pagamentos nem recebe dinheiro.

TESTE LOCAL NO WINDOWS
1. Instale Node.js LTS de nodejs.org.
2. Extraia a pasta do ZIP.
3. Abra a pasta no Explorador.
4. Clique na barra de endereço, digite cmd e pressione Enter.
5. Execute: npm install
6. Execute: npm start
7. Abra http://localhost:3000

PUBLICAR NA INTERNET
Você precisará hospedar o serviço Node em uma plataforma que suporte aplicações Node.js e WebSockets (por exemplo, um serviço de hospedagem de aplicações). Depois, configure o comando de início `npm start` e use a porta fornecida pela plataforma.
Não publique o diretório com segredos ou credenciais.

PRÓXIMA ETAPA
Depois que o site estiver publicado, conectar a página ao Socket.IO e criar um adaptador de eventos de presentes no backend. O mapeamento pretendido é:
- Rose / Rosa → +1 voto para Lula
- White Rose / Rosa branca → +1 voto para Flávio Bolsonaro
Os nomes exatos dos presentes precisam ser confirmados com eventos reais da LIVE.


NÚMEROS DOS CANDIDATOS
- Lula: 13
- Flávio Bolsonaro: 22

ATUALIZAÇÃO VISUAL: inclui ilustração dos candidatos e retratos animados nos cartões do placar. A imagem do banner contém elementos decorativos e números ilustrativos; os números e contadores funcionais são os da interface.
