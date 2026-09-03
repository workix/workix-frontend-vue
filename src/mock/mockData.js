// Dados fictícios usados para simular o backend do Workix.
// Como esta versão do site é hospedada de forma totalmente estática,
// todas as chamadas que antes iam para "http://localhost:8080/workix/services/v1/*"
// (ou para APIs de terceiros como a pagar.me) são resolvidas aqui, em memória.

// BASE_URL respeita o publicPath do build (ex: "/workix-frontend-vue/" no GitHub Pages)
const BASE = process.env.BASE_URL.replace(/\/$/, '')
const img = (name) => `${BASE}/resources/placeholder/${name}`
const AVATAR = img('60x60.jpg')

/* ------------------------------------------------------------------ */
/* Empresas                                                           */
/* ------------------------------------------------------------------ */

export const companies = [
  {
    id: 1,
    name: 'TechNova Soluções',
    segment: 'Tecnologia da Informação',
    description: 'A TechNova desenvolve plataformas em nuvem para o varejo brasileiro, atendendo mais de 3 mil lojistas em todo o país.',
    logo: img('220x100.jpg'),
    medias: [
      { media: 'Linkedin', url: 'https://linkedin.com/company/technova' },
      { media: 'GitHub', url: 'https://github.com/technova' },
      { media: 'instagram', url: 'https://instagram.com/technova' }
    ],
    locale: { street: 'Av. Paulista, 1578', city: 'São Paulo', zipCode: 1310200, estate: 'SP' },
    contact: { mobilePhone: 11987654321 },
    user: { email: 'contato@technova.com.br' }
  },
  {
    id: 2,
    name: 'Verde Solar Energia',
    segment: 'Energia Renovável',
    description: 'Projetamos e instalamos sistemas de energia solar residenciais e comerciais, levando sustentabilidade a todo o Sul do país.',
    logo: img('332x120.gif'),
    medias: [
      { media: 'Facebook', url: 'https://facebook.com/verdesolar' },
      { media: 'instagram', url: 'https://instagram.com/verdesolar' }
    ],
    locale: { street: 'Rua XV de Novembro, 890', city: 'Curitiba', zipCode: 80020310, estate: 'PR' },
    contact: { mobilePhone: 41991234567 },
    user: { email: 'rh@verdesolar.com.br' }
  },
  {
    id: 3,
    name: 'Construtora Horizonte',
    segment: 'Construção Civil',
    description: 'Há 22 anos erguendo empreendimentos residenciais e comerciais com foco em qualidade, prazo e sustentabilidade.',
    logo: img('322x120.gif'),
    medias: [
      { media: 'Linkedin', url: 'https://linkedin.com/company/construtorahorizonte' }
    ],
    locale: { street: 'Av. Afonso Pena, 3200', city: 'Belo Horizonte', zipCode: 30130009, estate: 'MG' },
    contact: { mobilePhone: 31996543210 },
    user: { email: 'vagas@horizonteconstrutora.com.br' }
  },
  {
    id: 4,
    name: 'Doce Sabor Confeitaria',
    segment: 'Alimentação',
    description: 'Rede de confeitarias artesanais com 14 unidades em Santa Catarina, apaixonada por ingredientes locais e receitas de família.',
    logo: img('300x109.gif'),
    medias: [
      { media: 'instagram', url: 'https://instagram.com/docesaborsc' },
      { media: 'Facebook', url: 'https://facebook.com/docesaborsc' }
    ],
    locale: { street: 'Rua Felipe Schmidt, 44', city: 'Florianópolis', zipCode: 88010001, estate: 'SC' },
    contact: { mobilePhone: 48989877665 },
    user: { email: 'equipe@docesabor.com.br' }
  },
  {
    id: 5,
    name: 'LogiFast Transportes',
    segment: 'Logística',
    description: 'Operamos uma das maiores frotas de transporte de cargas do interior paulista, entregando agilidade para o e-commerce nacional.',
    logo: img('220x100@2x.jpg'),
    medias: [],
    locale: { street: 'Rod. Dom Pedro I, km 132', city: 'Campinas', zipCode: 13043900, estate: 'SP' },
    contact: { mobilePhone: 19981237654 },
    user: { email: 'rh@logifast.com.br' }
  },
  {
    id: 6,
    name: 'Clínica Vitalis',
    segment: 'Saúde',
    description: 'Clínica multidisciplinar com foco em medicina preventiva, atendendo mais de 12 mil pacientes ativos em Porto Alegre.',
    logo: img('220x100.jpg'),
    medias: [
      { media: 'instagram', url: 'https://instagram.com/clinicavitalis' },
      { media: 'Linkedin', url: 'https://linkedin.com/company/clinicavitalis' }
    ],
    locale: { street: 'Av. Ipiranga, 6681', city: 'Porto Alegre', zipCode: 90610000, estate: 'RS' },
    contact: { mobilePhone: 51992345566 },
    user: { email: 'carreiras@clinicavitalis.com.br' }
  },
  {
    id: 7,
    name: 'EduPlus Cursos Online',
    segment: 'Educação',
    description: 'Edtech pernambucana que já formou mais de 80 mil alunos em cursos livres de tecnologia, idiomas e gestão.',
    logo: img('332x120.gif'),
    medias: [
      { media: 'Twitter', url: 'https://twitter.com/eduplus' },
      { media: 'GitHub', url: 'https://github.com/eduplus' }
    ],
    locale: { street: 'Av. Boa Viagem, 1220', city: 'Recife', zipCode: 51020000, estate: 'PE' },
    contact: { mobilePhone: 81990011223 },
    user: { email: 'jobs@eduplus.com.br' }
  },
  {
    id: 8,
    name: 'Pixel Studio Criativo',
    segment: 'Design & Marketing',
    description: 'Estúdio de design e marketing digital que já atendeu mais de 200 marcas, do pequeno empreendedor a grandes varejistas.',
    logo: img('300x109.gif'),
    medias: [
      { media: 'instagram', url: 'https://instagram.com/pixelstudio' },
      { media: 'Linkedin', url: 'https://linkedin.com/company/pixelstudio' },
      { media: 'Twitter', url: 'https://twitter.com/pixelstudio' }
    ],
    locale: { street: 'Rua Visconde de Pirajá, 550', city: 'Rio de Janeiro', zipCode: 22410003, estate: 'RJ' },
    contact: { mobilePhone: 21993456789 },
    user: { email: 'oi@pixelstudio.com.br' }
  }
]

