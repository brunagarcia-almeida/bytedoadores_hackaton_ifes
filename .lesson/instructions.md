# Briefing para realização do desafio: Plataforma de Doação de Alimentos

### Requisitos

1. Elabore um nome para o site de acordo com a proposta do tema:  "Plataforma de Doação de Alimentos";
2. Elabore conteúdos para o site, como um slogan, textos descritivos e meios de contato fictícios como telefone e e-mail. Opcionalmente elabore conteúdos multimídia para o site, como imagens e vídeos, ou escolha conteúdos de repositórios livres condizentes com a proposta do desafio;
3. A concepção das características visuais também faz parte do desafio. Deverão ser elaborados logotipo, paleta de cores, fontes, e estilo das páginas e componentes de maneira harmoniosa com a temática do site;
4.  O site deve ter um design e layout intuitivos que permitam aos usuários navegar facilmente; 
5. O site deve ser responsivo e compatível com os principais navegadores e resoluções de tela;
6. O site deve ser desenvolvido usando HTML, CSS e JavaScript, podendo ou não utilizar Bootstrap;
7. O site deve utilizar as logotipos do Ifes, da Action e do Reprograme-se disponíveis no diretório /assets do repositório no repl.it.
8. A organização das páginas do site é livre, podendo ser construído em apenas uma ou em mais páginas. Além das páginas, a organização dos componentes e seções também é livre, exceto pelas áreas obrigatórias elencadas a seguir;
9. O site deverá ter uma área institucional onde contenham informações descritivas sobre a plataforma como, por exemplo, sua motivação, atuação e história;
10. O site deverá ter uma área de depoimentos dos usuários. Cada depoimento deverá ter uma identificação deste usuário e seu relato;
11. O site deverá ter uma área de contato evidenciando os canais de comunicação e também disponibilizando um formulário para contato. As mensagens devem ser enviadas utilizando o recurso mailto para um e-mail institucional da sua plataforma;
12. O site deverá ter uma área onde serão apresentados todos os receptores de doações, que podem ser ONG's, instituições de caridade, etc. Estes receptores devem ser apresentados de duas formas: Listagem (todos) e individualmente com mais detalhes. Além da exibição, implemente também um formulário de cadastro de receptores; Os seguintes campos são obrigatórios para o cadastro e exibição: ID (identificador único), nome do receptor, descrição, e-mail, telefone, endereço e imagem (Utilize links de imagens disponíveis no cadastro);
13. O site deverá ter um formulário de cadastro de alimentos que estão disponíveis para doação. Os seguintes campos são obrigatórios para o cadastro de alimentos: ID (identificador único), descrição e imagem (Utilize links de imagens disponíveis no cadastro);
14. O site deverá ter um formulário de cadastro de doações, onde o usuário preencherá seus dados pessoais, selecionará um receptor e um alimento para efetuar sua doação. O cadastro contará com os seguintes campos obrigatórios: ID (identificador único), nome do doador, endereço, e-mail, telefone, receptor, alimento, data de validade e quantidade; Opcionalmente atualize o cadastro para permitir em uma mesma doação, o envio de mais alimentos;
15. Os formulários de cadastro e componentes de exibição descritos nos requisitos 12, 13 e 14 deverão estar conectados a LocalStorage, seja para exibição dos dados dos receptores e alimentos, ou para o cadastro em cada um dos três formulários. Elabore utilizando JSON a estrutura dos conceitos de alimento, receptor e doação com todos os campos obrigatórios e crie exemplos de receptores e alimentos que deverão ser carregados e exibidos junto ao site. O preenchimento e submissão de cada formulário implica em uma atualização dos cadastros na LocalStorage;

Além das funcionalidades elencadas, a equipe **deverá** propor outras funcionalidades e conteúdos para o site; A equipe poderá seguir a sugestão de árvore de diretórios para organização dos arquivos html, css, js e outros;

### Conteúdos

Para preencher as páginas e áreas do site, serão necessários diversos conteúdos, além dos descritos nos requisitos de 1 à 3 . Os tópicos abaixo apresentam uma série de sugestões de conteúdos, não sendo de uso obrigatório, exceto o tópico 1.

1. Materiais disponíveis na pasta /assets do código base disponível no Repl.it. Na pasta estão disponíveis várias versões de cada logo, não sendo obrigatório o uso de todas as versões;
2. Utilize geradores de texto como Lorem Ipsum https://www.lipsum.com/ e o Fábuloso Gerador de Lero Lero http://lerolero.bgnweb.com.br/leroleroti.html;
3. Utilize repositórios de imagem on-line e gratuitos como, por exemplo, o FreePik https://br.freepik.com/, PixaBay https://pixabay.com/pt/, PNGTree https://pt.pngtree.com e Pexels https://www.pexels.com/videos/;
4. Repositórios de Ícones como, por exemplo, o Bootstrap Icons https://icons.getbootstrap.com, Phosphor Icons https://phosphoricons.com, FlatIcon https://www.flaticon.com/br/ e Google Fonts Icons https://fonts.google.com/icons;

### Ferramentas de Apoio

1. Can I Use https://caniuse.com/ - Ferramenta para validação da compatibilidade de seletores e propriedades CSS com os principais navegadores; 
2. Am I Responsive https://ui.dev/amiresponsive e Responsive Design Checker https://responsivedesignchecker.com/ - Ferramentas que permitem validar a responsividade de um site através de telas virtuais em diversas resoluções; 
3. PageSpeed Insights https://pagespeed.web.dev/ - Ferramenta para análise de métricas e aspectos técnicos como usabilidade, velocidade de carregamento, SEO e disponibilização de arquivos estáticos; 
4. Adobe Color https://color.adobe.com/pt/create - Ferramenta para criação de paletas de cores e extração de cores de imagens; 
5. RemoveBG https://remove.bg - Ferramenta para remoção do plano de fundo de imagens; 
6. Google Fonts https://fonts.google.com/ - Ferramenta para obtenção de fontes e icones;
7. Canva https://www.canva.com/pt_br/ - Ferramenta para edição de imagens online e criação de conteúdos multimídia;
8. StableDiffusion https://stablediffusionweb.com - Ferramenta para geração de imagens à partir de entrada de texto disponível gratuitamente para testes e com limites diários de uso (Escreva em inglês para melhores resultados);
9. Craiyon https://www.craiyon.com - Ferramenta para geração de imagens à partir de entrada de texto disponível gratuitamente para testes e com limites diários de uso (Escreva em inglês para melhores resultados);
10. DeepAI https://deepai.org/machine-learning-model/ - Ferramenta para geração de imagens à partir de entrada de texto disponível gratuitamente para testes e com limites diários de uso (Escreva em inglês para melhores resultados);
11. LeonardoAI https://app.leonardo.ai/ai-generations -  Ferramenta para geração de imagens à partir de entrada de texto disponível gratuitamente para testes e com limites diários de uso (Escreva em inglês para melhores resultados);
12. Looka https://looka.com/logo-maker/- Ferramenta para geração de logotipos personalizados (Ferramenta paga, use apenas para inspiração);
13. Namelix https://namelix.com/ - Ferramenta para geração de logotipos personalizados (Ferramenta paga, use apenas para inspiração);