/* ------------------------------------------------------------------ */
/* Vagas                                                               */
/* ------------------------------------------------------------------ */

const jobSeed = [
  { title: 'Desenvolvedor(a) Full Stack Vue/Node', company: 1, min: 6500, max: 11000, type: 'FULLTIME', featured: true,
    description: 'Você vai trabalhar na evolução da nossa plataforma de e-commerce, atuando tanto no front-end em Vue.js quanto nas APIs em Node.js.',
    requirement: 'Experiência com Vue.js, Node.js, PostgreSQL e Git. Diferencial: conhecimento em Docker e CI/CD.',
    benefits: 'Vale refeição, plano de saúde, horário flexível e um dia de home office por semana.' },
  { title: 'Analista de Suporte de TI', company: 1, min: 2800, max: 3900, type: 'FULLTIME', featured: false,
    description: 'Atuar no suporte técnico de nível 2 para clientes da plataforma TechNova, garantindo resolução ágil de incidentes.',
    requirement: 'Conhecimento em redes, Windows Server e atendimento ao cliente.',
    benefits: 'Vale transporte, plano odontológico e bônus por metas.' },
  { title: 'Engenheiro(a) de Dados Pleno', company: 1, min: 8000, max: 13500, type: 'FULLTIME', featured: false,
    description: 'Construir e manter pipelines de dados que alimentam os dashboards analíticos usados por milhares de lojistas.',
    requirement: 'Python, SQL avançado e experiência com ferramentas de ETL (Airflow, dbt ou similares).',
    benefits: 'Plano de carreira estruturado, day off no aniversário e auxílio home office.' },
  { title: 'Técnico(a) em Instalação de Painéis Solares', company: 2, min: 2600, max: 3800, type: 'FULLTIME', featured: true,
    description: 'Realizar a instalação e manutenção de sistemas fotovoltaicos residenciais e comerciais na região metropolitana de Curitiba.',
    requirement: 'Curso técnico em elétrica e CNH categoria B. Experiência prévia com energia solar é um diferencial.',
    benefits: 'Ajuda de custo para deslocamento, seguro de vida e treinamentos pagos pela empresa.' },
  { title: 'Analista Comercial - Energia Solar', company: 2, min: 3200, max: 6000, type: 'FULLTIME', featured: false,
    description: 'Prospectar e atender clientes interessados em soluções de energia solar, do primeiro contato até o fechamento do projeto.',
    requirement: 'Experiência em vendas consultivas B2C. Comissão atrativa sobre vendas fechadas.',
    benefits: 'Comissionamento sem teto, vale alimentação e plano de saúde.' },
  { title: 'Estágio em Engenharia Elétrica', company: 2, min: 1400, max: 1800, type: 'INTERNSHIP', featured: false,
    description: 'Apoiar a equipe de engenharia no dimensionamento de projetos fotovoltaicos e na elaboração de laudos técnicos.',
    requirement: 'Cursando Engenharia Elétrica a partir do 6º período.',
    benefits: 'Bolsa auxílio, vale transporte e possibilidade de efetivação.' },
  { title: 'Engenheiro(a) Civil Sênior', company: 3, min: 9500, max: 15000, type: 'FULLTIME', featured: true,
    description: 'Liderar a execução de obras residenciais de médio e grande porte, garantindo cronograma, orçamento e segurança.',
    requirement: 'CREA ativo, mínimo de 6 anos de experiência em gestão de obras.',
    benefits: 'Veículo da empresa, plano de saúde familiar e participação nos lucros.' },
  { title: 'Mestre de Obras', company: 3, min: 4200, max: 6200, type: 'FULLTIME', featured: false,
    description: 'Coordenar as equipes de campo em canteiro de obras, assegurando qualidade e produtividade.',
    requirement: 'Experiência mínima de 5 anos como mestre de obras em construções residenciais.',
    benefits: 'Vale refeição, cesta básica e seguro de vida.' },
  { title: 'Assistente Administrativo(a) de Obras', company: 3, min: 2200, max: 2900, type: 'FULLTIME', featured: false,
    description: 'Dar suporte administrativo aos canteiros de obra, controlando notas fiscais, contratos e cronogramas.',
    requirement: 'Ensino médio completo e conhecimento em Excel.',
    benefits: 'Vale transporte e vale alimentação.' },
  { title: 'Confeiteiro(a) Pleno', company: 4, min: 2400, max: 3300, type: 'FULLTIME', featured: false,
    description: 'Produzir bolos, doces finos e sobremesas para as unidades da rede, seguindo receitas autorais da casa.',
    requirement: 'Experiência mínima de 2 anos em confeitaria. Curso técnico é um diferencial.',
    benefits: 'Vale alimentação, uniforme e day off na semana do aniversário.' },
  { title: 'Atendente de Loja - Meio Período', company: 4, min: 1200, max: 1500, type: 'PARTTIME', featured: false,
    description: 'Atender clientes no balcão, organizar a vitrine de produtos e operar o caixa da loja.',
    requirement: 'Disponibilidade para trabalhar aos finais de semana.',
    benefits: 'Vale transporte e desconto de 30% em todos os produtos.' },
  { title: 'Motorista Entregador(a) - Frota Própria', company: 5, min: 2600, max: 3400, type: 'FULLTIME', featured: true,
    description: 'Realizar entregas de cargas fracionadas na região de Campinas, utilizando veículos da frota da empresa.',
    requirement: 'CNH categoria D, curso MOPP e experiência mínima de 2 anos.',
    benefits: 'Ajuda de custo com alimentação, seguro de vida e premiação por pontualidade.' },
  { title: 'Coordenador(a) de Logística', company: 5, min: 6000, max: 9000, type: 'FULLTIME', featured: false,
    description: 'Planejar rotas, gerenciar a equipe de motoristas e otimizar os custos operacionais da frota.',
    requirement: 'Formação em Logística ou áreas afins e experiência com sistemas de roteirização.',
    benefits: 'Plano de saúde, vale refeição e bônus trimestral por desempenho.' },
  { title: 'Auxiliar de Logística - Freelancer', company: 5, min: 120, max: 180, type: 'FREELANCE', featured: false,
    description: 'Apoio pontual em picos de demanda no galpão, conferindo e organizando cargas para expedição.',
    requirement: 'Disponibilidade para chamados de última hora.',
    benefits: 'Pagamento por diária e flexibilidade de horários.' },
  { title: 'Enfermeiro(a) Assistencial', company: 6, min: 4200, max: 5600, type: 'FULLTIME', featured: false,
    description: 'Prestar assistência de enfermagem aos pacientes da clínica, atuando em conjunto com a equipe médica.',
    requirement: 'COREN ativo e experiência mínima de 1 ano em ambiente clínico.',
    benefits: 'Plano de saúde, plano odontológico e adicional de insalubridade.' },
  { title: 'Nutricionista Clínico(a)', company: 6, min: 3800, max: 5200, type: 'FULLTIME', featured: false,
    description: 'Realizar consultas de acompanhamento nutricional e elaborar planos alimentares personalizados.',
    requirement: 'CRN ativo. Experiência com nutrição esportiva é um diferencial.',
    benefits: 'Consultório equipado, agenda flexível e participação em eventos da área.' },
  { title: 'Recepcionista - Meio Período', company: 6, min: 1300, max: 1600, type: 'PARTTIME', featured: false,
    description: 'Realizar o atendimento inicial dos pacientes, organização de agendas e apoio administrativo à recepção.',
    requirement: 'Boa comunicação e experiência prévia com atendimento ao público.',
    benefits: 'Vale transporte e vale alimentação.' },
  { title: 'Instrutor(a) de Cursos de Tecnologia', company: 7, min: 3500, max: 5500, type: 'FULLTIME', featured: true,
    description: 'Gravar e ministrar aulas ao vivo de programação e tecnologia para os alunos da plataforma EduPlus.',
    requirement: 'Experiência prévia como desenvolvedor(a) e facilidade de comunicação para ensinar.',
    benefits: 'Trabalho 100% remoto, notebook fornecido pela empresa e bônus por avaliação dos alunos.' },
  { title: 'Analista de Marketing de Conteúdo', company: 7, min: 3200, max: 4600, type: 'FULLTIME', featured: false,
    description: 'Planejar e produzir conteúdos educativos para blog, redes sociais e e-mail marketing da EduPlus.',
    requirement: 'Experiência com marketing de conteúdo e boa escrita.',
    benefits: 'Trabalho remoto, vale alimentação e assinatura gratuita de todos os cursos da plataforma.' },
  { title: 'Estágio em Suporte Educacional', company: 7, min: 1300, max: 1600, type: 'INTERNSHIP', featured: false,
    description: 'Apoiar alunos com dúvidas sobre a plataforma e acompanhar métricas de engajamento dos cursos.',
    requirement: 'Cursando qualquer graduação, com boa comunicação escrita.',
    benefits: 'Bolsa auxílio, vale transporte e horário compatível com a faculdade.' },
  { title: 'Designer UX/UI Pleno', company: 8, min: 5500, max: 8500, type: 'FULLTIME', featured: true,
    description: 'Criar interfaces e experiências digitais para clientes de diversos segmentos, do wireframe ao protótipo final.',
    requirement: 'Domínio de Figma, portfólio consistente e noção de design system.',
    benefits: 'Horário flexível, trabalho híbrido e verba para cursos e eventos de design.' },
  { title: 'Social Media Freelancer', company: 8, min: 80, max: 150, type: 'FREELANCE', featured: false,
    description: 'Criar e agendar conteúdos para redes sociais de clientes do estúdio, sob demanda.',
    requirement: 'Portfólio com cases de redes sociais e domínio de ferramentas de edição.',
    benefits: 'Pagamento por projeto entregue e possibilidade de contrato fixo no futuro.' },
  { title: 'Redator(a) Publicitário(a)', company: 8, min: 3000, max: 4400, type: 'FULLTIME', featured: false,
    description: 'Desenvolver textos e roteiros criativos para campanhas publicitárias de clientes do estúdio.',
    requirement: 'Experiência em agência ou estúdio criativo e portfólio de campanhas.',
    benefits: 'Vale alimentação, day off no aniversário e ambiente criativo e descontraído.' },
  { title: 'Estágio em Design Gráfico', company: 8, min: 1200, max: 1500, type: 'INTERNSHIP', featured: false,
    description: 'Apoiar a equipe de design na criação de peças gráficas para redes sociais e materiais impressos.',
    requirement: 'Cursando Design Gráfico ou áreas afins, com conhecimento em pacote Adobe.',
    benefits: 'Bolsa auxílio, vale transporte e mentoria com designers seniores.' }
]

export const jobs = jobSeed.map((j, i) => {
  const company = companies.find(c => c.id === j.company)
  return {
    id: i + 1,
    title: j.title,
    description: j.description,
    requirement: j.requirement,
    benefits: j.benefits,
    jobType: j.type,
    minPayment: j.min,
    maxPayment: j.max,
    active: true,
    featured: j.featured,
    segment: company.segment,
    company
  }
})

/* ------------------------------------------------------------------ */
/* Candidatos / Currículos                                            */
/* ------------------------------------------------------------------ */

const skillPool = ['Comunicação', 'Trabalho em Equipe', 'Excel Avançado', 'Inglês Intermediário', 'Espanhol Básico', 'Gestão de Tempo', 'Liderança', 'Vue.js', 'Node.js', 'SQL', 'Figma', 'Photoshop', 'Atendimento ao Cliente', 'Negociação', 'Scrum']

const candidateSeed = [
  { name: 'Ana Beatriz Souza', objective: 'Desenvolvedora Full Stack', city: 'São Paulo', estate: 'SP', level: 'Pleno', presence: 'Remoto',
    school: 'Universidade de São Paulo', qualification: 'Bacharelado em Ciência da Computação',
    employer: 'TechNova Soluções', jobTitle: 'Desenvolvedora Front-end',
    about: 'Apaixonada por resolver problemas com código limpo e experiências de usuário fluidas.' },
  { name: 'Bruno Carvalho Lima', objective: 'Analista de Marketing Digital', city: 'Rio de Janeiro', estate: 'RJ', level: 'Sênior', presence: 'Híbrido',
    school: 'PUC-Rio', qualification: 'Pós-graduação em Marketing Digital',
    employer: 'Pixel Studio Criativo', jobTitle: 'Coordenador de Marketing',
    about: 'Especialista em campanhas de performance e crescimento orientado a dados.' },
  { name: 'Camila Ferreira Rocha', objective: 'Designer UX/UI', city: 'Curitiba', estate: 'PR', level: 'Pleno', presence: 'Remoto',
    school: 'Universidade Federal do Paraná', qualification: 'Bacharelado em Design Gráfico',
    employer: 'Verde Solar Energia', jobTitle: 'Designer de Produto',
    about: 'Focada em criar interfaces acessíveis e centradas nas necessidades reais do usuário.' },
  { name: 'Diego Martins Alves', objective: 'Engenheiro Civil', city: 'Belo Horizonte', estate: 'MG', level: 'Sênior', presence: 'Presencial',
    school: 'UFMG', qualification: 'Bacharelado em Engenharia Civil',
    employer: 'Construtora Horizonte', jobTitle: 'Engenheiro de Obras',
    about: 'Mais de 10 anos gerenciando obras residenciais de médio e grande porte.' },
  { name: 'Eduarda Nogueira Pinto', objective: 'Nutricionista Clínica', city: 'Porto Alegre', estate: 'RS', level: 'Pleno', presence: 'Presencial',
    school: 'UFRGS', qualification: 'Bacharelado em Nutrição',
    employer: 'Clínica Vitalis', jobTitle: 'Nutricionista',
    about: 'Atua com foco em reeducação alimentar e nutrição esportiva.' },
  { name: 'Felipe Andrade Barros', objective: 'Engenheiro de Dados', city: 'Campinas', estate: 'SP', level: 'Sênior', presence: 'Remoto',
    school: 'Unicamp', qualification: 'Mestrado em Ciência da Computação',
    employer: 'TechNova Soluções', jobTitle: 'Engenheiro de Dados Pleno',
    about: 'Constrói pipelines de dados escaláveis e confiáveis para times de produto.' },
  { name: 'Gabriela Ramos Duarte', objective: 'Recrutadora e Seleção', city: 'Recife', estate: 'PE', level: 'Pleno', presence: 'Híbrido',
    school: 'UFPE', qualification: 'Bacharelado em Psicologia',
    employer: 'EduPlus Cursos Online', jobTitle: 'Analista de RH',
    about: 'Apaixonada por conectar pessoas certas às oportunidades certas.' },
  { name: 'Henrique Souza Lima', objective: 'Motorista Entregador', city: 'Campinas', estate: 'SP', level: 'Júnior', presence: 'Presencial',
    school: 'ETEC Campinas', qualification: 'Curso Técnico em Logística',
    employer: 'LogiFast Transportes', jobTitle: 'Auxiliar de Logística',
    about: 'Organizado, pontual e com CNH categorias B e D.' },
  { name: 'Isabela Cardoso Melo', objective: 'Professora de Inglês', city: 'Florianópolis', estate: 'SC', level: 'Pleno', presence: 'Híbrido',
    school: 'UFSC', qualification: 'Licenciatura em Letras - Inglês',
    employer: 'EduPlus Cursos Online', jobTitle: 'Instrutora de Idiomas',
    about: 'Formada com certificação CELTA, adora tornar o aprendizado de inglês leve e prático.' },
  { name: 'João Pedro Teixeira', objective: 'Técnico em Suporte de TI', city: 'São Paulo', estate: 'SP', level: 'Júnior', presence: 'Presencial',
    school: 'FATEC São Paulo', qualification: 'Curso Técnico em Informática',
    employer: 'TechNova Soluções', jobTitle: 'Estagiário de TI',
    about: 'Curioso por tecnologia, sempre em busca de resolver problemas com eficiência.' },
  { name: 'Larissa Gonçalves Reis', objective: 'Product Owner', city: 'São Paulo', estate: 'SP', level: 'Sênior', presence: 'Remoto',
    school: 'FGV', qualification: 'MBA em Gestão de Produtos Digitais',
    employer: 'TechNova Soluções', jobTitle: 'Product Owner',
    about: 'Une visão de negócio e empatia com o usuário para priorizar o que realmente importa.' },
  { name: 'Marcelo Vieira Costa', objective: 'Advogado Trabalhista', city: 'Belo Horizonte', estate: 'MG', level: 'Especialista', presence: 'Presencial',
    school: 'UFMG', qualification: 'Bacharelado em Direito',
    employer: 'Construtora Horizonte', jobTitle: 'Consultor Jurídico',
    about: 'Atua há 15 anos em direito trabalhista e relações sindicais.' },
  { name: 'Natália Batista Freitas', objective: 'Chef de Cozinha', city: 'Florianópolis', estate: 'SC', level: 'Sênior', presence: 'Presencial',
    school: 'Senac Florianópolis', qualification: 'Tecnólogo em Gastronomia',
    employer: 'Doce Sabor Confeitaria', jobTitle: 'Chef Confeiteira',
    about: 'Especialista em confeitaria artesanal, sempre em busca de novos sabores.' },
  { name: 'Otávio Pereira Nunes', objective: 'Analista Financeiro', city: 'Curitiba', estate: 'PR', level: 'Pleno', presence: 'Híbrido',
    school: 'PUC-PR', qualification: 'Bacharelado em Ciências Contábeis',
    employer: 'Verde Solar Energia', jobTitle: 'Analista Financeiro',
    about: 'Focado em análise de custos e viabilidade de projetos de energia renovável.' },
  { name: 'Patrícia Lopes Moreira', objective: 'Copywriter', city: 'Rio de Janeiro', estate: 'RJ', level: 'Pleno', presence: 'Remoto',
    school: 'UERJ', qualification: 'Bacharelado em Comunicação Social',
    employer: 'Pixel Studio Criativo', jobTitle: 'Redatora Publicitária',
    about: 'Transforma ideias complexas em textos simples que vendem.' }
]

const birthYearFor = (i) => 1985 + (i % 15)

export const candidates = candidateSeed.map((c, i) => {
  const id = i + 1
  const [first, ...rest] = c.name.split(' ')
  const last = rest[rest.length - 1]
  return {
    id,
    uuid: `cand-${String(id).padStart(4, '0')}-workix`,
    name: c.name,
    objective: c.objective,
    birthDate: new Date(birthYearFor(i), (i * 3) % 12, 5 + (i % 20)),
    cpf: `${100 + i * 7}.${234 + i}.${567 - i}-${10 + (i % 89)}`,
    carrerLevel: c.level,
    presence: c.presence,
    picture: AVATAR,
    content: `${first} atua na área de ${c.objective.toLowerCase()} com foco em resultado, colaboração e aprendizado contínuo. Busca uma nova oportunidade para colocar em prática sua experiência em ${c.employer}.`,
    skills: Array.from({ length: 5 }, (_, s) => ({ skillName: skillPool[(i + s) % skillPool.length] })),
    experiences: [
      {
        startDate: new Date(2021, (i * 2) % 12, 1),
        endDate: null,
        employerName: c.employer,
        jobTitle: c.jobTitle,
        description: `Responsável por entregas ligadas a ${c.objective.toLowerCase()}, atuando em conjunto com times multidisciplinares em ${c.city}.`
      },
      {
        startDate: new Date(2017, (i * 5) % 12, 10),
        endDate: new Date(2020, (i * 3) % 12, 20),
        employerName: `${last} & Associados`,
        jobTitle: `${c.objective} Júnior`,
        description: 'Primeira experiência profissional consolidada na área, com participação ativa em projetos de melhoria de processos.'
      }
    ],
    educations: [
      {
        startDate: new Date(2012 + (i % 5), 1, 1),
        endDate: new Date(2016 + (i % 5), 11, 15),
        schoolName: c.school,
        qualification: c.qualification,
        description: 'Formação completa com participação em projetos de extensão e iniciação científica.'
      }
    ],
    user: {
      uuid: `user-${String(id).padStart(4, '0')}-workix`,
      id,
      active: true,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@exemplo.com`,
      firebaseUUID: '',
      firebaseMessageToken: ''
    },
    contact: { mobilePhone: 11900000000 + id * 1111 },
    locale: {
      zipCode: 1000000 + id * 3211,
      city: c.city,
      estate: c.estate,
      neighborhood: 'Centro',
      street: `Rua das Palmeiras, ${100 + id}`,
      number: 100 + id
    }
  }
})

export const candidateShort = (c) => ({
  id: c.id,
  name: c.name,
  objective: c.objective,
  city: c.locale.city,
  estate: c.locale.estate,
  carrerLevel: c.carrerLevel,
  presence: c.presence
})

export const buildResume = (c) => ({
  id: c.id,
  objective: c.objective,
  content: c.content,
  skills: c.skills,
  experiences: c.experiences,
  educations: c.educations,
  candidate: {
    uuid: c.uuid,
    id: c.id,
    name: c.name,
    birthDate: c.birthDate,
    cpf: c.cpf,
    user: c.user,
    contact: c.contact,
    locale: c.locale
  }
})

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

const authorPool = [
  { name: 'Renata Alcântara', aboutText: 'Editora de conteúdo do Workix, escreve sobre carreira e mercado de trabalho há 8 anos.' },
  { name: 'Thiago Bezerra', aboutText: 'Head de Produto do Workix e entusiasta de tecnologia aplicada a recrutamento.' },
  { name: 'Juliana Prado', aboutText: 'Jornalista especializada em economia e futuro do trabalho.' }
]

const blogSeed = [
  { title: '7 dicas para se destacar em uma entrevista de emprego', category: 'Carreira', author: 0,
    resume: 'Prepare-se para causar uma boa impressão logo na primeira conversa com o recrutador.',
    content: 'A entrevista de emprego é o momento em que você tem a chance de mostrar, além do currículo, quem você é. Pesquise sobre a empresa, prepare exemplos concretos de resultados que você já entregou e não tenha medo de fazer perguntas ao final. Pequenos detalhes, como pontualidade e escuta ativa, fazem toda a diferença.',
    tags: ['Carreira', 'Entrevista', 'Dicas'] },
  { title: 'Trabalho remoto: como manter a produtividade em casa', category: 'Mercado de Trabalho', author: 1,
    resume: 'O home office veio para ficar. Veja como organizar sua rotina para render mais.',
    content: 'Trabalhar remotamente exige disciplina e um espaço dedicado para as tarefas do dia a dia. Defina horários claros de início e fim de expediente, use listas de tarefas e reserve momentos de pausa. A comunicação assíncrona com o time também é essencial para manter todos alinhados.',
    tags: ['Trabalho Remoto', 'Produtividade'] },
  { title: 'Como o Workix está usando tecnologia para conectar talentos', category: 'Tecnologia', author: 1,
    resume: 'Conheça os bastidores da plataforma que já ajudou milhares de candidatos a encontrar sua próxima vaga.',
    content: 'Desde o primeiro dia, o Workix nasceu com o propósito de simplificar a busca por emprego no Brasil. Investimos continuamente em melhorias na experiência de candidatos e empresas, sempre com foco em transparência e agilidade no processo seletivo.',
    tags: ['Workix', 'Tecnologia', 'Novidades'] },
  { title: 'Currículo sem experiência: como começar sua carreira', category: 'Carreira', author: 0,
    resume: 'Ainda não teve seu primeiro emprego? Veja como montar um currículo que chama atenção mesmo assim.',
    content: 'Quem está começando pode destacar projetos acadêmicos, estágios, trabalhos voluntários e cursos livres. O importante é mostrar iniciativa e vontade de aprender. Capriche também em um resumo objetivo no topo do currículo, contando quem você é em poucas linhas.',
    tags: ['Carreira', 'Primeiro Emprego'] },
  { title: 'Tendências do mercado de trabalho para os próximos anos', category: 'Mercado de Trabalho', author: 2,
    resume: 'Inteligência artificial, trabalho híbrido e novas soft skills estão redesenhando as profissões.',
    content: 'O mercado de trabalho passa por transformações rápidas, impulsionadas pela adoção de inteligência artificial e pela consolidação do modelo híbrido. Profissionais que investem em adaptabilidade, pensamento crítico e colaboração tendem a se destacar nos próximos anos.',
    tags: ['Tendências', 'Mercado de Trabalho'] },
  { title: 'Como negociar seu salário sem medo', category: 'Carreira', author: 2,
    resume: 'Negociar remuneração é uma habilidade que pode ser aprendida. Veja por onde começar.',
    content: 'Pesquisar a média salarial do cargo na sua região, listar suas conquistas mensuráveis e praticar a conversa antes da entrevista são passos que aumentam sua confiança na hora de negociar. Lembre-se: negociar faz parte do processo e não deve ser encarado como confronto.',
    tags: ['Carreira', 'Salário'] },
  { title: 'Soft skills mais procuradas pelas empresas em 2026', category: 'Recursos Humanos', author: 1,
    resume: 'Comunicação, inteligência emocional e colaboração continuam no topo da lista dos recrutadores.',
    content: 'Além do domínio técnico, as empresas buscam cada vez mais profissionais com boa comunicação, capacidade de trabalhar em equipe e resiliência diante de mudanças. Desenvolver essas habilidades pode ser um diferencial competitivo importante na hora da contratação.',
    tags: ['Soft Skills', 'Recursos Humanos'] },
  { title: 'Guia rápido para quem vai contratar pela primeira vez', category: 'Recursos Humanos', author: 0,
    resume: 'Pequenas empresas também podem estruturar um processo seletivo eficiente. Veja como.',
    content: 'Definir claramente o perfil da vaga, estruturar etapas objetivas de seleção e dar feedback aos candidatos são práticas simples que melhoram a experiência de contratação, mesmo para empresas que estão montando o primeiro time.',
    tags: ['Recursos Humanos', 'Contratação'] },
  { title: 'Empreendedorismo: quando vale a pena sair do emprego fixo', category: 'Empreendedorismo', author: 2,
    resume: 'Antes de pedir demissão para empreender, avalie esses pontos essenciais.',
    content: 'Ter uma reserva financeira, validar a ideia de negócio com clientes reais e entender os riscos envolvidos são passos fundamentais antes de trocar a segurança de um emprego fixo pelo empreendedorismo.',
    tags: ['Empreendedorismo', 'Carreira'] },
  { title: 'Bem-estar no trabalho: por que ele importa tanto', category: 'Bem-estar', author: 0,
    resume: 'Empresas que investem em qualidade de vida colhem equipes mais engajadas e produtivas.',
    content: 'Pausas regulares, ambiente de trabalho saudável e abertura para conversar sobre saúde mental são fatores que impactam diretamente o desempenho e a retenção de talentos nas organizações.',
    tags: ['Bem-estar', 'Recursos Humanos'] }
]

const commentPool = [
  'Muito bom esse conteúdo, me ajudou bastante!',
  'Já apliquei essas dicas na minha última entrevista e funcionou.',
  'Vocês poderiam fazer um artigo aprofundando esse tema?',
  'Excelente leitura para começar a semana.',
  'Compartilhei com toda a minha equipe, parabéns pelo texto.'
]
const commentAuthors = ['Rafael Souza', 'Beatriz Lins', 'Carlos Eduardo', 'Mariana Kist', 'Vinícius Prado']

export const blogs = blogSeed.map((b, i) => {
  const author = authorPool[b.author]
  const daysAgo = (blogSeed.length - i) * 9
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return {
    id: i + 1,
    title: b.title,
    resume: b.resume,
    content: b.content,
    date,
    author: {
      name: author.name,
      picture: AVATAR,
      aboutText: author.aboutText,
      medias: [
        { media: 'Linkedin', url: 'https://linkedin.com/in/workix' },
        { media: 'instagram', url: 'https://instagram.com/workix' }
      ]
    },
    pictures: [img('1400x900.jpg'), img('800x530.jpg'), img('400x265.jpg')],
    tags: b.tags.map(name => ({ name })),
    comments: Array.from({ length: 2 + (i % 3) }, (_, ci) => {
      const createdAt = new Date(date)
      createdAt.setDate(createdAt.getDate() + ci + 1)
      return {
        name: commentAuthors[(i + ci) % commentAuthors.length],
        text: commentPool[(i + ci) % commentPool.length],
        createdAt
      }
    })
  }
})

export const categories = ['Carreira', 'Tecnologia', 'Recursos Humanos', 'Mercado de Trabalho', 'Empreendedorismo', 'Bem-estar']

export const timePeriods = (() => {
  const seen = new Set()
  const list = []
  blogs.forEach(b => {
    const key = `${b.date.getMonth() + 1}-${b.date.getFullYear()}`
    if (!seen.has(key)) {
      seen.add(key)
      list.push({ month: b.date.getMonth() + 1, year: b.date.getFullYear() })
    }
  })
  return list
})()

/* ------------------------------------------------------------------ */
/* Depoimentos                                                        */
/* ------------------------------------------------------------------ */

export const testimonials = [
  { picture: AVATAR, text: 'Encontrei minha vaga atual em menos de duas semanas usando o Workix. A plataforma é simples e direta ao ponto.', author: { name: 'Ana Beatriz Souza' }, signature: 'Desenvolvedora Full Stack' },
  { picture: AVATAR, text: 'Como recrutadora, consigo publicar vagas e encontrar candidatos qualificados muito mais rápido do que em outras plataformas.', author: { name: 'Gabriela Ramos Duarte' }, signature: 'Analista de RH, EduPlus' },
  { picture: AVATAR, text: 'O processo de cadastro do currículo é rápido e o suporte respondeu todas as minhas dúvidas no mesmo dia.', author: { name: 'Diego Martins Alves' }, signature: 'Engenheiro Civil' },
  { picture: AVATAR, text: 'Já contratamos três pessoas pelo Workix esse ano. A qualidade dos candidatos é sempre muito boa.', author: { name: 'Marcelo Vieira Costa' }, signature: 'Consultor Jurídico, Construtora Horizonte' },
  { picture: AVATAR, text: 'Gostei muito da possibilidade de filtrar vagas remotas. Consegui uma posição sem sair da minha cidade.', author: { name: 'Camila Ferreira Rocha' }, signature: 'Designer UX/UI' },
  { picture: AVATAR, text: 'Simples, rápido e sem burocracia. Recomendo o Workix para quem está buscando recolocação no mercado.', author: { name: 'Otávio Pereira Nunes' }, signature: 'Analista Financeiro' }
]

/* ------------------------------------------------------------------ */
/* Equipe Workix                                                      */
/* ------------------------------------------------------------------ */

export const team = [
  { name: 'Felipe Michetti', occupation: 'Fundador & Desenvolvedor Full Stack', shortText: 'Idealizou e desenvolveu a Workix, do backend ao front-end, com a missão de tornar a busca por emprego mais justa e acessível no Brasil.', picture: AVATAR, medias: [{ media: 'GitHub', url: 'https://github.com/frmichetti' }, { media: 'Linkedin', url: 'https://linkedin.com/in/frmichetti' }] }
]

/* ------------------------------------------------------------------ */
/* Estatísticas                                                        */
/* ------------------------------------------------------------------ */

export const statistics = {
  members: candidates.length * 214,
  jobs: jobs.length * 37,
  resumes: candidates.length * 198,
  companies: companies.length * 62
}

/* ------------------------------------------------------------------ */
/* CEP (simula a API de busca de endereço da pagar.me)                 */
/* ------------------------------------------------------------------ */

const cepDatabase = {
  '01310100': { street: 'Avenida Paulista', neighborhood: 'Bela Vista', city: 'São Paulo', state: 'SP' },
  '80020310': { street: 'Rua XV de Novembro', neighborhood: 'Centro', city: 'Curitiba', state: 'PR' },
  '30130009': { street: 'Avenida Afonso Pena', neighborhood: 'Centro', city: 'Belo Horizonte', state: 'MG' },
  '88010001': { street: 'Rua Felipe Schmidt', neighborhood: 'Centro', city: 'Florianópolis', state: 'SC' },
  '90610000': { street: 'Avenida Ipiranga', neighborhood: 'Azenha', city: 'Porto Alegre', state: 'RS' },
  '22410003': { street: 'Rua Visconde de Pirajá', neighborhood: 'Ipanema', city: 'Rio de Janeiro', state: 'RJ' },
  '51020000': { street: 'Avenida Boa Viagem', neighborhood: 'Boa Viagem', city: 'Recife', state: 'PE' },
  '13043900': { street: 'Rodovia Dom Pedro I', neighborhood: 'Taquaral', city: 'Campinas', state: 'SP' }
}

const streetNames = ['Rua das Acácias', 'Rua dos Ipês', 'Avenida das Nações', 'Rua Sete de Setembro', 'Alameda Santos', 'Rua Barão do Rio Branco']
const neighborhoods = ['Centro', 'Jardim América', 'Vila Nova', 'Boa Vista', 'Santa Mônica', 'Cidade Alta']
const citiesByState = {
  SP: 'São Paulo', RJ: 'Rio de Janeiro', MG: 'Belo Horizonte', PR: 'Curitiba', SC: 'Florianópolis',
  RS: 'Porto Alegre', PE: 'Recife', BA: 'Salvador', CE: 'Fortaleza', DF: 'Brasília'
}
const states = Object.keys(citiesByState)

export function lookupCep(rawCep) {
  const cep = String(rawCep || '').replace(/\D/g, '').padStart(8, '0')
  if (cepDatabase[cep]) {
    return cepDatabase[cep]
  }
  // Sem um CEP cadastrado: gera um endereço plausível de forma determinística
  // a partir dos dígitos informados, para que qualquer CEP digitado funcione.
  const seed = cep.split('').reduce((acc, d) => acc + Number(d), 0)
  const state = states[seed % states.length]
  return {
    street: streetNames[seed % streetNames.length],
    neighborhood: neighborhoods[seed % neighborhoods.length],
    city: citiesByState[state],
    state
  }
}
